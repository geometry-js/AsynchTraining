function addParameterToURL(location, param){
  let _url = location;
  _url += (_url.split('?')[1] ? '&':'?') + param;
  return _url;
}

var attributes = document.getElementById(idAttributes);
var table=document.createElement('TABLE');
table.border='1';
var tbdy=document.createElement('TBODY');
table.appendChild(tbdy);

function traverse_it(obj){
  if( typeof traverse_it.array == 'undefined' ) {
    traverse_it.array = [];
    traverse_it.counter = 0;
    traverse_it.depth = 0;
  }
  for(var prop in obj){
      if(typeof obj[prop]=='object'){
          // object
          traverse_it.array[traverse_it.counter]=traverse_it.depth == 0
            ? document.getElementById('idFaceURL').value
            : `${"&nbsp &nbsp".repeat(traverse_it.depth)} ${prop}`;
          traverse_it.counter+=1;
          traverse_it.depth+=1;
          var tr=document.createElement('TR');
          tr.innerHTML = traverse_it.array[traverse_it.counter-1];
          tbdy.appendChild(tr);

          traverse_it(obj[prop]);
      }else{
          // something else
          const multi=function (char, count){}
          traverse_it.array[traverse_it.counter]=`${"&nbsp &nbsp".repeat(traverse_it.depth)} ${prop} : ${obj[prop]}`;
          var tr=document.createElement('TR');
          tr.innerHTML = traverse_it.array[traverse_it.counter];
          tbdy.appendChild(tr);
          traverse_it.counter+=1;
      }
  }
  traverse_it.depth-=1;
}


document.getElementById("idBtn").onclick = ()=> {
  const url=document.getElementById("idFaceURL").value;
  document.getElementById("idImage").src=url;
  // Endpoint: https://westcentralus.api.cognitive.microsoft.com/face/v1.0
  //   Key 1: 0742e1d614844b478839efa1a9d80023
  //   Key 2: 7fcc2db1a047498f98643677ea4f2e2c
  const params = {
    "returnFaceId": "true",
    "returnFaceLandmarks": "false",
    "returnFaceAttributes": "age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise"
  };

  let endpoint = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect";

  Object.keys(params).forEach((key, element)=> {
    endpoint = addParameterToURL(endpoint,`${key}=${params[key]}`);
  });

  const reqBody =
      {
        "url": url
      };
  const myHeader =  new Headers({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key':'0742e1d614844b478839efa1a9d80023'
  });

  const initObject = {
    method: 'POST',
    body: JSON.stringify(reqBody),
    headers: myHeader
  }

  const request = new Request(
    endpoint,
    initObject);

  fetch(request).then(function(response){
    if(response.ok){
          return response.json();
      }
    else{
          return Promise.reject(new Error(response.statusText));
    }
  }).then(function(response){
     traverse_it(response);
     document.getElementById("idAttributes").appendChild(table);
      //`Face analysis: ${traverse_it.array[1]}`;
  }).catch(function(err){
      alert(err);
      document.getElementById("idAttributes").innerHTML = "";
  });


}

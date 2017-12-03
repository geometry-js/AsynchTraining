function addParameterToURL(location, param){
  let _url = location;
  _url += (_url.split('?')[1] ? '&':'?') + param;
  return _url;
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
          return response.text();
      }
    else{
          return Promise.reject(new Error(response.statusText));
    }
  }).then(function(response){
      document.getElementById("idAttributes").innerHTML =
      `Face analysis: ${response}`;
  }).catch(function(err){
      alert(err);
      document.getElementById("idAttributes").innerHTML = "";
  });


}

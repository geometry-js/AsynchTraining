(function(window1){

  function myLibrary1(){
    return {
        foo:foo
    }

    var initObject = {
        method: 'POST',
        headers: new Headers(),
        mode: 'cors',
        body: "{}"
    }
    function foo(fetch){
      //fetch() method used with an URL endpoint and an init object
      return fetch("https://jsonplaceholder.typicode.com/posts", initObject)
          .then(function(result){ //result contains a Response object
            return result.json() //returns a promise containing JSON data extracted from the Response object
          }).then((result)=>{
            return result;
          }).catch(function(err){
              return err;
      });
    };
  }

    if(typeof(window1.api) === 'undefined'){
        window1.api = myLibrary1();
    }

})(window1);

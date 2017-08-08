(function(window){

    function myLibrary(){

       var catalog = createRandomCatalog(100);

        return {
            searchProductById: searchProductById,
            searchProductsByPrice: searchProductsByPrice,
            searchProductsByType: searchProductsByType,
            searchAllProducts: searchAllProducts,
            // for testing
            createRundomProduct: createRundomProduct

        }

        function createRundomProduct(){
          let typeArray = ['Electronics', 'Book', 'Clothing', 'Food', 'Sport'];
          let price = Math.random()*500;
          let type = typeArray[Math.floor(Math.random()*4)];
          return {price: price, type: type};
        }

        function createRandomCatalog(numItems){
          let i=0;
          let catalog = Array.apply(null, Array(numItems)).map(()=>{
            let randObj=createRundomProduct();
            let obj={it:i, price: randObj.price, type: randObj.type};
            i+=1;
            return obj;
          })
        }
    }

    function searchProductById() {

    }

    function searchProductsByPrice(){

    }

    function searchProductsByType(){

    }

    function searchAllProducts(){

    }

    if(typeof(window.api) === 'undefined'){
        window.api = myLibrary();
    }

})(window);

(function(window){

    function myLibrary(){

       var catalog = createRandomCatalog(100);

        return {
            searchProductById: searchProductById,
            searchProductByPrice: searchProductByPrice,
            searchProductByType: searchProductByType,
            returnAllProducts: returnAllProducts,
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
            let obj={id:i, price: randObj.price, type: randObj.type};
            i+=1;
            return obj;
          });
          return catalog;
        }

        function returnAllProducts(){
          let allCatalogTimeout=1000;
          let promise = new Promise((resolve, reject)=>{
            setTimeout(()=>{
              resolve(catalog);
            }, allCatalogTimeout)
          });
          return promise;
        }

        function searchProductByType(type){
          let searchCatalogTimeout=1000;
          let promise = new Promise((resolve, reject)=>{
            setTimeout(()=>{
              let filtered = (catalog.filter((item)=>{
                return item.type === type;
              }));
              filtered.length>0
                ? resolve(filtered)
                : reject(Error(`The element of type \'${type}\' is not found.`));
              }, searchCatalogTimeout);
          });
          return promise;
        }

        function searchProductById(id){
          let searchCatalogTimeout=1000;
          id = Number(id);
          if(!Number.isInteger(id)){
              return new Promise((resolve, reject)=>{reject (Error(`The specified Id \'${id}\' is not a valid integer.`));});
          }
          let promise = new Promise((resolve, reject)=>{
            setTimeout(()=>{
              id = parseInt(id, 10);
              let filtered = (catalog.filter((item)=>{
                return item.id === id;
              }));
              filtered.length == 1
                ? resolve(filtered[0])
                : reject(filtered.length==0
                    ? Error(`The element of Id \'${id}\' is not found.`)
                    : Error(`The element of Id \'${id}\' is duplicated. There are ${filtered.length} such elements.`)
                  );
              }, searchCatalogTimeout);
          });
          return promise;
        }

        function searchProductByPrice(price, difference){
              let searchCatalogTimeout=1000;
              if(!isFinite(price)){
                  return new Promise((resolve, reject)=>{reject(Error(`Invalid price \'${price}\'.`))});
              }
              let promise = new Promise((resolve, reject)=>{
                setTimeout(()=>{
                  let filtered = (catalog.filter((item)=>{
                    return Math.abs((item.price-price)) < difference;
                  }));
                  filtered.length>0
                    ? resolve(filtered)
                    : reject(Error(`The elements of price \'${price}\' under the difference \'${difference}\' are not found.`));
                  }, searchCatalogTimeout);
              });
              return promise;
        }
    }

    if(typeof(window.api) === 'undefined'){
        window.api = myLibrary();
    }

})(window);

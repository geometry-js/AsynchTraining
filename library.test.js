const chai = require('chai');
const expect = chai.expect;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
window = {};
const lib = require ("./library.js")
lib.constructor();
var api=window.api;

const fs = require ('fs');

describe ('Testing the API \"library.js\" functions:', ()=>{
  it('Testing createRundomProduct', (done)=>{
    let result = api.createRundomProduct();
    expect(result.price).to.be.a('number').and.within(0,500);
    expect(result.type).to.be.oneOf(['Electronics', 'Book', 'Clothing', 'Food', 'Sport']);
    done();
  })

  it('Testing returnAllProducts', (done)=>{
    let result = api.returnAllProducts();
    result.then((value)=>{
      expect(value).to.have.lengthOf(100);
      done();
    })
  })


  it('Testing positive searchProductById', ()=>{
     let result = api.searchProductById(30);
     return result.then((value)=>{
       expect(value.id).to.be.equal(30);
     });
   })

  it('Testing negative searchProductById', ()=>{
    let result = api.searchProductById('99999');
    return result.then(
      (value)=>{
          chai.assert(false, "The element Id \'99999\' is not expected to be found.");
      },
      (err)=>{
        expect(err.message).to.equal(`The element of Id \'99999\' is not found.`);
      });
  });

  it('Testing positive searchProductByPrice', ()=>{
     let result = api.searchProductByPrice(250, 250);
     return result.then((value)=>{
       expect(value.length).to.be.equal(100);
     });
  })

  it('Testing positive searchProductByPrice', ()=>{
    let result = api.searchProductByPrice(250, 50);
    return result.then((value)=>{
//    expect(value.length).to.be.above(1);
      filtered = value.filter((item)=>{
        return (Math.abs(item.price-250) < 50);
      });
      expect(filtered.length).to.be.equal(value.length);
    });
  })



});

describe ('Our ProductCatalog.html test', ()=>{
  it('It should have `Search Product by Id` ', (done)=>{
    const productCatalog = fs.readFileSync('ProductCatalog.html', "utf-8");
    //console.log(`Product catalog is ${productCatalog}`);
    const dom = new JSDOM(productCatalog);
    const h3 = dom.window.document.getElementsByTagName('h3')[0];
    expect(h3.innerHTML).to.equal('Search Product by Id');

    dom.window.close();
    done();
  })
});


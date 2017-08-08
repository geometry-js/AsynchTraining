const chai = require('chai');
const expect = chai.expect;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
window = {};
const lib = require ("./library.js")
lib.constructor();

const fs = require ('fs');

describe ('Our first test', ()=>{
  it('should pass', ()=>{
    var api=window.api;
    expect(api.createRundomProduct()).to.be.not.undefined;
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


const chai = require('chai');
const expect = chai.expect;
const jsdom = require("jsdom");
const fetch = require('node-fetch')
const { JSDOM } = jsdom;
window1 = {};
const myLibrary1 = require ("./testFetch.js")
var api1=myLibrary1.constructor();
api1=window1.api;

it('Testing fetchFunction', (done)=>{
  let result1 = api1.foo(fetch);
  result1.then((value1)=>{
    let i=0;
    value1.forEach(function(elem) {
      expect(value1[i].id).to.be.equal(i+1);
      i=i+1;
    });
    done();
  });
});


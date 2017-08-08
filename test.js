var chalk = require('chalk');




/*
function createRandomProduct(numberOfThings){
  var promise = new Promise((resolve,reject)=>{
    if (numberOfThings<=0){
      setTimeout(()=>{
        console.log('Waiting has ended.')
        reject(`Price should be more than 0. Current value is ${numberOfThings}`);
      }, 5000);
    }
    else
      {
        var typeArray = ['Electronics','Book','Clothing','Food'];
        var price = (Math.random()*500).toFixed(2) ;
        var type = typeArray[Math.floor(Math.random()*4)];
        setTimeout(()=>{
          resolve ({price:price, type:type});
        }, 10000);
      }
  });
  return promise;
}

var res1 = createRandomProduct(10);
*/
/*
res1.then((res1)=>{
    console.log(`The res11 is ${res1.price} and the type is ${res1.type}.`);
    console.log(chalk.bold.green(`Waiting for promise 1 to end.`));
    setTimeout(()=>{
      console.log(chalk.bold.yellow(`Promise 1 resolves.`));
      return(res1.price*res1.price);
    }, 5000);
  }
).then((res2)=>{
  console.log(`The res2 is ${res2}.`);
  console.log(chalk.bold.green(`Waiting for promise 2 to end.`));
  setTimeout(()=>{
    console.log(chalk.bold.yellow(`Promise 2 resolves.`));
    return(res2*res2);
  }, 1000);
}).then((res3)=>{
    console.log(chalk.bold.red(`The res3 is ${res3}.`));
});
*/
/*
res1.then(
  (res1)=>{
    console.log(`The res11 is ${res1.price} and the type is ${res1.type}.`);
    let forRet = new Promise((resolve)=>{
      console.log(chalk.bold.green(`Waiting for promise 1 to end.`));
      setTimeout(()=>{
        console.log(chalk.bold.yellow(`Promise 1 resolves.`));
        resolve(res1.price*res1.price);
      }, 5000);
    });
    return forRet;
  }
).then((res2)=>{
  console.log(`The res2 is ${res2}.`);
    let forRet = new Promise((resolve)=>{
      console.log(chalk.bold.green(`Waiting for promise 2 to end.`));
      setTimeout(()=>{
        console.log(chalk.bold.yellow(`Promise 2 resolves.`));
        resolve(res2*res2);
      }, 1000);
    });
    return forRet;
}).then((res3)=>{
    console.log(chalk.bold.red(`The res3 is ${res3}.`));
});
*/

/*
result.then((result3)=>{
    console.log(`The result3 is ${result3}.`);
    setTimeout(()=>{
        return result3*result3;
      }, 2000);
}).then((result4)=>{
    console.log(`The result4 is ${result4}.`);
    setTimeout(()=>{
        return result4*result4;
      }, 3000);
}).then((result5)=>{
    console.log(`The result5 is ${result5}.`);
    setTimeout(()=>{
        return result5*result5;
      }, 4000);
});

console.log(chalk.bold.red(`The program ended, but we don't care!`));
*/

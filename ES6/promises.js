let p = new Promise((resolve, reject) => {
  //   let a = 2;
  let a = 3;
  if (a === 2) {
    resolve("success");
  } else {
    reject("failed");
  }
});

p.then((msg) => {
  console.log("message: ", msg); // message:  success if a = 2
}).catch((err) => {
  console.log("error: ", err); //error:  failed if a != 2
});

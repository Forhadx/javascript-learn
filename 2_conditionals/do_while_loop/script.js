/*  loops  
       while
       do while
*/

let arr = [55, 66, 22, 44, 11, 33];

let i = 0;

while (i < arr.length) {
  //console.log(arr[i]);
  i++;
}

i = 0;
do {
  console.log(arr[i]);
  i++;
} while (i < arr.length);

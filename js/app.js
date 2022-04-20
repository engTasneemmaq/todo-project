'use strict';

let typeQ1 = prompt("is your a developer?", "Yes , No");
let typeQ2 = prompt("is your intersted with js course?", "Yes , No");
let typeQ3 = prompt("can understand everything?", "Yes , No");
let mainList = [3];
mainList.push(typeQ1, typeQ2, typeQ3);

for (let i = 0; i < mainList.length; i++) {
  if(mainList.push == "Yes")
{
  console.log(mainList.push.toLowerCase("Yes"));
}
else if(mainList.push == "NO")
{
  console.log(mainList.push.toLowerCase("No"));
}
else{
console.log(" is not valid");
}
 
}


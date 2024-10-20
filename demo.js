// let array=[];
// function add() {
//     let a=+document.getElementById('key').value;
//     array.push(a);
// }
//
// function display(){
//     let content="";
//     for(let i=0;i<array.length;i++){
//         content += `<p>${i} la ${array[i]}</p>`;
//     }
//     document.getElementById("result").innerHTML = content;
// }

// let array=[1,2,3,4,5,6];
// let reverse=[];
// for(let i=array.length-1;i>=0;i--){
//     reverse.push(array[i]);
// }
// document.getElementById("result").innerHTML=reverse.join("");

// let value=prompt("nhap so");
// let array=[3, 9, 11, 49, -3, 82, 93, 43];
// let content="";
// for(let i=0;i<array.length;i++){
//     if(value == array[i]){
//         document.write(`value ${array[i]} found at ${i}`);
//     }
// }

let array= [1,2,3,4,5,6, 120, 556, 12, 123, 435];
let max=array[0];
let index=0;
for(let i=1;i<=array.length;i++){
    if(array[i]>max){
        max=array[i];
    }
}
document.write(max);
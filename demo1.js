// let array=[];
// function add() {
//     let a=+document.getElementById("key").value;
//     array.push(a);
// }
// function display() {
//     let content="";
//     for (let i = 0; i < array.length; i++) {
//         content+=`<p>nhan to ${i} la ${array[i]}</p>`
//     }
//     document.getElementById("result").innerHTML=content
// }
// let array=[1, 4, 7, 9, 13, 15];
// let reverse=[];
// for (let i = array.length-1; i >=0 ; i--) {
//     reverse.push(array[i]);
// }
// document.write(reverse.join(","));
// let array=[-1, 3, 7, 9, -23, 83, -8, -32];
// let max=array[0];
// let index=0;
// for (let i = 1; i <array.length ; i++) {
//     if (array[i]>max){
//         max=array[i];
//         index=i;
//     }
// }
// document.write(max);
let value=prompt("nhap so");
let array=[-3, 1, 3, 19, 6, -7, -11];
let index=-1;
for (let i = 0; i < array.length; i++) {
    if (value==array[i]){
        index=i;
    }
}
if (index>-1){
    document.write(`nhan to ${value} o vi tri ${index}`);
} else {
    document.write("false");
}

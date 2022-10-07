// changing the color and height of the sorting element

let speed;

function set_speed(){
  switch(parseInt(arr_speed_input.value)){
    case 1: speed = 10;  break;
    
    case 2: speed = 100;  break;
    
    case 3: speed = 1000;  break;
    
    case 4: speed = 10000;  break;
    
    case 5: speed = 100000;  break;
  }
  // console.log(speed);
  delay_time=(1000/(Math.floor(arr_size/10)*speed));
  console.log(delay_time);
}

arr_speed_input.addEventListener('input', set_speed);   // changing speed as per the speed input
arr_size_input.addEventListener("input",set_speed);   // changing speed as per the arr size
let delay_time=1000/(Math.floor(arr_size/10)*speed);
window.onload=set_speed();  // initial set speed



let c_delay=0;


// this will update the curr division during sorting
// function div_update(arr_cont, height, color){
//   window.setTimeout(function(){
//     arr_cont.style.cssText+=" margin:0% " + margin_size + "%; width:" + (100/arr_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";

//   }, c_delay+=delay_time);
// }

// this is for green and blue
function div_update(arr_cont, height, color){
  arr_cont.style.cssText+=" margin:0% " + margin_size + "%; width:" + (100/arr_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
  // await timer(10);
}

// this  is for red and yellow
async function div_update_delay(arr_cont, height, color){
  arr_cont.style.cssText+=" margin:0% " + margin_size + "%; width:" + (100/arr_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
  await timer(delay_time*10);
}
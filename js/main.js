const arr_size_input=document.getElementById('arr-size');
let arr_size=arr_size_input.value;

const stop_btn=document.getElementById('stop');

let arr_gen=document.getElementById('arr-generate');
let arr_speed_input=document.getElementById('speed');

let algo_btns=document.querySelectorAll('.algos li .nav-link');


let div_sizes=[];
let divs=[];
let margin_size;
let arr_cont=document.getElementById('array-container');
arr_cont.style.cssText+="flex-direction:row";


// array generation and updation

arr_gen.onclick=generate_array;
arr_size_input.addEventListener("input",update_array_size);



// it generates the array
function generate_array(){
  arr_cont.innerHTML="";
  
  for(let i=0;i<arr_size;i++){
    div_sizes[i] = Math.floor(Math.random() * 0.5 * (arr_size_input.max - arr_size_input.min)) + 10;
    divs[i] = document.createElement("div");
    arr_cont.appendChild(divs[i]);
    margin_size = 0.1;
    divs[i].style = " margin:0% " + margin_size + "%; background-color:blue; width:" + (100 / arr_size - (2 * margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
  }
}

function update_array_size(){
  arr_size = arr_size_input.value;
  generate_array();
}

window.onload=update_array_size();



for(let i=0;i<algo_btns.length;i++){
  algo_btns[i].addEventListener("click", runAlgo);
}


// this function disables all the button until the algo is running
const disable_buttons = ()=>{
  for(let i=0;i<algo_btns.length;i++){
    // console.log(algo_btns[i])
    algo_btns[i].classList.add('btn-locked');
    // console.log('off');
    
    algo_btns[i].disabled=true;
  }
  
  arr_size_input.disabled=true;
  arr_speed_input.disabled=true;
  arr_gen.disabled=true;
  stop_btn.disabled=false;
  stop_btn.classList.remove('btn-locked');
}

function enable_buttons(){
  console.log('enable');
  // window.setTimeout(function () {
    for (let i = 0; i < algo_btns.length; i++) {
      algo_btns[i].classList.remove('btn-locked', 'btn-selected')
      algo_btns[i].disabled=false;
    }
    arr_size_input.disabled = false;
    arr_gen.disabled = false;
    arr_speed_input.disabled = false;
    stop_btn.disabled=true;
    stop_btn.classList.add('btn-locked');
  // }, c_delay += delay_time);
}

// function to run algo whichever button is selected
function runAlgo(){
  disable_buttons();
  // console.log(this)
  this.classList.add('btn-selected');
  
  switch(this.innerHTML){
    case "Bubble":  bubbleSortTest(); break;
    case "Selection": selectionSort(); break;
    case "Insertion": insertionSort();  break;
    case "Merge": mergeSort();  break;
    case "Quick": quickSort();  break;
    case "Heap": heapSort();  break;
  }
}

stop_btn.addEventListener("click", stopSort);
let stopProcess=false;

function stopSort(){
  console.log('Stop');
  stopProcess=true;
  console.log('stopped!')
}


// this function return promise and is used to add delay
function timer(ms){
  return new Promise(res=>setTimeout(res,ms));
}

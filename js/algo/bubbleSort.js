async function bubbleSortTest() {
  // console.log(delay_time);
  for (var i = 0; i < arr_size - 1; i++) {
    for (var j = 0; j < arr_size - i - 1; j++) {
      if(stopProcess) break;
   
      await div_update_delay(divs[j], div_sizes[j], "yellow");

      if (div_sizes[j] > div_sizes[j + 1]) {
        await div_update_delay(divs[j], div_sizes[j], "red");
        div_update(divs[j + 1], div_sizes[j + 1], "red");

        var temp = div_sizes[j];
        div_sizes[j] = div_sizes[j + 1];
        div_sizes[j + 1] = temp;

        await div_update_delay(divs[j], div_sizes[j], "red");
        await div_update_delay(divs[j + 1], div_sizes[j + 1], "red");
      }
      div_update(divs[j], div_sizes[j], "blue");
    }
    div_update(divs[j], div_sizes[j], "green");
  }
  div_update(divs[0], div_sizes[0], "green");

  
  console.log('sortDone');
  stopProcess=false;
  enable_buttons();
}
async function insertionSort() {

  let j;
  for (j = 0; j < arr_size; j++) {
    if(stopProcess) break;
    await div_update_delay(divs[j], div_sizes[j], "yellow");//Color update

    let key = div_sizes[j];
    let i = j - 1;
    while (i >= 0 && div_sizes[i] > key) {
      if(stopProcess) break;
      await div_update_delay(divs[i], div_sizes[i], "red");//Color update
      div_update(divs[i + 1], div_sizes[i + 1], "red");//Color update

      div_sizes[i + 1] = div_sizes[i];

      div_update(divs[i], div_sizes[i], "red");//Height update
      div_update(divs[i + 1], div_sizes[i + 1], "red");//Height update

      div_update(divs[i], div_sizes[i], "blue");//Color update
      if (i == (j - 1)) {
        div_update(divs[i + 1], div_sizes[i + 1], "yellow");//Color update
      }
      else {
        div_update(divs[i + 1], div_sizes[i + 1], "blue");//Color update
      }
      i -= 1;
    }
    div_sizes[i + 1] = key;

    for (let t = 0; t < j; t++) {
      div_update(divs[t], div_sizes[t], "green");//Color update
    }
  }
  div_update(divs[j - 1], div_sizes[j - 1], "green");//Color update

  stopProcess=false;
  enable_buttons();
}
async function heapSort() {

  await heap_sort();

  stopProcess = false;
  enable_buttons();
}

async function swap(i, j) {
  div_update_delay(divs[i], div_sizes[i], "red"); 
  div_update_delay(divs[j], div_sizes[j], "red"); 

  let temp = div_sizes[i];
  div_sizes[i] = div_sizes[j];
  div_sizes[j] = temp;

  div_update_delay(divs[i], div_sizes[i], "red"); 
  div_update_delay(divs[j], div_sizes[j], "red"); 

  div_update_delay(divs[i], div_sizes[i], "blue"); 
  div_update_delay(divs[j], div_sizes[j], "blue"); 
}

async function max_heapify(n, i) {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;

  if (l < n && div_sizes[l] > div_sizes[largest]) {
    if (largest != i) {
      await div_update_delay(divs[largest], div_sizes[largest], "blue");
    }

    largest = l;

    await div_update_delay(divs[largest], div_sizes[largest], "red");
  }

  if (r < n && div_sizes[r] > div_sizes[largest]) {
    if (largest != i) {
      await div_update_delay(divs[largest], div_sizes[largest], "blue");
    }

    largest = r;

    await div_update_delay(divs[largest], div_sizes[largest], "red");
  }

  if (largest != i) {
    await swap(i, largest);

    await max_heapify(n, largest);
  }
}

async function heap_sort() {
  for (let i = Math.floor(arr_size / 2) - 1; i >= 0; i--) {
    await max_heapify(arr_size, i);
  }
  let i;
  for (i = arr_size - 1; i > 0; i--) {
    if (stopProcess) break;
    await swap(0, i);
    await div_update_delay(divs[i], div_sizes[i], "green");  
    await div_update_delay(divs[i], div_sizes[i], "yellow");  

    await max_heapify(i, 0);

    div_update_delay(divs[i], div_sizes[i], "blue");  
    div_update_delay(divs[i], div_sizes[i], "green");  
  }
  await div_update_delay(divs[i], div_sizes[i], "green");  

}
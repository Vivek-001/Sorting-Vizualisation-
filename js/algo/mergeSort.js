async function mergeSort() {

  await merge_sort(0, arr_size - 1);

  stopProcess=false;
  enable_buttons();
}

async function merge(start, mid, end) {
  let p = start, q = mid + 1;

  let Arr = [], k = 0;

  for (let i = start; i <= end; i++) {
    if(stopProcess) break;
    if (p > mid) {
      Arr[k++] = div_sizes[q++];
      div_update(divs[q - 1], div_sizes[q - 1], "red");
    }
    else if (q > end) {
      Arr[k++] = div_sizes[p++];
      div_update(divs[p - 1], div_sizes[p - 1], "red");
    }
    else if (div_sizes[p] < div_sizes[q]) {
      Arr[k++] = div_sizes[p++];
      div_update(divs[p - 1], div_sizes[p - 1], "red");
    }
    else {
      Arr[k++] = div_sizes[q++];
      div_update(divs[q - 1], div_sizes[q - 1], "red");
    }
  }

  for (let t = 0; t < k; t++) {
    div_sizes[start++] = Arr[t];
    await div_update_delay(divs[start - 1], div_sizes[start - 1], "green");
  }
}

async function merge_sort(start, end) {
  if (start < end) {
    if(stopProcess) return;
    let mid = Math.floor((start + end) / 2);
    await div_update_delay(divs[mid], div_sizes[mid], "yellow");

    await merge_sort(start, mid);
    await merge_sort(mid + 1, end);

    await merge(start, mid, end);
  }
}
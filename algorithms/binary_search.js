function binary_search(arr, val) {
	let min = 0;
	let max = arr.length - 1;

	while(min <= max) {
		let mid   = Math.floor((min + max) / 2);
		let guess = arr[mid];

		if(guess === val) return mid;
		if(guess >   val) max = mid - 1;
		if(guess <   val) min = mid + 1;
	}

	return null;
}

export { binary_search };

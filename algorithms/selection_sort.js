function find_smallest(arr) {
	let smallest = arr[0];
	let smallest_index = 0;

	for (let i = 1; i < arr.length; i++) {
		if(arr[i] < smallest) {
			smallest = arr[i];
			smallest_index = i;
		}
	}

	return smallest_index;
}

function selection_sort(arr) {
	let newArr = [];
	let n = arr.length;

	for (let i = 0; i < n; i++) {
		let smallest = arr[find_smallest(arr)];
		newArr.push(smallest);
		arr = arr.filter(x => x !== smallest);
	}

	return newArr;
}

export { selection_sort };
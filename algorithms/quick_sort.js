function quick_sort(arr) {
	if(arr.length < 2) return arr;

	const pivot = arr[Math.floor((arr.length - 1) / 2)];
	const less  = arr.filter(x => x < pivot);
	const more  = arr.filter(x => x > pivot);

	return [...quick_sort(less), pivot, ...quick_sort(more)];
}

export { quick_sort };
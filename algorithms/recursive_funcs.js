function recursive_search(obj, target) {
	for(let key in obj) {
		if(obj[key] === target) return JSON.stringify(obj);
		let res = recursive_search(obj[key], target);
		if(res) return res;
	}
}

function fibonachi(n) {
	return n <= 1 ? 1 : n * fibonachi(n-1);
}

function length(arr) {
	let count = 0;
	return arr[0] === undefined ? count : 1 + length(arr.slice(1));
}

function sum(arr) {
	let count = 0;
	return arr[0] === undefined ? count : arr[0] + sum(arr.slice(1));
}

function bigest(arr) {
	let i   = length(arr)-1;
	let max = arr[0];
	
	if(max < arr[i]) {
		max = arr[i];
		return bigest(arr.slice(1));
	}

	return max;
}

export { 
	fibonachi,
	length,
	sum,
	recursive_search,
	bigest,
};
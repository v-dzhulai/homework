import { binary_search }    from './binary_search.js';
import { selection_sort }   from './selection_sort.js';
import { 
	fibonachi,
	length,
	sum,
	recursive_search,
	bigest,
} from './recursive_funcs.js';
import { quick_sort } from './quick_sort.js';

/**
 * Algorithm's test: Binary Search
 **/
const arr1 = [1, 3, 5, 7, 9];
console.log('Binary Search:', binary_search(arr1, 5));
console.log('Binary Search:', binary_search(arr1, 2));
console.log('______________________________________\n');

/**
 * Algorithm's test: Selection Sort
 **/
const arr2 = [11, 13, 5, 37, 19, 20];
console.log('Selection Sort:', selection_sort(arr2));
console.log('______________________________________\n');

/**
 * Algorithm's test: Recursive Functions
 **/

 // Search
const obj1 = {obj2: {},obj3: {obj5: {},obj6: {value: "key"},obj7: {},},obj4: {}};
const arr3 = [[], [[], ['key'], []], []];
console.log('Recursive Search:', recursive_search(obj1, 'key'));
console.log('Recursive Search:', recursive_search(arr3, 'key'));
console.log('______________________________________\n');

// Sum
const arr4 = [1, 2, 3, 4, 5];
console.log('Sum:', sum([]));
console.log('Sum:', sum([1, 2, 3]));
console.log('Sum:', sum(arr4));
console.log('______________________________________\n');

// Fibonachi number
console.log('Fibonachi:', fibonachi(0));
console.log('Fibonachi:', fibonachi(1));
console.log('Fibonachi:', fibonachi(2));
console.log('Fibonachi:', fibonachi(5));
console.log('______________________________________\n');

// Array long
console.log('Length:', length([]));
console.log('Length:', length(arr4));
console.log('______________________________________\n');

// Bigest value
console.log('Bigest:', bigest([]));
console.log('Bigest:', bigest(arr1));
console.log('Bigest:', bigest(arr2));
console.log('Bigest:', bigest(arr4));
console.log('______________________________________\n');

/**
 * Algorithm's test: Quick sort
 **/
 console.log('Quick Sort:', quick_sort([]));
 console.log('Quick Sort:', quick_sort(arr2));
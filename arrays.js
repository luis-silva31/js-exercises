/**
 * Add the given item to the array
 */
const add = (arr, item) => {
    return arr.push(item);
};

/**
 * Add the given item to the start of the array
 */
const prepend = (arr, item) => {
    console.log(arr.unshift(item));
};

/**
 * Remove the given item from the array
 */
const remove = (arr, item) => {
    var indexToDelete = 2;
    let newArray = arr.filter((item, index) => {
        if (index !== indexToDelete){
            return item;
        }
    });
};

/**
 * Find the index of the given item within the given array
 */
const findIndex = (arr, item) => {
    var indexToFind = ArrayUtils.indexOf(arr, item);
    return console.log(indexToFind);
};

/**
 * Sums all the items of an array
 */
const sum = (arr) => {
    let sumOfNumbers = 0;
    for(let i = 0; i<arr.length; i++){
        sumOfNumbers += arr[i];
    }
    console.log(sumOfNumbers);
};

/**
 * Concatenate the two arrays
 */
const concat = (arr1, arr2) => {
    console.log(arr1.concat(arr2));
};

/**
 * Compare the two arrays' content for equality
 */
const isEqual = (arr1, arr2) => {
    const areEqual = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);
    areEqual(arr1, arr2);
};

/**
 * Reverse the given array
 */
const reverse = (arr) => {
    return arr.reverse();
};

/**
 * Insert an item in the array at the specific position
 */
const insert = (arr, item, index) => {
    arr.splice(index, 0, item);
};

/**
 * Fill a new created array with the given length with the given item
 */
const fill = (length, item) => {

};

/**
 * Remove all the falsy values from the given array
 */
const compact = (arr) => {
    var filtered = array.filter(function(filteredArray){
        return filteredArray != null;
    });
    console.log(filtered);
};

/**
 * Count the number of occurrences of an item in the given array
 */
const count = (arr, item) => {
    var occurrences = 0;
    for(let i = 0; i < arr.length; i++){
        if (arr[i] == item)
        occurrences++;
    }
};

/**
 * Multiply all the items on the array by the given number
 */
const multiply = (arr, number) => {
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i] * number;
    }
    console.log(arr);
};

/**
 * Find all the duplicated items in the given array
 */
const findDuplicates = (arr) => {
    let duplicates = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i + 1] == arr[i]){
            duplicates.push(arr[i]);
        }
    }
    return duplicates;
};

/**
 * Find all the occurrences of a given item on the array
 */
const findAllOccurrences = (arr, item) => {
    let occurrences = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == item){
            occurrences.push(arr[i]);
        }
    }
};

/**
 * Parse the params from the given url
 */
const parseParams = (url) => {
    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);

    const a = urlParams.get('a')
    console.log(a);

    const b = urlParams.get('b')
    console.log(b);

    const c = urlParams.get('c')
    console.log(c);
};

module.exports = {
    add,
    prepend,
    remove,
    findIndex,
    sum,
    concat,
    isEqual,
    reverse,
    insert,
    fill,
    compact,
    count,
    multiply,
    findDuplicates,
    findAllOccurrences,
    parseParams,
};
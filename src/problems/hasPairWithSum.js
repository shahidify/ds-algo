const arr1 = [1,2,3,9,5,4];
const sum = 8;
// Find if a pair is available in an array that if adds equal to the sum
function hasPair(arr, sum) {
  let mySet = new Set();
  for(let i=0; i<arr.length; i++) {
    if(mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

hasPair(arr1, sum);
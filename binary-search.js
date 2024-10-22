function linearSearch (arr, target) {


  
  // Can you solve this in one line?
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === target) return i
  }
  return -1
};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let high = arr.length - 1
  let low = 0
  let mid = undefined;
  if (target < 0) return -1
  // While high and low indices do not overlap...
  while(high>= low && low <= high){
    mid = Math.floor((high + low) / 2)
    // Find the midpoint between high and low indices
    // Return the midpoint index
    if(arr[mid] === target) return mid
    // If the target equals the midpoint...
    // Compare the target value to the midpoint value
    // If the target is less than the midpoint...
    if(target < arr[mid]) {
      // Move the high pointer to midpoint - 1
      high = mid - 1
      continue
    }
    // If the target is higher than the midpoint...
    if(target > arr[mid]){
      // Move the low pointer to midpoint + 1
      low = mid + 1
      continue
    } 
    
    
  }
  return -1;


  // Return -1 if the loop exits with overlapping pointers

}


module.exports = [linearSearch, binarySearch]
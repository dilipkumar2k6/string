/*
sorted int array, int target num
[1,3,5,7,9], 3 => 1
[1,3,5,7,9], 7 => 3
[1,3,5,7,9], 0 => 0
[1,3,5,7,9], 4 => 2
[1,3,5,7,9], 8 => 4
[1,3,5,7,9], 10 => 5

*/

/*
rotated sorted int array, int target num
[7,9,1,3,5], 3 => 3
[3,5,7,9,1], 3 => 0
[1,3,5,7,9], 3 => 1
[3,5,7,9,1], 0 => -1
[3,5,7,9,1], 4 => -1
[3,5,7,9,1], 8 => -1
*/

const findIndex = (nums, start, end, target) => {
    const mid = Math.floor((end + start)/2);
    
    if(nums[mid] === target) {
      return mid;
    }
    
    // left 
    if (target < nums[mid]) {
      
      // handle edge case
      if (mid - 1 < start) {
        return mid;
      }
      
      return findIndex(nums, start, mid - 1, target);
    } 
    
      // handle edge case
      if (mid + 1 > end) {
        return end+1;
      }
      
    // right
    return findIndex(nums, mid + 1, end, target);
    
  }
  //T: Log(n)
  // Space: O(1) / O(log(n))
  
  // let nums = [1,3,5,7,9];
  // console.log(3,findIndex(nums, 0, nums.length - 1, 3)); 
              
  // console.log(7, findIndex(nums, 0, nums.length - 1, 7)); 
  
  // console.log(0, findIndex(nums, 0, nums.length - 1, 0));
  // console.log(4, findIndex(nums, 0, nums.length - 1, 4));
  // console.log(8, findIndex(nums, 0, nums.length - 1, 8));
  // console.log(10, findIndex(nums, 0, nums.length - 1, 10)); 
  
  // console.log(2, findIndex(nums, 0, nums.length - 1, 2));    
  
  
  // let nums2 = [1,3];
  // console.log(findIndex(nums2, 0, nums2.length - 1, 0));    
  // console.log(findIndex(nums2, 0, nums2.length - 1, 1));    
  // console.log(findIndex(nums2, 0, nums2.length - 1, 2));    
  // console.log(findIndex(nums2, 0, nums2.length - 1, 3));    
  // console.log(findIndex(nums2, 0, nums2.length - 1, 4));    
  
          /*
  sorted int array, int target num
  [1,3,5,7,9], 3 => 1
  [1,3,5,7,9], 7 => 3
  [1,3,5,7,9], 0 => 0
  [1,3,5,7,9], 4 => 2
  [1,3,5,7,9], 8 => 4
  [1,3,5,7,9], 10 => 5
  
  */      
  
  
  
  const findIndex2 = (nums, start, end, target) => {
    if (start > end ) {
     return -1;
    }
    
    const mid = Math.floor((end + start)/2);
    if(nums[mid] === target) {
      return mid;
    }
    
    // left
    if(target < nums[mid]) {
        return findIndex2(nums, start, mid - 1, target);
    }
    return findIndex2(nums, mid + 1, end, target);
  }
  
  /**
  
  [7,9,1,3,5], 3 => 3
  [3,5,7,9,1], 3 => 0
  [1,3,5,7,9], 3 => 1
  [3,5,7,9,1], 0 => -1
  [3,5,7,9,1], 4 => -1
  [3,5,7,9,1], 8 => -1
  */
//   console.log(3, [7,9,1,3,5], findIndex2([7,9,1,3,5], 0, 4, 3));    
//   console.log(3, [3,5,7,9,1], findIndex2([3,5,7,9,1], 0, 4, 3));    
//   console.log(3, [1,3,5,7,9], findIndex2([1,3,5,7,9], 0, 4, 3));    
//   console.log(9, [3,5,7,9,1], findIndex2([3,5,7,9,1], 0, 4, 9));    
//   console.log(4, [3,5,7,9,1], findIndex2([3,5,7,9,1], 0, 4, 4));
//   console.log(8, [3,5,7,9,1], findIndex2([3,5,7,9,1], 0, 4, 8));

  console.log(1, [3,5,7,9,1], findIndex2([3,5,7,9,1], 0, 4, 1));
  
  
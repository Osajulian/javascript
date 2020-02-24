function getSecondLargest(nums) {
    nums.sort();
    let largest = nums[nums.length-1];
    let secondLargest = 0
    
    for (let i = nums.length; i >= 1; i--) 
    if (nums[i] === largest)
    nums.slice()
    return nums[i]
           
        
         
}

console.log(getSecondLargest([4, 9, 5, 9, 10, 6]))
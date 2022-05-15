//leet code ===================================================================
Input: nums = [15,7,11,2], target = 9

function foo (nums,target){

    for (let i = 0; i < nums.length; i++) {

        
        for (let j = 1; j < nums.length; j++) {
            let sum = nums[i]+nums[j+1]
            if(sum === target){
                console.log(i , (j+1))
            }
        }
            
    }

}


// anther selotiom


const nums1 = [15, 7, 11, 2], target1 = 9; //Example 1:
const nums2 = [3,2,4], target2 = 6       //Example 2:
const nums3 = [3,3], target3 = 6         //Example 3:

const twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                if (j === i) continue;
                     let sum = nums[i] + nums[j];
                if (sum === target) {
                    return console.log(i, j);
                }
            }
        }
};
        twoSum(nums1,target1);
        twoSum(nums2,target2);
        twoSum(nums3,target3);


foo(nums,target);

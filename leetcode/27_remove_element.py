class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        # go through the list
        # if ele == val, replace ele with empty space, then swap it to the end
        # then add 1 to k
        if len(nums) == 0:
            return 0
        
        k = 0
        list_end = len(nums) - 1
        i = 0
        while i < len(nums):
            if nums[i] == val:
                nums[i] = nums[list_end]
                nums[list_end] = " "
                k += 1
                list_end -= 1;
                i = 0;
            elif nums[i] == " ":
                return k
            else:
                i += 1
                
        return k
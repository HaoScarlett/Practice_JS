class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        # go through the list
        # if ele == val, replace ele with empty space, then swap it to the end
        # then add 1 to k
        if len(nums) == 0:
            return 0
        
        slow = 0
        fast = 0
        
        while fast < len(nums):
            if nums[fast] == val:
                fast += 1
            else:
                nums[slow] = nums[fast]
                fast += 1
                slow += 1
        return slow
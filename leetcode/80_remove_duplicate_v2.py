class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        i = 0
        for n in nums:
            # Since the array is sorted, 
            # we can compare the current number with the element two positions back
            if i < 2 or n > nums[i - 2]:
                nums[i] = n
                i += 1
        return i
    
"""
    Time complexity is O(n): we only traverse the array once.
    Space complexity is O(1): we only use a single pointer variable.
"""

"""
    k = 2
        for i in range(2, len(nums)):
            if nums[i] != nums[k - 2]:
                nums[k] = nums[i]
                k += 1
        return k
"""
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if not nums:
            return 0
        
        counter = 1
        i = 1

        # use while to control the pointer
        while i < len(nums):
            if nums[i] == nums[i - 1]:
                counter += 1
                if counter > 2:
                    nums.pop(i)
                    i -= 1
                    counter -= 1 # reset the counter
            else:
                counter = 1
            i += 1
        return len(nums)
    
# Time: 
    """
    We have to iterate over all the elements in the array. 
    Suppose that the original array contains N elements, 
    the time taken here would be O(N).
    Next, for every unwanted duplicate element, 
    we will have to perform a delete operation and deletions in arrays are also O(N).
    The worst case would be when all the elements in the array are the same. 
    In that case, we would be performing N−2 deletions thus giving us O(N**2) complexity 
    for deletions.
    Overall complexity = O(N)+O(N**2)=O(N**2).
    """
# Space: O(1)
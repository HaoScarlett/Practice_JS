# modify the array in place
# maintain the same order

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        """
        Removes duplicates in-place from sorted array.
        Args:
            nums: Sorted array of integers
        Returns:
            Number of unique elements
        Example:
            [1,1,2] -> returns 2, nums becomes [1,2,_]
        """
        if not nums: return 0
        if len(nums) == 1: return 1
    
    # Validate sorting
        if any(nums[i] > nums[i+1] for i in range(len(nums)-1)):
            raise ValueError("Array must be sorted")


        # insert index, check index
        insert_index = 1

        for check_index in range(1,len(nums)):
            if nums[check_index] != nums[check_index - 1]:
                nums[insert_index] = nums[check_index]
                insert_index += 1
        
        return insert_index

# Time: O(n)
# Space: O(1)

            
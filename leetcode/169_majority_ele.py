class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        nums_len = len(nums)
        if nums_len == 1:
            return nums[0]
        
        nums_count = {}
        majority_num = nums_len / 2
        for num in nums:
            if nums_count.get(num) == None:
                nums_count[num] = 1
            else:
                nums_count[num] += 1
            if nums_count[num] > majority_num:
                return num
        """
        for num in nums:
            # Get current count (default 0) and increment by 1
            nums_count[num] = nums_count.get(num, 0) + 1
            
            if nums_count[num] > majority_num:
                return num
        """
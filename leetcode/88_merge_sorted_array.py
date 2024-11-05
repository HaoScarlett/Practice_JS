# merge sorted array

class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        merged_arr_pointer = m + n -1
        
        while m >=0 and n >= 0:
            if nums1[m-1] >= nums2[n - 1]:
                nums1[merged_arr_pointer] = nums1[m-1]
                m -= m
                merged_arr_pointer -= merged_arr_pointer
            else:
                nums1[merged_arr_pointer] = nums2[n - 1]
                n -= n
                merged_arr_pointer -= merged_arr_pointer
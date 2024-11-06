# merge sorted array

class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        if n == 0:
            return nums1
        elif m == 0 and n != 0:
            nums1[:n] = nums2[:n]

        merged_arr_pointer = m + n - 1
        m = m - 1
        n = n - 1

        while m >= 0 and n >= 0:
            if nums1[m] >= nums2[n]:
                nums1[merged_arr_pointer] = nums1[m]
                m = m - 1
            else:
                nums1[merged_arr_pointer] = nums2[n]
                n = n - 1
            merged_arr_pointer = merged_arr_pointer - 1

        while n >= 0:
            nums1[merged_arr_pointer] = nums2[n]
            n -= 1
            merged_arr_pointer -= 1
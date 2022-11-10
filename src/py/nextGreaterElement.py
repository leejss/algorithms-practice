from typing import List


class Solution:
    #  O(N^2) solution
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        ans = []

        def getNextGreat(nums, n):
            idx = 0
            for i in range(len(nums)):
                if nums[i] == n:
                    idx = i
            for i in range(idx, len(nums)):
                if nums[i] > n:
                    return nums[i]
            return -1

        for n in nums1:
            ans.append(getNextGreat(nums2, n))

        return ans


class Solution2:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
      # Follow up: Could you find an O(nums1.length + nums2.length) solution?

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        prevMaps = {}

        for i, n in enumerate(nums):
            diff = target - n
            if diff in prevMaps:
                return [prevMaps[diff], i]
            prevMaps[n] = i

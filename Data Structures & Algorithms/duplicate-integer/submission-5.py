class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        counter1 = 0
        counter2 = 0
        for i in nums:
            for j in nums:
                if i == j and counter1 != counter2:
                    return True
                counter2 += 1
            counter1 += 1
            counter2 =0
        return False
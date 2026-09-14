class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        answer = {}
        for i in nums:
            if i in answer:
                answer[i] += 1
            else:
                answer[i] = 1
        sorted_items = sorted(answer.items(), key=lambda item: item[1], reverse= True)

        # 2️⃣ Extract only the keys in order
        x = [key for key, value in sorted_items]
        return x[:k]

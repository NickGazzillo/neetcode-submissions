class Solution:

    def encode(self, strs: List[str]) -> str:
        answer = ''
        for i in range(0, len(strs)):
            answer += str(len(strs[i])) + '#' + strs[i]
        return answer

    def decode(self, s: str) -> List[str]:
        answer, i = [], 0

        while i < len(s):
            j = i
            while s[j] != '#':
                j += 1
            length = int(s[i : j])
            answer.append(s[j + 1 : j + 1 + length])
            i = j + 1 + length
        
        return answer


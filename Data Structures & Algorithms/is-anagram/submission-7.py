class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        sLetters = {}
        tLetters = {}
        for i in range(0,len(s)):
            if(s[i] in sLetters):
                sLetters[s[i]] += 1
            else:
                sLetters[s[i]] = 1
            if(t[i] in tLetters):
                tLetters[t[i]] += 1
            else:
                tLetters[t[i]] = 1
        return sLetters == tLetters

            
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        temp = {')' : '(', ']' : '[', '}' : '{'}
        for i in s:
            if i in temp:
                if len(stack) == 0:
                    return False
                elif temp[i] != stack[-1]:
                    return False
                stack.pop()
            else:
                stack.append(i)
        return True if not stack else False

def solution(ingredients):
    answer = 0
    # 빵 야채 고기 빵 [1,2,3,1]
    
    # [2, 1, 1, 2, 3, 1, 2, 3, 1]
    
    # [2, 1, 1, 2, 3, 1, d, 3, 1]
    
    # How to remove elements ? 
    
    i = 0
    stack = []
    L, R = 0, 0
    count = 0
    while i < len(ingredients):
        ingredient = ingredients[i]
        if len(stack) == 0:
            if ingredient == 1:
                stack.append(ingredient)
                L = i
        else:
            top = stack[-1]
            if ingredient == 1 and top == 3:
                stack.append(ingredient)
                # 완성
                R = i
                ingredients = ingredients[0:L] + ingredients[R:]
                i = 0
                count += 1
            else:
                if ingredient - top == 1:
                    stack.append(ingredient)
                else:
                    # 실패
                    stack = []
        i += 1
    return count


solution([2, 1, 1, 2, 3, 1, 2, 3, 1])
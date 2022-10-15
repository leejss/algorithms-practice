from typing import List


class Solution:
    def runningSum1(self, nums: List[int]) -> List[int]:
      # return new list
      result = []
      prev_sum = 0
      for num in nums:
        prev_sum += num
        result.append(prev_sum)
      return result

    def runningSum2(self, nums: List[int]) -> List[int]:
      prev_sum = 0
      def calc(x):
        nonlocal prev_sum
        prev_sum += x
        return prev_sum
      result = map(calc, nums)
      return list(result)
      

'''
map() function returns a map object(which is an iterator) of the results after applying the given function to each item of a given iterable (list, tuple etc.)

map(fn, iter)

result = map(lambda x: x + x, iter)



'''
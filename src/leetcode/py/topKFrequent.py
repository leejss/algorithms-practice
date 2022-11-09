from typing import List
from collections import defaultdict


def topKFrequent(nums: List[int], k: int) -> List[int]:
    counter = defaultdict(int)
    for n in nums:
        counter[n] += 1
    s = list(map(lambda x: x[0], sorted(
        counter.items(), key=lambda x: x[1], reverse=True)))
    return s[0:k]


topKFrequent([1, 1, 1, 2, 2, 3], 2)
2

from collections import defaultdict


def containsDuplicate(nums):
    counter = {}
    for n in nums:
        if n in counter:
            counter[n] += 1
        else:
            counter[n] = 1

    for k in counter:
        if counter[k] > 1:
            return True

    return False


def containsDuplicate2(nums):

    counter = {}
    for n in nums:
        counter.setdefault(n, 0)
    for k in counter:
        if counter[k] > 1:
            return True
    return False


def containsDuplicate3(nums):
    counter = defaultdict(int)
    for n in nums:
        counter[n] += 1
    for k in counter:
        if counter[k] > 1:
            return True
    return False


def removeDupliceate(nums):
    return set(nums)


containsDuplicate2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])

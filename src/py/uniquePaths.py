
def uniquePaths(m, n, i=0, j=0):
    if i >= m or j >= n:
        return 0
    if i == m - 1 and j == n - 1:
        return 1

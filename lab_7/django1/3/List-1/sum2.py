def sum2(nums):
  c = 0
  for i in range(min(2, len(nums))):
    c += nums[i]
  return c

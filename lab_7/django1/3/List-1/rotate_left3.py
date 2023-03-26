def rotate_left3(nums):
  l = nums[1:len(nums)]
  l.append(nums[0])
  return l
def make_chocolate(small, big, goal):
  if(0 <= goal - 5 * min(big, goal // 5) <= small):
    return goal - 5 * min(big, goal // 5)
  return -1

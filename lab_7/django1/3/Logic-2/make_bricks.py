def make_bricks(small, big, goal):
  if(goal - 5 * min(goal // 5, big) <= small):
    return True
  return False

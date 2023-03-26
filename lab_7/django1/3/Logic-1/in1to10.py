def in1to10(n, outside_mode):
  if(1 <= n <= 10 and not outside_mode):
    return True
  if(outside_mode and (n <= 1 or n >= 10)):
    return True
  return False
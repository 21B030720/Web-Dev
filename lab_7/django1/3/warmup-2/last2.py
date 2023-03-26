def last2(str):
  if(not (len(str))):
    return 0
  c = 0
  for i in range(len(str) - 2):
    if(str[i] + str[i+1] == str[len(str)-2: len(str)]):
      c += 1
  return c

def lucky_sum(a, b, c):
  k = 0
  l = [a, b, c]
  i = 0
  while(i < 3 and l[i] != 13):
    k += l[i]
    i += 1
  return k

def lone_sum(a, b, c):
  k = 0
  d = []
  l = [a, b, c]
  for i in l:
    if(l.count(i) > 1):
      d.append(i)
  for i in l:
    if(i not in d):
      k += i
  return k
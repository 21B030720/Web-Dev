def no_teen_sum(a, b, c):
  l = [a, b, c]
  c = 0
  for i in l:
    if(not (13 <= i <=14 or 17<= i <= 19)):
      c += i
  return c

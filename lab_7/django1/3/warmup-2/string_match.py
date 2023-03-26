def string_match(a, b):
  l = min(len(a), len(b))
  c = 0
  for i in range(l - 1):
    if(a[i] + a[i+1] == b[i] + b[i+1]):
      c += 1
  return c

def cat_dog(str):
  a = 0
  b = 0
  for i in range(len(str) - 2):
    if(str[i:i+3] == "dog"):
      a += 1
    if(str[i:i+3] == "cat"):
      b += 1
  if(a == b):
    return True
  return False

def first_two(str):
  if(str == ""):
    return ""
  elif(len(str) < 3):
    return str
  return str[0:2]

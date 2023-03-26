def not_string(str):
  if(str[0: 3] == "not" and len(str) > 2):
    return str
  else:
    return "not " + str

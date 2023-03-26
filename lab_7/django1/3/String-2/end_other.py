def end_other(a, b):
  shorter = a.lower()
  longer = b.lower()
  if(len(a) > len(b)):
    shorter = b.lower()
    longer = a.lower()
  if(longer[-len(shorter):] == shorter):
    return True
  return False

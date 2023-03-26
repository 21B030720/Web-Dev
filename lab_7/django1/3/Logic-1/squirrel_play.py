def squirrel_play(temp, is_summer):
  max = 90
  if(is_summer):
    max = 100
  if(60 <= temp <= max):
    return True
  return False

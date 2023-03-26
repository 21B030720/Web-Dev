def date_fashion(you, date):
  if((you > 7 or date > 7) and (you > 2 and date > 2)):
    return 2
  elif(you <= 2 or date <= 2):
    return 0
  else:
    return 1
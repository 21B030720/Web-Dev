def cigar_party(cigars, is_weekend):
  if(40<=cigars<=60 or (40<=cigars and is_weekend)):
    return True
  return False

def xyz_there(str):
    if (not str.count("xyz")):
        return False
    for i in range(len(str) - 3):
        if (str[i] == '.' and str[i + 1:i + 4] == "xyz"):
            if (str.find("xyz", i + 4) == -1):
                return False
    return True


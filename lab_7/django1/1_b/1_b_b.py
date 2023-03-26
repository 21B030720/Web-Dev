a = int(input())
if(not (a % 4)):
    if(not (a % 100)):
        if(not (a % 400)):
            print("YES")
        else:
            print("NO")
    else:
        print("YES")
else:
    print("NO")
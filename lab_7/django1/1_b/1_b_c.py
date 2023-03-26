a = (input())
b = int(input())
# print(a[::-1])
# print(a[::-1])
if(a == a[::-1]):
    if(b == -1):
        print("YES")
    else:
        print("NO")
else:
    if (b == 1):
        print("NO")
    else:
        print("YES")
a = int(input())
b = input().split()
c = False
for i in range(1, a):
    if(int(b[i]) > 0 and int(b[i-1]) > 0):
        c = True
        break
    if(int(b[i]) < 0 and int(b[i-1]) < 0):
        c = True
        break
if(c):
    print("YES")
else:
    print("NO")
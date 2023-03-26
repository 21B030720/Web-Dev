a = int(input())
b = input().split()
c = 0
for i in b:
    if(int(i) > 0):
        c += 1
print(c)
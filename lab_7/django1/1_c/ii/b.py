a = int(input())
k = 2
while(k <= a):
    if(a % k == 0):
        break
    k += 1
print(k)
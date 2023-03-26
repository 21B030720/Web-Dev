a = int(input())
c = 0
for i in range(2, int(a**0.5)+1):
    if(not(a % i)):
        c += 1
if(a > 1):
    c += 2
else:
    c += 1
print(c)
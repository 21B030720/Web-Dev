a = input()
d = len(a) - 1
c = 0
for i in a:
    c += int(i) * 2**d
    d -= 1
print(c)
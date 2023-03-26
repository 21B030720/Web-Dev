a = int(input())
b = input().split()
for i in range(int(len(b) / 2)):
    l = b[i]
    k = b[len(b) - i - 1]
    b[i] = k
    b[len(b) - i - 1] = l
for i in b:
    print(i, end = " ")
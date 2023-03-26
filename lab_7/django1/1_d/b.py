a = int(input())
b = input().split()
for i in b:
    if(int(i) % 2 == 0):
        print(i, end = " ")
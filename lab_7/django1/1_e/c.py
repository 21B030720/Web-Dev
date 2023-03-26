def Xor(a, b):
    if(a + b == 1):
        print(1)
    else:
        print(0)
b = input().split()
Xor(int(b[0]), int(b[1]))
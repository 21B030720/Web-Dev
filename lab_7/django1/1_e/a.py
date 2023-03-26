def min(a, b, c, d):
    m = a
    if(b < m):
        m = b
    if(c < m):
        m = c
    if(d < m):
        m = d
    print(m)
b = input().split()
min(int(b[0]), int(b[1]), int(b[2]), int(b[3]))
if __name__ == '__main__':
    s = []
    x = int(input())
    y = int(input())
    z = int(input())
    n = int(input())
    for i in range(x + 1):
        for j in range(y + 1):
            for k in range(z + 1):
                if(i + j + k != n):
                    s.append([i, j, k])
    print(s)
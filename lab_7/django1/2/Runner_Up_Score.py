if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    arr = list(arr)
    max = -1000000
    for i in arr:
        if(max < i):
            max = i
    up = -10000000
    for i in arr:
        if(up < i and i != max):
            up = i
    print(up)
    # print(arr)
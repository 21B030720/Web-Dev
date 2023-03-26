v = int(input())
t = int(input())
if(v == 0):
    result = 0
elif(v < 0):
    result = 109 - (abs(v) * t % 109)
else:
    result = abs(v) * t % 109
print(result)
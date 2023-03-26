#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the solve function below.
def solve(s):
    s = list(s)
    s[0] = s[0].upper()
    for i in range(len(s) - 1):
        if(s[i] == " " and s[i+1] != " "):
            s[i+1] = s[i+1].upper()
    s1 = ""
    for i in s:
        s1 += i
    return s1
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = solve(s)

    fptr.write(result + '\n')

    fptr.close()

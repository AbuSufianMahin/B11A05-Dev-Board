total, size = input("1st Line: ").split()
array_value = input("2nd Line").split()

result = []
for i in range(-1, -int(size)-1, -1):
    result.append(int(array_value[i]))

print(result)
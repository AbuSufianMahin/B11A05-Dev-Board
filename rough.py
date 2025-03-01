total, size = input("1st Line: ").split()
array_value = input("2nd Line").split()

result = []
for i in range(int(size)-1,-1, -1):
    result.append(int(array_value[i]))


string = ''
for i in range(int(size)):



    if i != (int(size)-1):
        string += str(result[i])
        string += ' '
        
    else:
       string += str(result[i])

print(string)
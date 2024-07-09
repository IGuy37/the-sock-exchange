sock1 = ['Small', 'Green', True]
sock2 = ['Large', 'Blue', True]
print(len(sock1))


socks = [sock1, sock2]
print(socks)

print(f'The first sock is {socks[0]} and the last sock is {socks[-1]}')
print(f'The size of sock1 is {socks[0][0]}')

print(socks)
socks.remove(sock1)
print(socks)

true_socks = [sock for sock in socks if sock[2] == True]
print("Socks with third value True:", true_socks)



# Lists representing different attributes of socks
sizes = ['Small', 'Medium', 'Large']
colors = ['Green', 'Yellow', 'Blue']
padded = [True, False, True]

# Using zip to combine these lists
zipped_socks = zip(sizes, colors, padded)
print(type(zipped_socks))
print(zipped_socks)
print("Zipped socks:", list(zipped_socks))


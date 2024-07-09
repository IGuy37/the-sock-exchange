quote = 'Socks, those humble guardians of feet, remind us that comfort in the small things paves the path to enduring contentment.'
print(quote)
idx = quote.find('feet')
print(idx)
print(type(quote))
print(type(idx))
idx_str = str(idx)
print(type(idx_str))
print(dir(str))
print(len(quote))
print(idx+100)
quote2 = str(idx)+quote
print(quote2)
float_str = '123.99'
float_float = float(float_str)
print(type(float_str))
print(type(float_float))
print(type(float_float) == type(idx))
print(type(float_float) != None)
for x in range(-2,5):
    print('\nProcessing number: ',x)

    if (x < 1) or (x > 3):
        print('* I do not see outside of my scope: ',x)
    elif x == 1:
        print('* The number was 1')
    elif x == 2:
        print('* The number was 2')
    else:
        print('* The number was 3')



socks = 6
drawers = 3

for drawer in range(6):
    print ('\nNumber or drawers: ', drawer)

    try:
        #if drawer >  drawers:
        #    raise Exception(f"The max number of {drawers} been exceeded!")
        assert drawer <= drawers, f"The max number of {drawers} been exceeded!"
        socks_per_drawer = socks // drawer  #int(pizza_pieces / people)
    except Exception as e:
      print('Exception: ', e)
    else:
        print ('Every drawer gets {} sock(s)'.format(socks_per_drawer))
    finally:
        print ('Continuing ...')
print ('\nSocks lost in drawers remind us that even what is hidden shapes our journey.')


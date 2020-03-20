import time
def catch_repeated(list):
    filt = []   # filt=[2, 5, 8]
    for i in list:
        if i in filt:
            print('repeated element is {} with index of {}'.format(i, list.index(i)))
            time.sleep(0.5)
        else:
            filt.append(i)
            continue

def catch_consecutive(list2):
    length2 = len(list2)
    for i in range(1,length2,1):
        for ii in range(i-1, i, 1):     # [5,8]     [9,9]
            if list2[ii] == list2[i]:
                print("repeated consecutive elements", ii, list2[i], i, list2[ii])
                break
            else:
                continue
        



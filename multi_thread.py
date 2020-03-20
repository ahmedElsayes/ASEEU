import _thread
import time

list1 = [2, 9, 20, 22, 6, 8, 10, 12, 14, 18, 24]
list2 = [*range(5,100,5)]
C = []
def loop1(A, delay1):
    for i, e in enumerate(A):
        time.sleep(delay1)
        C.append(e)
        print('loop1: element{}: {}'.format(i, e))


def loop2(B, delay2):
    for i, e in enumerate(B):
        time.sleep(delay2)
        print('loop2: element{}: {}'.format(i, e))

# loop1(list1, 0.1)
# loop2(list2, 0.1)
_thread.start_new(loop1, (list1, 0.2))
_thread.start_new(loop2, (list2, 0.1))

while 1:
    if len(C) == len(list1):
        break
    else:
        pass



import time
count = 0
threshold = 20
while(1):
    while count >= 0:
        count += 1
        time.sleep(0.2)
        print(count)
        if count == threshold:
            break

    while count <= threshold:
        count -= 1
        time.sleep(0.2)
        print(count)
        if count == 0:
            break

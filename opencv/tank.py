import time
import numpy as np
import cv2 as cv
# Create a black image
img = np.zeros((650, 1200, 3), np.uint8)
start = 150
end = 400
T_time = 100
font = cv.FONT_HERSHEY_SIMPLEX
cv.rectangle(img, (start, start), (end, end), (0, 255, 0), 2) # the tank
frame1 = cv.putText(img, 'Water Tank', (250, 250), font, 0.6, (255, 0, 0), 1, cv.LINE_AA)
cv.rectangle(img, (start+50, start-80), (start+80, start), (0, 255, 0), 2)   # the inlet pipe
cv.rectangle(img, (start+40, start-80), (start+90, start-120), (255, 0, 0), 2)   # the inlet valve
frame2 = cv.putText(img, 'Inlet Valve', (start-80, start-80), font, 0.6, (255, 0, 0), 1, cv.LINE_AA)
cv.rectangle(img, (end, end), (end+100, end-30), (0, 255, 0), 2)   # the outlet pipe
cv.rectangle(img, (end+100, end+10), (end+150, end-40), (255, 0, 0), 2)   # the outlet valve
frame3 = cv.putText(img, 'outlet Valve', (end+160, end+10), font, 0.6, (255, 0, 0), 1, cv.LINE_AA)
cv.imshow('test', frame1)
cv.imshow('test', frame2)
cv.imshow('test', frame3)
count = 400
threshold = 200
diff = end-threshold
waterlevel = 0  # fluctuates from 0 to 2 meter
cycles = 1
numOfCycles = 2
while cycles <= numOfCycles:
    # activate inlet pipe and valve and deactivate outlets
    cv.rectangle(img, (start+50, start-80), (start+80, start), (0, 0, 255), -1)   # the inlet pipe
    cv.rectangle(img, (start+40, start-80), (start+90, start-120), (0, 255, 0), -1)   # the inlet valve
    cv.rectangle(img, (end, end), (end+100, end-30), (0, 0, 0), -1)   # the outlet pipe
    cv.rectangle(img, (end+100, end+10), (end+150, end-40), (0, 0, 0), -1)   # the outlet valve
    while count <= end:
        count -= 2
        # the goal is to syncronize the simulation with the change in water level
        waterlevel += (2/diff)*2    # (the maximum level / difference of simulated rect) * count step
        cv.rectangle(img, (end, end), (start, count), (0, 0, 255), -1)
        # *****to show water level*****
        # levelText = 'water level: '+str(waterlevel)
        # frame4 = cv.putText(img, levelText, (500, 350), font, 0.6, (255, 0, 0), 1, cv.LINE_AA)
        # cv.imshow('test', frame4)
        # *****************************
        cv.imshow('test', img)
        cv.waitKey(T_time)
        print('water level: ', waterlevel)
        if count == threshold:
            break
    # activate inlet pipe and valve and deactivate outlets
    cv.rectangle(img, (start+50, start-80), (start+80, start), (0, 0, 0), -1)   # the inlet pipe
    cv.rectangle(img, (start+40, start-80), (start+90, start-120), (0, 0, 0), -1)   # the inlet valve
    cv.rectangle(img, (end, end), (end+100, end-30), (0, 0, 255), -1)   # the outlet pipe
    cv.rectangle(img, (end+100, end+10), (end+150, end-40), (0, 255, 0), -1)   # the outlet valve
    while count >= threshold:
        count += 2
        waterlevel -= (2/diff)*2
        cv.rectangle(img, (start, threshold), (end, count), (0, 0, 0), -1)
        # *****to show water level*****
        # levelText = 'water level: '+str(waterlevel)
        # frame4 = cv.putText(img, levelText, (500, 350), font, 0.6, (255, 0, 0), 1, cv.LINE_AA)
        # cv.imshow('test', frame4)
        # *********************************
        cv.imshow('test', img)
        cv.waitKey(T_time)
        print('water level: ', waterlevel)
        if count == end:
            break
    print(' the end if cycle{}......................'.format(cycles))
    cycles += 1
# cv.waitKey(0)
cv.destroyAllWindows

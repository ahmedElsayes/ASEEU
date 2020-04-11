import numpy as np
import cv2 as cv
import datetime
cap = cv.VideoCapture(0)
# cap = cv.VideoCapture('vtest.avi')

# print(cap.get(cv.CAP_PROP_FRAME_WIDTH))
# print(cap.get(cv.CAP_PROP_FRAME_HEIGHT))
# cap.set(cv.CAP_PROP_FRAME_WIDTH, 450)
# cap.set(cv.CAP_PROP_FRAME_HEIGHT, 300)
# print(' the new frame dimensions')
# print(cap.get(cv.CAP_PROP_FRAME_WIDTH))
# print(cap.get(cv.CAP_PROP_FRAME_HEIGHT))

# define codec of the generated video
# fourcc = cv.VideoWriter_fourcc(*'XVID')
# out = cv.VideoWriter('output.avi', fourcc, 20.0, (640,480), True)

if cap is False:
    print('we cannot access the camera')
    exit()
while cap.isOpened():
    ret, frame = cap.read()
    if ret is False:
        print('we canot receive the frames')
        break
    timenow = str(datetime.datetime.now())
    font = cv.FONT_HERSHEY_SIMPLEX
    frame = cv.putText(frame, timenow, (20,40), font, 1, (0,0,255), 1, cv.LINE_AA)
    # frame = cv.flip(frame, 0)
    # out.write(frame)
    cv.imshow('frame', frame)
    if cv.waitKey(1000) == 27:
        break

cap.release()
# out.release()
cv.destroyAllWindows()

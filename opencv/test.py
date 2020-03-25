import numpy as np
import cv2 as cv

# Create a black image
imgi = np.zeros((650, 1200, 3), np.uint8)
# Draw a diagonal blue line with thickness of 5 px

start = 5
end = 151
cv.rectangle(img, (start, start), (end, end), (0, 255, 0), 2)
# cv.imshow('test', img)
for i in range(start,end,1):
    cv.rectangle(img, (start, start), (i, end), (0, 0, 255), -1)
    cv.imshow('test', img)
    K = cv.waitKey(20)
    if K == 27:
        break
cv.waitKey(0)
cv.destroyAllWindows

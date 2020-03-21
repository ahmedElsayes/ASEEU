import numpy as np
import cv2 as cv
# Create a black image
img = np.zeros((512, 512, 3), np.uint8)
# Draw a diagonal blue line with thickness of 5 px
cv.rectangle(img, (384, 0), (510, 128), (0, 0, 255), -10)
cv.imshow('test', img)
cv.waitKey(0)
cv.destroyAllWindows
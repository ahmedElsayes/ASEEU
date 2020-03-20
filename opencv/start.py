import cv2 as cv
# print(cv.__version__)
img = cv.imread('afganG.jpg')
img1 = cv.imread('nature.jpg')
# print(img1.size, img.size)
# print(img1.shape, img.shape)
# print(img1.dtype, img.dtype)

img = cv.resize(img, (700,700))
img1 = cv.resize(img1, (700, 700))
b,g,r = cv.split(img)
img3 = cv.merge((b,g,r))
img2 = cv.addWeighted(img, 0.8, img1, 0.2, 0)

# cv.imshow('girl', img)
# cv.imshow('nature', img1)
# cv.imshow('Whole_image', img2)
cv.imshow('girl', img3)

cv.waitKey(0)
cv.destroyAllWindows



# K = cv.waitKey(0)       # numbers in ms
# if K == 27:
#     cv.destroyAllWindows
# elif K == ord('s'):
#     cv.imwrite('girlGray.jpg', img)
#     cv.destroyAllWindows

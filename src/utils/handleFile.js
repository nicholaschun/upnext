import { s3upload, fileformdataupload } from './../domains/image/fileupload'

export const decodeBase64Image = image =>
  new Buffer.from(image.replace(/^data:image\/\w+;base64,/, ''), 'base64')

export const getFileType = image => image.split(';')[0].split('/')[1]

export const checkImageSize = image => decodeBase64Image(image).length

export const uploadImage = async (image, location) => {
  try {
    const decodedImage = decodeBase64Image(image)
    const imageType = getFileType(image)
    const result = await s3upload(decodedImage, imageType, location)
    if (!result) {
      return null
    }
    return result
  } catch (error) {
    throw new Error(error.message)
  }
}

export const uploadDataImage = async (image, location) => {
  try {
    const result = await fileformdataupload(image, location)
    if (!result) {
      return null
    }
    return result
  } catch (error) {
    throw new Error(error.message)
  }
}

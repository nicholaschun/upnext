import { s3upload, fileformdataupload } from './../domains/image/fileupload'

export default {
  decodeBase64Image(image) {
    return new Buffer.from(
      image.replace(/^data:image\/\w+;base64,/, ''),
      'base64'
    )
  },

  getFileType(image) {
    return image.split(';')[0].split('/')[1]
  },

  checkImageSize(image) {
    return this.decodeBase64Image(image).length
  },

  async uploadImage(image, location) {
    try {
      //check image size
      const decodedImage = this.decodeBase64Image(image)
      const imageType = this.getFileType(image)
      const result = await s3upload(decodedImage, imageType, location)
      if (!result) {
        return null
      }
      return result
    } catch (error) {
      throw new Error(error.message)
    }
  },
  async uploadDataImage(image, location) {
    try {
      //check image size
      const result = await fileformdataupload(image, location)
      if (!result) {
        return null
      }
      return result
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

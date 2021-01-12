import { S3 } from 'aws-sdk'
import fs from 'fs'

export const createS3Client = ({ config }) => {
  const {
    s3: { accessKey, secretKey }
  } = config
  return new S3({
    accessKeyId: accessKey,
    secretAccessKey: secretKey
  })
}

export const createPutToS3 = ({ s3Client, config }) => async ({
  key,
  file
}) => {
  const {
    s3: { bucket }
  } = config
  try {
    const resp = await s3Client
      .upload({
        Bucket: bucket,
        Key: key,
        Body: fs.createReadStream(file.path),
        ACL: 'public-read'
      })
      .promise()
    return resp
  } catch (error) {
    console.log('could not upload file', error)
  }
}

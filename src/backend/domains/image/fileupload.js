import aws from 'aws-sdk'
import fs from 'fs'
import path from 'path'

import { config } from 'dotenv'

// uploads a base64 image
const fileupload = async (file, location) => {
  const configure = config()

  aws.config.update({
    secretAccessKey: process.env.awsSecretKey || configure.parsed.awsSecretKey,
    accessKeyId: process.env.awsAccessKeyId || configure.parsed.awsAccessKeyId,
    region: process.env.awsBucketRegion || configure.parsed.awsBucketRegion
  })

  const s3 = new aws.S3()

  const params = {
    Bucket:
      `${process.env.awsResourceBucket}/${location}` ||
      `${configure.parsed.awsResourceBucket}/${location}`,
    Key: `${Date.now().toString()}${path.extname(file.originalname)}`,
    Body: fs.createReadStream(file.path),
    ACL: 'public-read'
  }

  try {
    const { Location, Key } = await s3.upload(params).promise()
    const result = {
      location: Location,
      key: Key
    }
    return result
  } catch (error) {
    throw new Error(error.message)
  }
}

const fileformdataupload = async (file, location) => {
  const configure = config()

  aws.config.update({
    secretAccessKey: process.env.awsSecretKey || configure.parsed.awsSecretKey,
    accessKeyId: process.env.awsAccessKeyId || configure.parsed.awsAccessKeyId,
    region: process.env.awsBucketRegion || configure.parsed.awsBucketRegion
  })

  const s3 = new aws.S3()

  const params = {
    Bucket:
      `${process.env.awsResourceBucket}/${location}` ||
      `${configure.parsed.awsResourceBucket}/${location}`,
    Key: `${Date.now().toString()}${path.extname(file.originalname)}`,
    Body: fs.createReadStream(file.path),
    ACL: 'public-read'
  }

  try {
    const { Location, Key } = await s3.upload(params).promise()
    const result = {
      location: Location,
      key: Key
    }
    return result
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = {
  fileupload,
  fileformdataupload
}

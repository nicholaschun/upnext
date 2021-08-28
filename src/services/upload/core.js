import path from 'path'

export default ({ putToS3 }) => async req => {
  const {
    file,
    body: { type }
  } = req
  if (file) {
    const key = `${type}/${Date.now().toString()}${path.extname(
      file.originalname
    )}`
    const { Location } = await putToS3({ key, file })
    return { data: { location: Location, type }, statusCode: 200 }
  }
}

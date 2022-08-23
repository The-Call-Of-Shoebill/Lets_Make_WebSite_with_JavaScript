const getMarkdownData = () => {
  const fs = require('fs')

  const recursive = (dataDirectory) => {
    const targetArray = []

    fs.readdirSync(dataDirectory, 'utf-8').map((file) => {
      const fp = dataDirectory + '/' + file

      if (fs.statSync(fp).isDirectory()) {
        targetArray.push(recursive(fp))
      } else {
        targetArray.push(fp)
      }
    })

    return targetArray.flat()
  }
  const files = recursive(process.env.pathDirectory)

  const data = files.map(file => {
    const filePath = file
    const arrayURL = String(file.replace(process.env.pathDirectory + '/', '').replace(/\.md/g, '')).split('/')
    const linkURL  = String(file.replace(process.env.pathDirectory, 'posts').replace(/\.md$/g, ''))
    const rawContent = fs.readFileSync(file, { encoding: 'utf-8' })

    const dataArray = { filePath, linkURL, arrayURL, rawContent }
    return dataArray
  })

  return {
    paths: data.map((dst) => {
      return {
        params: {
            data: dst.rawContent,
            file: dst.filePath,
            link: dst.linkURL,
            blog: dst.arrayURL,
        }
      }
    }),
    fallback: false
  }
}

export default getMarkdownData

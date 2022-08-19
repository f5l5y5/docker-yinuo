const http = require('node:http')

const fs = require('node:fs')


const html = fs.readFileSync('./index.html')

const server = http.createServer((req, res) => {
    fs.createReadStream('./index.html').pipe(res)
})
server.listen(3000, () => {
  console.log('Listening 3000')
})
const http = require('node:http')

//第一种
// const html = `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <title></title>
// </head>
// <body>
//   hello, shanyue. 
// </body>
// </html>`
// const server = http.createServer((req, res) => res.end(html))



// 第二种 将html文件分离处理 使用fs进行读取
const fs = require('node:fs')
const html = fs.readFileSync('./index.html')
const server = http.createServer((req, res) => res.end(html))




// 

server.listen(3000, () => {
  console.log('Listening 3000')
})
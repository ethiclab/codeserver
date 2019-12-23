module.exports = [
 {
  method: "get",
  path: "/",
  code: (req, res, next) => {
    res.send('<h1>Hello, World!</h1>')
  }
 }
]

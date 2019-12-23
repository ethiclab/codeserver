# Code Server

    npm ci
    npm start -- --options ./options.js

# Options

```javascript
module.exports = {
  bind: {
    address: '0.0.0.0',
    port: 8080
  },
  routeFile: './routes.js'
}
```

# Routes

```javascript
module.exports = [
 {
  method: "get",
  path: "/",
  code: (req, res, next) => {
    res.send('<h1>Hello, World!</h1>')
  }
 }
]
```

import http from "http"
 
const PORT = 3000
 
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello from Home page!")
  } else if (req.url === "/about") {
    res.end("Hello from About page!")
  } else {
    res.end("404 Not Found")
  }
})
 
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})

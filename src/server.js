import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'John John'
    })

    return res.writeHead(201).end()
  }

  if (method === 'GET' && url === '/users') {
    return res
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users))
  }

  return res.writeHead(404).end()
})

server.listen(3001)

const connection = new WebSocket('ws://localhost:8080')
// window.connection = connection for testing in console
connection.addEventListener('message', (message) => {
  let { book } = JSON.parse(message.data)
  // const displayNode = document.getElementById('display')
  // const displayBookNode = document.createElement('div')
  // let html = `<p>${book.title} by: ${book.author}</p>`
  // displayBookNode.innerHTML = html
  // displayNode.appendChild(displayBookNode)
  displayBook(book)
})
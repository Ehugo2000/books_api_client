// const connection = new WebSocket('ws://localhost:8080')
// // window.connection = connection for testing in console
// connection.addEventListener('message', (message) => {
//   let { book } = JSON.parse(message.data)
//   const displayNode = document.getElementById('display')
//   const displayBookNode = document.createElement('div')
//   let html = `<p>${book.title} by: ${book.author}</p>`
//   displayBookNode.innerHTML = html
//   displayNode.appendChild(displayBookNode)
// })

const apiURL = 'http://localhost:3000'
const displayBooks = async () => {
  // const displayNode = document.getElementById('display')
  const data = await (await fetch(apiURL + '/books')).json()
  data.books.forEach((book) => {
    displayBook(book)
    // const displayBookNode = document.createElement('div')
    // let html = `<p>${book.title} by: ${book.author}</p>`
    // displayBookNode.innerHTML = html
    // displayNode.appendChild(displayBookNode)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  displayBooks()
})

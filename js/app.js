const apiURL = 'http://localhost:3000'

const displayBooks = async () => {
  const displayNode = document.getElementById('display')
  const data = await ( await fetch(apiURL + '/books')).json()
  data.books.forEach(book => {
    const displayBookNode = document.createElement('div')
    let html = `<p>${book.title} by: ${book.author}</p>`
    displayBookNode.innerHTML = html
    displayNode.appendChild(displayBookNode)
  });
}

document.addEventListener('DOMContentLoaded', () => {
  displayBooks()
})
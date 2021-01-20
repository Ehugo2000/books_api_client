const displayBook = book => {
  const displayNode = document.getElementById('display')
  const displayBookNode = document.createElement('div')
  let html = `<p>${book.title} by: ${book.author}</p>`
  displayBookNode.innerHTML = html
  displayNode.appendChild(displayBookNode)
  return null
}
function getFirstSelector(selector) {
  const firstSelector = document.querySelector(selector)
  return firstSelector
}

function nestedTarget() {
  const nested = document.getElementById('nested').querySelector('div.target')
  return nested
}

function increaseRankBy(n) {
  var rankedList = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n
  }
}

function deepestChild() {
  var grandNode = document.querySelector('div#grand-node')
  
  
  
  
}

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
  var node = document.querySelector('#grand-node');
  var nextNode = grandNode.children[0];
  while (nextNode) {
     node = nextNode
     nextNode = node.children[0]
   }
   return nextNode
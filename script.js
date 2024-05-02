function shuffle() {
    var tilesContainer = document.getElementById('tiles');
    for (var i = tilesContainer.children.length; i >= 0; i--) {
        tilesContainer.appendChild(tilesContainer.children[Math.random() * i | 0]);
    }
}

function sort() {
    var tilesContainer = document.getElementById('tiles');
    var tilesArray = Array.prototype.slice.call(tilesContainer.children);
    tilesArray.sort(function(a, b) {
        return parseInt(a.innerText) - parseInt(b.innerText);
    });
    tilesArray.forEach(function(tile) {
        tilesContainer.appendChild(tile);
    });
}

document.getElementById('shuffleBtn').addEventListener('click', shuffle);
document.getElementById('sortBtn').addEventListener('click', sort);

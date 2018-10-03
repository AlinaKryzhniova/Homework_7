function findLongestWords() {
    var words = document.getElementById('typeText');
    var longestWords = words.value.split(' ');
    var array = longestWords.sort(compare);
    function compare(a, b) {
        if (a.length > b.length) {
            return -1;
        }
        if (a.length < b.length) {
            return 1;
        }
            return 0;
    }
    addHere.innerText = array[0] + ' ; ' + array[1] + ' ; ' + array[2];
}
answerTask.addEventListener('click', findLongestWords);
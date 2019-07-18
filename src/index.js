import $ from 'jquery'

$(document).ready(() => {
  getWord();
  const x = document.getElementById("clickIt");
  x.addEventListener("click", RespondClick);
  function RespondClick() {
    let inputBody = { "word": { "value": textInput.value } }
    console.log(inputBody)
    fetch("https://wordwatch-api.herokuapp.com//api/v1/words", {
      method: 'POST',
      body: JSON.stringify(inputBody),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }})
      .then(results => {
        getWord();
      })
    }
})

function getWord() {
  fetch("https://wordwatch-api.herokuapp.com/api/v1/top_word")
  .then(results => {
    return results.json();
  }).then(data => {
    var result = `${Object.keys(data.word)[0]}: ${Object.values(data.word)[0]}`
    $(".word-count").empty().append(result)
  })
}

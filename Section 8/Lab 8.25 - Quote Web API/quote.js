window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function fetchQuotes(topic, count) {
   fetch(`https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`)
   .then(response => {
      if (!response.ok) {
         throw new Error('Unable to fetch quotes.');
      }
      return response.json();
   })
   .then(data => {
      if (data.error) {
         throw new Error(data.error);
      }
      let quotesList = "<ol>";
      for (let i = 0; i < data.length; i++) {
         quotesList += `<li>${data[i].quote} - ${data[i].source}</li>`;
      }
      document.getElementById('quotes').innerHTML = quotesList + "</ol>";
   })
   .catch(error => {
      document.getElementById('quotes').innerHTML = error.message;
   });
}


var worker = new Worker("/assets/worker.js");

$(document).ready(function(){
  var refreshButton = document.getElementById("refresh-button")
  refreshButton.addEventListener('click', function(){
    worker.postMessage({'cmd': 'load'});
  });
});

worker.onmessage = function(e){
  var data = e.data;
  if(data == "load")
  {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/news/sutweets', true);
    xhr.responseType = 'document';
    xhr.onload = function(e) {
      var doc = e.target.response;

      var container = document.getElementById('union_feeds');
      container.innerHTML = '';

      var tweets = doc.querySelector('#tweets');
      console.log(tweets);

      container.appendChild(tweets);
    };
    xhr.send();
  }
}
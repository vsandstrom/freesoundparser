let url = /^https?:\/\/(?:[^./?#]+\.)?freesound\.org/;
let msg = "";

chrome.runtime.onMessage.addListener(function(request, _sender) {
  console.log(request.message);
  console.log(request.url);
  msg = request.message;
  document.getElementById("ans").innerHTML = msg;
});



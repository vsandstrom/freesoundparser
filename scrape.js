// Parses the link
let x = document
    .getElementById("share-link")
    .getAttribute("data-static-file-url");

console.log("Injected parser successfully");
console.log("Here is the thing that we want: " + x);

chrome.runtime.onMessage.addListener(function(msg) {
  console.log(msg);
  if (msg == "plz") {
    // popup with copyable text
    prompt("Here is the mp3 link:", x);
  }
})

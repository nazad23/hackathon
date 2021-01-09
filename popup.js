// document.addEventListener('DOMContentLoaded', function() {
//   var checkPageButton = document.getElementById('checkPage');
//   checkPageButton.addEventListener('click', function() {
//     chrome.tabs.getSelected(null, function(tab) {
//       d = document;
//       var f = d.createElement('form');
//       f.action = 'http://gtmetrix.com/analyze.html?bm';
//       f.method = 'post';
//       var i = d.createElement('input');
//       i.type = 'hidden';
//       i.name = 'url';
//       i.value = tab.url;
//       f.appendChild(i);
//       d.body.appendChild(f);
//       f.submit();
//     });
//   }, false);
// }, false);


//create eventListener for content DOM content 
//fetch youtube API, store into a var
//fetch a playlist of some kind for now
//display first video of playlist and name of artist/ name of audio content
//add Click events listeners for buttons
//get all buttons to work with data as they should
//when play button is clicked, display pause button instead
//when we reach the end of playlist, start at the top of the playlist and display play button again

// document.addEventListener('DOMContentLoaded', function() {
// fetch("https://top-10-spotify.p.rapidapi.com/", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "SIGN-UP-FOR-KEY",
// 		"x-rapidapi-host": "top-10-spotify.p.rapidapi.com"
// 	}
// }).then(response => {
//   response.json();
//   console.log('hey')
// }).then((data) => {
//     //where we enter our logic
//     //loop through array
//     let container = document.querySelector('container');
//     for(let i = 0; i < data.length; i+=1){
//       container.appendChild(data[i]["name"]);
//       // console.log(data[i]);
//     }
// //if at the first index, the play and next button should only work
// //if at the last index, the next button should take us to beginning of array 
// }).catch(err => {
// 	console.error(err);
// });

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
      if (request.message === "clicked_browser_action") {
          // var firstHref = $("a[href^='http']").eq(0).attr("href");
          let firstHref = document.querySelectorAll("a[href='http://youtube.com']");
          //point to youtube?
          console.log(firstHref);
          chrome.runtime.sendMessage({ "message": "open_new_tab", "url": firstHref });
      }
  });


// {
//     "name":" Dakiti by Bad Bunny, Jhay Cortez "
//     "pos":1
//     "urlvideo":"https://www.youtube.com/watch?v=91vECNhvmMY"
//     }
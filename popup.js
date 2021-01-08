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


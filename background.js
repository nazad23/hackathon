
// // Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function(tab) {
//     // Send a message to the active tab
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       var activeTab = tabs[0];
//       chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
//     });
//   });
  
//   // This block is new!
//   chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       if( request.message === "open_new_tab" ) {
//         chrome.tabs.create({"url": request.url});
//       }
//     }
//   );


// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {    
//   //GET METHOD
//   fetch("https://top-10-spotify.p.rapidapi.com/", {
//       "method": "GET",
//       "headers": {
//           "x-rapidapi-key": "SIGN-UP-FOR-KEY",
//           "x-rapidapi-host": "top-10-spotify.p.rapidapi.com"
//       }
//   }).then(response => {
//       response.json();
//       console.log('hey')
//   }).then((data) => {
//       //where we enter our logic
//       //loop through array
//       let container = document.querySelector('container');
//       for(let i = 0; i < data.length; i+=1){
//           container.appendChild(data[i]["name"]);
//           // console.log(data[i]);
//       }
//   //if at the first index, the play and next button should only work
//   //if at the last index, the next button should take us to beginning of array 
//   }).catch(err => {
//       console.error(err);
//   })
// });

  

  //POST METHOD
//   if (request.contentScriptQuery == "postData") {
//       fetch(request.url, {
//           method: 'POST',
//           headers: {
//               'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
//               'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
//           },
//           body: 'result=' + request.data
//       })
//           .then(response => response.json())
//           .then(response => sendResponse(response))
//           .catch(error => console.log('Error:', error));
//       return true;
//   }
// });


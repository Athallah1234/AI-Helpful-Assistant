function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");
  
    // Display user message
    var userMessage = document.createElement("div");
    userMessage.className = "message user-message";
    userMessage.innerHTML = '<img src="user-avatar.png" alt="User Avatar" class="avatar user-avatar">' + userInput;
    chatBox.appendChild(userMessage);
  
    // Clear user input
    document.getElementById("user-input").value = "";
  
    // Create typing animation element
    var typingAnimation = document.createElement("span");
    typingAnimation.className = "typing-animation";
    typingAnimation.innerText = "Typing...";
    
    // Create chatbot message container
    var chatbotMessage = document.createElement("div");
    chatbotMessage.className = "message chatbot-message";
    chatbotMessage.innerHTML = '<img src="chatbot-avatar.png" alt="AI Avatar" class="avatar chatbot-avatar">';
    chatbotMessage.appendChild(typingAnimation);
    chatBox.appendChild(chatbotMessage);
  
    // Send user message to PHP for processing
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Remove typing animation and display chatbot response
        typingAnimation.remove();
  
        var response = this.responseText;
        var responseMessage = document.createElement("div");
        responseMessage.innerHTML = response;
        chatbotMessage.appendChild(responseMessage);
      }
    };
  
    xmlhttp.open("GET", "chatbot.php?message=" + encodeURIComponent(userInput), true);
    xmlhttp.send();
}

function search() {
  var searchInput = document.getElementById("search-input").value;
  var searchResults = document.getElementById("search-results");

  // Bersihkan hasil pencarian sebelumnya
  searchResults.innerHTML = "";

  // Kirim permintaan pencarian ke CSE menggunakan API
  var apiKey = "AIzaSyBb5OTTlp4Wpavyli0YXOJ5iUNif3y3EiQ";
  var cx = "14a92d55bde284a86";
  var url = "https://www.googleapis.com/customsearch/v1?key=" + apiKey + "&cx=" + cx + "&q=" + encodeURIComponent(searchInput);

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);

      // Tampilkan hasil pencarian
      for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];
        var resultItem = document.createElement("div");
        resultItem.innerHTML = '<a href="' + item.link + '">' + item.htmlTitle + '</a><p>' + item.htmlSnippet + '</p>';
        searchResults.appendChild(resultItem);
      }
    }
  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

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

  // Create MathJax element
  var mathEquation = document.createElement("div");
  mathEquation.id = "math-equation";
  chatbotMessage.appendChild(mathEquation);

  // Send user message to PHP for processing
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Remove typing animation and display chatbot response
      typingAnimation.remove();

      var response = this.responseText;
      var formattedResponse = formatToParagraph(response); // Mengubah format menjadi paragraf
      var responseMessage = document.createElement("div");
      responseMessage.innerHTML = formattedResponse;
      chatbotMessage.appendChild(responseMessage);

    }
  };

  xmlhttp.open("GET", "chatbot.php?message=" + encodeURIComponent(userInput), true);
  xmlhttp.send();

xmlhttp.open("GET", url, true);
xmlhttp.send();
}

function formatToParagraph(text) {
// Remove MathJax element if present
text = text.replace(/\$\$([^$]+)\$\$/g, function(match, equation) {
  var formattedEquation = '<div class="math-equation">$$' + equation + '$$</div>';
  return formattedEquation;
});

text = text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
var lines = text.split('\n');
lines = lines.map(function(line) {
  return line.trim();
});
var paragraph = '<p>' + lines.join('</p><p>') + '</p>';
return paragraph;
}

document.addEventListener('DOMContentLoaded', function() {
  const chatbotIcon = document.createElement('div');
  chatbotIcon.id = 'chatbot-icon';
  chatbotIcon.innerHTML = '💬';
  
  document.body.appendChild(chatbotIcon);
  
  const chatbot = document.getElementById('chatbot');
  
  chatbotIcon.addEventListener('click', function() {
    chatbot.classList.toggle('open');
  });
});

window.addEventListener('load', function() {
  // Configura il chatbot usando un servizio come ChatGPT
  const chatbotFrame = document.createElement('iframe');
  chatbotFrame.src = 'URL_DEL_TUO_CHATBOT';  // Inserisci l'URL del tuo chatbot
  chatbotFrame.style.width = '100%';
  chatbotFrame.style.height = '100%';
  chatbotFrame.style.border = 'none';
  
  const chatbotContainer = document.getElementById('chatbot');
  chatbotContainer.appendChild(chatbotFrame);
});


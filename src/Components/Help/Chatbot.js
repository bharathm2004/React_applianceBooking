import React, { useState } from 'react';
import './Chatbot.css'; // Import the updated CSS file

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your chatbot. How can I assist you today?", type: "bot" }
  ]);

  const handleSendMessage = () => {
    if (userInput.trim() !== '') {
      // User message
      setMessages([...messages, { text: userInput, type: "user" }]);

      // Check for predefined questions and provide customized responses
      const lowerUserInput = userInput.toLowerCase();
      let botResponse = "I'm not sure how to respond to that.";

      if (lowerUserInput.includes("what's your name")) {
        botResponse = "I'm just a chatbot.";
      } else if (lowerUserInput.includes("how are you")) {
        botResponse = "I'm doing well. Thanks for asking!";
      } else if (lowerUserInput.includes("goodbye")) {
        botResponse = "Goodbye! Have a great day!";
      } else if (lowerUserInput.includes("how can i view products")) {
        botResponse = "Kindly click on products, and it will list the products and then click view to proceed";
      } else if (lowerUserInput.includes("how to start")) {
        botResponse = "If you are a new user Firstly SIGN-UP to create your account and click products to view it";
      } 
      // Bot response
      setMessages([...messages, { text: botResponse, type: "bot" }]);
      
      // Clear the user input
      setUserInput('');
    }
  };

  // Allow sending a message by pressing Enter
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div id="custom-body">
    <div id="custom-chat-container">
      {messages.map((message, index) => (
        <div key={index} className={`custom-message ${message.type}-message`}>{message.text}</div>
      ))}
      
      {/* User Input */}
      <input
        type="text"
        id="custom-user-input"
        placeholder="Type your message..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button id="custom-send-button" onClick={handleSendMessage}>Send</button>
    </div>
    </div>
  );
};

export default Chatbot;

// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

// Variable to track user feedback
let userFeedback = null;

// Add event listener to input form
inputForm.addEventListener('submit', function (event) {
  // Prevent form submission
  event.preventDefault();

  // Get user input
  const input = inputField.value;

  // Clear input field
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Check if the chatbot is prompting for feedback
  if (userFeedback !== null) {
    // User provides feedback
    userFeedback = input.toLowerCase(); // Assuming user feedback is a text response

    // Acknowledge positive feedback
    if (userFeedback.includes('positive')) {
      let message = document.createElement('div');
      message.classList.add('chatbot-message', 'chatbot');
      message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">Thank you for your positive feedback! 😊</p>`;
      conversation.appendChild(message);
    } else if (userFeedback.includes('negative')) {
      // Prompt user for details on negative feedback
      let message = document.createElement('div');
      message.classList.add('chatbot-message', 'chatbot');
      message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">I'm sorry to hear that. Could you please provide more details about your concerns?</p>`;
      conversation.appendChild(message);
    }

    // Reset userFeedback to null for the next interaction
    userFeedback = null;
  } else {
    // Add user input to conversation
    let message = document.createElement('div');
    message.classList.add('chatbot-message', 'user-message');
    message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
    conversation.appendChild(message);

    // Check if the user indicates the end of the conversation
    if (input.toLowerCase().includes('bye') || input.toLowerCase().includes('thank you')) {
      // Thank the user for their responses
      message = document.createElement('div');
      message.classList.add('chatbot-message', 'chatbot');
      message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">Thank you for chatting with me! If you have more questions, feel free to ask. 😊</p>`;
      conversation.appendChild(message);
    } else {
      // Chatbot prompts user for feedback
      message = document.createElement('div');
      message.classList.add('chatbot-message', 'chatbot');
      message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">How was your experience? Please provide positive or negative feedback.</p>`;
      conversation.appendChild(message);

      // Set userFeedback to initiate feedback collection
      userFeedback = 'awaiting feedback';
    }
  }

  // Scroll to the latest message
  message.scrollIntoView({ behavior: 'smooth' });
});

// Generate chatbot response function
function generateResponse(input) {
  // Add chatbot logic here
  const responses = [
    // Your existing responses...
  ];

  // Return a random response
  return responses[Math.floor(Math.random() * responses.length)];
}

//tab switch
// window.onblur = function (tabs) {
//   alert('trying to switch tabs eh!');
// };

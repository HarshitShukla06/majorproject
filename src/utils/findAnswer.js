// src/utils/findAnswer.js
import faqData from "../data/faq.json";

export const findAnswer = (userInput) => {
  const input = userInput.toLowerCase();

  // 1️⃣ First check for exact question match
  for (let item of faqData) {
    if (item.question.toLowerCase() === input) {
      return item.answer;
    }
  }

  // 2️⃣ Check for keyword match
  for (let item of faqData) {
    for (let keyword of item.keywords) {
      if (input.includes(keyword.toLowerCase())) {
        return item.answer;
      }
    }
  }

  // 3️⃣ Default reply
  return "Sorry, I didn't understand that. Please ask about trips, destinations, or hotels!";
};
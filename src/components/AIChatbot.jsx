import { useState, useEffect, useRef } from "react";

const AIChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi 👋 I’m Gantavia AI! Ask me about trips across India 🇮🇳",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [typingText, setTypingText] = useState("");
  const messagesEndRef = useRef(null);

  // ✅ INDIA-FOCUSED QUESTIONS
  const predefinedQA = [
    {
      question: "Best places to visit in Himachal Pradesh?",
      answer:
        "Top places include Manali, Shimla, Dharamshala, Kasol, and Spiti Valley. Perfect for mountains, snow, and adventure!",
      keywords: ["himachal", "places", "mountain"],
    },
    {
      question: "How can I plan a 5-day trip to Manali?",
      answer:
        "Day 1: Arrival & Mall Road, Day 2: Solang Valley, Day 3: Rohtang Pass, Day 4: Naggar Castle, Day 5: Departure.",
      keywords: ["manali", "trip", "plan", "itinerary"],
    },
    {
      question: "Best places in Rajasthan for tourism?",
      answer:
        "Jaipur, Udaipur, Jaisalmer, and Jodhpur are must-visit cities known for forts, palaces, and desert experiences.",
      keywords: ["rajasthan", "desert", "jaipur"],
    },
    {
      question: "Best time to visit Goa?",
      answer:
        "November to February is the best time for beaches, parties, and pleasant weather.",
      keywords: ["goa", "time", "beach"],
    },
    {
      question: "Budget travel tips in India?",
      answer:
        "Use trains, book early, stay in budget hotels, eat local food, and travel during off-season.",
      keywords: ["budget", "cheap", "india"],
    },
    {
      question: "Best hill stations in India?",
      answer:
        "Manali, Shimla, Ooty, Darjeeling, and Munnar are top hill stations with scenic beauty.",
      keywords: ["hill", "stations", "mountain"],
    },
    {
      question: "Best places in South India?",
      answer:
        "Munnar, Coorg, Ooty, Alleppey, and Hampi are popular destinations in South India.",
      keywords: ["south", "kerala", "coorg"],
    },
    {
      question: "Adventure places in India?",
      answer:
        "Rishikesh (rafting), Manali (paragliding), Leh-Ladakh (biking), and Auli (skiing).",
      keywords: ["adventure", "trekking", "rafting"],
    },
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typingText]);

  const typeMessage = (text) => {
    setTypingText("");
    let index = 0;
    const interval = setInterval(() => {
      setTypingText((prev) => prev + text[index]);
      index++;
      if (index === text.length) clearInterval(interval);
    }, 15);
  };

  const findAnswer = (messageText) => {
    const input = messageText.toLowerCase();

    const exact = predefinedQA.find((q) => q.question.toLowerCase() === input);
    if (exact) return exact.answer;

    for (let q of predefinedQA) {
      for (let keyword of q.keywords) {
        if (input.includes(keyword)) {
          return q.answer;
        }
      }
    }

    return "Sorry, I didn’t understand that. Try asking about destinations in India 🇮🇳";
  };

  const sendMessage = (customInput) => {
    const messageText = customInput || input;
    if (!messageText.trim()) return;

    const userMessage = { role: "user", text: messageText };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    const reply = findAnswer(messageText);

    typeMessage(reply);

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
      setTypingText("");
      setLoading(false);
    }, reply.length * 15 + 200);

    if (!customInput) setInput("");
  };

  return (
    <>
      {/* FLOAT BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-full shadow-xl hover:scale-110 transition z-50"
      >
        💬
      </button>

      {/* CHAT WINDOW */}
      {open && (
        <div className="fixed bottom-20 right-6 w-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border border-gray-200">

          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 font-semibold text-lg flex justify-between items-center">
            <span>Gantavia AI 🤖</span>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          {/* Suggestions */}
          <div className="p-3 border-b bg-gray-50 max-h-32 overflow-y-auto">
            <p className="text-gray-600 text-sm font-semibold mb-2">
              Suggestions:
            </p>
            <div className="flex flex-wrap gap-2">
              {predefinedQA.map((q, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(q.question)}
                  className="px-3 py-1.5 bg-indigo-100 text-indigo-800 rounded-full text-xs hover:bg-indigo-200 transition"
                >
                  {q.question}
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto h-72 space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[75%] p-2 rounded-xl text-sm shadow ${
                  msg.role === "user"
                    ? "ml-auto bg-indigo-500 text-white"
                    : "mr-auto bg-white border"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {typingText && (
              <div className="mr-auto bg-white border p-2 rounded-xl text-sm italic text-gray-500">
                {typingText}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex border-t bg-white">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about India trips..."
              className="flex-1 p-3 outline-none text-sm"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={() => sendMessage()}
              className="bg-indigo-600 text-white px-5 hover:bg-indigo-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;
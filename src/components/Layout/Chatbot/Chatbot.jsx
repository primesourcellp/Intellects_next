"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X, Bot, Copy, Trash2, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";

const Chatbot = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  
  // Load messages from localStorage or initialize with welcome message
  const loadMessages = () => {
    const saved = localStorage.getItem("chatbot_messages");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Convert timestamp strings back to Date objects
        return parsed.map(msg => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
      } catch (e) {
        console.error("Error loading messages:", e);
      }
    }
    return [
      {
        id: 1,
        text: "Hello! 👋 Welcome to Intellects. I&apos;m here to help you learn about our services. How can I assist you today?",
        sender: "bot",
        timestamp: new Date(),
      },
    ];
  };

  const [messages, setMessages] = useState(loadMessages);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const chatContainerRef = useRef(null);
  const messageIdRef = useRef(2);

  const getNextMessageId = () => {
    const id = messageIdRef.current;
    messageIdRef.current += 1;
    return id;
  };

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("chatbot_messages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      messageIdRef.current = (typeof lastMessage.id === "number" ? lastMessage.id : 0) + 1;
    } else {
      messageIdRef.current = 2;
    }
  }, [messages]);

  // Enhanced knowledge base with links and follow-ups
  const knowledgeBase = {
    greetings: [
      {
        text: "Hello! Welcome to Intellects. How can I help you today?",
        followUps: ["Our Services", "Contact Us", "About Intellects"]
      },
      {
        text: "Hi there! I&apos;m here to answer questions about our services.",
        followUps: ["Web Development", "SEO Services", "Pricing"]
      },
      {
        text: "Hey! Thanks for reaching out. What would you like to know?",
        followUps: ["Software Development", "Digital Marketing", "Hiring Services"]
      },
    ],
    services: {
      software: {
        keywords: ["software", "development", "custom software", "application"],
        response: {
          text: "We offer comprehensive custom software development services including web applications, mobile apps, and enterprise solutions. Our team specializes in modern technologies and agile methodologies.",
          links: [
            { text: "Custom Software", path: "/services/softwaredevelopment" },
            { text: "Web Applications", path: "/services/webapplication" },
            { text: "Mobile Apps", path: "/services/mobileapplication" },
          ],
          followUps: ["Web Development", "Mobile Apps", "Pricing"]
        },
      },
      website: {
        keywords: ["website", "web development", "site"],
        response: {
          text: "Our website development services include responsive design, modern UI/UX, e-commerce solutions, and content management systems. We build fast, secure, and SEO-friendly websites.",
          links: [
            { text: "Learn More", path: "/services/websitedevelopment" },
          ],
          followUps: ["Pricing", "Portfolio", "Contact Us"]
        },
      },
      mobile: {
        keywords: ["mobile", "app", "ios", "android"],
        response: {
          text: "We develop native and cross-platform mobile applications for iOS and Android. Our mobile apps are user-friendly, performant, and scalable.",
          links: [
            { text: "Mobile App Services", path: "/services/mobileapplication" },
          ],
          followUps: ["Web Apps", "Pricing", "Our Process"]
        },
      },
      seo: {
        keywords: ["seo", "search engine", "ranking", "optimization"],
        response: {
          text: "Our SEO services help improve your website&apos;s visibility on search engines through keyword research, on-page optimization, technical SEO, and link building.",
          links: [
            { text: "SEO Services", path: "/services/seo" },
          ],
          followUps: ["SEM Services", "Content Marketing", "Pricing"]
        },
      },
      sem: {
        keywords: ["sem", "ppc", "advertising", "ads", "google ads"],
        response: {
          text: "Our SEM services include Google Ads management, paid search campaigns, display advertising, and conversion optimization. We help maximize your ROI on paid advertising.",
          links: [
            { text: "SEM Services", path: "/services/sem" },
          ],
          followUps: ["SEO Services", "Social Media Marketing", "Contact"]
        },
      },
      social: {
        keywords: ["social media", "smm", "facebook", "instagram", "marketing"],
        response: {
          text: "We provide social media marketing services including strategy development, content creation, community management, and analytics.",
          links: [
            { text: "Social Media Marketing", path: "/services/smm" },
          ],
          followUps: ["Content Marketing", "Email Marketing", "Our Portfolio"]
        },
      },
      content: {
        keywords: ["content", "writing", "blog", "copywriting"],
        response: {
          text: "Our content marketing services include blog writing, copywriting, content strategy, and SEO-optimized content creation.",
          links: [
            { text: "Content Marketing", path: "/services/content-writing" },
          ],
          followUps: ["SEO Services", "Social Media", "Contact"]
        },
      },
      email: {
        keywords: ["email", "email marketing", "newsletter", "campaign"],
        response: {
          text: "We offer email marketing services including campaign design, automation, segmentation, and analytics.",
          links: [
            { text: "Email Marketing", path: "/services/email-marketing" },
          ],
          followUps: ["Content Marketing", "SEO Services", "Contact"]
        },
      },
      hiring: {
        keywords: ["hiring", "recruitment", "staffing", "talent", "recruiter"],
        response: {
          text: "Our hiring services include global recruitment, contract staffing, and staffing services. We help you find the right talent for your organization.",
          links: [
            { text: "Global Recruitment", path: "/services/global-recruitment" },
            { text: "Contract Staffing", path: "/services/contract-staffing" },
            { text: "Staffing Services", path: "/services/staffing" },
          ],
          followUps: ["Our Process", "Contact Us", "Industries We Serve"]
        },
      },
      general: {
        keywords: ["service", "help", "what do you do", "offer"],
        response: {
          text: "Intellects offers three main service categories:\n1. Software Development (Custom Software, Websites, Web Apps, Mobile Apps)\n2. Digital Marketing (SEO, SEM, SMM, Content Marketing, Email Marketing)\n3. Hiring Services (Global Recruitment, Contract Staffing, Staffing Services)",
          followUps: ["Software Development", "Digital Marketing", "Hiring Services"]
        },
      },
    },
    contact: {
      keywords: ["contact", "reach", "email", "phone", "address", "get in touch"],
      response: {
        text: "You can contact us through our contact page. We&apos;re here to help with any questions about our services.",
        links: [
          { text: "Contact Page", path: "/contact" },
        ],
        followUps: ["Our Services", "About Us", "Testimonials"]
      },
    },
    pricing: {
      keywords: ["price", "cost", "pricing", "how much", "quote"],
      response: {
        text: "Pricing varies based on project scope and requirements. For a detailed quote, please contact us. We&apos;d be happy to discuss your specific needs and provide a customized proposal.",
        links: [
          { text: "Get a Quote", path: "/contact" },
        ],
        followUps: ["Our Services", "Portfolio", "Our Process"]
      },
    },
    methodology: {
      keywords: ["process", "methodology", "how do you work", "approach"],
      response: {
        text: "We follow an agile methodology with phases: Discovery & Strategy, Planning & Design, Agile Development, Testing & QA, and Deployment & Support.",
        links: [
          { text: "Our Methodology", path: "/methodology" },
        ],
        followUps: ["Our Services", "Case Studies", "Contact"]
      },
    },
    default: {
      text: "I&apos;m here to help! You can ask me about:\n• Our services (Software, Digital Marketing, Hiring)\n• Specific services (SEO, Web Development, Mobile Apps, etc.)\n• How to contact us\n• General information about Intellects",
      followUps: ["Our Services", "Contact Us", "About Us"]
    },
  };

  // Function to get bot response
  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    // Check for greetings
    if (lowerMessage.match(/^(hi|hello|hey|greetings|good morning|good afternoon|good evening)/i)) {
      const greetingIndex = messages.length % knowledgeBase.greetings.length;
      return knowledgeBase.greetings[greetingIndex];
    }

    // Check for contact information
    if (knowledgeBase.contact.keywords.some(keyword => lowerMessage.includes(keyword))) {
      return knowledgeBase.contact.response;
    }

    // Check for pricing
    if (knowledgeBase.pricing.keywords.some(keyword => lowerMessage.includes(keyword))) {
      return knowledgeBase.pricing.response;
    }

    // Check for methodology
    if (knowledgeBase.methodology.keywords.some(keyword => lowerMessage.includes(keyword))) {
      return knowledgeBase.methodology.response;
    }

    // Check service categories
    for (const [, serviceData] of Object.entries(knowledgeBase.services)) {
      if (serviceData.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return serviceData.response;
      }
    }

    // Default response
    return knowledgeBase.default;
  };

  // Scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  // Handle click outside to close chat
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        chatContainerRef.current &&
        !chatContainerRef.current.contains(event.target)
      ) {
        const toggleButton = event.target.closest('button[aria-label="Open chat"]') || 
                            event.target.closest('button[aria-label="Close chat"]');
        if (!toggleButton) {
          setIsOpen(false);
        }
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen]);

  // Handle sending messages
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: getNextMessageId(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate bot thinking and respond after a delay
    setTimeout(() => {
      const response = getBotResponse(inputMessage);
      const botMessage = {
        id: getNextMessageId(),
        text: response.text || response,
        sender: "bot",
        timestamp: new Date(),
        links: response.links || [],
        followUps: response.followUps || [],
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1200);
  };

  // Handle quick action
  const handleQuickAction = (message) => {
    setInputMessage(message);
    // Trigger send after setting message
    setTimeout(() => {
      handleSendMessage({ preventDefault: () => {} });
    }, 0);
  };

  // Copy message to clipboard
  const copyMessage = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // Clear chat history
  const clearHistory = () => {
    const welcomeMessage = [
      {
        id: 1,
        text: "Hello! 👋 Welcome to Intellects. I&apos;m here to help you learn about our services. How can I assist you today?",
        sender: "bot",
        timestamp: new Date(),
      },
    ];
    setMessages(welcomeMessage);
    localStorage.setItem("chatbot_messages", JSON.stringify(welcomeMessage));
    messageIdRef.current = 2;
  };

  // Navigate to page
  const handleLinkClick = (path) => {
    router.push(path);
    setIsOpen(false);
  };

  // Quick action buttons
  const quickActions = [
    { text: "Our Services", message: "What services do you offer?" },
    { text: "Web Development", message: "Tell me about website development" },
    { text: "SEO Services", message: "What SEO services do you provide?" },
    { text: "Contact Us", message: "How can I contact you?" },
  ];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatContainerRef}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            className="mb-4 w-[calc(100vw-2rem)] h-[calc(100vh-8rem)] sm:w-96 sm:h-[600px] max-w-full max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border-2 border-purple-100"
          >
            {/* Chat Header */}
            <div
              className="bg-gradient-to-r from-purple-600 to-indigo-600 p-3 sm:p-4 text-white flex items-center justify-between"
              style={{ background: 'linear-gradient(135deg, #4C1D95 0%, #7C3AED 100%)' }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-base sm:text-lg truncate">Intellects Assistant</h3>
                  <p className="text-xs text-white/80 hidden sm:block">We&apos;re here to help!</p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                {messages.length > 1 && (
                  <button
                    onClick={clearHistory}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 hover:bg-white/30 active:bg-white/40 flex items-center justify-center transition-colors touch-manipulation"
                    aria-label="Clear history"
                    title="Clear chat history"
                  >
                    <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 hover:bg-white/30 active:bg-white/40 flex items-center justify-center transition-colors touch-manipulation"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 bg-gradient-to-b from-purple-50/30 to-white overscroll-contain">
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`group ${message.sender === "user" ? "flex justify-end" : "flex justify-start"}`}
                  >
                    <div className={`relative max-w-[85%] sm:max-w-[80%]`}>
                      <div
                        className={`rounded-xl sm:rounded-2xl p-2.5 sm:p-3 ${
                          message.sender === "user"
                            ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                            : "bg-white text-gray-800 border-2 border-purple-100"
                        }`}
                        style={
                          message.sender === "user"
                            ? { background: 'linear-gradient(135deg, #4C1D95 0%, #7C3AED 100%)' }
                            : {}
                        }
                      >
                        {message.sender === "bot" && (
                          <div className="flex items-center gap-2 mb-1">
                            <Bot className="w-4 h-4 text-purple-600" />
                            <span className="text-xs font-semibold text-purple-600">Assistant</span>
                          </div>
                        )}
                        <p className="text-xs sm:text-sm whitespace-pre-wrap leading-relaxed break-words">{message.text}</p>
                        
                        {/* Links */}
                        {message.links && message.links.length > 0 && (
                          <div className="mt-3 space-y-2">
                            {message.links.map((link, idx) => (
                              <button
                                key={idx}
                                onClick={() => handleLinkClick(link.path)}
                                className="w-full flex items-center justify-between px-3 py-2.5 sm:py-2 text-xs bg-purple-50 hover:bg-purple-100 active:bg-purple-200 text-purple-700 rounded-lg transition-colors border border-purple-200 touch-manipulation"
                              >
                                <span className="font-medium">{link.text}</span>
                                <ExternalLink className="w-3 h-3" />
                              </button>
                            ))}
                          </div>
                        )}

                        <p className={`text-xs mt-2 ${message.sender === "user" ? "text-white/70" : "text-gray-500"}`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>

                      {/* Message Actions */}
                      <div className={`absolute ${message.sender === "user" ? "left-0 -ml-8 sm:-ml-10" : "right-0 -mr-8 sm:-mr-10"} top-2 opacity-0 group-hover:opacity-100 sm:group-hover:opacity-100 transition-opacity`}>
                        <button
                          onClick={() => copyMessage(message.text, message.id)}
                          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white border border-gray-200 hover:bg-purple-50 active:bg-purple-100 hover:border-purple-300 flex items-center justify-center transition-colors shadow-sm touch-manipulation"
                          title="Copy message"
                        >
                          {copiedId === message.id ? (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="text-green-500 text-xs"
                            >
                              ✓
                            </motion.div>
                          ) : (
                            <Copy className="w-3.5 h-3.5 text-gray-600" />
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white border-2 border-purple-100 rounded-2xl p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Bot className="w-4 h-4 text-purple-600" />
                        <span className="text-xs font-semibold text-purple-600">Assistant</span>
                      </div>
                      <div className="flex gap-1">
                        <motion.div
                          className="w-2 h-2 bg-purple-600 rounded-full"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-purple-600 rounded-full"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-purple-600 rounded-full"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Follow-up Suggestions */}
                {!isTyping && messages.length > 0 && messages[messages.length - 1].sender === "bot" && messages[messages.length - 1].followUps && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    <p className="text-xs text-gray-500 font-semibold mb-2">You might also want to know:</p>
                    <div className="flex flex-wrap gap-2">
                        {messages[messages.length - 1].followUps.map((followUp, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickAction(`Tell me about ${followUp.toLowerCase()}`)}
                          className="px-3 py-2 sm:py-1.5 text-xs bg-white border-2 border-purple-200 text-purple-700 rounded-full hover:bg-purple-50 active:bg-purple-100 hover:border-purple-300 transition-all font-medium touch-manipulation"
                        >
                          {followUp}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Quick Actions (show only for first bot message) */}
                {messages.length === 1 && !isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    <p className="text-xs text-gray-500 font-semibold mb-2">Quick actions:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickActions.map((action, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickAction(action.message)}
                          className="px-3 py-2 sm:py-1.5 text-xs bg-white border-2 border-purple-200 text-purple-700 rounded-full hover:bg-purple-50 active:bg-purple-100 hover:border-purple-300 transition-all font-medium touch-manipulation"
                        >
                          {action.text}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-3 sm:p-4 bg-white border-t-2 border-purple-100">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 sm:px-4 py-2.5 sm:py-2 border-2 border-purple-200 rounded-full focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-sm touch-manipulation"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={!inputMessage.trim()}
                  className="w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #4C1D95 0%, #7C3AED 100%)' }}
                >
                  <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl flex items-center justify-center text-white bg-gradient-to-r from-purple-600 to-indigo-600 touch-manipulation"
        style={{ background: 'linear-gradient(135deg, #4C1D95 0%, #7C3AED 100%)' }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 sm:w-7 sm:h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default Chatbot;

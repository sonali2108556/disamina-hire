
import { useState } from "react";
import { MessageSquare, X } from "lucide-react";

const ChatBotButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="chatbot-button group"
        aria-label="Open AI assistant"
      >
        {isOpen ? (
          <X className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
        ) : (
          <MessageSquare className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden animate-fade-in">
          <div className="bg-gradient-primary p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <MessageSquare className="h-4 w-4" />
              </div>
              <h3 className="font-semibold">Disamina AI Assistant</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="h-80 p-4 overflow-y-auto bg-gray-50">
            <div className="flex flex-col space-y-4">
              <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                <p className="text-sm">
                  👋 Hi there! I'm Disamina AI, your recruitment assistant. How can I help you today?
                </p>
              </div>
              
              <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                <p className="text-sm">
                  I can help you with job descriptions, candidate screening, or tell you about our features.
                </p>
              </div>
              
              <div className="ml-auto bg-primary text-white p-3 rounded-lg shadow-sm max-w-[80%]">
                <p className="text-sm">
                  How do I create a job posting?
                </p>
              </div>
              
              <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                <p className="text-sm">
                  To create a job posting, you can go to the "Jobs" section after signing up, and click on "Create New Job". 
                  Or I can help you generate one right now! Would you like to try that?
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-3 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask something..."
                className="flex-grow px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button className="bg-primary text-white p-2 rounded-md">
                <MessageSquare className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBotButton;

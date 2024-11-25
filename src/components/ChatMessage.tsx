import { FC } from 'react';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  type: 'user' | 'bot';
  content: string;
}

const ChatMessage: FC<ChatMessageProps> = ({ type, content }) => {
  const isBot = type === 'bot';

  return (
    <div className={`flex gap-3 ${isBot ? '' : 'flex-row-reverse'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
        isBot ? 'bg-blue-100' : 'bg-purple-100'
      }`}>
        {isBot ? (
          <Bot className="h-5 w-5 text-blue-600" />
        ) : (
          <User className="h-5 w-5 text-purple-600" />
        )}
      </div>
      <div className={`flex-1 max-w-[80%] ${isBot ? 'pr-12' : 'pl-12'}`}>
        <div className={`rounded-lg p-4 ${
          isBot 
            ? 'bg-white border' 
            : 'bg-blue-600 text-white'
        }`}>
          {content}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
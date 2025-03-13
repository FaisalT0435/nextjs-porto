"use client"; // Pastikan ini ada di bagian paling atas

import { useState } from 'react';
import axios from 'axios';
import { CSSProperties } from 'react'; // Untuk tipe CSSProperties
import fetchData from '@components/api/chat';

const Chatbot: React.FC = () => {
  const [userMessage, setUserMessage] = useState<string>('');
  const [chatResponse, setChatResponse] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  const handleSendMessage = async () => {
    if (!userMessage.trim()) return;
    setLoading(true);
    try {
      const response = await fetchData(userMessage);
      setChatResponse(response.messages[0]?.content || 'No response');
    } catch (error) {
      setChatResponse('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Logo Deepseek sebagai tombol untuk membuka chatbot */}
      <img
        src="/path-to-deepseek-logo.png" 
        alt="Deepseek Logo"
        style={{ width: '100px', cursor: 'pointer' }}
        onClick={() => setIsChatOpen(!isChatOpen)}
      />

      {isChatOpen && (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px', marginTop: '10px' }}>
          <h1>Deepseek Chat</h1>
          <textarea
            rows={4}
            cols={50}
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Type your message here..."
          />
          <br />
          <button onClick={handleSendMessage} disabled={loading}>
            {loading ? 'Sending...' : 'Send'}
          </button>
          <div style={{ marginTop: '20px' }}>
            <h3>Response:</h3>
            <p>{chatResponse}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;











// type Message = {
//   role: 'user' | 'assistant';
//   content: string;
// };

// const Chatbot = () => {
//     const [userMessage, setUserMessage] = useState('');
//   const [chatResponse, setChatResponse] = useState('');
//   const [loading, setLoading] = useState(false);
//   const handleSendMessage = async () => {
//     if (!userMessage.trim()) return;
//     setLoading(true);
//     try {
//       const response = await fetchChatResponse(userMessage);
//       setChatResponse(response.messages[0]?.content || 'No response');
//     } catch (error) {
//       setChatResponse('An error occurred. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };
// //   const [input, setInput] = useState<string>('');
// //   const [messages, setMessages] = useState<Message[]>([]);
// //   const [isOpen, setIsOpen] = useState<boolean>(false); // State untuk mengontrol pop-up

// //   const handleSend = async () => {
// //     if (!input.trim()) return;

// //     // Tambahkan pesan pengguna ke chat
// //     setMessages((prev) => [...prev, { role: 'user', content: input }]);
// //     setInput('');

// //     try {
// //       // Kirim pesan ke API route
// //       const response = await axios.post('@components/chatbot/chatbot ', { message: input });

// //       // Tambahkan respon chatbot ke chat
// //       setMessages((prev) => [...prev, { role: 'assistant', content: response.data.reply }]);
// //     } catch (error) {
// //       console.error('Error:', error);
// //       setMessages((prev) => [...prev, { role: 'assistant', content: 'Maaf, terjadi kesalahan.' }]);
// //     }
// //   };

//   const toggleChatbot = () => {
//     setIsOpen(!isOpen); // Buka/tutup pop-up
//   };

//   const styles: { [key: string]: CSSProperties } = {
//     chatbotContainer: {
//       position: 'fixed',
//       bottom: '20px',
//       right: '20px',
//       zIndex: 1000,
//     },
//     chatbotPopup: {
//       width: '300px',
//       height: '400px',
//       backgroundColor: '#fff',
//       border: '1px solid #ccc',
//       borderRadius: '10px',
//       boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
//       display: 'flex',
//       flexDirection: 'column',
//       transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
//       transition: 'transform 0.3s ease-in-out',
//     },
//     messagesContainer: {
//       flex: 1,
//       padding: '10px',
//       overflowY: 'auto',
//       borderBottom: '1px solid #ccc',
//     },
//     userMessage: {
//       textAlign: 'right',
//       color: 'blue',
//       margin: '5px 0',
//     },
//     botMessage: {
//       textAlign: 'left',
//       color: 'green',
//       margin: '5px 0',
//     },
//     inputContainer: {
//       display: 'flex',
//       padding: '10px',
//     },
//     input: {
//       flex: 1,
//       padding: '8px',
//       borderRadius: '4px',
//       border: '1px solid #ccc',
//     },
//     button: {
//       marginLeft: '10px',
//       padding: '8px 12px',
//       backgroundColor: '#0070f3',
//       color: '#fff',
//       border: 'none',
//       borderRadius: '4px',
//       cursor: 'pointer',
//     },
//     logoButton: {
//       position: 'fixed',
//       bottom: '20px',
//       right: '20px',
//       backgroundColor: '#0070f3',
//       color: '#fff',
//       border: 'none',
//       borderRadius: '50%',
//       width: '50px',
//       height: '50px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       cursor: 'pointer',
//       boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
//     },
//   };

//   return (
//     <div style={styles.chatbotContainer}>
//       {/* Tombol logo untuk membuka chatbot */}
//       {!isOpen && (
//         <button onClick={toggleChatbot} style={styles.logoButton}>
//           <img
//             src="https://www.deepseek.com/logo.png" // Ganti dengan URL logo DeepSeek
//             alt="DeepSeek Logo"
//             width="30"
//             height="30"
//           />
//         </button>
//       )}

//       {/* Pop-up chatbot */}
//       {isOpen && (
//         <div style={styles.chatbotPopup}>
//           <div style={styles.messagesContainer}>
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 style={msg.role === 'user' ? styles.userMessage : styles.botMessage}
//               >
//                 {msg.content}
//               </div>
//             ))}
//           </div>
//           <div style={styles.inputContainer}>
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//               style={styles.input}
//               placeholder="Ketik pesan..."
//             />
//             <button onClick={handleSend} style={styles.button}>
//               Kirim
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;
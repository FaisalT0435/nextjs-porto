import { useState } from 'react';
import axios from 'axios';


type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const Chatbot = () => {
  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Tambahkan pesan pengguna ke chat
    setMessages((prev) => [...prev, { role: 'user', content: input }]);
    setInput('');

    try {
      // Kirim pesan ke API DeepSeek atau model AI lainnya
      const response = await axios.post('@/components/api/chat', { message: input });

      // Tambahkan respon chatbot ke chat
      setMessages((prev) => [...prev, { role: 'assistant', content: response.data.reply }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Maaf, terjadi kesalahan.' }]);
    }
  };

  return (
    <div style={styles.chatbotContainer}>
      <div style={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={msg.role === 'user' ? styles.userMessage : styles.botMessage}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          style={styles.input}
          placeholder="Ketik pesan..."
        />
        <button onClick={handleSend} style={styles.button}>
          Kirim
        </button>
      </div>
    </div>
  );
};

const styles = {
  chatbotContainer: {
    width: '300px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    backgroundColor: '#f9f9f9',
  },
  messagesContainer: {
    height: '300px',
    overflowY: 'auto',
    marginBottom: '10px',
  },
  userMessage: {
    textAlign: 'right',
    color: 'blue',
    margin: '5px 0',
  },
  botMessage: {
    textAlign: 'left',
    color: 'green',
    margin: '5px 0',
  },
  inputContainer: {
    display: 'flex',
  },
  input: {
    flex: 1,
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    marginLeft: '10px',
    padding: '8px 12px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Chatbot;
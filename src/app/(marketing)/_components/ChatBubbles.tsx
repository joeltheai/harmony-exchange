const ChatBubblesComp = () => {
  return (
    <div>
      <div className="chat chat-start">
        <div className="chat-bubble bg-red-600 text-left text-white">
          Hey Abigail ! <br />I have shceduled a class for monday
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble bg-green-500 text-left text-white">
          Sounds good ! <br /> Excited to Learn from you
        </div>
      </div>
    </div>
  );
};

export default ChatBubblesComp;

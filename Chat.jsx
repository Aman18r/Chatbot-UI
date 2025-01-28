import React, { useRef, useState, useEffect } from "react";
import { Box, Avatar, Typography, Button, IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import ChatItem from "../components/chat/ChatItem";
import { IoMdSend } from "react-icons/io";
import { useAuth } from "./context/AuthContext";

const Chat = () => {
  const inputRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const messageEndRef = useRef(null);

  // Scroll to the bottom of the chat
  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = () => {
    const inputValue = inputRef.current?.value.trim();
    if (inputValue) {
      // Adding user's message
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "user", content: inputValue },
      ]);

      // Simulating assistant's reply (you can replace it with API call)
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            role: "assistant",
            content: "Thanks for your message! How can I assist you further?",
          },
        ]);
      }, 1000);

      inputRef.current.value = ""; // Clear input field
    }
  };

  const handleClear = () => {
    setMessages([]); // Clear the conversation
  };

  const mockUser = {
    name: "Aman Ranjan",
  };

  const initials = mockUser.name
    ? mockUser.name.split(" ").length > 1
      ? `${mockUser.name.split(" ")[0][0]}${mockUser.name.split(" ")[1][0]}`
      : mockUser.name[0]
    : "?";

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      {/* Sidebar */}
      <Box sx={{ display: { md: "flex", xs: "none" }, flex: 0.2, flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "60vh",
            bgcolor: "rgb(17,29,39)",
            borderRadius: 5,
            flexDirection: "column",
            mx: 3,
          }}
        >
          <Avatar
            sx={{
              mx: "auto",
              my: 2,
              bgcolor: "white",
              color: "black",
              fontWeight: 700,
            }}
          >
            {initials}
          </Avatar>

          <Typography sx={{ mx: "auto", fontFamily: "work sans" }}>
            You are talking to a ChatBot
          </Typography>

          <Typography sx={{ mx: "auto", fontFamily: "work sans", my: 4, p: 3 }}>
            You can ask some questions related to Knowledge, Business, Advice, Education, etc. But
            avoid sharing personal information.
          </Typography>

          <Button
            onClick={handleClear}
            sx={{
              width: "200px",
              my: "auto",
              color: "white",
              fontWeight: "700",
              borderRadius: 3,
              mx: "auto",
              bgcolor: red[300],
              ":hover": {
                bgcolor: red.A400,
              },
            }}
          >
            Clear Conversation
          </Button>
        </Box>
      </Box>

      {/* Main Chat Area */}
      <Box sx={{ display: "flex", flex: { md: 0.8, xs: 1 }, flexDirection: "column", px: 3 }}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "40px",
            color: "white",
            mb: 2,
            mx: "auto",
            fontWeight: "600",
          }}
        >
          Model - GPT 3.5 Turbo
        </Typography>

        <Box
          sx={{
            width: "100%",
            height: "60vh",
            borderRadius: 3,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            scrollBehavior: "smooth",
          }}
        >
          {messages.map((chat, index) => (
            <ChatItem key={index} content={chat.content} role={chat.role} />
          ))}
          <div ref={messageEndRef}></div>
        </Box>

        {/* Input Section */}
        <Box
          sx={{
            width: "100%",
            padding: "10px",
            borderRadius: 8,
            backgroundColor: "rgb(17,27,39)",
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <input
            ref={inputRef}
            type="text"
            style={{
              flex: 1,
              backgroundColor: "transparent",
              padding: "10px",
              border: "none",
              outline: "none",
              color: "white",
              fontSize: "20px",
            }}
            placeholder="Type your message..."
          />
          <IconButton onClick={handleSubmit} sx={{ color: "white" }}>
            <IoMdSend />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;

import React from 'react'
import { Box, Avatar, Typography} from "@mui/material";
import { useAuth } from '../../pages/context/AuthContext';


const ChatItem = ({ content, role }) => {
    const mockUser = {
        name: "Aman Ranjan", // Replace with actual data when backend is ready
      };
    
      // Get initials
      const name = mockUser.name;
      const initials = name
        ? `${name.split(" ")[0][0]}${name.split(" ")[1]?.[0] || ""}`
        : "?";
    const auth = useAuth()
    return role === "assistant" ? (
        <Box sx={{ display: "flex", p: 2, bgcolor: "#004d5612", my: 2, gap: 2}}>
            <Avatar sx={{ml: "0"}} >
                <img src="https://cdn-icons-png.flaticon.com/128/16853/16853018.png" alt="openai" style={{ width: "100%", height: "100%" }} />

            </Avatar>
            <Box>
                <Typography fontSize={"20px"}>{content}</Typography>
            </Box>
        </Box>
    
  ) : (
    <Box sx={{ display: "flex", p: 2, bgcolor: "#004d56", gap: 2}}>
    <Avatar sx={{ml: "0", bgcolor: "black", color: "white"}} >
    {initials}

    </Avatar>
    <Box>
        <Typography fontSize={"20px"}>{content}</Typography>
    </Box>
</Box>
  )
};

export default ChatItem;

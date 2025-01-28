import React from 'react'
import { Link } from "react-router-dom"
import  Typography  from '@mui/material/Typography'

const Logo = () => {
  return (
    <div
    style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "15px",
    }}
    
    >
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
        <img src="https://cdn-icons-png.flaticon.com/128/16853/16853018.png" alt="openai" width={"30px"} height={"30px"} className="image-inverted" />
      
        </Link>

        <Typography
          sx={{
            display: "block", // Always display
            ml: 1, // Add spacing between logo and text
            fontWeight: "800",
            fontSize: "20px", // Adjust font size
            color: "white", // Ensure text is visible
            textShadow: "2px 2px 20px rgba(0, 0, 0, 0.7)", // Subtle shadow
          }}
        >
          AI-GPT
        </Typography>
    </div>
  )
}

export default Logo;
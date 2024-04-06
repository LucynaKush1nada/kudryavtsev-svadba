import { Box, Typography } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const Organizator = () => {
  return (
    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <Typography sx={{fontSize: "48px", marginTop: "1.5em", marginBottom: "1em"}}>Организатор</Typography>
        <Box sx={{marginBottom: "2em"}}>
            <img 
                src="./imgs/youm.jpg" 
                alt="organizator" 
                style={{ borderRadius: "50%" }}
                height={200}
                width={200}
            />
        </Box>
        <Typography sx={{fontSize: "28px"}}>Олеся Скворцова</Typography>
        <Box sx={{display: "flex", justifyContent: "center", marginTop: "1em", marginBottom: "1em"}}>
            <Box sx={{display: "flex", justifyContent: "space-between", width: "200px"}}>
                <a href="https://t.me/skvortsovawedding" target='_blank' rel="noreferrer">
                    <TelegramIcon sx={{ background: "#333333", borderRadius: "50%", color: "white", padding: 1, cursor: "pointer" }} />
                </a>
                <a href="https://wa.clck.bar/79536420178" target='_blank' rel="noreferrer">
                <WhatsAppIcon sx={{ background: "#333333", borderRadius: "50%", color: "white", padding: 1, cursor: "pointer" }} />
                </a>
                <a href="https://www.instagram.com/skvortsova_wedding" target='_blank' rel="noreferrer">
                <InstagramIcon sx={{ background: "#333333", borderRadius: "50%", color: "white", padding: 1, cursor: "pointer" }} />
                </a>
            </Box>
        </Box>
        <Box sx={{display: "flex", justifyContent: "center"}}>
            <Typography sx={{fontSize: "28px", width: "100%", maxWidth: "1000px"}}>
                Запомните её в лицо! Она помогает нам во всем и следит за тем, чтобы этот день стал для всех самым лучшим! Вы можете обращаться к Олесе по любым вопросам.
            </Typography>
        </Box>
    </Box>
  )
}

export default Organizator
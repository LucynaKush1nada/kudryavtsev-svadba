import { Box, Divider, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: 'auto' }}>
      <img
        style={{ 
          position: "relative", 
          marginTop: 25,
        }}
        src="./imgs/background_dark.jpg"
        alt="background_dark"
        width="100%"
      />
      <Box className="lucida-text" sx={{
        fontStyle: "oblique",fontWeight: 600,  position: 'absolute', top: '3%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: 'white', fontSize: "28px", letterSpacing: 1
        }}>
        #KUDRYAVTSEVFAMILY
      </Box>
      <Box sx={{ position: 'absolute', top: '33%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', boxShadow: "0px 0px 100px 100px rgba(0, 0, 0, 0.5) inset" }}>
        <Divider sx={{ backgroundColor: 'white', height: '2px', margin: '20px 0' }} />
        <Typography className="invite-text myriadpro-text" sx={{color: 'white', fontWeight: 600}}>
          ПРИГЛАШЕНИЕ НА СВАДЬБУ
        </Typography>
        <Divider sx={{ backgroundColor: 'white', height: '2px', margin: '20px 0' }} />
        <Typography className="invite-name-text lucida-text" sx={{color: 'white', fontWeight: 600}}>РОМАНА</Typography>
        <Typography className="invite-name-text lucida-text" sx={{color: 'white', fontWeight: 600}}>И</Typography>
        <Typography className="invite-name-text lucida-text" sx={{color: 'white', fontWeight: 600}}>ЕКАТЕРИНЫ</Typography>
      </Box>
      <Box sx={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: 'white' }}>
        <Typography className="happy-text lucida-text" sx={{fontWeight: 600}}>ДЕНЬ РОЖДЕНИЯ НАШЕЙ СЕМЬИ</Typography>
        <Typography className="happy-subtext lucida-text" sx={{fontWeight: 600}}>СПАСИБО, ЧТО ВЫ С НАМИ</Typography>
      </Box>
    </Box>
  );
};

export default Header;
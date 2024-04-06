import { Box, Typography } from '@mui/material';
import { ProgramItemProps } from '../../types/common';

const ProgramItem = ({position, src, alt, title, time, keyValue: key}: ProgramItemProps) => {
  return (
    <Box key={key}>
        <Box className="program-item-mobile" sx={{ marginBottom: "3em "}}>
            <img width={200} height={200} alt={alt} src={src} style={{borderRadius: "50%", marginLeft: "2em", marginRight: "2em", objectFit: "cover"}}/>
            <>
                <Typography className='lucida-text' sx={{fontSize: "20px", fontWeight: 600}}>{title}</Typography>
                <Typography className='lucida-text' sx={{fontSize: "20px", fontWeight: 600}}>{time}</Typography>
            </>
        </Box>
        <Box className="program-item-desktop" sx={{alignItems: "center", marginBottom: "3em"}}>
            <Box sx={{flex: 1}}>
                {position === "left" && (
                    <>
                        <Typography className='lucida-text' sx={{fontSize: "20px", fontWeight: 600}}>{title}</Typography>
                        <Typography className='lucida-text' sx={{fontSize: "20px", fontWeight: 600}}>{time}</Typography>
                    </>
                )}
            </Box>
            <img width={200} height={200} alt={alt} src={src} style={{borderRadius: "50%", marginLeft: "2em", marginRight: "2em", objectFit: "cover"}}/>
            <Box sx={{flex: 1}}>
                {position === "right" && (
                    <>
                        <Typography className='lucida-text' sx={{fontSize: "20px", fontWeight: 600}}>{title}</Typography>
                        <Typography className='lucida-text' sx={{fontSize: "20px", fontWeight: 600}}>{time}</Typography>
                    </>
                )}
            </Box>
        </Box>
    </Box>
  )
}

export default ProgramItem;

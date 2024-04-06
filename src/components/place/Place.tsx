import { Box, Typography } from '@mui/material'
import PlaceMap from './Map'

const Place = () => {
  return (
    <Box>
        <Typography sx={{fontSize: "20px", marginBottom: "2em", fontWeight: 600}}>МЫ РАДЫ ПРИГЛАСИТЬ ВАС БЫТЬ РЯДОМ В ОСОБЕННЫЙ ДЛЯ НАС ДЕНЬ</Typography>
        <Typography sx={{fontSize: "20px", marginBottom: "2em", fontWeight: 600}}>СУББОТА, 25 МАЯ, 2024</Typography>
        <Typography sx={{fontSize: "20px", marginBottom: "2em", fontWeight: 600}}>15:30</Typography>
        <Typography sx={{fontSize: "28px"}}>Загородный Клуб Прибрежный</Typography>
        <img style={{width: "100%", maxWidth: "320px"}} alt="place" src="./imgs/place.jpg" />
        <Typography sx={{fontSize: "28px"}}>Костромской район, п. Прибрежный, ул. Морская, 14</Typography>
        <PlaceMap />
    </Box>
  )
}

export default Place
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Grid } from '@mui/material';

const items = [
    "./imgs/1.jpg",
    "./imgs/2.jpg",
    "./imgs/3.jpg",
    "./imgs/4.jpg",
    "./imgs/5.jpg",
    "./imgs/6.jpg",
    "./imgs/7.jpg",
    "./imgs/8.jpg",
    "./imgs/9.jpg"
];

interface GridItemProps {
    src: string;
    keyValue: number;
}

const GridItem = ({src, keyValue}: GridItemProps) => {
    return (
        <Grid key={keyValue} item xs={4} sx={{maxWidth: "300px", width: "100%", maxHeight: "360px", height: "100%"}}>
            <img src={src} alt="roflinka" style={{objectFit: "cover", maxWidth: "300px", width: "100%", maxHeight: "360px", height: "100%"}}/>
        </Grid>
    )
}

const Footer = () => {
  return (
    <Box sx={{marginTop:"3em", marginBottom: "6em"}}>
        <Box sx={{marginTop: "3em",marginBottom: "3em" }}>
            <FavoriteIcon sx={{width: "48px", height: "48px"}}/>
        </Box>
        <Box>
            <Grid container gap="20px 0px">
                {
                    items.map((item, key) => {
                        return (
                            <GridItem keyValue={key} src={item} />
                        )
                    })
                }
            </Grid>
        </Box>
    </Box>
  )
}

export default Footer
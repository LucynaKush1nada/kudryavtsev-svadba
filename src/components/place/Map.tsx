import { Box } from '@mui/material';
import { Placemark, Map, YMaps } from 'react-yandex-maps';

const PlaceMap = () => {
    
  return (
    <Box sx={{display: "flex", justifyContent: "center"}}>
      <Box className="map-box" sx={{width: "100%"}}>
        <YMaps>
            <Map 
                width={'100%'}
                height={400} 
                defaultState={{ center: [57.903249,40.870327], zoom: 15 }}>
                <Placemark geometry={[57.903249,40.870327]} />
            </Map>
        </YMaps>
      </Box>
    </Box>
  )
}

export default PlaceMap
import { Box, Typography } from '@mui/material';
import ProgramItem from './ProgramItem';
import { ProgramItemProps } from '../../types/common';

const getItems : () => ProgramItemProps[] = () => [
  {
    position: 'left',
    src: "./imgs/program/transfer.jpg",
    alt: "transfer1",
    title: "ТРАНСФЕР",
    time: "15:00",
    keyValue: "0",
  },
  {
    position: 'right',
    src: "./imgs/program/furshet2.jpg",
    alt: "furshet",
    title: "СБОР ГОСТЕЙ/ФУРШЕТ",
    time: "15:30",
    keyValue: "1",
  },
  {
    position: 'left',
    src: "./imgs/program/reg2.jpg",
    alt: "reg",
    title: "ТОРЖСТВЕННАЯ РЕГИСТРАЦИЯ",
    time: "16:20",
    keyValue: "2",
  },
  {
    position: 'right',
    src: "./imgs/program/dinner.jpg",
    alt: "dinner",
    title: "СВАДЕБНЫЙ УЖИН",
    time: "17:00",
    keyValue: "3",
  },
  {
    position: 'left',
    src: "./imgs/program/transfer2.jpg",
    alt: "transfer2",
    title: "ТРАНСФЕР",
    time: "23:30",
    keyValue: "4",
  }
]

const Program = () => {
  return (
    <Box sx={{display: "flex", justifyContent: "center", marginTop: "5em"}}>
      <Box>
        <Typography sx={{ fontSize: "30.5px", marginBottom: "2em" }}>ПРОГРАММА</Typography>
        {
          getItems().map((item, key) => {
            return (
              <ProgramItem keyValue={`program_item${key}`} alt={item.alt} position={item.position} src={item.src} time={item.time} title={item.title}/>
            )
          })
        }
        </Box>
    </Box>
  )
}

export default Program;

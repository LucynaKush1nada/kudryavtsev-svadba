import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { TRAVELMETHOD, TWODAYSREADY } from '../../types/common'
import { submitData } from '../../api'
import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

interface NotificaitonProps {
  open: boolean;
}

const SuccessNotification = ({open}: NotificaitonProps) => {
  return open ? (
    <Alert sx={{marginTop: "3em"}} icon={<CheckIcon fontSize="inherit" />} severity="success">
      Ваши данные были успешно сохранены
    </Alert>
  ) : <></>;
}

const getDrinks: () => string[] = () => {
    return [
        "Не пью",
        "Вино (красное полусладкое)",
        "Вино (красное сухое)",
        "Вино (белое полусладкое)",
        "Вино (белое сухое)",
        "Водка",
        "Коньяк",
        "Виски",
        "Папин самогон"
    ]
}

const Form = () => {
  const [openNotify, setOpenNotify] = useState<boolean>(false);
  const [fio, setFio] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [transfer, setTransfer] = useState<TRAVELMETHOD>();
  const [drinks, setDrinks] = useState<string[]>([]);
  const [twoDaysReady, setIsTwoDaysReady] = useState<TWODAYSREADY>();

  const handleFio = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFio(event.target.value)
  }

  const handlePhone = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPhone(event.target.value)
  }

  const handleTransfer = (event: SelectChangeEvent) => {
    setTransfer(event.target.value as TRAVELMETHOD);
  };

  const handleDrinks = (event: SelectChangeEvent<typeof drinks>) => {
    const {
      target: { value },
    } = event;
    setDrinks(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleReady = (event: SelectChangeEvent) => {
    setIsTwoDaysReady(event.target.value as TWODAYSREADY);
  };

  const send = () => {
    submitData({
      firstName: fio.split(" ")[1],
      lastName: fio.split(" ")[0],
      guessDrinks: drinks,
      phoneNumber: phone,
      travelMethod: transfer === TRAVELMETHOD.MYSELF ? "MYSELF" : "TRANSFER",
      twoDaysReady: twoDaysReady === TWODAYSREADY.YES ? true : twoDaysReady === TWODAYSREADY.NO ? false : null,
    }).then(() => {
      setOpenNotify(true);
      setFio("");
      setPhone("");
      setDrinks([]);
      setTransfer(TRAVELMETHOD.MYSELF);
      setIsTwoDaysReady(TWODAYSREADY.DONTKNOW);
      setTimeout(() => setOpenNotify(false), 3000);
    })
  }

  return (
    <>
    <Box sx={{
      background: "rgba(0, 0, 0, 0.7)",
      padding: 5,
      marginTop: "3em"
    }}>
        <Typography className="form-title" sx={{color: "white", marginBottom: "1em", fontWeight: 600}}>ВЫ ПРИГЛАШЕНЫ!</Typography>

        <Typography className="form-text" sx={{color: "white", fontWeight: 600}}>Пожалуйста, подтвердите Ваше присутствие на нашем празднике до 20 апреля 2024г.</Typography>
        <Typography className="form-text" sx={{color: "white", fontWeight: 600}}>Если Вы - пара, пожалуйста заполните форму на каждого гостя отдельно.</Typography>

        <FormControl sx={{marginBottom: 2, marginTop: "2em"}} fullWidth>
          <TextField sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '&:hover fieldset': { borderColor: 'white' },
                '&.Mui-focused fieldset': { borderColor: 'white' },
                color: 'white' // изменение цвета текста на белый
              },
              '& .MuiInputLabel-root': {
                color: 'white',
              }
            }}
            id="outlined-basic" label="Имя и фамилия" variant="outlined"
            onChange={handleFio}
            value={fio}
            />
        </FormControl>

        <FormControl sx={{marginBottom: 2}} fullWidth>
          <TextField 
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '&:hover fieldset': { borderColor: 'white' },
                '&.Mui-focused fieldset': { borderColor: 'white' },
                color: 'white' // изменение цвета текста на белый
              },
              '& .MuiInputLabel-root': {
                color: 'white',
              }
            }}
          id="outlined-basic" label="Номер телефона" variant="outlined" 
          onChange={handlePhone}
          value={phone}
          />
        </FormControl>
        <FormControl sx={{marginBottom: 2}} fullWidth>
            <InputLabel sx={{color: "white"}} id="demo-simple-select-label">Как добираетесь?</InputLabel>
            <Select
                sx={{
                  '& .MuiSelect-root': { color: 'white' },
                  '& .MuiInputBase-input': { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'white' },
                    '&.Mui-focused fieldset': { borderColor: 'white' }
                  },
                  '&.Mui-focused': {
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white' // изменение цвета рамки при фокусе на белый
                    }
                  }
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={transfer}
                label="Как добираетесь?"
                onChange={handleTransfer}
                >
                <MenuItem value={TRAVELMETHOD.MYSELF}>{TRAVELMETHOD.MYSELF}</MenuItem>
                <MenuItem value={TRAVELMETHOD.TRANSFER}>{TRAVELMETHOD.TRANSFER}</MenuItem>
            </Select>
      </FormControl>
      <FormControl sx={{marginBottom: 2}} fullWidth>
            <InputLabel sx={{color:"white"}} id="demo-simple-select-label">Напитки</InputLabel>
            <Select
                sx={{
                  '& .MuiSelect-root': { color: 'white' },
                  '& .MuiInputBase-input': { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'white' },
                    '&.Mui-focused fieldset': { borderColor: 'white' }
                  },
                  '&.Mui-focused': {
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white' // изменение цвета рамки при фокусе на белый
                    }
                  }
                }}
                multiple
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={drinks}
                label="Как добираетесь?"
                onChange={handleDrinks}
                >
                    {
                        getDrinks().map((item, key) => {
                            return (
                                <MenuItem value={item}>{item}</MenuItem>
                            )
                        })
                    }
            </Select>
      </FormControl>
      <FormControl sx={{marginBottom: 2}} fullWidth>
            <InputLabel sx={{color: "white"}} id="demo-simple-select-label">Остаетесь на 2 день?</InputLabel>
            <Select
                sx={{
                  '& .MuiSelect-root': { color: 'white' },
                  '& .MuiInputBase-input': { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'white' },
                    '&.Mui-focused fieldset': { borderColor: 'white' }
                  },
                  '&.Mui-focused': {
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white' // изменение цвета рамки при фокусе на белый
                    }
                  }
                }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={twoDaysReady}
                  label="Как добираетесь?"
                  onChange={handleReady}
                >
                <MenuItem value={TWODAYSREADY.YES}>{TWODAYSREADY.YES}</MenuItem>
                <MenuItem value={TWODAYSREADY.NO}>{TWODAYSREADY.NO}</MenuItem>
                <MenuItem value={TWODAYSREADY.DONTKNOW}>{TWODAYSREADY.DONTKNOW}</MenuItem>
            </Select>
      </FormControl>
      <Button disabled={!fio || !phone || drinks.length === 0} sx={{ color: "white", border: `${(!fio || !phone || drinks.length === 0) ? "none" : "1px solid white"}`, padding: 2 }} onClick={send}>Подтверждаю!</Button>
    </Box>
    <SuccessNotification open={openNotify}/>
    </>
  )
}

export default Form;

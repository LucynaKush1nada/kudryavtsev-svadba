import { Box, Typography } from '@mui/material'
import HelpIcon from '@mui/icons-material/Help';
import { QuestionItemProps } from '../../types/common';

const QuestionItem = ({ question, answer }: QuestionItemProps) => {
  return (
    <Box sx={{position: "relative"}}>
        <HelpIcon className="quistion-icon" style={{display: "block", position: "absolute", left: 0, top: 0, marginTop: "-1em", width: "43.75px", height: "43.75px", borderRadius: "50%"}}/>
        <Box className="question-item" sx={{ width: "100%" }}>
            <Typography sx={{textAlign: "left", marginLeft: 5, padding: 4, fontWeight: 600}}>{question}</Typography>
        </Box>
        <Box className="answer-item" sx={{ width: "100%" }}>
            <Typography sx={{textAlign: "left", marginLeft: 5, padding: 3}}>{answer}</Typography>
        </Box>
    </Box>
  )
}

export default QuestionItem;

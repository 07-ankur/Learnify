import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Exam_cards } from '../../utils/content';
import OptionCard from '../../components/Cards/OptionCard';
import StatusCard from '../../components/Cards/StatusCard';
import { useState,useEffect } from 'react';

const {Questions} = Exam_cards;

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function QuestionTabs() {
  const [value, setValue] = useState(0);
  const [selectedAnswer,setSelectedAnswer] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [correctAnswer,setCorrectAnswer]=useState(0);
  const [wrongAnswer,setWrongAnswer]=useState(0);


  var clicked = false;

  const selectHandler=(opt)=>{
    if(clicked){
      return;
    }
    setSelectedAnswer(opt);
    console.log('clicked')
    clicked = true;
  }

  useEffect(()=>{
    if(selectedAnswer){
      setCorrectAnswer(correctAnswer+1);
    }
    // else if(selectedAnswer===false){
    //   setWrongAnswer(wrongAnswer+1);
    // }
  },[selectedAnswer]);
  
  useEffect(()=>{
    console.log(correctAnswer);
    // console.log(wrongAnswer);
  },[correctAnswer]);

  return (
    <Box sx={{ display: 'flex',flexDirection:'row' }}>
    <Box sx={{ width: '75%' }}>
      <Box sx={{borderBottom: 1, borderColor: 'divider', fontSize:'xl',maxWidth: { xs: 520, sm: 950 } }}>
        <Tabs variant='scrollable' value={value} onChange={handleChange} aria-label="basic tabs example">
          {Questions.map((item,index) => (<Tab key={index} sx={{
                    mx:'5px',
                    fontSize:'1em',
                    minWidth: 90,
                  }} label={item.key} {...a11yProps({index})} />))}
          </Tabs>
      </Box>
      {Questions.map((item,index) =>(
          <CustomTabPanel value={value} index={index}>  
          <Box sx={{ml:7,mb:2,width:'85%'}} fontSize='1.15em'>{item.title}</Box>
          {item.options.map((itm)=>(
            <OptionCard title={itm.title} onClick={()=>selectHandler(itm.opt)}/>
            ))}
          </CustomTabPanel>
        ))}
    </Box>
    <StatusCard/>
    </Box>
  );
}
import React, { useContext, useState } from 'react';
import { NotificationContext } from './Notifications/NotificationsContextProvider';
import './App.css';
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from "@mui/material";

//for getting new random ids for notifications
import { v4 } from "uuid";


function App() {
  const [input, setInput] = useState("");
  const dispatch = useContext(NotificationContext);

  const [notifType, setnotifType] = useState("info");

  const handleChange = (event) => {
    setnotifType(event.target.value);
  };
  console.log(notifType)

  const handleNewNotification = () => {
    if(input === ''){
      alert('The notification description requires a value');
   }else{
    dispatch({
      motive: "ADD",
      payload: {
        id: v4(),
        type: notifType,
        desc: input,
      }
    })
   }
   
  }

  return (
    <div className="App">
      <h2 style={{ fontFamily: "unset", fontWeight: 200 }}> MY NOTIFICATION APP</h2>
      <textarea  placeholder="Describe your notification"
        onChange={event => setInput(event.target.value)}
        value={input}
        style={{ minWidth: 200, margin: 20, padding: 10, borderRadius: 8 }}
        
      />
      

      <Box sx={{ minWidth: 120 }}>
        <FormControl style={{ minWidth: 250, margin: 20 }}>
          <InputLabel id="demo-simple-select-label" >
            Select type of notification
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={handleChange}
          >
            <MenuItem value="info">Information</MenuItem>
            <MenuItem value="err">Error</MenuItem>
            <MenuItem value="warn">Warning</MenuItem>
            <MenuItem value="success">Success</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <input type="submit" onClick={handleNewNotification}
        style={{ minWidth: 25, margin: 10, padding: 15, borderRadius: 5, color: "whitesmoke", backgroundColor: "green", fontSize: 25 }}
        value="Add!"/>
        
    </div>
  );
}

export default App;
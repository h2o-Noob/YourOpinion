import News from "./News";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import data from "./data.json";
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Chat } from "@mui/icons-material";
import Chats from "../chat/Chats";
import { useAuth } from "../contexts/AuthContext"
import axios from 'axios'
import { ChatEngineWrapper, ChatSocket, ChatFeed } from 'react-chat-engine'

const NewsList = () => {

  const { user } = useAuth()

function TemporaryDrawer() {
  const [state, setState] = React.useState({
    bottom: false
  });

  const toggleDrawer = (anchor, open) => (event) => {

    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 1000 }}
      role="presentation"
    >
      <ChatEngineWrapper>
            <ChatSocket 
                projectID='0e48d3a8-952a-45be-acd5-328896731174'
                chatID='93894'
                chatAccessKey='ca-5f6922ba-5e49-42a5-94c8-870d68349eec'
                senderUsername={user.displayName}
            />
            <ChatFeed activeChat='93894' /> 

        </ChatEngineWrapper>
    </Box>
  );

  return (
    <div>
        <React.Fragment key="right">
          <Button onClick={toggleDrawer("right", true)}>Drawer</Button>
          <Drawer
            anchor="right"
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
        </React.Fragment>
    </div>
  );
}


  return (
    <div style={{ backgroundColor: "#f5f5f5", paddingTop: "5vh", paddingLeft: "7px" }}>
      {TemporaryDrawer()}
      <Container>
        <Box sx={{ flexGrow: 1}}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width= "100vw" 
          >
            {(data.data).map((news) => (
              <Grid item xs={12} sm={4} md={4} key={news}>
                <News data={news}/>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default NewsList;

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { fontSize, style } from '@mui/system';

export default function Qualification() {
  return (
    <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper', p: 4}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="RGR Siddhanthi" src="https://www.collegedekho.com/_next/image?url=https%3A%2F%2Fimg.collegedekhocdn.com%2Fmedia%2Fimg%2Finstitute%2Flogo%2F1434463349.jpg&w=48&q=75" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree Chaitanya Institute of Technological Sciences, (Karimnagar)"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline'}} 
                component="span"
                variant="body2"
                color="text.primary"
              >
                7.8 CGPA<br/>
                2019-2023
              </Typography><br/>
              
              {" B.Tech (Computer Science and Engineering)"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sri Aadarsh" src="https://www.logolynx.com/images/logolynx/71/71c983589736ca481a4ee83531d51e8e.jpeg" />
        </ListItemAvatar>
        <ListItemText
          primary="Sri Vivekananda Junior College, (Jagtial)"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                88% <br/>
                2017-2019
              </Typography><br/>
              {"Intermediate (MPC)"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sai SI" src="https://media.licdn.com/dms/image/C4D0BAQFyawFzEDxUnA/company-logo_200_200/0/1519922003311?e=2147483647&v=beta&t=ONciL3U41FFNzSA9UUdb9QCmt-Bxe34culIt_0HcT_U" />
        </ListItemAvatar>
        <ListItemText
          primary="Gowtham Model High School, (Jagtial)"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                9.7 CGPA<br/>
                2017
              </Typography><br/>
              {'SSC'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
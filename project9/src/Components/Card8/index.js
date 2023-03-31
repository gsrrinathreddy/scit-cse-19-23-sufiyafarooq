import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card8() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://thumbs.dreamstime.com/z/html-code-8406204.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          HTML
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.
           It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}
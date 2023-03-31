import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card7() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://thumbs.dreamstime.com/z/java-programming-word-cloud-hand-sphere-concept-white-background-127724638.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          JAVA
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Java is a widely-used programming language for coding web applications.
           It has been a popular choice among developers for over two decades, with millions of Java applications in use today. 
           Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}
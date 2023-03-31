import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card6() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://thumbs.dreamstime.com/z/sql-acronym-blackboard-wooden-alphabets-building-word-structured-query-language-197868780.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          SQL
          </Typography>
          <Typography variant="body2" color="text.secondary">
          SQL stands for Structured Query Language. SQL lets you access and manipulate databases.
           SQL became a standard of the American National Standards Institute (ANSI) in 1986, and of the International Organization for Standardization (ISO) in 1987.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}
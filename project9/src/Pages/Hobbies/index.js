import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">My Hobbies </ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://thumbs.dreamstime.com/z/beautiful-muslim-girl-reading-book-hijab-smiling-186956861.jpg',
    
    title: 'Reading',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://thumbs.dreamstime.com/z/gardening-garden-tools-crate-full-gorgeous-plants-ready-planting-sunny-garden-spring-garden-works-concept-gardening-118145049.jpg',
    title: 'Gardening',
    
  },
  {
    img: 'https://thumbs.dreamstime.com/z/two-people-coding-code-program-programming-developer-computer-web-development-coder-working-design-software-desk-office-139990440.jpg',
    title: 'Computer Programming',
    
  },
  {
    img: 'https://thumbs.dreamstime.com/z/editor-editing-video-computer-young-female-editor-editing-video-computer-office-147825385.jpg',
    title: 'Video Editing',
    
    cols: 2,
  },
  {
    img: 'https://thumbs.dreamstime.com/z/girl-playing-volleyball-15204665.jpg',
    title: 'Playing Volleyball',
    
    cols: 2,
  },
  {
    img: 'https://thumbs.dreamstime.com/z/young-hispanic-woman-student-cooking-kitchen-girl-using-tablet-to-make-online-shopping-find-new-recipe-young-hispanic-101864718.jpg',
    title: 'Cooking',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    
  },
  {
    img: 'https://thumbs.dreamstime.com/z/brunette-girl-orange-backpack-enjoying-view-boka-bay-montenegro-back-103054151.jpg',
    title: 'Travelling',
    
  },
    
];
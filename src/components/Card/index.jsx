import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function ActionAreaCard({ enteredData, onSearchChange, handleRemove}) {
  const {id, name, latitude, longitude} = enteredData

  return (
    <Card className='card-wrapper' >
      <CardActionArea onClick={()=> onSearchChange({value: `${latitude} ${longitude}`, label: name})}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontSize: '18px'}}>
            {enteredData.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <IconButton aria-label="Remove"  onClick={() => handleRemove(id)}>
        <CloseIcon />
      </IconButton>
    </Card>
  );
}

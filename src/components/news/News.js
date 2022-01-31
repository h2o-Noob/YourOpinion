import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from '@mui/material/CardHeader';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom";


const News = (props) => {
    const history = useHistory()
  return (
    <Card sx={{ maxWidth: 345 }} color="primary">
      <CardHeader
        subheader={props.data.source?props.data.source:"anonymous"}
      />
      <CardMedia
        component="img"
        height="140"
        image={
          props.data.image
            ? props.data.image
            : "https://image.shutterstock.com/image-illustration/breaking-news-minimalistic-logo-on-260nw-1298244646.jpg"
        }
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.data.title.substring(0, 45)}...
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.data.description.substring(0, 100)}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography variant="body2" color="text.secondary">
          {props.data.published_at}
        </Typography>
        <Link to="/chat">
            <Button size="small">Share</Button>
        </Link>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default News;

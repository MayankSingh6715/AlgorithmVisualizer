import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import SortImage from "../../static/images/cards/sort.117e08fc.png";
import GraphImage from "../../static/images/cards/graph.6e6849d5.png";

export default function MultiActionAreaCard() {
  return (
    <>
      <Card sx={{ maxWidth: 362, maxHeight: 362, mx: 4.25, my: 5.25 }}>
        <CardActionArea component={Link} to={"/sort"}>
          <CardMedia
            component="img"
            height="140"
            image={SortImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sorting Algorithms
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Visualize different sorting algorithms
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 362, maxHeight: 362, mx: 4.25, my: 5.25 }}>
        <CardActionArea component={Link} to={"/pathfinder"}>
          <CardMedia
            component="img"
            height="140"
            image={GraphImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Path Finder
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Visualizing path finder algorithms
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

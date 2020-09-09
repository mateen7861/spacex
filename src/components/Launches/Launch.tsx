import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },

  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard({
  flight_number,
  mission_name,
  launch_year,

  launch_success,
}: any) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {mission_name}
        </Typography>
        <Typography variant="h6">Flight Number : {flight_number}</Typography>

        <Typography variant="h6">Launch year : {launch_year}</Typography>
        <Typography variant="h6">
          Launch success :{" "}
          <span style={{ color: launch_success ? "green" : "red" }}>
            {launch_success ? "Successful " : "Failed"}
          </span>
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/${flight_number}`} style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

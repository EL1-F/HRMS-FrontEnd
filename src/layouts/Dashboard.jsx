import React from "react";
import JobList from "../pages/JobList";
import Filters from "./Filters";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import JobDetail from "../pages/JobDetail";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Filters />
          </Grid.Column>
          <Grid.Column floated='right' width={13    }>
            <Route exact path= "/" component = {JobList} />
            <Route exact path= "/joblist" component = {JobList} />
            <Route path= "/joblist/:id" component = {JobDetail} />
          </Grid.Column> 
        </Grid.Row>
      </Grid>
    </div>
  );
}

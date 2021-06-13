import React from "react";
import JobList from "../pages/JobList";
import Filters from "./Filters";
import { Grid, Image } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Filters />
          </Grid.Column>
          <Grid.Column floated='right' width={13    }>
            <JobList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

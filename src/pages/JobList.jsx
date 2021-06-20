import React, { useState, useEffect } from "react";
import { Container, Divider, Icon, Grid, Card, Label } from "semantic-ui-react";
import JobPositionService from "../services/jobPositionService";
import { Link } from "react-router-dom";

export default function JobList() {
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPosition()
      .then((result) => setJobPositions(result.data.data));
  }, []);

  return (
    <div>
      <Card.Group>
        {jobPositions.map((jobPosition) => (
         <Card fluid color="red" key={jobPosition.id} >
            <Link to = {`/joblist/${jobPosition.id}`}>
            <Container textAlign="left" className="jobListPosition">
              <Grid>
                <Grid.Column floated="left" width={5}>
                  <Card.Header>
                    <h4>{jobPosition.job.position}</h4>
                  </Card.Header>
                  <Card.Description content={jobPosition.employer.companyName} />
                </Grid.Column>
                <Grid.Column floated="right" width={3}>
                  <Card.Meta>
                    <Icon circular name="map marker" /> {jobPosition.city.cityName}
                  </Card.Meta>
                </Grid.Column>
              </Grid>
            </Container>
            <Divider />
            <Container textAlign="left" className="jobListDown">
              <Grid>
                <Grid.Column floated="left" width={10}>
                  <Label.Group size="small">
                    <Label>{jobPosition.wayOfWorking.wayName}</Label>
                    <Label>{jobPosition.workingTime.timeName}</Label>
                  </Label.Group>
                </Grid.Column>
                <Grid.Column floated="left" width={5}>
                  Son Tarih
                  <Card.Description content={jobPosition.applicationDeadline} />
                </Grid.Column>
              </Grid>
            </Container>
            </Link>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}

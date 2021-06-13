import React, { useState, useEffect } from "react";
import { Container, Divider, Icon , Grid , Card} from "semantic-ui-react";
import JobPositionService from "../services/jobPositionService";


export default function JobList() {
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    //component yüklendiğinde çalışmasını istediğimiz kod buraya yazılacak
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPosition()
      .then((result) => setJobPositions(result.data.data));
  },[]);

  return (
    <div>
      <Card.Group>
        {jobPositions.map((position) => (
          <Card fluid color="red" key={position.id}>
            <Container textAlign="left" className="jobListPosition">
              <Grid>
                <Grid.Column floated="left" width={5}>
                  <Card.Header>
                    <h4>{position.job.position}</h4>
                  </Card.Header>
                  <Card.Description content={position.employer.companyName} />
                </Grid.Column>
                <Grid.Column floated="right" width={3}>
                  <Card.Meta>
                    <Icon circular name="map marker" /> {position.city.cityName}
                  </Card.Meta>
                </Grid.Column>
              </Grid>
            </Container>
            <Divider />
            <Container textAlign="left" className="jobListDown">
              <Grid>
                <Grid.Column floated="left" width={10}>
                  <Card.Meta>  </Card.Meta>
                </Grid.Column>
                <Grid.Column floated="right" width={5}>
                  Son Tarih
                  <Card.Description content={position.applicationDeadline} />
                </Grid.Column>
              </Grid>
            </Container>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
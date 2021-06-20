import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Button, Card } from "semantic-ui-react";
import JobPositionService from "../services/jobPositionService";

export default function JobDetail() {
  let { id }  = useParams()

  const [jobPosition, setJobPosition] = useState({})

  
  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService.getJobPositionDetailsById(id).then((result) => setJobPosition(result.data.data))
  }, [])

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Card.Header>{id}</Card.Header>
            <Card.Meta>{jobPosition.description}</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="buttons">
              <Button basic color="green">
                Approve
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}

import React from "react";
import {
  Card,
  CardText,
  CardTitle,
  Col,
  Container,
  Jumbotron,
  Row,
  Button,
} from "reactstrap";

function HomeComponent() {
  return (
    <>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col sm="6">
            <Card body>
              <CardTitle tag="h5">Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomeComponent;

import React from "react";
import { Card, Container, Table } from "react-bootstrap";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CheckIcon from "@material-ui/icons/Check";
import "../../../../stylesheets/titles.css";
function ConferenceManagement() {
  return (
    <Container fluid>
      <Card className={"p-4"}>
        <h1 className="text-center sub-titles ">Upcoming Events</h1>
        <hr />
        <Button
          className={"d-flex "}
          variant={"contained"}
          color={"primary"}
          startIcon={<AddIcon />}
          href={"/admin/addconference"}
        >
          Add Conference
        </Button>
        <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr className={"text-center"}>
              <th>Title</th>
              <th>Description</th>
              <th>Venue</th>
              <th>Date</th>
              <th>Seat Count</th>
            </tr>
          </thead>
          <tbody>
            <tr className={"text-center"}>
              <td>SSS</td>
              <td>
                <p>sadadad sdadada sdadadad</p>
              </td>
              <td>SLIIT</td>
              <td>2022-03-02</td>
              <td>30</td>
              <td>
                <Button
                  className={"pl-0 pr-4"}
                  variant="contained"
                  startIcon={<DeleteIcon />}
                  color="success"
                  size="small"
                >
                  Delete
                </Button>
              </td>
              <td>
                <Button
                  className={"pl-0 pr-4"}
                  variant="contained"
                  color="secondary"
                  startIcon={<CheckIcon />}
                  size="small"
                >
                  Activate
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </Container>
  );
}

export default ConferenceManagement;

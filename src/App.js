import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyCard from "./Card"

import Axios from "axios";

function App() {
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const { data } = await Axios.get("https://randomuser.me/api/");
    console.log("RESPONSE: ", data);

    const details = data.results[0]

    setDetails(details);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
   <Container fluid className="p-4 bg-primary App">
   <Row>
   <Col>
   <MyCard details={details} />
   </Col>
   </Row>
   </Container>
  )
}

export default App;

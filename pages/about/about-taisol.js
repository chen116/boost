import Layout from "../../components/layout";
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const ExploreView = props => 

(

<Layout>

<Container className="container-fluid">

<Row className="pt-5">
  <Col className="my-auto">
    <h1 className="display-2 font-weight-bolder">
      <strong>
        ABOUT TAISOL
      </strong>
    </h1>
    <p className="lead">
      Liked this tutorial?
    </p>


  </Col>
  <Col className="">
    <img className="rounded " src="http://placekitten.com/500/500" alt="" />
  </Col>
</Row>
</Container>


</Layout>


)

export default ExploreView;
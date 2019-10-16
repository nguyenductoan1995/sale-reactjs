import React,{Fragment} from 'react';
import './App.css';
import {
  Container, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink, Card, CardBody, CardTitle, CardSubtitle, CardText, Button
} from 'reactstrap';
import {connect} from 'react-redux'
import { actions } from './store';

class App extends React.Component {
  state = {
    contacts: []
  }
  componentDidMount() {
    const {doSaveData} = this.props
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
        doSaveData(data)
        console.log(this.state.contacts)
      })
      .catch(console.log)
  }
  render() {
    const {testStore,Data} = this.props
    console.log('hello',Data)
    return (
      <Fragment>
      <Navbar color="faded" light expand="md">

        <NavbarBrand href="/">
          React Bootstrap Example
        </NavbarBrand>
        <Nav className="ml-auto" navbar>

          <NavItem className="d-flex align-items-center">
            <NavLink className="font-weight-bold" href="/">Home</NavLink>
          </NavItem>
          <NavItem className="d-flex align-items-center">
            <NavLink className="font-weight-bold" href="https://www.techiediaries.com/react-bootstrap">
              Tutorial
            </NavLink>
          </NavItem>


        </Nav>
      </Navbar>

      <Container fluid>


        <Row>
          <Col>
            {Data.map((contact, index) => (

              <Card key={`${index}`} color="primary">
                <CardBody>
                  <CardTitle className="h3 mb-2 pt-2 font-weight-bold">{contact.name}</CardTitle>
                  <CardSubtitle className="mb-3 font-weight-light text-uppercase"  >{contact.email}</CardSubtitle>
                  <CardText className="mb-4"  > {contact.company.catchPhrase}</CardText>
                  <Row>

                  <Col xs >
                        <Button color="success">Call</Button>
                  </Col>
                  <Col sm={'auto'}>
                        <Button color="warning">Message</Button>
                  </Col>
                  <Col sm={'auto'}>
                        <Button color="success">Email</Button>
                  </Col>
                  </Row>
                </CardBody>
              </Card>

            ))}
          </Col>
        </Row>

      </Container>
    </Fragment>
    );
  }
}

const mapStateToProps = ({ testStore }) => {
  const {Data= []} = testStore
  return {
    testStore,
    Data
  }
}


const mapDispatchToProps = dispatch => ({
  doSaveData: (params) => dispatch(actions.SaveData(params)),
})



export default connect(mapStateToProps,mapDispatchToProps)(App);

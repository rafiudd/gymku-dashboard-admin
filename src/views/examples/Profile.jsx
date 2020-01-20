/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import axios from "axios";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import UserHeader from "components/Headers/Header.jsx";
import Axios from "axios";

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username : '',
      email : '',
      fullname : '',
      password : '',
      address : '',
      phone : '',
      gender : '',
      title : '',
      type : '',
      trainer_name : '',
      time_type : '',
      time_start : '',
      time_end : ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.register = this.register.bind(this);
  }

  handleInputChange = (event) => {
    let key = event.target.name;
    let value = event.target.value;
    let model = {
      [key] : value,
    }

    this.setState(model)
  }

  async register() {
    let newModel = {
      username : this.state.username,
      email : this.state.email,
      fullname : this.state.fullname,
      password : this.state.password,
      address : this.state.password,
      phone : this.state.phone,
      gender : this.state.gender,
      gym_class : {
        title : this.state.title,
        type : this.state.type,
        trainer_name : this.state.trainer_name,
        time_type : this.state.time_type,
        time_start : this.state.time_start,
        time_end : this.state.time_end
      }
    }

    // alert(JSON.stringify(newModel))

    let token = window.localStorage.getItem('token');
    const baseUrl = "http://34.238.41.114:8081/api/users/register";
    const headers = {
      'Authorization' : 'Bearer ' + token
    }

    try {
      alert('sukses')
      let query = await fetch(baseUrl, {
        method : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization' : 'Bearer ' + token
        },
        body: JSON.stringify(newModel)
      });
      alert('Sukses Register User');
      window.location.reload();

      // console.log(query);
      // alert(query);
      // window.localStorage.setItem('query', query)
      // return query
    } catch (error) {
      alert(error.message)  
      // window.localStorage.setItem('error', error)
      // return error
    }
    
  }

  render() {
    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--8" fluid>
          <Row>
          <Form role="form">

            <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Daftarkan Pengguna Baru</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                    <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Username
                            </label>
                            <Input
                              className="form-control-alternative"
                              placeholder="Username"
                              type="text"
                              name="username"
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email address
                            </label>
                            <Input
                              className="form-control-alternative"
                              placeholder="jesse@example.com"
                              type="email"
                              name="email"
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Full Name
                            </label>
                            <Input
                              className="form-control-alternative"
                              placeholder="First name"
                              type="text"
                              name="fullname"
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                             Password
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-first-name"
                              placeholder="First name"
                              type="password"
                              name="password"
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Other information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Address
                            </label>
                            <Input
                              className="form-control-alternative"
                              rows="4"
                              placeholder="Home Address"
                              type="textarea"
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Phone
                            </label>
                            <Input
                              className="form-control-alternative"
                              placeholder="+62xxxxxxxxxx"
                              type="text"
                              name="phone"
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Gender
                            </label>
                            <Input
                              className="form-control-alternative"
                              placeholder="Perempuan"
                              type="text"
                              name="gender"
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Description */}
                    <h6 className="heading-small text-muted mb-4">Gym Information</h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Gym Class
                            </label>
                            <Input
                              className="form-control-alternative"
                              placeholder="Atletik"
                              type="text"
                              name="title"
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Gym Type
                            </label>
                            <Input
                              className="form-control-alternative"
                              placeholder="Personal"
                              type="text"
                              name="type"
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Trainer Name
                            </label>
                            <Input
                              className="form-control-alternative"
                              placeholder="Najib Gans"
                              type="text"
                              name="trainer_name"
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Time Type
                            </label>
                            <Input
                              className="form-control-alternative"
                              placeholder="Weekends"
                              type="text"
                              name="time_type"
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Time Start
                            </label>
                            <Input
                              className="form-control-alternative"
                              placeholder="09.00"
                              type="text"
                              name="time_start"
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Time End
                            </label>
                            <Input
                              className="form-control-alternative"
                              placeholder="15.00"
                              type="text"
                              name="time_end"
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <div className="mt-3"></div>
                    <Button lg="6" color="primary" type="button" onClick={this.register}>Daftar</Button>                      
                </CardBody>
              </Card>
            </Col>
            </Form>
          </Row>
        </Container>
      </>
    );
  }
}

export default Profile;

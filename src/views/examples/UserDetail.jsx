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
import { Redirect } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";
import UserHeader from "components/Headers/Header.jsx";


class UserDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email : '',
      password : '',
      isLogin : false,
      login : false
    }
    this.login = this.login.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange = (event) => {
    let key = event.target.name;
    let value = event.target.value;
    let model = {
      [key] : value,
      "isLogin" : true
    }

    this.setState(model)

  }
  
  login = (e) => {
    const baseUrl = "http://34.238.41.114:8081/api";
    
    axios.post(baseUrl + "/users/login", this.state)
    .then(function (response) {
      console.log(response.data)
      if(response.data.code === 200) {
        window.localStorage.setItem('isLogin', true)
        window.localStorage.setItem('token', response.data.token)
      } else {
        alert("GAGAL LOGIN")
      }
    }).then(this.setState({ login : true}))
  }
  
  moveLogin(){
    this.props.history.push("/admin/index");
  }
  render() {
    if( this.state.login === true ) {
      return <Redirect to='/admin/index' />
    }
    return (
      <>
        <UserHeader />
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <h1>Login</h1>
              </div>
              <Form role="form" onSubmit={this.login}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText onChange={this.handleInputChange}>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" name="email" onChange={this.handleInputChange} />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText onChange={this.handleInputChange}>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" name="password" onChange={this.handleInputChange} />
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="submit">
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default UserDetail;

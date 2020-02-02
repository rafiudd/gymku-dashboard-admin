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
  Col,Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from "reactstrap";
// core components
import UserHeader from "components/Headers/Header.jsx";

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
      gender : ['Laki-Laki', 'Perempuan'],
      title : [
        'Body Pum',
        'Hardcore',
        'Group Suspension training body blast',
        'Group Suspension training circuit',
        'Hardcore Overload',
        'Body Building',
        'Aqua Fit',
        'Pro45',
        'Step it up',
        'Weight Lifting',
        'Pro Cycling',
        'Aerobic',
        'Yoga Pilates',
        'Cardio Fitness',
      ],
      type : ['Personal', 'Group'],
      trainer_name : ['Najib Gans', 'Lutfika Cans'],
      time_type : ['1 Hari', '3 Hari', '1 Minggu', '1 Bulan', '3 Bulan', '6 Bulan', '1 Tahun'],
      start_time : ['09.00','10.00','11.00','12.00','13.00','14.00','15.00','16.00','17.00','18.00','19.00','20.00'],
      end_time : ['09.00','10.00','11.00','12.00','13.00','14.00','15.00','16.00','17.00','18.00','19.00','20.00'],
      dropdownOpen: false,
      dropdownOpen2: false,
      dropdownOpenType: false,
      dropdownOpenTrainer: false,
      dropdownOpenTimeType: false,
      dropdownOpenTimeStart : false,
      dropdownOpenTimeEnd : false,

      value : "Gender",
      value2 : "Gym Class",
      valueType : "Gym Type",
      valueTrainer : "Trainer Name",
      valueTimeType : "Long Time",
      valueTimeStart : "Time Start",
      valueTimeEnd : "Time End"
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.register = this.register.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggleType = this.toggleType.bind(this);
    this.toggleTrainer = this.toggleTrainer.bind(this);
    this.toggleTimeType = this.toggleTimeType.bind(this);
    this.toggleTimeStart = this.toggleTimeStart.bind(this);
    this.toggleTimeEnd = this.toggleTimeEnd.bind(this);

    this.select = this.select.bind(this);
    this.select2 = this.select2.bind(this);
    this.selectType = this.selectType.bind(this);
    this.selectTrainer = this.selectTrainer.bind(this);
    this.selectTimeType = this.selectTimeType.bind(this);
    this.selectTimeStart = this.selectTimeStart.bind(this);
    this.selectTimeEnd = this.selectTimeEnd.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
    }));
  }

  toggle2() {
    this.setState(prevState => ({
        dropdownOpen2: !prevState.dropdownOpen2
    }));
  }

  toggleType() {
    this.setState(prevState => ({
        dropdownOpenType: !prevState.dropdownOpenType
    }));
  }

  toggleTrainer() {
    this.setState(prevState => ({
        dropdownOpenTrainer: !prevState.dropdownOpenTrainer
    }));
  }

  toggleTimeType() {
    this.setState(prevState => ({
        dropdownOpenTimeType: !prevState.dropdownOpenTimeType
    }));
  }

  toggleTimeStart() {
    this.setState(prevState => ({
        dropdownOpenTimeStart: !prevState.dropdownOpenTimeStart
    }));
  }

  toggleTimeEnd() {
    this.setState(prevState => ({
        dropdownOpenTimeEnd: !prevState.dropdownOpenTimeEnd
    }));
  }

  select(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      value: event.target.innerText
    });
  }

  select2(event) {
    this.setState({
      dropdownOpen2: !this.state.dropdownOpen2,
      value2: event.target.innerText
    });
    console.log(this.state.value2,['asdsd'])
  }

  selectType(event) {
    this.setState({
      dropdownOpenType: !this.state.dropdownOpenType,
      valueType: event.target.innerText
    });
    console.log(this.state.valueType,['asdsd'])
  }
  
  selectTrainer(event) {
    this.setState({
      dropdownOpenTrainer: !this.state.dropdownOpenTrainer,
      valueTrainer: event.target.innerText
    });
    console.log(this.state.valueTrainer,['asdsd'])
  }

  selectTimeType(event) {
    this.setState({
      dropdownOpenTimeType: !this.state.dropdownOpenTimeType,
      valueTimeType: event.target.innerText
    });
    console.log(this.state.valueTimeType,['asdsd'])
  }

  selectTimeStart(event) {
    this.setState({
      dropdownOpenTimeStart: !this.state.dropdownOpenTimeStart,
      valueTimeStart: event.target.innerText
    });
    console.log(this.state.valueTimeStart,['asdsd'])
  }

  selectTimeEnd(event) {
    this.setState({
      dropdownOpenTimeEnd: !this.state.dropdownOpenTimeEnd,
      valueTimeEnd: event.target.innerText
    });
    console.log(this.state.valueTimeEnd,['asdsd'])
  }

  handleInputChange = (event) => {
    let key = event.target.name;
    let value = event.target.value;
    let model = {
      [key] : value,
    }
    console.log(this.state.value,['asd'])
    console.log(model)
    this.setState(model)
  }

  async register() {
    let newModel = {
      username : this.state.username,
      email : this.state.email,
      fullname : this.state.fullname,
      password : this.state.password,
      address : this.state.address,
      phone : this.state.phone,
      gender : this.state.value,
      gym_class : {
        title : this.state.value2,
        type : this.state.valueType,
        trainer_name : this.state.valueTrainer,
        time_type : this.state.valueTimeType,
        start_time : this.state.valueTimeStart,
        end_time : this.state.valueTimeEnd
      }
    }

    // alert(JSON.stringify(newModel))

    let token = window.localStorage.getItem('token');
    const baseUrl = "http://34.238.41.114:8081/api/users/register";

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
      return query
    } catch (error) {
      alert(error.message)  

    }
    
  }

  render() {
    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--8" fluid>
          <Row>

            <Col className="order-xl-1" xl="12">
              <Form role="form">
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
                                name="address"
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
                              <br/>
                               <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                  <DropdownToggle caret>
                                    {this.state.value}  
                                  </DropdownToggle>
                                  <DropdownMenu name="gender" onChange={this.handleInputChange} >
                                    {this.state.gender.map( res => (
                                      <DropdownItem onClick={this.select} >{res}</DropdownItem>                                      
                                    ))}
                                  </DropdownMenu>
                                </Dropdown>
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
                              <br/>
                               <Dropdown isOpen={this.state.dropdownOpen2} toggle={this.toggle2}>
                                  <DropdownToggle caret>
                                    {this.state.value2}  
                                  </DropdownToggle>
                                  <DropdownMenu name="gender" onChange={this.handleInputChange} >
                                    {this.state.title.map( res => (
                                      <DropdownItem onClick={this.select2} >{res}</DropdownItem>                                      
                                    ))}
                                  </DropdownMenu>
                                </Dropdown>
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
                              <br/>
                               <Dropdown isOpen={this.state.dropdownOpenType} toggle={this.toggleType}>
                                  <DropdownToggle caret>
                                    {this.state.valueType}  
                                  </DropdownToggle>
                                  <DropdownMenu name="gender" onChange={this.handleInputChange} >
                                    {this.state.type.map( res => (
                                      <DropdownItem onClick={this.selectType} >{res}</DropdownItem>                                      
                                    ))}
                                  </DropdownMenu>
                                </Dropdown>
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
                              <br/>
                               <Dropdown isOpen={this.state.dropdownOpenTrainer} toggle={this.toggleTrainer}>
                                  <DropdownToggle caret>
                                    {this.state.valueTrainer}  
                                  </DropdownToggle>
                                  <DropdownMenu onChange={this.handleInputChange} >
                                    {this.state.trainer_name.map( res => (
                                      <DropdownItem onClick={this.selectTrainer} >{res}</DropdownItem>                                      
                                    ))}
                                  </DropdownMenu>
                                </Dropdown>
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
                              <br/>
                               <Dropdown isOpen={this.state.dropdownOpenTimeType} toggle={this.toggleTimeType}>
                                  <DropdownToggle caret>
                                    {this.state.valueTimeType}  
                                  </DropdownToggle>
                                  <DropdownMenu onChange={this.handleInputChange} >
                                    {this.state.time_type.map( res => (
                                      <DropdownItem onClick={this.selectTimeType} >{res}</DropdownItem>                                      
                                    ))}
                                  </DropdownMenu>
                                </Dropdown>
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
                              <br/>
                               <Dropdown isOpen={this.state.dropdownOpenTimeStart} toggle={this.toggleTimeStart}>
                                  <DropdownToggle caret>
                                    {this.state.valueTimeStart}  
                                  </DropdownToggle>
                                  <DropdownMenu onChange={this.handleInputChange} >
                                    {this.state.start_time.map( res => (
                                      <DropdownItem onClick={this.selectTimeStart} >{res}</DropdownItem>                                      
                                    ))}
                                  </DropdownMenu>
                                </Dropdown>
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
                              <br/>
                               <Dropdown isOpen={this.state.dropdownOpenTimeEnd} toggle={this.toggleTimeEnd}>
                                  <DropdownToggle caret>
                                    {this.state.valueTimeEnd}  
                                  </DropdownToggle>
                                  <DropdownMenu onChange={this.handleInputChange} >
                                    {this.state.end_time.map( res => (
                                      <DropdownItem onClick={this.selectTimeEnd} >{res}</DropdownItem>                                      
                                    ))}
                                  </DropdownMenu>
                                </Dropdown>
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                      <div className="mt-3"></div>
                      <Button lg="6" color="primary" type="button" onClick={this.register}>Daftar</Button>                      
                  </CardBody>
                </Card>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Profile;

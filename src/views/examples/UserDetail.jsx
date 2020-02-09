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
  Container,
  Row,
  Col,Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from "reactstrap";
// core components
import UserHeader from "components/Headers/Header.jsx";
import Axios from "axios";

class UserDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username : '',
      email : '',
      fullname : '',
      password : '',
      address : '',
      phone : '',
      timeTypeOption : ['1 Hari', '3 Hari', '1 Minggu', '1 Bulan', '3 Bulan', '6 Bulan', '1 Tahun'],
      genderOption : ['Laki-Laki', 'Perempuan'],
      typeOption : ['Personal', 'Group'],
      startTimeOption : ['09.00','10.00','11.00','12.00','13.00','14.00','15.00','16.00','17.00','18.00','19.00','20.00'],
      endTimeOption : ['09.00','10.00','11.00','12.00','13.00','14.00','15.00','16.00','17.00','18.00','19.00','20.00'],
      titleOption : [
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
      trainerOption : ['Najib Gans', 'Lutfika Cans'],
      title : '',
      type : '',
      trainer_name : '',
      time_type : '',
      time_start : '',
      time_end : '',
      price : '',
      update : [],
      data : [],
      gym_class : {},
      value : "",
      dropdownOpen: false,
      dropdownTitle : false,
      dropdownOpenType: false,
      dropdownOpenTrainer: false,
      dropdownOpenTimeType: false,
      dropdownOpenTimeStart : false,
      dropdownOpenTimeEnd : false,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.update = this.update.bind(this);

    this.toggle = this.toggle.bind(this);
    this.toggleTitle = this.toggleTitle.bind(this);
    this.toggleType = this.toggleType.bind(this);
    this.toggleTrainer = this.toggleTrainer.bind(this);
    this.toggleTimeType = this.toggleTimeType.bind(this);
    this.toggleTimeStart = this.toggleTimeStart.bind(this);
    this.toggleTimeEnd = this.toggleTimeEnd.bind(this);

    this.select = this.select.bind(this);
    this.selectTitle = this.selectTitle.bind(this);
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

  toggleTitle() {
    this.setState(prevState => ({
        dropdownTitle: !prevState.dropdownTitle
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
      gender: event.target.innerText
    });
    console.log(this.state.gender)
  }


  selectTitle(event) {
    this.setState({
      dropdownTitle: !this.state.dropdownTitle,
      title: event.target.innerText
    });
    console.log(this.state.title)
  }

  selectType(event) {
    this.setState({
      dropdownOpenType: !this.state.dropdownOpenType,
      type: event.target.innerText
    });
    console.log(this.state.type,['asdsd'])
  }
  
  selectTrainer(event) {
    this.setState({
      dropdownOpenTrainer: !this.state.dropdownOpenTrainer,
      trainer_name: event.target.innerText
    });
    console.log(this.state.trainer_name,['asdsd'])
  }

  selectTimeType(event) {
    this.setState({
      dropdownOpenTimeType: !this.state.dropdownOpenTimeType,
      time_type: event.target.innerText
    });
    console.log(this.state.time_type,['asdsd'])
  }

  selectTimeStart(event) {
    this.setState({
      dropdownOpenTimeStart: !this.state.dropdownOpenTimeStart,
      time_start: event.target.innerText
    });
    console.log(this.state.time_start,['asdsd'])
  }

  selectTimeEnd(event) {
    this.setState({
      dropdownOpenTimeEnd: !this.state.dropdownOpenTimeEnd,
      time_end: event.target.innerText
    });
    console.log(this.state.time_end,['asdsd'])
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  async componentWillMount() {
    let token = window.localStorage.getItem('token');

    const baseUrl = "http://34.238.41.114:8081/api/users?id=";
    const headers = {
      'Authorization' : 'Bearer ' + token
    }

    let getUrlNow = window.location.href;
    let userId = getUrlNow.slice(35,59)
    
    await Axios.get(baseUrl + userId, {
      headers : headers
    }).then(response => {
      let model = {
        title : response.data.data.gym_class.title,
        type : response.data.data.gym_class.type,
        trainer_name : response.data.data.gym_class.trainer_name,
        time_type : response.data.data.gym_class.time_type,
        time_start : response.data.data.gym_class.start_time,
        time_end : response.data.data.gym_class.end_time
      }
      this.setState({ 
        data : response.data.data,
        username : response.data.data.username,
        email: response.data.data.email,
        fullname: response.data.data.fullname,
        password: response.data.data.password,
        address: response.data.data.address,
        phone: response.data.data.phone,
        gender: response.data.data.gender,
        gym_class : model,
        title : response.data.data.gym_class.title,
        type : response.data.data.gym_class.type,
        trainer_name : response.data.data.gym_class.trainer_name,
        time_type : response.data.data.gym_class.time_type,
        time_start : response.data.data.gym_class.start_time,
        time_end : response.data.data.gym_class.end_time,
        price : response.data.data.price
       })
    })
  }

  async delete () {
    let token = window.localStorage.getItem('token');

    const baseUrl = "http://34.238.41.114:8081/api/users/delete?id=";
    const headers = {
      'Authorization' : 'Bearer ' + token
    }

    let getUrlNow = window.location.href;
    let userId = getUrlNow.slice(35,59);

    await Axios.delete(baseUrl + userId, {
      headers : headers
    }).then(response => {
      alert('Sukses Hapus User')
      // window.location = "http://www.yoururl.com";
      document.location = '/admin/tables'
      return <Redirect to='/admin/tables' />
    })
  }

  async update() {
    let token = window.localStorage.getItem('token');
    const baseUrl = "http://34.238.41.114:8081/api/users/update?id=";
    const headers = {
      'Authorization' : 'Bearer ' + token
    }

    let getUrlNow = window.location.href;
    let userId = getUrlNow.slice(35,59)
    alert(baseUrl + userId)

    let newModel = {
      username : this.state.username,
      email : this.state.email,
      fullname : this.state.fullname,
      password : this.state.password,
      address : this.state.address,
      phone : this.state.phone,
      gender : this.state.gender,
      gym_class : {
        title : this.state.title,
        type : this.state.type,
        trainer_name : this.state.trainer_name,
        time_type : this.state.time_type,
        start_time : this.state.time_start,
        end_time : this.state.time_end
      }
    }
    console.log(newModel);

    try {
      Axios.put(baseUrl + userId, {
        headers : headers,
        body : newModel
      })

      alert('Sukses Update User');
    } catch (error) {
      alert(error.message)  
    }
  }

  convertToRupiah(angka) {
    var rupiah = '';		
    var angkarev = angka.toString().split('').reverse().join('');
    for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
    return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
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
                        <h3 className="mb-0">Edit User</h3>
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
                                defaultValue={this.state.data.username}
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
                                defaultValue={this.state.data.email}
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
                                defaultValue={this.state.data.fullname}
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
                                defaultValue={JSON.stringify(this.state.data.password)}
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
                                defaultValue={this.state.data.address}
                                className="form-control-alternative"
                                rows="4"
                                placeholder="Home Address"
                                name="address"
                                type="text"
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
                                defaultValue={this.state.data.phone}
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
                                    {this.state.gender}  
                                  </DropdownToggle>
                                  <DropdownMenu name="gender" onChange={this.handleInputChange} >
                                    {this.state.genderOption.map( res => (
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
                                <Dropdown isOpen={this.state.dropdownTitle} toggle={this.toggleTitle}>
                                  <DropdownToggle caret>
                                    {this.state.title}  
                                  </DropdownToggle>
                                  <DropdownMenu name="gender" onChange={this.handleInputChange} >
                                    {this.state.titleOption.map( res => (
                                      <DropdownItem onClick={this.selectTitle} >{res}</DropdownItem>                                      
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
                                    {this.state.type}  
                                  </DropdownToggle>
                                  <DropdownMenu name="gender" onChange={this.handleInputChange} >
                                    {this.state.typeOption.map( res => (
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
                                    {this.state.trainer_name}  
                                  </DropdownToggle>
                                  <DropdownMenu name="gender" onChange={this.handleInputChange} >
                                    {this.state.trainerOption.map( res => (
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
                                    {this.state.time_type}  
                                  </DropdownToggle>
                                  <DropdownMenu name="gender" onChange={this.handleInputChange} >
                                    {this.state.timeTypeOption.map( res => (
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
                                    {this.state.time_start}  
                                  </DropdownToggle>
                                  <DropdownMenu name="gender" onChange={this.handleInputChange} >
                                    {this.state.startTimeOption.map( res => (
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
                                    {this.state.time_end}  
                                  </DropdownToggle>
                                  <DropdownMenu name="gender" onChange={this.handleInputChange} >
                                    {this.state.endTimeOption.map( res => (
                                      <DropdownItem onClick={this.selectTimeEnd} >{res}</DropdownItem>                                      
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
                                Price
                              </label>
                              <Input
                                className="form-control-alternative disabled"
                                placeholder={this.convertToRupiah(this.state.price)}
                                type="text"
                                name="price"
                                disabled="true"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                      <div className="mt-3"></div>
                      <Button lg="6" color="primary" type="button" onClick={this.update}>Update</Button>   
                      <Button lg="6" color="red" type="button" onClick={this.delete}>Delete</Button>                      
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

export default UserDetail;

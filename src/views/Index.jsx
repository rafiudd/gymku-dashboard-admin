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
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

import Header from "components/Headers/Header.jsx";
import Axios from "axios";

class Index extends React.Component {
  state = {
    activeNav: 1,
    chartExample1Data: "data1",
    countUser : '',
    countValue : ''
  };
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
    let wow = () => {
      console.log(this.state);
    };
    wow.bind(this);
    setTimeout(() => wow(), 1000);
    // this.chartReference.update();
  };

  async componentWillMount() {
    let token = window.localStorage.getItem('token');
  
    const baseUrl = "http://34.238.41.114:8081/api/dashboard";
    const headers = {
      'Authorization' : 'Bearer ' + token
    }
     
    await Axios.get(baseUrl, {
      headers
    }).then(response => {
      this.setState({
        countUser : response.data.data.countUser,
        countValue : response.data.data.countPrice
      })
    })
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
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col xl="4">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-muted ls-1 mb-1">
                        Users
                      </h6>
                      <h2 className="mb-0">Total Users</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  <h1>{this.state.countUser}</h1>
                </CardBody>
              </Card>
            </Col>
            <Col xl="8">
              <Card className="shadow bg-gradient">
                <CardHeader className="bg-gradient-default">
                  <Row className="align-items-center bg-gradient-default">
                    <div className="col">
                      <h6 className="text-uppercase text-muted ls-1 mb-1">
                        Users
                      </h6>
                      <h2 className="mb-0 text-white">Total Value</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  <h1>{this.convertToRupiah(this.state.countValue)}</h1>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Index;

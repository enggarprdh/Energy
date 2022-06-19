import React, {Component} from "react";
import {Card, CardBody, Container, Row, Col, CardTitle, Spinner} from "reactstrap";
import Etext from "../components/eText";
import Ebutton from "../components/eButton";

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: "",
            password : "",
            isDone: true
        }
    }    

    doLogin = async () => {
        this.setState({isDone : false})
        // alert("username : " + this.state.username + " password : " + this.state.password);
        setTimeout(() => {
            this.setState({isDone : true})
        },5000)
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <br/><br/><br/><br/>
                        &nbsp;
                    </Row>
                    <Row>
                        <br/>
                        &nbsp;
                    </Row>
                    <Row>
                        <br/>
                        &nbsp;
                    </Row>
                    <Row>
                        <Col md="3"></Col>
                        <Col md="6">
                                <Card
                                    body 
                                    className={"shadow-sm p-3 mb-5 bg-white rounded"}>
                                    <CardBody>
                                      <Container>
                                        <Row>
                                            <Col sm="2"></Col>
                                            <Col sm="8">
                                                <center><b><h3>EnergyWeb</h3></b></center>
                                            </Col>
                                            <Col sm="2"></Col>
                                        </Row>
                                        <Row>
                                            <Col sm="12">
                                                <Etext value={this.state.username} onChange={(e)=> {this.setState({username : e.target.value})}} id="username" label="Username" type="text"/>
                                                <Etext value={this.state.password} onChange={(e)=> {this.setState({password : e.target.value})}} id="password" label="Password" type="password"/>
                                                {this.state.isDone?<Ebutton event={this.doLogin} displayText="Login" block={true} size="large"/>:<center><Spinner color="primary"></Spinner></center>}
                                            </Col>
                                        </Row>
                                     </Container>  
                                    </CardBody>
                                </Card>        
                        </Col>
                        <Col md="3"></Col>
                    </Row>
                </Container>
                
            </div>
        
        )
            
    }
}

export default Login;
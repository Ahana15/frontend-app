import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import {   
    ResponsiveSidebar,
    LeftSidebar,
    Footer,
    CustomSnackbar,
     } from './../../components';
import { minHeight } from '@material-ui/system';



export default class Payments extends Component {

    constructor(props){
        super(props);
        this.state = {
           
            isAlertVisible : false,
            alertType:'',
            alertMessage:''
        };

        this.showAlert = this.showAlert.bind(this);
        this.dismissAlert = this.dismissAlert.bind(this);
    }

    showAlert(message, type){
        this.setState({ alertMessage:message, alertType:type, isAlertVisible:true });
    }

    dismissAlert(){
        this.setState({ isAlertVisible: false });
    }

    



    render() {

        const { isAlertVisible, alertType, alertMessage } = this.state;
        return (
            <div>

            <div className="navigation d-lg-none d-sm">
                    <ResponsiveSidebar  history={this.props.history} />
            </div>

            <div className="dashboard-container">
                <CustomSnackbar open={isAlertVisible} variant={alertType} message={alertMessage} onClose={this.dismissAlert}></CustomSnackbar>
                <div className="navigation d-none d-lg-block">
                    <LeftSidebar history={this.props.history} />
                </div>
                <Container fluid={true}  className="content-wrapper" id="content-div">
                    <Container>
                    <div className="page-content" style={{minHeight:"100%"}}>

                           InProgress

                        
                    </div>

                    </Container>
            
                    <Row><Col lg={12} md={12} sm={12} className="footer-container"><Footer history={this.props.history} /></Col></Row>

                </Container>
                
                
            </div>
            </div>
        )
    }
}

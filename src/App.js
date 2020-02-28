import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon,
  MDBAlert
} from 'mdbreact';

class FullPageIntroWithFixedNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar color="indigo" dark expand="md" fixed="top">
              <MDBNavbarBrand href="/">
                <strong>Navbar</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="#">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="./components/Home.js">Link</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Profile</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>

          <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(50).jpg">
            <MDBMask overlay="black-light" pattern={8} className="flex-center text-white text-center">
              <MDBContainer>
                <MDBRow>
                  <MDBCol md='4'>
                    <MDBCard>
                      <MDBCardImage
                        hover
                        overlay='white-light'
                        className='card-img-top'
                        src='./images/jr.jpg'
                        alt='man'
                        height='230'
                      />


                      <MDBCardBody cascade className='text-center'>
                        <MDBCardTitle className='card-title'>
                          <strong>JAMES REID</strong>
                        </MDBCardTitle>
                        <h5 className='pink-text'>
                          <MDBIcon icon='id-badge' /> 17005365
            </h5>
                        <p className='font-weight-bold blue-text'>BMMA</p>

                        <MDBCardText>
                          Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.<br></br>
                          <MDBAlert color="success" >{'CLEARED '}</MDBAlert>
                        </MDBCardText>

                        <MDBCol md='12' className='d-flex justify-content-center'>
                          <a href='!#' className='px-2 fa-lg li-ic'>
                            <MDBIcon fab icon='linkedin-in'></MDBIcon>
                          </a>

                          <a href='!#' className='px-2 fa-lg tw-ic'>
                            <MDBIcon fab icon='twitter'></MDBIcon>
                          </a>

                          <a href='!#' className='px-2 fa-lg fb-ic'>
                            <MDBIcon fab icon='facebook-f'></MDBIcon>
                          </a>
                        </MDBCol>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>

                  <MDBCol md='4'>
                    <MDBCard>
                      <MDBCardImage
                        hover
                        overlay='white-light'
                        className='card-img-top'
                        src='./images/dp.jpg'
                        alt='man'
                        height='230'
                      />


                      <MDBCardBody cascade className='text-center'>
                        <MDBCardTitle className='card-title'>
                          <strong>DANIEL PADILLA</strong>
                        </MDBCardTitle>
                        <h5 className='pink-text'>
                          <MDBIcon icon='id-badge' /> 17005256
            </h5>
                        <p className='font-weight-bold blue-text'>BSEMC</p>

                        <MDBCardText>
                          Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.<br></br>
                          <MDBAlert color="danger" >{'PROCEEED TO GUIDANCE '}</MDBAlert>
                        </MDBCardText>

                        <MDBCol md='12' className='d-flex justify-content-center'>
                          <a href='!#' className='px-2 fa-lg li-ic'>
                            <MDBIcon fab icon='linkedin-in'></MDBIcon>
                          </a>

                          <a href='!#' className='px-2 fa-lg tw-ic'>
                            <MDBIcon fab icon='twitter'></MDBIcon>
                          </a>

                          <a href='!#' className='px-2 fa-lg fb-ic'>
                            <MDBIcon fab icon='facebook-f'></MDBIcon>
                          </a>
                        </MDBCol>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>

                  <MDBCol md='4'>
                    <MDBCard>
                      <MDBCardImage
                        hover
                        overlay='white-light'
                        className='card-img-top'
                        src='https://mdbootstrap.com/img/Photos/Others/men.jpg'
                        alt='man'
                      />


                      <MDBCardBody cascade className='text-center'>
                        <MDBCardTitle className='card-title'>
                          <strong>Billy Coleman</strong>
                        </MDBCardTitle>
                        <h5 className='pink-text'>
                          <MDBIcon icon='id-badge' /> 17005235
            </h5>
                        <p className='font-weight-bold blue-text'>BSCS</p>

                        <MDBCardText>
                          Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.<br></br>
                          <MDBAlert color="danger" >{'PROCEEED TO REGISTRAR"S OFFICE '}</MDBAlert>
                        </MDBCardText>

                        <MDBCol md='12' className='d-flex justify-content-center'>
                          <a href='!#' className='px-2 fa-lg li-ic'>
                            <MDBIcon fab icon='linkedin-in'></MDBIcon>
                          </a>

                          <a href='!#' className='px-2 fa-lg tw-ic'>
                            <MDBIcon fab icon='twitter'></MDBIcon>
                          </a>

                          <a href='!#' className='px-2 fa-lg fb-ic'>
                            <MDBIcon fab icon='facebook-f'></MDBIcon>
                          </a>
                        </MDBCol>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBMask>
          </MDBView>
        </header>


      </div>
    );
  }
}

export default FullPageIntroWithFixedNavbar;
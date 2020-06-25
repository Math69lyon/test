import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../App.css';


const Footer = () => {
  return (
      <div className="footer">
      <div style={{backgroundColor: "rgb(196,196,106)"}}>

        <MDBFooter color="blue" className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="6">
                <p>
                  <h2>contact</h2>
                </p>
              </MDBCol>
              <MDBCol md="6">
                <a href="https://facebook.com" title="Come to our Facebook page !" target="_blank"><img src="/Logos/facebook.jpg" alt="facebook"/></a>
                <a href="https://instagram.com" title="Follow us on Instagram !" target="_blank"><img src="/Logos/instagram.jpeg" alt="instagram"/></a>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBFooter>
      </div>
      </div>
  );
}



export default Footer;
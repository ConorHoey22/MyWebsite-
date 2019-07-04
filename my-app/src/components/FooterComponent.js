import React, { Component } from 'react';

import { Table } from 'reactstrap';
import './footer.css';
class FooterComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  getContainerStyle = () => {
    return {
      position: 'fixed-bottom',

      backgroundColor: '#23222e',
      color: '#66fcf1',
      width: '100%',
      height: '100%'
    };
  };

  getStyle = () => {
    return {
      // width: '100%',
      //height: '1px',
      // position: 'absolute',
      // bottom: '-20%',
      padding: '1px',
      margin: '1px',
      fontSize: '15px'
      // backgroundColor: 'black',
      // width: '100%'
    };
  };

  render() {
    return (
      <div className='footer' style={this.getContainerStyle()}>
        <div className='contactLinks' style={this.getContainerStyle()}>
          <Table style={this.getContainerStyle()}>
            <thead style={this.getStyle()}>
              <tr style={this.getStyle()}>
                <th className='text-left' style={this.getStyle()}>
                  <p> &nbsp;&nbsp;&nbsp;Follow us!</p>
                </th>
                <th className='text-right' style={this.getStyle()}>
                  <p> Contact us! &nbsp;&nbsp;&nbsp;</p>
                </th>
              </tr>
            </thead>
            <tbody style={this.getContainerStyle()}>
              <tr>
                <td className='text-left' id='text-left'>
                  <p>
                    <i
                      className='fab fa-facebook fa-2x'
                      id='facebook'
                      href=''
                    />
                    &nbsp;&nbsp;&nbsp; Facebook
                  </p>

                  <p>
                    <i className='fab fa-twitter fa-2x' href='' />{' '}
                    &nbsp;&nbsp;&nbsp; Twitter
                  </p>
                  <p>
                    <i className='fab fa-instagram fa-2x' href='' />{' '}
                    &nbsp;&nbsp;&nbsp; Instagram
                  </p>
                  <p>
                    <i className='fab fa-linkedin fa-2x' href='' />{' '}
                    &nbsp;&nbsp;&nbsp; Linkedin
                  </p>
                </td>

                <td className='text-right'>
                  Need a website or have an app idea?
                  <br />
                  <br />
                  Send us a message to one of our social medias or send us an
                  email!
                  <br />
                  <br />
                  <i className='fas fa-envelope fa-2x' /> hoeytech@outlook.com
                </td>
              </tr>
            </tbody>
          </Table>

          <div className='footerContent' style={this.getContainerStyle()}>
            {/* MAY NEED  UPDATE THESE DETIALs , rig  */}
            <p>© 2019 HoeyTech - All Rights Reserved</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterComponent;

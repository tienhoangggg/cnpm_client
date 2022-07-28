import axios from 'axios';
import './upload.css'
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import setCookie from "../../hooks/setCookie";
import getCookie from "../../hooks/getCookie";
import removeCookie from "../../hooks/removeCookie";
import FooterWibu from '../../components/FooterWibu';
import NavbarWibu from "../../components/NavbarWibu";
import CheckBoxTag from '../../components/CheckBoxTag';
class Upload extends Component {
  state = {
    selectedFile: null
  };
  onFileChange = event => {
    this.setState({ selectedFile: event.target.files[0] });
  };


  onFileUpload = () => {
    const formData = new FormData();
    formData.append(
      'image',
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    console.log(this.state.selectedFile);
    axios.post("api/uploadfile", formData);
  };


  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2 style={{ color: 'yellow' }}>File details</h2>

          <p style={{ color: 'yellow' }}>File Name: {this.state.selectedFile.name}</p>
          <p style={{ color: 'yellow' }}>File Type: {this.state.selectedFile.type}</p>

        </div>
      );
    } else {
      return (
        <div style={{ color: 'yellow', textAlign: 'center' }}>
          Please choose your file before tap the upload button
          <br />
          <br />
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <NavbarWibu />
        <div className="row justify-content-center" id="featuredText">
          Upload your wonderful wallpaper now!
        </div>
        <div className='field'>
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>
            Upload!
          </button>
        </div>
        {this.fileData()}
        <CheckBoxTag />
        <div className="fixed-bottom">
          <FooterWibu />
        </div>
      </div>
    );
  }
}
export default Upload;
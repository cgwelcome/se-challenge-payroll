import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//components
import Navbar from './components/Navbar';
import Report from './components/Report';
//material-UI
import Button from '@material-ui/core/Button';
//redux
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';


class App extends Component {

  handleFileUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('EntryFile', file, file.name);
    axios.post('/entries/uploadFile', formData).then(() => {
      window.location.reload();
    }).catch(err => console.log(err));
  };

  handleClick = () => {
    const fileInput = document.getElementById('upload-file');
    fileInput.click();
  };
  
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <div className="container">
            <input accept="image/*" hidden="hidden" multiple type="file" id="upload-file" onChange={this.handleFileUpload} />
            <Button variant="contained" onClick={this.handleClick} component="span">
              Upload
            </Button>
            <hr color="white" />
            <Report className="report" />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

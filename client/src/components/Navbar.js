import React, { Component} from 'react';
//Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class Navbar extends Component {
    render() {
        return (
            <div>
                <AppBar>
                    <Toolbar className="nav-container">
                        <div color="white">Wave Payroll System</div>
                    </Toolbar> 
                </AppBar>
            </div>
        )
    }
}

export default Navbar;
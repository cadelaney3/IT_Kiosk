import React from 'react';
import List from './List';
import Form from './Form.jsx';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        flexGrow: 1,
    },
};

const App = () => (
    <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
        <AppBar position='static' color='primary'>
            <Toolbar>
                <Typography variant='h6' color='default'>
                    IT Check-In Kiosk
                </Typography>
            </Toolbar>
        </AppBar> 
        <List />
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>Add a new article</h2>
            <Form />
        </div>
    </div>
);

export default App;
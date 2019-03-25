import React from 'react';
//import List from './List';
//import Form from './Form.jsx';
import SearchAppBar from './AppBar';
import SignIn from './SignIn'
//import Paper from '@material-ui/core/Paper';
//import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    layout: {
        width: 'auto',
        display: 'block',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit *3,
        [theme.breakpoints.up(400 + theme.spacing.unit *3 *2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 * theme.spacing.unit *3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3,
        },
    },

});

const App = () => (
    <main className={styles.layout}>
        <SearchAppBar />
        <SignIn />
    </main>
);

export default App;
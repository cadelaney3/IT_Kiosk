import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { inputID } from '../actions/index';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import green from '@material-ui/core/colors/green';


const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing.unit,
    },
});
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: { useNextVariants: true },
});

function mapDispatchToProps(dispatch) {
    return {
        inputID: id => dispatch(inputID(id))
    };
}

class ConnectedForm extends Component {
    constructor() {
        super();

        this.state = {
            title: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const id = uuidv1();
        this.props.inputID({ title, id });
        this.setState({ title: ''});
    }

    render() {
        const { title } = this.state;
      //  const { classes } = props;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <MuiThemeProvider theme={theme}>
                        <TextField
                            className={styles.margin}
                            label="MuiThemeProvider"
                            variant="outlined"
                            id="title"
                            value={ title }
                            onChange={this.handleChange}
                        />
                    </MuiThemeProvider>
                </div>
                <Button variant="contained" color="primary" type="submit">
                    SAVE
                </Button>
            </form>
        );
    }
}

const Form = connect(null, mapDispatchToProps) (ConnectedForm);

export default Form;
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import classNames from 'classnames';
import Select from 'react-select';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import CancelIcon from '@material-ui/icons/Cancel';
import { emphasize } from '@material-ui/core/styles/colorManipulator';

import  chris from './mugshot.jpg';

const suggestions = [
  { label: 'Delaney, Chris' },
  { label: 'Teshome, Ish' },
  { label: 'McKee, Zach' },
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}));

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
    marginRight: '10px',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  root: {
    flexGrow: 1,
    height: 250,
  },
    input: {
    display: 'flex',
    padding: 0,
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16,
  },
  paper2: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
});

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

function Option(props) {
  //const { classes } = props;
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={chris} style={{marginRight: '10px'}} />
      </ListItemAvatar>
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function SingleValue(props) {
  return (
      <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
        {props.children}
      </Typography>
  );
}

function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused,
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}

function Menu(props) {
  return (
    <Paper square className={props.selectProps.classes.paper2} {...props.innerProps}>
      {props.children}
    </Paper>
  );
}
/*
function MenuItemComposition(props) {
  const { classes } = props;

  return (
      <MenuList>
        <MenuItem className={classes.menuItem}>
          <ListItemAvatar className={classes.icon}>
            <Avatar alt="Chris Delaney" src="../../mugshot.jpg" />
          </ListItemAvatar>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Sent mail" />
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Drafts" />
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Inbox" />
        </MenuItem>
      </MenuList>
  );
}
*/
const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};


class SignIn extends React.Component {
  state = {
    single: null,
    multi: null,
    open: false,
  };

  handleChange = name => value => {
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  //const { NestedList } = new NestedList(props);
  render() {
    
    const { classes, theme } = this.props;

    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
        '& input': {
          font: 'inherit',
        },
      }),
    };

    return (
        <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign in
            </Typography>
            <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">ID number</InputLabel>
                <Input id="email" name="email" autoComplete="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <NoSsr>
                <Select
                  classes={classes}
                  styles={selectStyles}
                  options={suggestions}
                  components={components}
                  value={this.state.single}
                  onChange={this.handleChange('single')}
                  placeholder="Search IT Employees"
                  isClearable
                />
              </NoSsr>
            </FormControl>
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Sign in
            </Button>
            </form>
        </Paper>
        </main>
    );
    }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};



export default withStyles(styles, { withTheme: true })(SignIn);
//export default withStyles(styles)(SignIn);
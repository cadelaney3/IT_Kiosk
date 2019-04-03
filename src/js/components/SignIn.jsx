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
import BrianAdamson from './ITSEmployees/brianA.jpg';
import RaulAlvarez from './ITSEmployees/raul.jpg';
import MitchellAndrews from './ITSEmployees/mitchell.jpg';
import ChrisBecker from './ITSEmployees/chris.jpg';
import StevenBjerken from './ITSEmployees/steve.jpg';
import TomBuck from './ITSEmployees/tom.jpg';
import GordonCarolan from './ITSEmployees/Gordon.jpg';
import ScottCarpenter from './ITSEmployees/scottC.jpg';
import RebeccaChesterman from './ITSEmployees/rebecca.jpg';
import SeanCochrane from './ITSEmployees/sean.jpg';
import JimCoombes from './ITSEmployees/jim.jpg';
import RogerCoston from './ITSEmployees/rogerCOS.jpg';
import RogerCummings from './ITSEmployees/rogerCu.jpg.png';
//import DwayneDavis from './ITSEmployees/'
import MattDavis from './ITSEmployees/mattD.jpg';
import KimDayot from './ITSEmployees/kim.jpg';
import KristiDuenas from './ITSEmployees/kristi.jpg';
import RichardFallstrom from './ITSEmployees/richard.jpg';
import LeifForrest from './ITSEmployees/leif.jpg';
import JasonGilman from './ITSEmployees/jasonG.jpg';
import JesseGlaves from './ITSEmployees/jesse.jpg';
import LaurieHanlon from './ITSEmployees/laurie.jpg';
import BetsyHooper from './ITSEmployees/betsy1.jpg';
import KaraHughes from './ITSEmployees/kara.jpg';
import RyanneJones from './ITSEmployees/ryanne.jpg';
import MikeLavoie from './ITSEmployees/michaelL.jpg';
import ScottMacGregor from './ITSEmployees/scottMac.jpg';
import RonMahan from './ITSEmployees/ron.jpg';
import DanMarx from './ITSEmployees/DanM.jpg';
import EricMoss from './ITSEmployees/eric.jpg';
import JeffNelson from './ITSEmployees/jeff.jpg';
import DarrenOwsley from './ITSEmployees/darren.jpg';
import LarryPerkins from './ITSEmployees/larry.jpg';
import RickRasmussen from './ITSEmployees/rick1.jpg';
import RJRiley from './ITSEmployees/rj.jpg';
import WadeSase from './ITSEmployees/wade.jpg';
import VipulSaxena from './ITSEmployees/vipul.jpg';
import StephanieSchut from './ITSEmployees/stephanie.jpg';
import SatishShrestha from './ITSEmployees/satish1.jpg';
import CassandraSlagg from './ITSEmployees/cassandra.jpg';
import LyleSpencer from './ITSEmployees/lyle.jpg';
import TylerSpilker from './ITSEmployees/tyler.jpg';
import DanStGeorge from './ITSEmployees/danSG.jpg';
import ChelseaTaua from './ITSEmployees/chelsea.jpg';
import IshTeshome from './ITSEmployees/ismael.jpg';
import JulieTibbs from './ITSEmployees/julie.jpg';
import RobTomlinson from './ITSEmployees/RobT.jpg';
import MichikoTra from './ITSEmployees/michiko.jpg';
import WilliamTuinenga from './ITSEmployees/will.jpg';
import JoeTurner from './ITSEmployees/Joe.jpg';
import KaiUahinui from './ITSEmployees/kai.jpg';
import BorreUlrichsen from './ITSEmployees/borre.jpg';
import MichaelWhalen from './ITSEmployees/whalen.jpg';
import MarekZaranski from './ITSEmployees/marek.jpg';


import log from './log.csv';


const suggestions = [
  { name: 'Adamson, Brain', label: renderOption('Adamson, Brian', 'Support Technician II', 'adamsonb@gonzaga.edu', BrianAdamson) },
  { name: 'Alvarez, Raul', label: renderOption('Alvarez, Brain', 'Web Applications & Mobile Dev II', 'alvarezr@gonzaga.edu', RaulAlvarez)},
  { name: 'Andrews, Mitchell', label: renderOption('Andrews, Mitchell', 'Support Technician I', 'andrewsm@gonzaga.edu', MitchellAndrews) },
  { name: 'Becker, Chris', label: renderOption('Becker, Chris', 'Infrastructure Engineer I', 'becker@gonzaga.edu', ChrisBecker) },
  { name: 'Bjerken, Steven', label: renderOption('Bjerken, Steven', 'Information Security Engineer', 'bjerken@gonzaga.edu', StevenBjerken) },
  { name: 'Buck, Tom', label: renderOption('Buck, Tom', 'Infrastructure Architect', 'buck@gonzaga.edu', TomBuck) },
  { name: 'Carolan, Gordon', label: renderOption('Carolan, Gordan', 'Infrastructure Administator II', 'carolan@gonzaga.edu', GordonCarolan) },
  { name: 'Carpenter, Scott', label: renderOption('Carpenter, Scott', 'Support Technician I', 'carpenters@gonzaga.edu', ScottCarpenter) },
  { name: 'Chesterman, Rebecca', label: renderOption('Chesterman, Rebecca', 'Support Technician III', 'chesterman@gonzaga.edu', RebeccaChesterman) },
  { name: 'Cochrane, Sean', label: renderOption('Cochrane, Sean', 'Infrastructure Engineer I', 'cochranes@gonzaga.edu', SeanCochrane) },
  { name: 'Coombres, Jim', label: renderOption('Coombes, Jim', 'Infrastructure Admin III', 'coombesj@gonzaga.edu', JimCoombes) },
  { name: 'Coston, Roger', label: renderOption('Coston, Roger', 'Enterprise Application/SQL Server DBA', 'coston@gonzaga.edu', RogerCoston) },
  { name: 'Cummings, Roger', label: renderOption('Cummings, Roger', 'Asst. Dir. of Infrastructure Engineering', 'cummings@gonzaga.edu', RogerCummings) },
  { name: 'Davis, Dwayne', label: renderOption('Davis, Dwayne', 'Project Manager, Consultant', 'davisd2@gonzaga.edu', chris) },
  { name: 'Davis, Matt', label: renderOption('Davis, Matt', 'Enterprise App Developer II', 'davisd2@gonzaga.edu', MattDavis) },
  { name: 'Dayot, Kim', label: renderOption('Dayot, Kim', 'Intranet Administrator', 'dayot@gonzaga.edu', KimDayot) },
  { name: 'Duenas, Kristi', label: renderOption('Duenas, Kristi', 'Enterprise Content Management Dev', 'duenask@gonzaga.edu', KristiDuenas) },
  { name: 'Fallstrom, Richard', label: renderOption('Fallstrom, Richard', 'Infrastructure Admin II - Network', 'fallstromr@gonzaga.edu', RichardFallstrom) },
  { name: 'Forrest, Leif', label: renderOption('Forrest, Leif', 'Industry Technician III', 'forrest@gonzaga.edu', LeifForrest) },
  { name: 'Gilman, Jason', label: renderOption('Gilman, Jason', 'IT Asset Release Admin', 'gilman@gonzaga.edu', JasonGilman) },
  { name: 'Glaves, Jesse', label: renderOption('Glaves, Jesse', 'Enterprise Web Developer II', 'glaves@gonzaga.edu', JesseGlaves) },
  { name: 'Hanlon, Laurie', label: renderOption('Hanlon, Laurie', 'IT Budget and Vendor Manager', 'hanlon@gonzaga.edu', LaurieHanlon) },
  { name: 'Hooper, Betsy', label: renderOption('Hooper, Betsy', 'Senior Project Manager/Business Analyst', 'hooper@gonzaga.edu', BetsyHooper) },
  { name: 'Hughes, Kara', label: renderOption('Hughes, Kara', 'SharePoint Administrator', 'hughesk@gonzaga.edu', KaraHughes) },
  { name: 'Jones, Ryanne', label: renderOption('Jones, Ryanne', 'Infrastructure Engineer II', 'jonesr@gonzaga.edu', RyanneJones) },
  { name: 'Lavoie, Mike', label: renderOption('Lavoie, Mike', 'Infrastructure Adminstrator', 'lavoie@gonzaga.edu', MikeLavoie) },
  { name: 'MacGregor, Scott', label: renderOption('MacGregor, Scott', 'Infrastructure Administrator II', 'macgregor@gonzaga.edu', ScottMacGregor) },
  { name: 'Mahan, Ron', label: renderOption('Mahan, Ron', 'Multimedia Engineer', 'mahan@gonzaga.edu', RonMahan) },
  { name: 'Marx, Dan', label: renderOption('Marx, Dan', 'Project Manager/Business Analyst', 'marx@gonzaga.edu', DanMarx) },
  { name: 'Moss, Eric', label: renderOption('Moss, Eric', 'Interim Asst. Dir. of Infrastructure Operations', 'mosse@gonzaga.edu', EricMoss) },
  { name: 'Nelson, Jeff', label: renderOption('Nelson, Jeff', 'Information Security Officer', 'nelsonj3@gonzaga.edu', JeffNelson) },
  { name: 'Owsley, Darren', label: renderOption('Owsley, Darren', 'Chief Technology Officer', 'owsley@gonzaga.edu', DarrenOwsley) },
  { name: 'Perkins, Larry', label: renderOption('Perkins, Larry', 'Infrastructure Architect', 'perkins@gonzaga.edu', LarryPerkins) },
  { name: 'Rasmussen, Rick', label: renderOption('Rasmussen, Rick', 'Associate Dir. Technology Education Services', 'rasmussenr@gonzaga.edu', RickRasmussen) },
  { name: 'Riley, RJ', label: renderOption('Riley, RJ', 'Support Technician III', 'rileyr@gonzaga.edu', RJRiley) },
  { name: 'Sase, Wade', label: renderOption('Sase, Wade', 'Infrastructure Administrator II - Windows', 'sase@gonzaga.edu', WadeSase) },
  { name: 'Saxena, Vipul', label: renderOption('Saxena, Vipul', 'Asst. Dir. of Enterprise Resources & Planning Services', 'saxena@gonzaga.edu', VipulSaxena) },
  { name: 'Schut, Stephanie', label: renderOption('Schut, Stephanie', 'Director of IT Project Management Office', 'schut@gonzaga.edu', StephanieSchut) },
  { name: 'Shrestha, Satish', label: renderOption('Shrestha, Satish', 'Enterprise Application Dev I', 'shrestha@gonzaga.edu', SatishShrestha) },
  { name: 'Slagg, Cassandra', label: renderOption('Slagg, Cassandra', 'Director of IT Service Experience', 'slagg@gonzaga.edu', CassandraSlagg) },
  { name: 'Spencer, Lyle', label: renderOption('Spencer, Lyle', 'Data Warehouse Adminstrator', 'spencer@gonzaga.edu', LyleSpencer) },
  { name: 'Spilker, Tyler', label: renderOption('Spilker, Tyler', 'Senior Linux System Administrator', 'spilkert@gonzaga.edu', TylerSpilker) },
  { name: 'St. George, Dan', label: renderOption('St. George, Dan', 'Infrastructure Admin II - SCCM', 'stgeorge@gonzaga.edu', DanStGeorge) },
  { name: 'Tau\'a, Chelsea', label: renderOption('Tau\'a, Chelsea', 'Technology Trainer', 'taua@gonzaga.edu', ChelseaTaua) },
  { name: 'Teshome, Ishmael', label: renderOption('Teshome, Ishmael', 'Next Gen Tech Bar Lead', 'teshomee@gonzaga.edu', IshTeshome) },
  { name: 'Tibbs, Julie', label: renderOption('Tibbs, Julie', 'Administrative Assistant', 'tibbs@gonzaga.edu', JulieTibbs) },
  { name: 'Tomlinson, Rob', label: renderOption('Tomlinson, Rob', 'Enterprise Web Developer III', 'tomlinson@gonzaga.edu', RobTomlinson) },
  { name: 'Tra, Michiko', label: renderOption('Tra, Michiko', 'Enterprise Application Developer III', 'tra@gonzaga.edu', MichikoTra) },
  { name: 'Tuinenga, William', label: renderOption('Tuinenga, William', 'Support Technician II', 'tuinengaw@gonzaga.edu', WilliamTuinenga) },
  { name: 'Turner, Joe', label: renderOption('Turner, Joe', 'Infrastructure Admin II - Accounts Management', 'turnerj@gonzaga.edu', JoeTurner) },
  { name: 'Uahinui, Kai', label: renderOption('Uahinui, Kai', 'Database Administrator & ERP Architect', 'uahinui@gonzaga.edu', KaiUahinui) },
  { name: 'Ulrichsen, Borre', label: renderOption('Ulrichsen, Borre', 'Chief Information Officer', 'ulrichsen@gonzaga.edu', BorreUlrichsen) },
  { name: 'Whalen, Michael', label: renderOption('Whalen, Michael', 'IT Support Center Manager', 'whalen@gonzaga.edu', MichaelWhalen) },
  { name: 'Zaranski, Marek', label: renderOption('Zaranski, Marek', 'Support Technician I', 'zaranskim@gonzaga.edu', MarekZaranski) },
].map(suggestion => ({
  //value: renderOption(suggestion.label, suggestion.image, suggestion.email),
  value: suggestion.name,
  label: suggestion.label,
  //email: suggestion.email,
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
    overflow: 'auto',
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

function renderOption(person, position, email, image) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={image} style={{height: 70, width: 70, marginRight: '10px'}} />
      </ListItemAvatar>
      <ListItemText
        primary={person}
        secondary={
          <React.Fragment>
            <Typography component="span" color="textPrimary">
              {position}
            </Typography>
            <Typography component="span" color="textPrimary">
              {email}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  )
}

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
        height: 70,
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {/* <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={chris} style={{marginRight: '10px'}} />
      </ListItemAvatar> */}
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

  handleSubmit = (id, emp) => {
    var time = require('time');
    var now = new time.Date();
    var fs = require('fs');
    var csvWriter = require('csv-write-stream');
    var writer = csvWriter();
    writer.pipe(fs.createWriteStream(log));
    writer.write({time: now, id: id, emp: emp});
    writer.end()
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
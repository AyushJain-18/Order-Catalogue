import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {totalCartItems } from '../store/select'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    cursor: 'pointer'
  },
}));

const Header = ({isFooter, history,totalCartItems}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {
            isFooter &&  <Typography variant="h6" className={classes.title}>Footer for Order Catalogue </Typography>
          }
          {
            !isFooter && 
            <>
                 <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                       <MenuIcon />
                  </IconButton>
                {/* <Typography variant="h6" onClick={()=> history.push('/')} className={classes.title}>
                        Dashboard
                </Typography> */}
                <Typography variant="h6"  onClick={()=> history.push('/')} className={classes.title}>
                       Order Catalogue 
                </Typography>
                <Typography variant="h6" onClick={()=> history.push('/cart')} className={classes.title}>
                      Cart 
                </Typography>
                <Typography>Total items in cart are {totalCartItems}</Typography>
            </> 
          } 
        </Toolbar>
      </AppBar>
    </div>
  );
}
const mapStateToProps =state => ({
  totalCartItems: totalCartItems(state)
})

export default connect(mapStateToProps)(withRouter(Header)); 

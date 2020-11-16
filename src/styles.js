import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  desktop: {
    [theme.breakpoints.up('sm')]: {
        display: 'none'
    },
  },
  mobile: {
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    },
  },
  last: {
    [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(3),
    },
  },
  grid: {
    '& > *': {
        margin: theme.spacing(2)
    }
  },
}))

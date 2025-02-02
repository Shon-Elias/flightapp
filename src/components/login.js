import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuth } from '../redux/actions';
import { useHistory } from 'react-router-dom';

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));




const Login = () => {
	const dispatch = useDispatch();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const history = useHistory();

	const submit = e => {
		e.preventDefault();
		setError('');
		if (username === 'user' && password === 'password') {
			dispatch(setAuth(true));
			history.push('/');
		} else {
			setError('Login failed');
		}
	};


	const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="username"
            name="username"
						autoFocus
						value={username}
					onChange={e => {
						setUsername(e.target.value);
					}}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
						autoComplete="current-password"
						value={password}
					onChange={e => {
						setPassword(e.target.value);
					}}
          />
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
						onClick={submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
			{!!error && <div style={{ color: 'red' }}>{error}</div>}
    </Container>
  );


	/*
	return (
		<form>
			{!!error && <div style={{ color: 'red' }}>{error}</div>}
			<div>
				<label htmlFor="username">Username:</label>
				<input
					id="username"
					value={username}
					onChange={e => {
						setUsername(e.target.value);
					}}
				/>
			</div>
			<div>
				<label htmlFor="password">Password:</label>
				<input
					id="password"
					type="password"
					value={password}
					onChange={e => {
						setPassword(e.target.value);
					}}
				/>
			</div>
			<Button onClick={submit} variant="contained" color="primary">
				Submit
			</Button>
		</form>
	);
	*/
};

export default Login;

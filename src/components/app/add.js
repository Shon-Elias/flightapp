import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addFlight } from '../../redux/actions';



import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const Add = () => {
	const classes = useStyles();

	const dispatch = useDispatch();
	const history = useHistory();
	const [from, setFrom] = useState('');
	const [to, setTo] = useState('');
	const [departureTime, setDepartureTime] = useState('');
	const [landingTime, setlandingTime] = useState('');
	const [price, setPrice] = useState('');

	const submit = e => {
		e.preventDefault();
		console.log('price', price)
		dispatch(addFlight(nanoid(), from, to, departureTime, landingTime, price));
		history.push('/');
	};

	return (
		<form className={classes.container}>
			<div>
				<label>From:</label>
				<input value={from} onChange={e => setFrom(e.target.value)} />
			</div>
			<div>
				<label>To:</label>
				<input value={to} onChange={e => setTo(e.target.value)} />
			</div>
			<div>
			<TextField
			id="departureTime"
			label="Departure Time:"
			type="date"
			value={departureTime}
			className={classes.textField}
			InputLabelProps={{
				shrink: true,
			}}
			onChange={e => setDepartureTime(e.target.value)}
		/>
		</div>
			<div>
		<TextField
		id="LandingTime"
		label="Landing Time:"
		type="date"
		value={landingTime}
		className={classes.textField}
		InputLabelProps={{
			shrink: true,
		}}
		onChange={e => setlandingTime(e.target.value)}
	/>
	</div>
			<div>
				<label>Price:</label>
				<input value={price} onChange={e => setPrice(e.target.value)}/>
			</div>
			<button onClick={submit}>Submit</button>
		</form>
	);
};

export default Add;

import { Provider } from 'react-redux';
import store from '../redux/store';
import Routes from './routes';

const Root = () => {
	return (
		<Provider store={store}>
			<Routes />
		</Provider>
	);
};

export default Root;

/*
    /login - login
    /  - list flights
    /add - add new flight
*/

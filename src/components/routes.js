import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import App from './app';
import Login from './login';

const Routes = () => {
	const auth = useSelector(state => state.auth);
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/login">
					<Login />
				</Route>
				<Route
					render={() => {
						if (auth) {
							return <App />;
						}

						return <Redirect to="/login" />;
					}}
				/>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;

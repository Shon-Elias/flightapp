import { Switch, Route } from 'react-router-dom';
import List from './list';
import Add from './add';

const App = () => {
	return (
		<Switch>
			<Route exact path="/">
				<List />
			</Route>
			<Route exact path="/add">
				<Add />
			</Route>
		</Switch>
	);
};
export default App;

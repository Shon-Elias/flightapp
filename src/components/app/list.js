import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const List = () => {
	const [search, setSearch] = useState('');
	const flights = useSelector(state => state.flights);

	const noResults = () => {
		return <h2>No flights listed</h2>;
	};

	const getResults = filteredFlights => {
		return (
			<table>
				<thead>
					<tr>
						<th>From</th>
						<th>To</th>
						<th>Departure Time</th>
						<th>Landing Time</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{filteredFlights.map(flight => {
						return (
							<tr key={flight.id}>
								<td>{flight.from}</td>
								<td>{flight.to}</td>
								<td>{flight.departureTime}</td>
								<td>{flight.landingTime}</td>
								<td>{flight.price}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	};

	let filteredFlights = flights;
	if (search) {
		const reg = new RegExp(search, 'i');
		filteredFlights = flights.filter(flight => reg.test(flight.to));

		console.log(filteredFlights);
	}

	const hasFlights = filteredFlights.length > 0;

	return (
		<div>
			<Link to="/add">Add new Flight</Link>
			<input
				style={{ fontSize: 24 }}
				placeholder="Search destination's..."
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
			{hasFlights ? getResults(filteredFlights) : noResults()}
		</div>
	);
};

export default List;

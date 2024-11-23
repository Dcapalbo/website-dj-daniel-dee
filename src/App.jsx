/** @format */

import Home from './pages/home';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';

const App = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='*'
						element={
							<Navigate
								to='/'
								replace
							/>
						}
					/>
				</Routes>
			</Router>
		</>
	);
};

export default App;

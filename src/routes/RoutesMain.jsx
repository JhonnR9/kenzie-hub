import {Routes, Route} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ProtectedRoutes from '../components/ProtectedRoutes';


const RoutesMain = () => {
	return (
		<Routes>
			<Route path='/' element={<ProtectedRoutes/>}>
				<Route index element={<Dashboard/>}/>
			</Route>
			<Route path="/login" element={<Login/>} />
			<Route path="/register" element={<Register/>} />
		</Routes>
	);
}

export default RoutesMain;
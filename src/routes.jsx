import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import App from './App';
export default function Router(){
    return (
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    )
}
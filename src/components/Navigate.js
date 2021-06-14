import { NavLink, Link } from 'react-router-dom';
import { auth } from '../firebase';
import {useState, useEffect} from 'react';

const Navigate = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((u) => {
            if (u) {
                setUser(u);
            }
            else {
                console.log("Użytkownik nie znaleziony")
            }
        });
        return () => unsubscribe();
    })
    const logout = () =>{
        auth.signOut()
    }
    if (user){
        return(<nav>
            <NavLink to="/">Start</NavLink>
            <NavLink to="/oferty" exact>Lista ofert</NavLink>
            <NavLink to="/new">Dodaj nowy</NavLink>
            <a href="/" className="nav-button" onClick={logout}>Wyloguj</a>
        </nav>)
    }

    return(<nav>
        <NavLink to="/">Start</NavLink>
        <NavLink to="/login">Zaloguj</NavLink>
        <NavLink to="/register">Zarejestruj</NavLink>
    </nav>)
}
export default Navigate;
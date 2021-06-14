import { auth } from '../firebase';

import { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [redirect, setRedirect] = useState(false);

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then(loggedUser => {
            loggedUser.user.updateProfile({
                displayName: displayName,
            })
            setRedirect(true);
        })
        .catch( error => {
            console.log(error);
        })
    }
    if (redirect){
        return <Redirect to="/" />
    }
    return (
        <div className="form">
            <label htmlFor="dispayName">Nazwa użytkownika:</label>
            <input
            id="dispayName"
            type="username"
            className="form-input"
            placeholder="Nazwa użytkownika"
            value={displayName}
            onChange={e => setDisplayName(e.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input 
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
            <label htmlFor="email">Haslo:</label>
            <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Hasło"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            />
            <button onClick={register}>Utwórz użytkownika</button>
        </div>
    )
}

export default Register;
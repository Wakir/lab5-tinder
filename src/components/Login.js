import { auth } from '../firebase';

import { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const login = () => {
        auth.signInWithEmailAndPassword(email, password).then(() => {
             console.log("Zalogowano");
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
            <input 
            className="form-input"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            />

            <input
            className="form-input"
            placeholder="Hasło"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            />
            <button onClick={login}>Zaloguj</button>
        </div>
    )
}

export default Login;
import{useState} from'react';
import LoginForm from './components/login_form';
import RegisterForm from './components/register_form';

function App() {
    const [loggedInUser, setLoggedInUser] = useState(() => {
        return localStorage.getItem('username') || null;
    });

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setLoggedInUser(null);
    }
    return (
        <div className="container mt-5">
            <header className="text-center mb-5">
                <h1 className="display-4 fw-bold">Login and Sing up System</h1>
                
            </header>

            {loggedInUser ? (
                <div className="alert alert-info text-center py-5">
                    <h2>Welcome back, <span className="text-primary">{loggedInUser}</span>! 🎉</h2>
                    <button onClick={logout} className="btn btn-outline-danger mt-3">Logout</button>
                </div>
            ) : (
                <div className="row justify-content-center">
                    <div className="col-md-5 mb-4">
                        <RegisterForm />
                    </div>
                    <div className="col-md-5">
                        <LoginForm onLogin={(name) => setLoggedInUser(name)} />
                    </div>
                </div>
            )}
        </div>
    );
}
export default App;
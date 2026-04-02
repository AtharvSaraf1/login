import { login } from '../api/authApi'
import { useState } from 'react';
const LoginForm = ({onLogin}) => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await login(formData);
            console.log("Server Response:", res.data);

        if (res.data && res.data.token) {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', res.data.username);
            onLogin(res.data.username);
            alert("Login Successful!");
        }
        }catch (error) {
            console.error(error);
        }  
    }
    return (
        <div className="card shadow-sm p-4">
            <h2 className="text-center mb-4 text-success">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={e => setFormData({ ...formData, username: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        onChange={e => setFormData({ ...formData , password: e.target.value })}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success w-100">Login</button>
            </form>
        </div>
    );
}
export default LoginForm;   
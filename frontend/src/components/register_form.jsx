import { useState } from 'react';
import { register } from '../api/authApi';
const RegisterForm = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await register(formData);
            console.log(res);
        }catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="card shadow-sm p-4">
            <h2 className="text-center mb-4 text-primary">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter username"
                        onChange={e => setFormData({ ...formData, username: e.target.value })} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Enter password"
                        onChange={e => setFormData({ ...formData, password: e.target.value })} 
                        required 
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Register</button>
            </form>
        </div>
    );
}
export default RegisterForm;
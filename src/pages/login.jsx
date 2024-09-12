import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [nama, setNama] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.nama === nama && user.password === password);

        if (user) {
            navigate('/home');
        } else {
            alert('Nama atau password salah');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="max-w-sm w-full bg-white p-8 rounded-lg shadow-md">
                <h1 className='text-2xl font-bold mb-5'>Masukan Akun</h1>
                <div className="mb-5">
                    <label htmlFor="nama" className="block mb-2 text-sm font-medium text-gray-900">Nama</label>
                    <input
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        type="text"
                        id="nama"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Masukkan nama"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder='Masukkan password'
                        required
                    />
                </div>
                <div className='flex gap-4 items-center'>
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                        Masuk
                    </button>
                    <a href="/" className='text-blue-700 hover:text-blue-900 font-semibold text-sm'>Belum punya akun?</a>
                </div>
            </form>
        </div>
    );
};

export default Login;

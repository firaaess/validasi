import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [nama, setNama] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()

        if (!nama.trim() || !isNaN(Number(nama))) {
        alert("Nama tidak boleh kosong, hanya spasi, atau berupa angka!");
        return;
        }

        if (!email.trim()) {
            alert("Email tidak boleh kosong atau hanya spasi!");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Format email tidak valid!");
            return;
        }

        if (password.length < 6){
        alert('password minimal 6 karakter');
        return;
        }
        //menyimpan data ke localstorage
        const users = JSON.parse(localStorage.getItem('users')) || []   
        if(users.find(user => user.nama === nama)){
            alert('nama sudah terdaftar')
            return;
        }
        users.push({nama, password, email})
        localStorage.setItem('users', JSON.stringify(users))
        alert('buat akun berhasil')
        navigate('/login')
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleRegister} className="max-w-sm w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className='text-2xl font-bold mb-5'>Buat Akun</h1>
        <div className="mb-5">
          <label htmlFor="nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
          <input
            value={nama}
            onChange={(e)=> setNama(e.target.value)}
            type="text"
            id="nama"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="masukan nama"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="masukan email"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder='masukan password'
            required
          />
        </div>
       <div className='flex gap-4 items-center'>
       <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Buat Akun
        </button>
        <a href="/login" className='text-blue-700 hover:text-blue-900 font-semibold text-sm'>Sudah punya akun ?</a>
       </div>
      </form>
    </div>
  );
}

export default Register;

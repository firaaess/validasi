import React, { useState } from 'react';

const Home = () => {
  const [formData, setFormData] = useState({
    nama: '',
    ttl: '',
    email: '',
    alamat: '',
    telp: '',
    pekerjaan: '',
    hobi: ''
  });

  const [errors, setErrors] = useState({
    nama: '',
    ttl: '',
    email: '',
    alamat: '',
    telp: '',
    pekerjaan: '',
    hobi: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (typeof formData.nama !== 'string') newErrors.nama = 'Nama harus string'; 
    if (!formData.ttl) newErrors.ttl = 'Tempat Tanggal lahir harus diisi';
    if (!formData.email) {
      newErrors.email = 'Email harus diisi';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email tidak valid';
    }
    if (!formData.alamat || formData.alamat.length > 10) newErrors.alamat = 'Alamat harus diisi dan maksimal 10 karakter';
    if (isNaN(formData.telp) || !formData.telp) newErrors.telp = 'No telepon harus angka';
    if (!formData.pekerjaan) newErrors.pekerjaan = 'Pekerjaan harus diisi';
    if (typeof formData.hobi !== 'string') newErrors.hobi = 'Hobi harus string';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form data is valid:', formData);
      // Save form data to localStorage
      localStorage.setItem('formData', JSON.stringify(formData));
      alert('Data has been saved to localStorage!');
      // Optionally, reset form fields
      setFormData({
        nama: '',
        ttl: '',
        email: '',
        alamat: '',
        telp: '',
        pekerjaan: '',
        hobi: ''
      });
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">Data diri</h2>
          <p className="text-gray-500 mb-6">menyimpan data diri anda</p>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Raffi priya rosa</p>
                  <p>SMK Negeri 3 Banjar.</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="nama">Nama</label>
                      <input
                        type="text"
                        name="nama"
                        id="nama"
                        placeholder='masukan nama'
                        className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${errors.nama ? 'border-red-500' : ''}`}
                        value={formData.nama}
                        onChange={handleChange}
                      />
                      {errors.nama && <p className="text-red-500 text-xs mt-1">{errors.nama}</p>}
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="ttl">Tempat Tanggal lahir</label>
                      <input
                        type="text"
                        name="ttl"
                        id="ttl"
                        placeholder='masukan TTL'
                        className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${errors.ttl ? 'border-red-500' : ''}`}
                        value={formData.ttl}
                        onChange={handleChange}
                      />
                      {errors.ttl && <p className="text-red-500 text-xs mt-1">{errors.ttl}</p>}
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="masukan email"
                        className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${errors.email ? 'border-red-500' : ''}`}
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="alamat">Alamat</label>
                      <input
                        type="text"
                        name="alamat"
                        id="alamat"
                        placeholder='masukan alamat'
                        className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${errors.alamat ? 'border-red-500' : ''}`}
                        value={formData.alamat}
                        onChange={handleChange}
                      />
                      {errors.alamat && <p className="text-red-500 text-xs mt-1">{errors.alamat}</p>}
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="telp">No telp</label>
                      <input
                        type="text"
                        name="telp"
                        id="telp"
                        placeholder='masukan no telepon'
                        className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${errors.telp ? 'border-red-500' : ''}`}
                        value={formData.telp}
                        onChange={handleChange}
                      />
                      {errors.telp && <p className="text-red-500 text-xs mt-1">{errors.telp}</p>}
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="pekerjaan">Pekerjaan</label>
                      <input
                        type="text"
                        name="pekerjaan"
                        id="pekerjaan"
                        placeholder='masukan pekerjaan'
                        className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${errors.pekerjaan ? 'border-red-500' : ''}`}
                        value={formData.pekerjaan}
                        onChange={handleChange}
                      />
                      {errors.pekerjaan && <p className="text-red-500 text-xs mt-1">{errors.pekerjaan}</p>}
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="hobi">Hobi</label>
                      <input
                        type="text"
                        name="hobi"
                        id="hobi"
                        placeholder='masukan hobi'
                        className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${errors.hobi ? 'border-red-500' : ''}`}
                        value={formData.hobi}
                        onChange={handleChange}
                      />
                      {errors.hobi && <p className="text-red-500 text-xs mt-1">{errors.hobi}</p>}
                    </div>

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          type="submit"
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

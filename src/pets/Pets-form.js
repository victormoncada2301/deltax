import React, { useState } from 'react';

function PetsForm() {
    const [formData, setFormData] = useState({
        name: '',
        species: 'dog',
        gender: 'm',
        image: null
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        setFormData({
            ...formData,
            image: imageFile
        });
    };

    const handleSubmit = () => {
        const savedPets = JSON.parse(localStorage.getItem('petsData')) || [];
        localStorage.setItem('petsData', JSON.stringify([...savedPets, formData]));
    };

    return (
        <div className="w-full max-w-xs m-auto mt-52">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                        Nombre
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="nombre"
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="species">
                        Especie
                    </label>
                    <select
                        id="species"
                        name="species"
                        value={formData.species}
                        onChange={handleInputChange}
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="dog">Perro</option>
                        <option value="cat">Gato</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                        Género
                    </label>
                    <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="m">Macho</option>
                        <option value="f">Hembra</option>
                    </select>
                </div>
                <div className="mb-4 flex justify-center">
                    <input
                        type="file"
                        id="imagen"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                    />
                    <label htmlFor="imagen" className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Subir imagen
                    </label>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleSubmit}
                    >
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default PetsForm;

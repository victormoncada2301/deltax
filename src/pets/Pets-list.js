import React, { useState, useEffect } from "react";

function PetsList() {
    const [petsData, setPetsData] = useState([]);
    const [selectedPet, setSelectedPet] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const savedPets = JSON.parse(localStorage.getItem('petsData')) || [];
        console.log(savedPets, 'ver mascotas almacenadas');
        setPetsData(savedPets);
    }, []);


    const handleOpenModal = (pet) => {
        console.log(pet, 'ver mascota seleccionada');
        setSelectedPet(pet);
        setIsModalOpen(true);
    };


    const handleCloseModal = () => {
        setSelectedPet(null);
        setIsModalOpen(false);
    };

    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tipo
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Sexo
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {petsData.map((pet, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                            <td className="px-6 py-4">{pet.name}</td>
                            <td className="px-6 py-4">{pet.species}</td>
                            <td className="px-6 py-4">{pet.gender}</td>
                            <td>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 cursor-pointer"
                                    onClick={() => handleOpenModal(pet)} >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                    />
                                </svg>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isModalOpen && selectedPet && (
                <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 max-w-lg">
                        <h2 className="text-xl font-semibold mb-4">{selectedPet.name}</h2>
                        <h2 className="text-xl font-semibold mb-4">{selectedPet.species}</h2>
                        <h2 className="text-xl font-semibold mb-4">{selectedPet.gender}</h2>
                        <img src={selectedPet.image} alt={selectedPet.name} className="w-full h-auto mb-4" />
                        <button onClick={handleCloseModal} className="bg-blue-500 text-white py-2 px-4 rounded">Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PetsList;

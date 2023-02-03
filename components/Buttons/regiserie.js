import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const API_URL = 'http://127.0.0.1:8000/api/tableareas';

const regiserie = ({ isVisible, onClose,id }) => {
    if (!isVisible) return null;
    const [values, setValues] = useState({ area_id: id ,
        codigo: '',
        serie: '',
        val_a: '',
        val_l: '',
        val_f: '',
        vig_ac: '',
        vig_at: '',
        total: '',
        eliminacion: false,
        conservacion: false,
        muestreo: false,
        observaciones: '' });

        const handleRadioChange = (event) => {
            setValues({ 
              ...values, 
              eliminacion: event.target.id === 'eliminacion' ? true : false,
              conservacion: event.target.id === 'conservacion' ? true : false,
              muestreo: event.target.id === 'muestreo' ? true : false,
            });
          };
        

          const handleChange = event => {
            setValues({ ...values, [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value });
          }     



    const handleSubmit = event => {
        console.log(values);
        event.preventDefault();
        axios.post(API_URL, values)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      };



    return (
        <dh-component>

            <div class="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
                <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                    <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                        <div class="w-full flex justify-start text-gray-600 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wallet" width="52" height="52" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                                <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                            </svg>
                        </div>
                        <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Registro de serie documental</h1>
                        <label for="name" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Codigo</label>
                        <input id="codigo"
                        name="codigo"
                        value={values.codigo}
                        onChange={handleChange}
                         class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                          placeholder="Codigo"/>
                        <label for="email2" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Serie documental</label>
                        <input id="serie"
                        name="serie"
                        value={values.serie}
                        onChange={handleChange} 
                        class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                         placeholder="Serie" />
                        <label for="expiry" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Valoración Primaria</label>
                        <div class="flex items-center mb-4">
                            <input id="val_a"
                            name="val_a" 
                            type="checkbox" 
                            checked={values.val_a}
                            onChange={handleChange}                             
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                            />
                            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">A</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="val_l"
                            name="val_l" 
                            type="checkbox" 
                            checked={values.val_l}
                            onChange={handleChange}  
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">L</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="val_f"
                            name="val_f" 
                            type="checkbox" 
                            checked={values.val_f}
                            onChange={handleChange}  
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                             />
                            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">F</label>
                        </div>
                        <label for="expiry" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Vigencias</label>
                        <label for="email2" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">AC</label>
                        <input id="vig_ac"
                        name="vig_ac"
                        value={values.vig_ac}
                        onChange={handleChange}
                        class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" 
                        placeholder="AC" />
                        <label for="email2" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">AT</label>
                        <input id="vig_at"
                        name="vig_at"
                        value={values.vig_at} 
                        onChange={handleChange}                        
                        class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                         placeholder="AT" />
                        <label for="email2" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Total</label>
                        <input id="total"
                        name="total"
                        value={values.total} 
                        onChange={handleChange} 
                        class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" 
                        placeholder="Total" />
                        <label for="expiry" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Tecnicas de selección</label>
                        <div class="flex items-center mb-4  form-check">
                            <input id="eliminacion"
                            name="eliminacion" 
                            type="radio" 
                            value={values.eliminacion}
                            onChange={handleRadioChange}
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                            />Eliminación                            
                        </div>
                        <div class="flex items-center mb-4 form-check">
                            <input id="conservacion"
                            name="conservacion" 
                            type="radio" 
                            checked={values.conservacion}
                            onChange={handleRadioChange}
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                            />Conservación                            
                        </div>
                        <div class="flex items-center mb-4  form-check">
                            <input id="muestreo"
                            name="muestreo" 
                            type="radio" 
                            checked={values.muestreo}
                            onChange={handleRadioChange} 
                            lass="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                            />Muestreo                            
                        </div>
                        <label for="email2" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Observaciones</label>
                        <input id="observaciones"
                        name="observaciones"
                        checked={values.observaciones}
                        onChange={handleChange} 
                        class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" 
                        placeholder="Obsevaiones"  />

                        <div class="flex items-center justify-start w-full">
                            <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm" onClick={handleSubmit}>Submit</button>
                            <button class="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onclick="modalHandler()">Cancel</button>
                        </div>
                        <button class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onclick="modalHandler()" aria-label="close modal" role="button">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="w-full flex justify-center py-12" id="button">
                <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm" onclick="modalHandler(true)">Open Modal</button>
            </div>



        </dh-component>
    );
};

export default regiserie;
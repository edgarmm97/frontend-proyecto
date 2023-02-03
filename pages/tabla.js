import React, { Fragment, useEffect, useState } from 'react';
import ButtonFilled from '../components/Buttons/ButtonFilled';
import Regiserie from '../components/Buttons/regiserie';
import Modserie from '../components/Buttons/modserie';
import Elmserie from '../components/Buttons/elmserie';
import { useParams } from 'react-router-dom'
import { useRouter } from "next/router";



async function getDataFromAPI() {
    const response = await fetch('http://127.0.0.1:8000/api/tableareas');
    const data = await response.json();
    return data;

}
function tabla() {
    const router = useRouter();
    const id = router.query;
    const areaid = id.id;
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [selectedData, setSelectedData] = useState([]);

    useEffect(() => {
        getDataFromAPI().then(response => {
            setData(response.tableareas);
        });
    }, []);
    const filtered = data && data.filter(item => item.area_id === parseInt(areaid));

    const handleClickEditar = (id, codigo, serie, val_a, val_l, val_f, vig_ac, vig_at, total, eliminacion, conservacion, muestreo, observaciones) => {
        setSelectedData({ id, codigo, serie, val_a, val_l, val_f, vig_ac, vig_at, total, eliminacion, conservacion, muestreo, observaciones });
        setShowModal3(true);      
      };
      const handleClickEliminar = (id) => {
        setSelectedData({ id });
        setShowModal2(true);       
    }

    return (
        <Fragment>
            <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                <div class="flex items-center justify-between border-b">
                    <div className="p-3 text-gray-700 text-lg font-bold">Serie Documentales</div>
                    <div class="p-3 flex">
                        <div class="inline-flex items-center rounded-md shadow-sm">
                            <div class="inline-block mr-2 mt-2">
                                <ButtonFilled type="success" onClick={() => setShowModal(true)}>Registrar Serie Documental</ButtonFilled>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table-auto w-full">
                        <thead class="bg-gray-800">
                            <tr class="text-white">
                                <th class="px-4 py-2" rowSpan={3}>Codigo</th>
                                <th class="px-4 py-2" rowSpan={3}>Serie documental</th>
                                <th class="px-4 py-2" colspan="6">Plazos de conservación</th>
                                <th class="px-4 py-2" rowSpan={2} colspan="3">Tecnicas de selección</th>
                                <th class="px-4 py-2" rowSpan={2}>Observaciones</th>
                            </tr>
                            <tr class="text-white">
                                <th class="px-4 py-2" colspan="3">Valoración Primaria</th>
                                <th class="px-4 py-2" colspan="3">Vigencias</th>
                            </tr>
                            <tr class="text-white">
                                <th class="px-1 py-1">A</th>
                                <th class="px-4 py-2">L</th>
                                <th class="px-4 py-2">F</th>
                                <th class="px-4 py-2">AC</th>
                                <th class="px-4 py-2">AT</th>
                                <th class="px-4 py-2">Total</th>
                                <th class="px-4 py-2">Eliminacion</th>
                                <th class="px-4 py-2">Conservacion</th>
                                <th class="px-4 py-2">Muestreo</th>
                                <th class="px-4 py-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(filtered) && filtered.map((row) => (
                                
                                <tr class="bg-gray-100" id={row.id}>
                                    <td class="border px-4 py-2">{row.codigo}</td>
                                    <td class="border px-4 py-2">{row.serie}</td>
                                    <td class="border px-4 py-2">{row.val_a === 1 ? 'x' : row.val_a === 0 ? '' : row.val_a}</td>
                                    <td class="border px-4 py-2">{row.val_l === 1 ? 'x' : row.val_l === 0 ? '' : row.val_l}</td>
                                    <td class="border px-4 py-2">{row.val_f === 1 ? 'x' : row.val_f === 0 ? '' : row.val_f}</td>
                                    <td class="border px-4 py-2">{row.vig_ac}</td>
                                    <td class="border px-4 py-2">{row.vig_at}</td>
                                    <td class="border px-4 py-2">{row.total}</td>
                                    <td class="border px-4 py-2">{row.eliminacion === 1 ? 'x' : row.eliminacion === 0 ? '' : row.eliminacion}</td>
                                    <td class="border px-4 py-2">{row.conservacion === 1 ? 'x' : row.conservacion === 0 ? '' : row.conservacion}</td>
                                    <td class="border px-4 py-2">{row.muestreo === 1 ? 'x' : row.muestreo === 0 ? '' : row.muestreo}</td>
                                    <td class="border px-4 py-2">{row.observaciones}</td><div class="flex justify-end gap-4">
                                        <a x-data="{ tooltip: 'Delete' }" href="#" onClick={() => handleClickEliminar(row.id)}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="h-6 w-6"
                                                x-tooltip="tooltip"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                />
                                            </svg>
                                        </a>
                                        <a x-data="{ tooltip: 'Edite' }" href="#" onClick={() => handleClickEditar(
                                            row.id,
                                            row.codigo,
                                            row.serie,
                                            row.val_a,
                                            row.val_l,
                                            row.val_f,
                                            row.vig_ac,
                                            row.vig_at,
                                            row.total,
                                            row.eliminacion,
                                            row.conservacion,
                                            row.muestreo,
                                            row.observaciones)}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="h-6 w-6"
                                                x-tooltip="tooltip"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Regiserie isVisible={showModal} id={parseInt(areaid)} onClose={() => setShowModal(false)} />
            <Modserie  isVisible={showModal3} selectedData={selectedData} area_id={parseInt(areaid)}  onClose={() => setShowModal3(false)} />
            <Elmserie isVisible={showModal2} selectedData={selectedData} onClose={() => setShowModal2(false)} />
        </Fragment>
    );

}


export default tabla;
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Modificar = ({ isVisible, onClose, id, area, description }) => {
    if (!isVisible) return null;
    const [newarea,setArea]= useState(" ");
    const [newdescription, setDescription]=useState("");

    const handleSubmmit = async (event)=>{
        event.preventDefault();
        const Payload={
           area: newarea,
           description: newdescription
        }
        console.log("payload: ", Payload)
        try{
            const { data } = await axios({
                url:"http://127.0.0.1:8000/api/areas/"+id,
                method:"PUT",
                data: Payload
            });
            onClose();
            Swal.fire({
                icon:'success',
                title:'Alerta',
                text:'El area se modifico correctamente',
                position:top
            }).then((result) => {
                if (result.value) {
                  location.reload();
                }
              });
        }catch(error){
            Swal.fire({
                icon:'error',
                title:'Alerta',
                text:'Algo a salido mal',
                position:top}).then((result) => {
                    if (result.value) {
                      location.reload();
                    }
                  });
        }
    }

    return (
        <main id="content" role="main" class="w-full max-w-md mx-auto p-6"  >
            <div class="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700" id="wrapper" >
                <div class="p-4 sm:p-7" >
                    <button className="text-white text-xl place-self-end" onClick={() => onClose()}>X</button>
                    <div class="text-center">
                        <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Editar {area}</h1>
                    </div>
                    <div class="mt-5">
                        <form>
                            <div class="grid gap-y-4">
                                <div>
                                    <label for="area" class="block text-sm font-bold ml-1 mb-2 dark:text-white">Area</label>
                                    <div class="relative">
                                        <input type="text"
                                            id="area"
                                            name="area"
                                            placeholder='Nueva área'
                                            value={newarea}
                                            class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                            onChange={({target})=>setArea(target?.value)}/>
                                    </div>
                                </div>
                                <div>
                                    <label for="descripcion" class="block text-sm font-bold ml-1 mb-2 dark:text-white">Descripción</label>
                                    <div class="relative">
                                        <input type="text"
                                            id="descripcion"
                                            name="descripcion"
                                            placeholder='Nueva descripción'
                                          value={newdescription}
                                            class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"                                            
                                            onChange={({target})=>setDescription(target?.value)} />
                                    </div>
                                </div>
                                <button type="submit"
                                 class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                                 onClick={handleSubmmit}>Editar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};



export default Modificar;
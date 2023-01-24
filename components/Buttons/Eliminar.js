import React from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Eliminar = ({ isVisible, onClose,id }) => {
    console.log(id);
    if (!isVisible) return null;
    
    const handleSubmmit = async (event)=>{
        try{
            const res = await axios.delete('http://back-proyecto.test/api/areas/'+id);
            onClose();
            Swal.fire({
                icon:'success',
                title:'Alerta',
                text:'El area se elimino correctamente',
                position:top}).then((result) => {
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

        <div class="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
            <div class="bg-white px-16 py-14 rounded-md text-center">
                <h1 class="text-xl mb-4 font-bold text-slate-500">Esta seguro que desea eliminar el Area</h1>
                <button class="bg-red-500 px-4 py-2 rounded-md text-md text-white" onClick={() => onClose()}>Cancel</button>
                <button class="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold" onClick={()=>handleSubmmit(id)}>Ok</button>
            </div>
        </div>
    );
};



export default Eliminar;
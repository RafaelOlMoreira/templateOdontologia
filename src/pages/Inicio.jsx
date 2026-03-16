import React from 'react'

import { LuCalendarCheck } from "react-icons/lu";

function Inicio() {
    return (
        // Verde agua: #7fcdcd
        // Verde Escuro: #2c5f5d
        // Verde escuro:#234948
        <>
            <section className="bg-[url('/bgHome.jpg')] bg-top bg-cover h-screen">
                <div className='absolute h-screen inset-0 bg-[#2C5F5D]/70'>
                    <div className='flex flex-col items-center justify-center text-center h-full text-white px-5 space-y-8'>
                        <h1 className='text-6xl font-bold'>Seu sorriso merece cuidado e excelência</h1>
                        <p className='text-xl'>Atendimento odontológico humanizado com tecnologia de ponta. Transforme seu sorriso em um ambiente acolhedor e profissional.</p>
                        <div className='flex flex-col space-y-4 items-center'>
                            <button className='flex items-center p-3 px-7 rounded-lg gap-3 text-lg font-semibold bg-[#2c5f5d] hover:cursor-pointer hover:scale-105 hover:bg-[#234948] transition-all duration-300'>
                                <LuCalendarCheck /> Agendar Consulta
                            </button>
                            <button className='border-2 border-white p-4 px-8 font-semibold text-lg rounded-lg hover:cursor-pointer hover:bg-white hover:text-[#2C5F5D] transition-all duration-300'>
                                Conhecer Tratamentos
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Inicio

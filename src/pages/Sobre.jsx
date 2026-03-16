import React from 'react'

import { FaRegHeart } from "react-icons/fa";
import { RiMicroscopeLine } from "react-icons/ri";
import { BsHouseHeart } from "react-icons/bs";

function Sobre() {
    return (
        // Verde agua: #7fcdcd
        // Verde Escuro: #2c5f5d
        // Verde escuro:#234948
        <>
            <section className='bg-white h-auto px-4 py-16'>
                <div>
                    <div>
                        <img src="/personaIMG.jpg" className='rounded-2xl shadow-2xl' />
                    </div>
                    <div className='pt-12'>
                        <h1 className='text-[#234948] text-4xl font-bold'>Sobre a Doutora</h1>
                        <p className='italic text-gray-700 text-xl py-6'>"Minha missão é transformar sorrisos e vidas através de um atendimento odontológico de excelência"</p>
                        <p className='text-gray-700 text-lg'>Com mais de 15 anos de experiência em odontologia, sou especialista em implantodontia, prótese dentária e harmonização orofacial. Formada pela Universidade de São Paulo (USP), com especializações em instituições renomadas.</p>
                        <p className='text-gray-700 text-lg my-4'>Acredito que cada paciente é único e merece um tratamento personalizado. Minha abordagem combina técnicas avançadas com um cuidado humanizado, garantindo não apenas resultados estéticos excepcionais, mas também o bem-estar e a confiança de cada pessoa que atendo.</p>
                        <p className='text-gray-700 text-lg my-4'>Na minha clínica, você encontrará um ambiente moderno, acolhedor e equipado com tecnologia de última geração, sempre priorizando seu conforto e segurança.</p>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-5 py-4'>
                    <div className='text-center space-y-2'>
                        <FaRegHeart className='mx-auto h-20 w-20 py-5 text-white bg-[#7fcdcd]/70 rounded-full hover:scale-110 transition-all duration-300' />
                        <h1 className='font-semibold text-lg'>Atendimento Humanizado</h1>
                        <p className='text-md'>Cuidado personalizado e acolhedor</p>
                    </div>
                    <div className='text-center space-y-2'>
                        <RiMicroscopeLine className='mx-auto h-20 w-20 py-5 text-white bg-[#7fcdcd]/70 rounded-full hover:scale-110 transition-all duration-300' />
                        <h1 className='font-semibold text-lg'>Tecnologia de Ponta</h1>
                        <p className='text-md'>Equipamentos modernos e precisos</p>
                    </div>
                    <div className='text-center space-y-2'>
                        <BsHouseHeart className='mx-auto h-20 w-20 py-5 text-white bg-[#7fcdcd]/70 rounded-full hover:scale-110 transition-all duration-300' />
                        <h1 className='font-semibold text-lg'>Ambiente Acochegante</h1>
                        <p className='text-md'>Conforto e tranquilidade</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sobre

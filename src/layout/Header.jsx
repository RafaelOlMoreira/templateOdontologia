import React, { useState, useEffect } from 'react'

import { LuMenu } from "react-icons/lu";
import { VscClose } from "react-icons/vsc";
import { LuCalendar } from "react-icons/lu";

function Header() {

    const [navMenuAberto, setNavMenuAberto] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const toggleMenu = () => setNavMenuAberto((s) => !s);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        onScroll(); 
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        // Verde agua: #7fcdcd
        // Verde Escuro: #2c5f5d
        // Verde escuro hover:#234948
        <>
            <header className={`fixed top-0 left-0 z-3000 w-full p-6 py-3 lg:py-4 ${isScrolled ? "bg-white text-black transition-all duration-500" : "bg-transparent text-white transition-all duration-500"}`}>
                <div className='flex items-center justify-between lg:justify-normal lg:px-12'>
                    <img src="#" className='h-12 w-12 bg-amber-100' />

                    <div className='hidden lg:flex w-full items-center justify-end'>
                        <ul className='flex items-center gap-10'>
                            {dataDesk.map((dataDesk) => (
                                <li>
                                    <a href={dataDesk.aHref} className={dataDesk.aClass}>
                                        {dataDesk.icon}{dataDesk.menuSpan}
                                        <span className={dataDesk.spanClass}></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button onClick={toggleMenu} className='block lg:hidden'>
                        {navMenuAberto ? (
                            <VscClose
                                aria-expanded={navMenuAberto}
                                className='size-7 hover:cursor-pointer'
                            />
                        ) : (
                            <LuMenu
                                aria-expanded={navMenuAberto}
                                className='size-7 hover:cursor-pointer'
                            />
                        )}
                    </button>
                </div>
            </header >

            <div className={`fixed z-2000 bg-white ${navMenuAberto ? "opacity-100 pointer-events-auto transform transition-all duration-1000" : "hidden pointer-events-none"}`}>
                <div className="flex px-6 h-auto w-screen mt-18 shadow-lg">
                    <ul className='w-screen space-y-3'>
                        {data.map((d) => (
                            <a href={d.href} onClick={toggleMenu}><li className={d.classname}>{d.icon}{d.span}</li></a>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header

const data = [
    {
        span: `Inicio`,
        classname: `p-2.5 my-3 text-lg rounded-lg hover:cursor-pointer hover:bg-[#7fcdcd]/10`,
        href: `#`,
    },
    {
        span: `Sobre`,
        classname: `p-2.5 my-3 text-lg rounded-lg hover:cursor-pointer hover:bg-[#7fcdcd]/10`,
        href: `#Sobre`,
    },
    {
        span: `Serviços`,
        classname: `p-2.5 my-3 text-lg rounded-lg hover:cursor-pointer hover:bg-[#7fcdcd]/10`,
        href: `#Servicos`,
    },
    {
        span: `Depoimentos`,
        classname: `p-2.5 my-3 text-lg rounded-lg hover:cursor-pointer hover:bg-[#7fcdcd]/10`,
        href: `#Depoimentos`,
    },
    {
        span: `Contato`,
        classname: `p-2.5 my-3 text-lg rounded-lg hover:cursor-pointer hover:bg-[#7fcdcd]/10`,
        href: `#Contato`,
    },
    {
        icon: <LuCalendar />,
        span: `Agendar Consulta`,
        classname: `flex items-center justify-center gap-3 bg-[#2c5f5d] hover:bg-[#234948] hover:cursor-pointer p-2.5 my-3 rounded-lg text-lg text-white font-semibold transition-all duration-300`,
        href: `#Consulta`,
    }
]

const dataDesk = [
    {
        aHref: "#",
        aClass: `text-lg rounded-lg hover:cursor-pointer hover:text-[#2c5f5d]/70`,
        menuSpan: `Início`,
    },
    {
        aHref: "#Sobre",
        aClass: `text-lg rounded-lg hover:cursor-pointer hover:text-[#2c5f5d]/70`,
        menuSpan: `Sobre`,
    },
    {
        aHref: "#Serviços",
        aClass: `text-lg rounded-lg hover:cursor-pointer hover:text-[#2c5f5d]/70`,
        menuSpan: `Servicos`,
    },
    {
        aHref: "#Depoimentos",
        aClass: `text-lg rounded-lg hover:cursor-pointer hover:text-[#2c5f5d]/70`,
        menuSpan: `Depoimentos`,
    },
    {
        aHref: "#Contato",
        aClass: `text-lg rounded-lg hover:cursor-pointer hover:text-[#2c5f5d]/70`,
        menuSpan: `Contato`,
    },
    {
        aHref: `#Consulta`,
        icon: <LuCalendar />,
        menuSpan: `Agendar Consulta`,
        aClass: `flex items-center justify-center gap-3 bg-[#2c5f5d] hover:bg-[#234948] hover:cursor-pointer p-2.5 px-6 rounded-lg text-lg text-white font-semibold transition-all duration-300`,
    }
]
import React,{useState} from 'react';
import './nav.css';
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai';
import {BsFillBookFill} from 'react-icons/bs';
import {FaHandsHelping} from 'react-icons/fa';
import {BiMessageSquareDetail} from 'react-icons/bi';

export const Nav = () => {
    const [activeBtnNav,setActiveBtnNav] = useState('#');

    return (
        <nav>
            <a href="#" onClick={()=>setActiveBtnNav("#")} className={activeBtnNav==="#" ? 'active':''}>
                <AiOutlineHome />
            </a>
            <a href="#about" onClick={()=>setActiveBtnNav("#about")} className={activeBtnNav==="#about" ? 'active':''}>
                <AiOutlineUser />
            </a>
            <a href="#experiences" onClick={()=>setActiveBtnNav("#experiences")} className={activeBtnNav==="#experiences" ? 'active':''}>
                <BsFillBookFill />
            </a>
            <a href="#services" onClick={()=>setActiveBtnNav("#services")} className={activeBtnNav==="#services" ? 'active':''}>
                <FaHandsHelping />
            </a>
            <a href="#contact" onClick={()=>setActiveBtnNav("#contact")} className={activeBtnNav==="#contact" ? 'active':''}>
                <BiMessageSquareDetail />
            </a>
        </nav>
    )
}

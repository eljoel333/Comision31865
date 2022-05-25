import React, {Component} from 'react';
import OptionsMenu from '../container/ItemListContainer'; 


export default function NavBar(){
Component.state = {clicked:false};

const handleClick = ()=>{
    this.setState({clicked: !this.state.clicked})
}
    return (
        <nav className='NavbarItems'> 
               <h1 className='navbar-logo'>React <i className='fab fa-react'></i>

               </h1>
               <div className='menu-icon' onClick={handleClick}>
                   <i className={this.state.clicked?'':''}></i>
               </div>
               <ul>
                   {OptionsMenu.map((item,index)=>{
                       return (
                        <li key={index}> <a className={item.className} href={item.url}> {item.titulo}</a> </li>
                       )
                   }
                   )}
                  
               </ul>
        </nav>
    )
}

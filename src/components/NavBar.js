
import OptionsMenu from '../container/ItemListContainer'; 


export default function NavBar(){

    return (
        <nav className='NavbarItems'> 
               <h1 className='navbar-logo'>React <i className='fab fa-react'></i>

               </h1>
               <div className='menu-icon' >
                   <i className='fas fa-bar'></i>
               </div>
               <ul className='nav-menu'>
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

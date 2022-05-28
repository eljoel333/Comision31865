
import ItemsList from '../container/ItemListContainer'; 

export default function Items(props){

    return (
        <>
              <h1>{props.nombre}</h1>

        <div className=''> 
               <ul className='nav-items' >
                   {ItemsList.map((item,index)=>{
                       return (
                        <li key={index}> <a className={item.className} href={item.url}> {item.titulo}</a> 
                            <img src={item.url} className='tamanio'></img>

                        </li>
                       )
                   }
                   )}
                  
               </ul>
              
        </div>
      
        </>
    )
}

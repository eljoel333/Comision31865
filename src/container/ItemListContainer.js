const OptionItems= [
    {
        id:'1',
        titulo:'Celular',
        price:1000,
        category: 'x',
        url:'https://www.chedraui.com.mx/medias/7506227341214-00-CH1200Wx1200H?context=bWFzdGVyfHJvb3R8Mjk1NjV8aW1hZ2UvanBlZ3xoYTMvaDZjLzEyNDUwOTI4NTU4MTEwLmpwZ3w2MmNmZGI1MDZiMDE1NDBmYzljM2ZlZDg0YWFkYWQyNjJhYmEwMTA1Njk3MGMyNGM3ZDhlMDhjN2RkZDU3ZWQw',
        className: 'nav-links-items',
        stock: 25,
        description: 'xxxxxxx'
    },
    {
        id:'2',
        titulo:'Pantalla',
        price:1000,
        category: 'x',
        url:'https://www.chedraui.com.mx/medias/787790165927-00-CH1200Wx1200H?context=bWFzdGVyfHJvb3R8MTkwNTI5fGltYWdlL2pwZWd8aDY4L2g0Yi8xMjQwMTA0MzcwMTc5MC5qcGd8MTA5ZjExMjAzMzQyZmVlZjA1YWEwNTdjN2FkMjFjNDIyOGIwOTU1MGEzNmMyYWIwYmQ0ODVhMGU0ZjQ0MWIwOA',
        className: 'nav-links-items',
        stock: 25,
        description: 'xxxxxxx'
    },
    {
        id:'3',
        titulo:'CPU',
        price:1000,
        category: 'x',
        url:'https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/desktops/optiplex-desktops/3090-mt-sff/pdp/desktop-optiplex-3090-mt-sff-resp-pdp-hero-504x350.jpg?fmt=jpg&wid=504&hei=350',
        className: 'nav-links-items',
        stock: 25,
        description: 'xxxxxxx'
    },
    {
        id:'4',
        titulo:'Teclado',
        price:1000,
        category: 'x',
        url:'https://http2.mlstatic.com/D_NQ_NP_2X_985951-MLM45060373154_032021-F.webp',
        className: 'nav-links-items',
        stock: 25,
        description: 'xxxxxxx'
    },
    {
        id: '5',
        titulo:'Regulador de voltaje',
        price:1000,
        category: 'x',
        url:'https://www.chedraui.com.mx/medias/99053015710-00-CH1200Wx1200H?context=bWFzdGVyfHJvb3R8OTgwNDF8aW1hZ2UvanBlZ3xoMTYvaDQ1LzEwNDM4NDA3MzU2NDQ2LmpwZ3w0ZjlmYWFlYjljZDAzMTBhYTkyNjJjNzg5NTA5ZDAzMGM3ZGNhYmYyNjhkZGE2YzZjNDA4ZWRkMTE4ODJiZGE0',
        className: 'nav-links-items',
        stock: 25,
        description: 'xxxxxxx'
    }
]

export const getProductos = () =>{
    return new Promise((resolve, reject)=>
    {
        setTimeout(() => {
            resolve(OptionItems)
        }, 2000);
    })
}

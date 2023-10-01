const products = [
    {id: 1, title: 'Goku', description: 'Figura Funko Pop - Dragon Ball', price: 10, pictureUrl: '../images/goku.png'},
    {id: 2, title: 'Vegeta', description: 'Figura Funko Pop - Dragon Ball', price: 10, pictureUrl: '../images/vegeta.png'},
    {id: 3, title: 'Gohan', description: 'Figura Funko Pop - Dragon Ball', price: 10, pictureUrl: '../images/gohan.webp'},
    {id: 4, title: 'Trunks', description: 'Figura Funko Pop - Dragon Ball', price: 10, pictureUrl: '../images/trunks.png'},
    {id: 5, title: 'Bulma', description: 'Figura Funko Pop - Dragon Ball', price: 10, pictureUrl: '../images/bulma.png'},
    {id: 6, title: 'Piccolo', description: 'Figura Funko Pop - Dragon Ball', price: 10, pictureUrl: '../images/piccolo.png'},
  ];

export const getData = () => {
    let error = false
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            if(error){
                reject("Error al cargar, vuelva a intentar")
            }else{
                resolve(products)
            }
        }, 2000)
    })
}
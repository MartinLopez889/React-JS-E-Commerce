const products = [
  {
    id: 1,
    title: "Goku",
    description: "Figura Funko Pop - Dragon Ball",
    price: 10,
    pictureUrl: "../images/goku.png",
    category: "Pop",
    stock: 5,
  },
  {
    id: 2,
    title: "Vegeta",
    description: "Figura Funko Pop - Dragon Ball",
    price: 10,
    pictureUrl: "../images/vegeta.png",
    category: "Pop",
    stock: 5,
  },
  {
    id: 3,
    title: "Gohan",
    description: "Figura Funko Pop - Dragon Ball",
    price: 10,
    pictureUrl: "../images/gohan.webp",
    category: "Pop",
    stock: 5,
  },
  {
    id: 4,
    title: "Trunks",
    description: "Figura Funko Pop - Dragon Ball",
    price: 10,
    pictureUrl: "../images/trunks.png",
    category: "Pop",
    stock: 5,
  },
  {
    id: 5,
    title: "Bulma",
    description: "Figura Funko Pop - Dragon Ball",
    price: 10,
    pictureUrl: "../images/bulma.png",
    category: "Tees",
    stock: 5,
  },
  {
    id: 6,
    title: "Piccolo",
    description: "Figura Funko Pop - Dragon Ball",
    price: 10,
    pictureUrl: "../images/piccolo.png",
    category: "Keychain",
    stock: 5,
  },
];

export const getData = () => {
  let error = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Error al cargar, vuelva a intentar");
      } else {
        resolve(products);
      }
    }, 2000);
  });
};

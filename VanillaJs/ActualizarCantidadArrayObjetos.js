


//Tenemos un array de esta forma: 
{
  "id": 2,
  "name": "SRV",
  "image": "guitarra_02",
  "description": "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
  "price": 349,
  "cantidad": 4
},
{
  "id": 2,
  "name": "HGJFH",
  "image": "guitarra_03",
  "description": "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
  "price": 349,
  "cantidad": 3
},
{
  "id": 2,
  "name": "TYR",
  "image": "guitarra_07",
  "description": "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
  "price": 349,
  "cantidad": 1
},

// Queremos sumar +1 a la cantidad con lo que tenemos 3 alternativas

1- El carrito esta vacio, con lo que la cantidad es 1 y se añade el
//objeto al carrito
2- El carrito ya tiene el objeto y solo hay que buscar este objeto por su id y 
  //modificar la propiedad cantidad en +1
3- El carrito no esta vacio pero tiene otros objetos cuto id no coincide
// por lo que se añade al carrito con cantidad 1


//La funcion usa un usestate de otros componentes :
const [cart, setCart] = useState([])

//Y por otro lado hay un boton que añade las guitarras (objetos), en 
// este caso tal que onClick={() => addItem(guitarra)}



const addItem = (guitarra) => {
    //si el carrito esta vacio
    if (cart.length === 0) {
      guitarra.cantidad = 1;
      setCart([guitarra]);
      return;
    }
    const existe = cart.some((guitarraItem) => guitarraItem.id === guitarra.id);
    //si el carrito tiene elementos
    if (existe) {
      const nuevoCart = cart.map((guitarraItem) => {
        if (guitarraItem.id === guitarra.id) {
          guitarraItem.cantidad++;
          return guitarraItem;
        }
        return guitarraItem;
      });
      setCart(nuevoCart);
      return;
    }
    guitarra.cantidad = 1;
    setCart([...cart, guitarra]);
  };

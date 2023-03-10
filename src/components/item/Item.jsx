import { Link } from "react-router-dom";

//Es la plantilla para que se muestren las cards en el listado de productos
export const Item = ({ item }) => {

  return (
    
    <div className="producto">
      <img
        className="producto__imagen"
        src={item.img}
        alt={`Producto ${item.nombre}`}
      />

      <h3 className="producto__nombre">{item.nombre}</h3>
      <p  className="producto__marca">Marca: {item.marca}</p>
      <p  className="producto__precio">${new Intl.NumberFormat("de-DE").format(item.precio)}</p>
      
      <Link className="producto__enlace" to={`/item/${item.id}`}>
        Ver producto
      </Link>
    </div>

  );
  
};

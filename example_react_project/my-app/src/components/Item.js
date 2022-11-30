import "./Item.css";

function Item(props) {
  return (


      
          <tr>
            <th scope="row">{props.number}</th>
            <td>{props.item}</td>
            <td> <img className="imagen_item" src={props.imagen} alt='' /></td>
          </tr>

  );
}

export default Item;

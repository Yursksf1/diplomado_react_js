import "./Item.css"

function Item(props) {

  return (

      <div className="list-group-item test">
        <img className="imagen_item" src={props.imagen} />
        {props.item}


      </div>
  );
}

export default Item;

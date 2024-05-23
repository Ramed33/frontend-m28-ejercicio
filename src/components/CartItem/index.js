import { ContainerCartItem } from "./styles";

const CartItem = ({data, delOneFromCart, delAllFromCart}) => {
    let {id, name, price, quantity} = data;

    return (
        <ContainerCartItem>
            <h4>{name}</h4>
            <h5>${price} x {quantity} = ${price*quantity}.00</h5>
            <button onClick={()=>delOneFromCart(id)}>Eliminar Uno</button>
            <br />
            <button onClick={()=>delAllFromCart(id,true)}>Eliminar Todos</button>
            <br /><br />
        </ContainerCartItem>
    );
};

export default CartItem;
import CartItem from "../CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, delFromCart } from "../../actions/shoppingActions";
import { ContainerCart } from "./styles";

const ShoppingCart = () => {
    const state = useSelector(state=>state);
    const dispatch = useDispatch();
    const {cart} = state.shopping;

    return (
        <article>
            <h2>Carrito</h2>
            <ContainerCart>
                <button onClick={()=>dispatch(clearCart())}>Limpiar Carrito</button>
                {
                    cart.map((item, index) => 
                        <CartItem 
                            key={index} data={item} 
                            delOneFromCart={()=>dispatch(delFromCart(item.id))}
                            delAllFromCart={()=>dispatch(delFromCart(item.id, true))}  
                        />
                )}
            </ContainerCart>
        </article>
    )
}

export default ShoppingCart;
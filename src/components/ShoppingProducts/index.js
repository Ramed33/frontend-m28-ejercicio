import ProductItem from "../ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions/shoppingActions";
import { TitleProduct, ContainerProduct } from "./styles";

const ShoppingProducts = () => {
    const state = useSelector(state=>state);
    const dispatch = useDispatch();
    const {products} = state.shopping;

    return (
        <article>
            <TitleProduct>Productos</TitleProduct>
            <ContainerProduct>
                {products.map((product) => ( 
                    <ProductItem 
                        key={product.id} 
                        data={product} 
                        addToCart={()=>dispatch(addToCart(product.id))} 
                    /> 
                ))}
            </ContainerProduct>
        </article>
    )
}

export default ShoppingProducts;
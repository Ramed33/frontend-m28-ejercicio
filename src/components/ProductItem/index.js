import { BuyProduct, PriceProduct, ImageProduct, SectionProduct, TitleProduct } from "./styles";

const ProductItem = ({data, addToCart}) => {
    let {id, name, price, image} = data;

    return (
    <SectionProduct>
        <ImageProduct src={image} alt={name}/>
        <TitleProduct>{name}</TitleProduct>
        <PriceProduct>${price}</PriceProduct>
        <BuyProduct onClick={()=>addToCart(id)}>Agregar</BuyProduct>
    </SectionProduct>
    );
};

export default ProductItem;
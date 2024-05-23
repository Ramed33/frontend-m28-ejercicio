export const initialState = {
    products: [
        {
            image: "https://www.innovasport.com/medias/jersey-adidas-seleccion-nacional-de-mexico-local-2024-is-IP6377-5.jpg?context=bWFzdGVyfGltYWdlc3wxNjc2NDV8aW1hZ2UvanBlZ3xpbWFnZXMvaDVkL2g0Ni8xMjUwOTI2MjQxMzg1NC5qcGd8MTU2NDdjNzQyNzY4NDc5OTJjMTQ5MmNlNjZjZGU2MDg3ZDhiMDhjYjc3ZjA0YWM0MzBjMjY4OTg4MTE5MWViNA",
            name: "Jersey-1",
            price: "1000.00",
            id: "1",
        },

        {
            image: "https://www.innovasport.com/medias/jersey-adidas-alemania-local-2024-is-IP8139-6.jpg?context=bWFzdGVyfGltYWdlc3w2MTI1OXxpbWFnZS9qcGVnfGltYWdlcy9oMDMvaDkxLzEyNTIwOTE1ODYxNTM0LmpwZ3xlZTczOGYzYWJlNzc4NjE5Y2RjNTYxZWEwNjA1MjAyNjc4ZDVkZTM2MDk3ZDc0MWZlZWRlY2U4MDQzNDhjMTJh",
            name: "Jersey-2",
            price: "1001.00",
            id: "2",
        },

        {
            image: "https://www.innovasport.com/medias/jersey-adidas-italia-local-2024-is-IN0657-5.jpg?context=bWFzdGVyfGltYWdlc3w5MDMzNHxpbWFnZS9qcGVnfGltYWdlcy9oYjMvaDQ2LzEyNTE5Mjg1MDYzNzEwLmpwZ3w3NjkyZGJjOGRjOWQyM2ZjNWQ5NGU3MDRlZGMzNWExODEwZGI3ODM2MWQzMWNkODcxYTdmYTI2MmQ1ZTg0ZTFl",
            name: "Jersey-3",
            price: "1003.00",
            id: "3",
        },

        {
            image: "https://www.innovasport.com/medias/jersey-adidas-belgica-local-2024-is-IQ0769-6.jpg?context=bWFzdGVyfGltYWdlc3wxMTgyNzV8aW1hZ2UvanBlZ3xpbWFnZXMvaGM1L2g0Mi8xMjUwODk2MTM3NDIzOC5qcGd8ZGFiMWMxNWU2YjUyZDU5NTA1ODVkNWFmMDlmNmY2NTM5ZTBiM2M5ZWYwOTQzNzVmZTgyNWU2NDZmNmMwOTk4Nw",
            name: "Jersey-4",
            price: "1004.00",
            id: "4",
        },

        {
            image: "https://www.innovasport.com/medias/IS-525075-01-1.jpg?context=bWFzdGVyfGltYWdlc3w0NTUyN3xpbWFnZS9qcGVnfGltYWdlcy9oMDEvaDEwLzEyNjE4MjY5MjI5MDg2LmpwZ3xmYzNiN2FjNzY2YTdiZGFkYmEwMDljMDRiYmQ2ZTA4MjhiYWM5MzgyZGExMWMzNGVkYzQ1MzIzNDI4OTZiZjFj",
            name: "Pants-1",
            price: "900.00",
            id: "5",
        },

        {
            image: "https://www.innovasport.com/medias/IS-FB6892-010-1.jpg?context=bWFzdGVyfGltYWdlc3w2OTcxOHxpbWFnZS9qcGVnfGltYWdlcy9oZDQvaDc0LzEyMTIyNjIzNjM5NTgyLmpwZ3w3ZDU2MDJlNjkxNGYyYjJkZTE2ZGVmMjEzMDRkYzE4MmNjMjU4OGFiNjRhZTJmMTFlOWM2ZTE4MDcxODdhNjg2",
            name: "Pants-2",
            price: "901.00",
            id: "6",
        },

        {
            image: "https://www.innovasport.com/medias/pantalon-puma-borussia-dortmund-iconic-ftblheritage-is-769574-02-1.jpg?context=bWFzdGVyfGltYWdlc3w1MjU0OHxpbWFnZS9qcGVnfGltYWdlcy9oMmUvaDVmLzExNTk5ODQwNzcyMTI2LmpwZ3xiY2RkMzY0NDQ3ZTgyYzlkNzQ0MzUzZTQxODY5MzdiM2E2NjkyMDhhMDQyOTBkOWI2MGZiMGU2YzA5OTkxZTAz",
            name: "Pants-3",
            price: "902.00",
            id: "7",
        },

        {
            image: "https://www.innovasport.com/medias/pantalon-nike-drifit-is-CZ6379-063-1.png?context=bWFzdGVyfGltYWdlc3w4NDgxNXxpbWFnZS9wbmd8aW1hZ2VzL2hhMi9oMzQvMTA0OTAzNzAyMjgyNTQucG5nfGZlZmM0NGVkZGJiZWIzNmZlNzUyYTU0YTVkZWFhOTk1ZDU4NjNkOTlhYWQ5MzFjNzMwMTNlNjRkMWUyZmVlYTI",
            name: "Pants-4",
            price: "903.00",
            id: "8",
        },

        {
            image: "https://www.innovasport.com/medias/tenis-nike-initiator-is-394055-001-1.jpg?context=bWFzdGVyfGltYWdlc3wxMjc2MzV8aW1hZ2UvanBlZ3xpbWFnZXMvaDI1L2gyMy8xMjY0MjY2NTkyMjU5MC5qcGd8ODI1ODk5ZGViMDI2MTFkNzFlODg5MjY0OGY1ZWJkOGVjZTllZDJlNzkzNDFiNTdjZjJkY2IxMDNiNDM2NDE0YQ",
            name: "Tennis-1",
            price: "2000.00",
            id: "9",
        },

        {
            image: "https://www.innovasport.com/medias/tenis-adidas-ultraboost-light-is-ID3277-1.jpg?context=bWFzdGVyfGltYWdlc3wxMTg4MzV8aW1hZ2UvanBlZ3xpbWFnZXMvaGEyL2hlYS8xMjMxNzg5MjQ3Njk1OC5qcGd8ZWQ1ZTZhNDU4YmMzYmUyOWQwOWY1MGFhOWFkYTdiOWUyNGM4ZDFiZmRlNTAwMjdmYTRiMTYzODI1ZWNlMGNkYQ",
            name: "Tennis-2",
            price: "2001.00",
            id: "10",
        },

        {
            image: "https://www.innovasport.com/medias/IS-377748-07-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDcwOTF8aW1hZ2UvanBlZ3xpbWFnZXMvaGE3L2hkNy8xMjYzNjkwMTAxNTU4Mi5qcGd8MGQ2MWVlNzhjNDE1MjE2NTJjYjYwZmE2NTUxODk1ZTU3NmE3ZmZkZGMyODlmY2Q5NjMzYzk5ZGZmNTY1ZDg0OQ",
            name: "Tennis-3",
            price: "2002.00",
            id: "11",
        },

        {
            image: "https://www.innovasport.com/medias/tenis-under-armour-charged-rouge-3-is-3026510-001-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDc3Mzl8aW1hZ2UvanBlZ3xpbWFnZXMvaGY3L2gyMi8xMTIyNTMxNjQ5MTI5NC5qcGd8MzM0NGI0MTdkNmQyZGU2ZmYzMmQyNTI3MTQ1NzQ2Nzk0MjM4MWVjYjgxNTMyNDVmMjZkNTgxOGQ3YzQwZjkxNA",
            name: "Tennis-4",
            price: "2003.00",
            id: "12",
        },
    ],
    cart: []
}

export function shoppingCartReducer(state = initialState, action){
    switch (action.type) {
        case "ADD_TO_CART":{
            let newItem = state.products.find(
                (product) => product.id === action.payload
            );
            //console.log(newItem);

            let itemInCart = state.cart.find(item=>item.id === newItem.id)

            return itemInCart
            ? {
                ...state,
                cart: state.cart.map(item=> 
                    item.id === newItem.id 
                    ? {...item, quantity: item.quantity+1}
                    : item
                )
            }
            :{
                ...state,
                cart: [...state.cart, {...newItem, quantity:1}]
            };
        }
        case "REMOVE_ONE_FROM_CART":{
            let itemToDelete = state.cart.find(item => item.id === action.payload);

            return itemToDelete.quantity > 1 ? {
                ...state,
                cart: state.cart.map(item => 
                    item.id === action.payload
                ? {...item, quantity: item.quantity-1}
                : item
                ),
            }
            :{
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };
        }
        case "REMOVE_ALL_FROM_CART":{
            return{
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };
        }
        case "CLEAR_CART":
            return initialState;
        default:
            return state;
    }
}
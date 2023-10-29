
const CartContext = React.createContext();

const CartContextProvider = ({ children }) => {

    return (
        <CartContext.Provider>
            { children }
        </CartContext.Provider>
    )
};

export {CartContext, CartContextProvider};
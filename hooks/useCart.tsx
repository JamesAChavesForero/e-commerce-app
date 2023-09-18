import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import { createContext, useState, useContext, useCallback, useEffect } from "react";
import toast from "react-hot-toast";
import { fetchData } from "@/data/productDataHandler";
type CartContextType = {
    id: number,
    title: string,
    image: string,
    cartTotalQty: number
    cartTotalAmount: number,
    products: CartProductType[] | null;
    cartProducts: CartContextType[] | null;
    addProductToCart: (product: CartProductType) => void
    removeProductFromCart: (product: CartProductType) => void
    handleQtyChange: (product: CartProductType, increase: boolean) => void
    cartVisibility: boolean,
    setCartVisibility: (boolan: boolean) => void,
    cleanCart: () => void
}

export const CartContext = createContext<CartContextType | null>(null)

interface Props {
    [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {

    const [products, setProducts] = useState<CartProductType[] | null>(null)

    fetchData()
    .then((products) => {
       setProducts(products);
    })
    .catch((error) => {
      console.error(error.message);
    });
    

    const [cartTotalQty, setCartTotalQty] = useState(0)

    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null)

    const [cartVisibility, setCartVisibility] = useState(false)

    const [cartTotalAmount, setCartTotalAmount] = useState(0)

    useEffect(() => {
        const cartItems: any = localStorage.getItem('cartItems')
        const cartProductsArray: CartProductType[] | null = JSON.parse(cartItems)
        setCartProducts(cartProductsArray)
    }, [])

    useEffect(() => {
        const getTotals = () => {
            if (cartProducts) {
                const { total, qty } = cartProducts?.reduce((acc, cur) => {
                    const itemTotal = cur.price * cur.quantity
                    acc.total += itemTotal
                    acc.qty += cur.quantity
                    return acc
                }, { total: 0, qty: 0 });
                setCartTotalQty(qty)
                setCartTotalAmount(total)
            }
        }
        getTotals()
    }, [cartProducts])

    useEffect(() => {
        if (products) {
            const fakestore = async () => {
                const res = await fetch("https://fakestoreapi.com/products")
                const productsArray = await res.json()
                setProducts(productsArray)
                console.log(products, productsArray)
            }
            fakestore()
        }
    }, [])

    const addProductToCart = useCallback((product: CartProductType) => {
        setCartProducts((prev) => {
            let updatedCart;
            if (prev) {
                updatedCart = [...prev, product]
            } else {
                updatedCart = [product]
            }
            localStorage.setItem('cartItems', JSON.stringify(updatedCart))
            toast.success('Product Added to Cart')
            return updatedCart
        })
    }, []);

    const removeProductFromCart = useCallback((product: CartProductType) => {

        if (cartProducts) {
            const filteredProducts = cartProducts.filter(item => {
                return item.id !== product.id
            })
            toast.error('Product Removed From Cart')
            setCartProducts(filteredProducts)
            localStorage.setItem('cartItems', JSON.stringify(filteredProducts))
        }
    }, [cartProducts]);

    const handleQtyChange = useCallback((product: CartProductType, increase: boolean) => {
        let updatedCart;
        if (increase && product.quantity >= 20) {
            toast.success('Cannot buy more than 20')

        } else if (!increase && product.quantity <= 1) {
            removeProductFromCart(product)
        }
        if (cartProducts) {
            updatedCart = [...cartProducts]
            const existingIndex = cartProducts.findIndex(item => item.id === product.id)
            if (existingIndex > -1) {
                increase ?
                    updatedCart[existingIndex].quantity = ++updatedCart[existingIndex].quantity :
                    updatedCart[existingIndex].quantity = --updatedCart[existingIndex].quantity
            }
            setCartProducts(updatedCart)
            localStorage.setItem('cartItems', JSON.stringify(updatedCart))
        }

    }, [])

    const cleanCart = useCallback(() => {
        setCartProducts([])
        setCartTotalQty(0)
        localStorage.setItem('cartItems', JSON.stringify(null))
    }, [cartProducts])

    const value = {
        products,
        cartTotalQty,
        cartTotalAmount,
        cartProducts,
        addProductToCart,
        cartVisibility,
        setCartVisibility,
        removeProductFromCart,
        handleQtyChange,
        cleanCart
    }
    return <CartContext.Provider value={value} {...props} />
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (context === null) {
        throw new Error("context only available inside of use context provider")
    }

    return context;
}
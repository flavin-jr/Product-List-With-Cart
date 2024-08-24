import { useEffect, useState } from "react";
import AddToCartIcon from '../../public/assets/images/icon-add-to-cart.svg';
import IncrementQuantityIcon from '../../public/assets/images/icon-increment-quantity.svg';
import DecrementQuantityIcon from '../../public/assets/images/icon-decrement-quantity.svg';

interface FoodCartDisplay {
    name: string;
    price: number;
    quantity: number;
}
interface FoodCardProps {
    type: string;
    name: string;
    price: number;
    image: string;
    cartList: FoodCartDisplay[];
    addToCart: (food: FoodCartDisplay) => void;
    removeItemFromCart: (food: FoodCartDisplay) => void

}
export function FoodCard(props: FoodCardProps) {


    const [isFoodAddedToCart, setIsFoodAddedToCart] = useState(false);
    const [foodQuantity, setFoodQuantity] = useState(1);
    function handleFoodAddedToCart() {
        setIsFoodAddedToCart(true);
        props.addToCart({ name: props.name, price: props.price, quantity: foodQuantity })

    }
    function handleDecrementFood() {
        if (foodQuantity === 1) {
            setIsFoodAddedToCart(false)
            props.removeItemFromCart({ name: props.name, price: props.price, quantity: foodQuantity })
            return
        }
        setFoodQuantity(foodQuantity - 1)
        props.addToCart({ name: props.name, price: props.price, quantity: foodQuantity - 1 })

    }

    function handleIncrementFood() {

        setFoodQuantity(foodQuantity + 1)
        props.addToCart({ name: props.name, price: props.price, quantity: foodQuantity + 1 })
    }
    useEffect(() => {
        const index = props.cartList.findIndex((item: FoodCartDisplay) => {
            return item.name === props.name;
        })
        if (index === -1) {
            setIsFoodAddedToCart(false);
            setFoodQuantity(1);
        }
    }, props.cartList)
    return (
        <div className="flex flex-col  gap-4">
            <div className="flex flex-col items-center">
                <img className="h-60 rounded-lg" src={props.image} alt="" />

                {isFoodAddedToCart ? (
                    <div className="flex items-center justify-between px-3 w-40 rounded-full bg-der py-3 -mt-[22px] text-white border border-transparent ">
                        <button onClick={handleDecrementFood} className="border border-white rounded-full size-5 flex items-center justify-center">
                            <img className="size-3" src={DecrementQuantityIcon} alt="increment icon" />


                        </button>
                        {foodQuantity}
                        <button onClick={handleIncrementFood} className=" border border-white rounded-full size-5 flex items-center justify-center ">
                            <img className="size-3" src={IncrementQuantityIcon} alt="increment icon" />

                        </button>

                    </div>

                ) : (
                    <button onClick={handleFoodAddedToCart} className="flex items-center justify-center gap-2 w-40 rounded-full bg-white border border-esor-400 py-3 -mt-[22px] hover:text-der hover:border-der">
                        <img src={AddToCartIcon} alt="" />
                        Add to Cart

                    </button>
                )}
            </div>
            <div>
                <span className="text-xs text-esor-500">{props.type}</span>
                <p className="font-semibold text-esor-900">{props.name}</p>
                <p className="font-semibold text-der">{`$${props.price.toFixed(2)}`}</p>
            </div>

        </div>

    )
}
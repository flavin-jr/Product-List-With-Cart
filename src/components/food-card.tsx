import { useState } from "react";

interface FoodCardProps {
    type: string;
    name: string;
    price: number;
    image: string;


}
export function FoodCard(props: FoodCardProps) {



    const [isFoodAddedToCart, setIsFoodAddedToCart] = useState(false);
    const [foodQuantity, setFoodQuantity] = useState(1);

    function handleDecrementFood() {
        if (foodQuantity === 1) {
            setIsFoodAddedToCart(false)
            return
        }
        setFoodQuantity(foodQuantity - 1)
    }
    function handleIncrementFood() {

        setFoodQuantity(foodQuantity + 1)
    }
    return (
        <div className="flex flex-col  gap-4">
            <div className="flex flex-col items-center">
                <img className="h-60 rounded-lg" src={props.image} alt="" />

                {isFoodAddedToCart ? (
                    <div className="flex items-center justify-between px-3 w-40 rounded-full bg-der py-3 -mt-[22px] text-white border border-transparent">
                        <button onClick={handleDecrementFood} className="border border-white rounded-full size-5 flex items-center justify-center">
                            <img className="size-3" src="public/assets/images/icon-decrement-quantity.svg" alt="" />

                        </button>
                        {foodQuantity}
                        <button onClick={handleIncrementFood} className=" border border-white rounded-full size-5 flex items-center justify-center">
                            <img className="size-3 " src="public/assets/images/icon-increment-quantity.svg" alt="" />

                        </button>

                    </div>

                ) : (
                    <button onClick={() => setIsFoodAddedToCart(true)} className="flex items-center justify-center w-40 rounded-full bg-white border border-esor-400 py-3 -mt-[22px]">
                        <img src="public/assets/images/icon-add-to-cart.svg" alt="" />
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
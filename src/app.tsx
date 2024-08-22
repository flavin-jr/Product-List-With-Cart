import { useState } from "react"

interface FoodDetails {
  type: string;
  name: string;
  price: number;
  image: string;
}

export function App() {
  const foodData: FoodDetails[] = [
    {
      type: 'Waffle',
      name: 'Waffle with Berries',
      price: 6.5,
      image: 'public/assets/images/image-waffle-desktop.jpg'
    },
    {
      type: 'Crème Brûlée',
      name: 'Vanilla Bean Crème Brûlée',
      price: 7,
      image: 'public/assets/images/image-creme-brulee-desktop.jpg'

    },
    {
      type: 'Macaron',
      name: 'Macaron Mix of Five',
      price: 8,
      image: 'public/assets/images/image-macaron-desktop.jpg'

    },
    {
      type: 'Tiramisu',
      name: 'Classic Tiramisu',
      price: 5.5,
      image: 'public/assets/images/image-tiramisu-desktop.jpg'

    },
    {
      type: 'Baklava',
      name: 'Pistachio Baklava',
      price: 4,
      image: 'public/assets/images/image-baklava-desktop.jpg'

    },
    {
      type: 'Pie',
      name: 'Lemon Meringue Pie',
      price: 5,
      image: 'public/assets/images/image-meringue-desktop.jpg'

    },
    {
      type: 'Cake',
      name: 'Red Velvet Cake',
      price: 4.5,
      image: 'public/assets/images/image-cake-desktop.jpg'

    },
    {
      type: 'Brownie',
      name: 'Salted Caramel Brownie',
      price: 5.5,
      image: 'public/assets/images/image-brownie-desktop.jpg'

    },
    {
      type: 'Panna Cotta',
      name: 'Vanilla Panna Cotta',
      price: 6.6,
      image: 'public/assets/images/image-panna-cotta-desktop.jpg'

    }
  ]


  const [isFoodAddedToCart, setIsFoodAddedToCart] = useState(false);
  const [foodQuantity, setFoodQuantity] = useState(1);
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  const [cartList, setCartList] = useState<{ name: string, price: number, quantity: number }[]>([]);

  function addToCart(name: string, price: number, quantity: number) {

    setIsFoodAddedToCart(true)
    setCartList([...cartList, {
      name: name,
      price: price,
      quantity: quantity
    }]);
  }

  function incrementFood(name: string, price: number, quantity: number) {
    setFoodQuantity(
      foodQuantity + 1
    )
    addToCart(name, price, quantity)

  }

  function decrementFood(name: string, price: number, quantity: number) {
    if (foodQuantity === 1) {
      setIsFoodAddedToCart(false)
      return
    }
    setFoodQuantity(
      foodQuantity - 1
    )

  }
  return (
    <div className="px-28 py-20 flex w-full gap-8 ">
      <div className="w-auto flex flex-col gap-8">
        <h1 className="text-[40px] font-bold text-esor-900">Desserts</h1>
        <div className="grid grid-cols-3 grid-flow-row gap-x-6 gap-y-8">

          {
            foodData.map(food => (

              <div className="flex flex-col  gap-4">
                <div className="flex flex-col items-center">
                  <img className="h-60 rounded-lg" src={food.image} alt="" />

                  {isFoodAddedToCart ? (
                    <div className="flex items-center justify-between px-3 w-40 rounded-full bg-der py-3 -mt-[22px] text-white border border-transparent">
                      <button onClick={() => decrementFood(food.name, food.price, foodQuantity)} className="border border-white rounded-full size-5 flex items-center justify-center">
                        <img className="size-3" src="public/assets/images/icon-decrement-quantity.svg" alt="" />

                      </button>
                      {foodQuantity}
                      <button onClick={() => incrementFood(food.name, food.price, foodQuantity)} className=" border border-white rounded-full size-5 flex items-center justify-center">
                        <img className="size-3 " src="public/assets/images/icon-increment-quantity.svg" alt="" />

                      </button>

                    </div>

                  ) : (
                    <button onClick={() => addToCart(food.name, food.price, foodQuantity)} className="flex items-center justify-center w-40 rounded-full bg-white border border-esor-400 py-3 -mt-[22px]">
                      <img src="public/assets/images/icon-add-to-cart.svg" alt="" />
                      Add to Cart

                    </button>
                  )}
                </div>
                <div>
                  <span className="text-xs text-esor-500">{food.type}</span>
                  <p className="font-semibold text-esor-900">{food.name}</p>
                  <p className="font-semibold text-der">{`$${food.price.toFixed(2)}`}</p>
                </div>
              </div>
            ))
          }

        </div>
      </div>
      <div className="w-[384px] p-6 bg-white flex flex-col h-fit gap-6">

        <h2 className="text-2xl text-der font-bold">Your Cart</h2>
        {isCartEmpty ? (
          <div className="flex flex-col gap-4 items-center">
            <img src="public/assets/images/illustration-empty-cart.svg" alt="" />
            <p>Your added items will appear here</p>

          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold">Classic Tiramisu</p>
                <div className="flex gap-2">
                  <p className="text-der font-semibold text-xs">1x</p>
                  <p className="text-esor-500 text-xs">@ $5.50</p>
                  <p className="text-esor-500 font-semibold text-xs">$5.50</p>
                </div>
              </div>
              <button className="border border-esor-400 rounded-full p-0.5">

                <img src="public/assets/images/icon-remove-item.svg" alt="remove icon" />
              </button>
            </div>
            <div className="h-px bg-esor-100"></div>
            <div className="flex items-center justify-between">
              <p className="text-esor-900 text-xs">Order Total</p>
              <p className="text-2xl text-esor-900 font-bold">$46.50</p>
            </div>
            <div className="flex items-center justify-center gap-2 bg-esor-50 p-4 rounded-lg">
              <img src="public/assets/images/icon-carbon-neutral.svg" alt="carbon neutral icon" />
              <p className="text-xs text-esor-900 ">This is a <span className="font-semibold">carbon-neutral</span> delivery</p>
            </div>
            <button className="px-6 py-4 bg-der text-white font-semibold rounded-full w-full">Confirm Order</button>
          </div>
        )}
      </div>
    </div>
  )
}




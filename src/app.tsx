import { useState } from "react"
import { FoodCard } from "./components/food-card";

interface FoodDetails {
  type: string;
  name: string;
  price: number;
  image: string;
}
interface FoodCartDisplay {
  name: string;
  price: number;
  quantity: number;
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



  const [isCartEmpty, setIsCartEmpty] = useState(false);
  const [cartList, setCartList] = useState<FoodCartDisplay[]>([]);


  function removeItemFromCart(food: FoodCartDisplay) {
    const index = cartList.findIndex((item: FoodCartDisplay) => {
      return item.name === food.name;
    })

    const updatedCartList = [...cartList]
    updatedCartList.splice(index, 1)
    setCartList(updatedCartList)
  }
  function addToCart(food: FoodCartDisplay) {

    const index = cartList.findIndex((item: FoodCartDisplay) => {
      return item.name === food.name;
    })

    if (index === -1) {
      setCartList([...cartList, food])
      return;
    }
    const updatedCartList = [...cartList]
    updatedCartList.splice(index, 1, food)
    setCartList(updatedCartList)


  }
  const OrderTotal = cartList.reduce((acc, item) => {
    return acc + (item.price * item.quantity);
  }, 0)

  return (
    <div className="px-28 py-20 flex w-full gap-8 ">
      <div className="w-auto flex flex-col gap-8">
        <h1 className="text-[40px] font-bold text-esor-900">Desserts</h1>
        <div className="grid grid-cols-3 grid-flow-row gap-x-6 gap-y-8">

          {
            foodData.map(food => (

              <FoodCard key={food.name} type={food.type} name={food.name} price={food.price} image={food.image} cartList={cartList} addToCart={addToCart} removeItemFromCart={removeItemFromCart} />
            ))
          }

        </div>
      </div>
      <div className="w-[384px] p-6 bg-white flex flex-col h-fit gap-6">

        <h2 className="text-2xl text-der font-bold">Your Cart ({cartList.length})</h2>
        {isCartEmpty ? (
          <div className="flex flex-col gap-4 items-center">
            <img src="public/assets/images/illustration-empty-cart.svg" alt="" />
            <p>Your added items will appear here</p>

          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {cartList.map(item => (

              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-semibold">{item.name}</p>
                  <div className="flex gap-2">
                    <p className="text-der font-semibold text-xs">{item.quantity}x</p>
                    <p className="text-esor-500 text-xs">@ ${item.price.toFixed(2)}</p>
                    <p className="text-esor-500 font-semibold text-xs">${(item.quantity * item.price).toFixed(2)}</p>
                  </div>
                </div>
                <button onClick={() => { removeItemFromCart({ name: item.name, price: item.price, quantity: item.quantity }) }} className="border border-esor-400 rounded-full p-0.5">

                  <img src="public/assets/images/icon-remove-item.svg" alt="remove icon" />
                </button>
              </div>
            ))}
            <div className="h-px bg-esor-100"></div>
            <div className="flex items-center justify-between">
              <p className="text-esor-900 text-xs">Order Total</p>
              <p className="text-2xl text-esor-900 font-bold">${OrderTotal.toFixed(2)}</p>
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




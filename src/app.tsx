import { useState } from "react"
import { FoodCard } from "./components/food-card";
import { Cart } from "./components/cart";
import { ConfirmedOrderModal } from "./confirmed-order-modal";
interface FoodDetails {
  type: string;
  name: string;
  price: number;
  image: string;
}
export interface FoodCartDisplay {
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


  const [isConfirmedOrderModalOpen, setIsConfirmedModalOpen] = useState(false)
  const [cartList, setCartList] = useState<FoodCartDisplay[]>([]);

  function findThumbnail(foodName: string) {
    for (const item of foodData) {
      if (item.name === foodName) {
        return item.image;
      }
    }
  }
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
  const orderTotal = cartList.reduce((acc, item) => {
    return acc + (item.price * item.quantity);
  }, 0)

  return (
    <div className="px-28 py-20 flex w-full gap-8 justify-center tablet:flex-col tablet:p-10 mobile:p-6">
      <div className="min-w-fit flex flex-col gap-8 tablet:w-fit mobile:w-full">
        <h1 className="text-[40px] font-bold text-esor-900">Desserts</h1>
        <div className="grid grid-cols-3 grid-flow-row gap-x-6 gap-y-8 mobile:flex mobile:flex-col mobile:gap-4">

          {
            foodData.map(food => (

              <FoodCard key={food.name} type={food.type} name={food.name} price={food.price} image={food.image} cartList={cartList} addToCart={addToCart} removeItemFromCart={removeItemFromCart} />
            ))
          }

        </div>
      </div>
      <Cart cartList={cartList} setIsConfirmModalOpen={setIsConfirmedModalOpen} orderTotal={orderTotal} removeItemFromCart={removeItemFromCart} />
      {isConfirmedOrderModalOpen && (
        <ConfirmedOrderModal cartList={cartList} findThumbnail={findThumbnail} orderTotal={orderTotal} setIsConfirmedModalOpen={setIsConfirmedModalOpen} setCartList={setCartList} />
      )}
    </div>
  )
}




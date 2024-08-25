

import RemoveItemIcon from '../../public/assets/images/icon-remove-item.svg';
import CarbonNeutralIcon from '../../public/assets/images/icon-carbon-neutral.svg';
import EmptyCartIllustration from '../../public/assets/images/illustration-empty-cart.svg';
import { FoodCartDisplay } from '../app';

interface CartProps {
    orderTotal: number;
    cartList: FoodCartDisplay[];
    setIsConfirmModalOpen: (bool: boolean) => void;
    removeItemFromCart: (food: FoodCartDisplay) => void

}

export function Cart(props: CartProps) {
    return (
        <div className="w-[384px] min-w-[200px] p-6 bg-white flex flex-col h-fit gap-6 tablet:w-full">

            <h2 className="text-2xl text-der font-bold">Your Cart ({props.cartList.length})</h2>
            {props.cartList.length === 0 ? (
                <div className="flex flex-col gap-4 items-center">
                    <img src={EmptyCartIllustration} alt="" />
                    <p>Your added items will appear here</p>

                </div>
            ) : (
                <div className="flex flex-col gap-6">
                    {props.cartList.map(item => (

                        <div key={item.name} className="flex items-center justify-between">
                            <div className="flex flex-col gap-2">
                                <p className="text-xs font-semibold">{item.name}</p>
                                <div className="flex gap-2">
                                    <p className="text-der font-semibold text-xs">{item.quantity}x</p>
                                    <p className="text-esor-500 text-xs">@ ${item.price.toFixed(2)}</p>
                                    <p className="text-esor-500 font-semibold text-xs">${(item.quantity * item.price).toFixed(2)}</p>
                                </div>
                            </div>
                            <button onClick={() => { props.removeItemFromCart({ name: item.name, price: item.price, quantity: item.quantity }) }} className="border border-esor-400 rounded-full p-0.5">

                                <img src={RemoveItemIcon} alt="remove icon" />
                            </button>
                        </div>
                    ))}
                    <div className="h-px bg-esor-100"></div>
                    <div className="flex items-center justify-between">
                        <p className="text-esor-900 text-xs">Order Total</p>
                        <p className="text-2xl text-esor-900 font-bold">${props.orderTotal.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 bg-esor-50 p-4 rounded-lg">
                        <img src={CarbonNeutralIcon} alt="carbon neutral icon" />
                        <p className="text-xs text-esor-900 ">This is a <span className="font-semibold">carbon-neutral</span> delivery</p>
                    </div>
                    <button onClick={() => props.setIsConfirmModalOpen(true)} className="px-6 py-4 bg-der text-white font-semibold rounded-full w-full hover:bg-hover-confirmation-btn-color">Confirm Order</button>
                </div>
            )}
        </div>
    )
}
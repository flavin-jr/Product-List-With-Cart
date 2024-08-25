import OrderConfirmedIcon from '../public/assets/images/icon-order-confirmed.svg'
import { FoodCartDisplay } from './app';
interface ConfirmedOrderModalProps {
    orderTotal: number;
    cartList: FoodCartDisplay[];
    setCartList: (cartList: FoodCartDisplay[]) => void;
    setIsConfirmedModalOpen: (bool: boolean) => void;
    findThumbnail: (food: string) => string | undefined;
}

export function ConfirmedOrderModal(props: ConfirmedOrderModalProps) {
    function handleConfirmOrder() {
        props.setIsConfirmedModalOpen(false)
        props.setCartList([])
    }
    return (
        <div className=" fixed inset-0 w-full  bg-black/50 flex items-center justify-center tablet:p-10 mobile:p-0 mobile:items-end">
            <div className="p-10 bg-white space-y-8 w-[592px] rounded-xl tablet:w-full mobile:p-6 mobile:rounded-b-none">
                <div className="flex flex-col gap-6">
                    <img className="size-12" src={OrderConfirmedIcon} alt="check icon" />
                    <div>
                        <p className="text-[40px] text-esor-900 font-bold">Order Confirmed</p>
                        <span className="text-esor-500">We hope you enjoy your food!</span>
                    </div>
                </div>
                <div className="flex flex-col gap-6 p-6 bg-esor-50 rounded-lg">
                    <div className="flex flex-col gap-4">

                        {props.cartList.map((item, index) => (
                            <div key={item.name}>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-4">

                                        <img className="w-12 h-12 rounded-[4px]" src={props.findThumbnail(item.name)} alt="" />
                                        <div className="flex flex-col gap-2">
                                            <p className="text-xs font-semibold">{item.name}</p>

                                            <div className="flex gap-2">
                                                <p className="text-der font-semibold text-xs">{item.quantity}x</p>
                                                <p className="text-esor-500 text-xs">@ ${item.price.toFixed(2)}</p>

                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-esor-900 font-semibold">${(item.quantity * item.price).toFixed(2)}</p>

                                </div>
                                {props.cartList.length !== index + 1 && (<div className="bg-esor-100 h-px "></div>)}

                            </div>
                        ))}
                        <div className="bg-esor-100 h-px "></div>
                        <div className="flex items-center justify-between">
                            <p className="text-esor-900 text-xs">Order Total</p>
                            <p className="text-2xl text-esor-900 font-bold">${props.orderTotal.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
                <button onClick={handleConfirmOrder} className="px-6 py-4 bg-der text-white font-semibold rounded-full w-full">Start New Order</button>
            </div>
        </div>
    )
}
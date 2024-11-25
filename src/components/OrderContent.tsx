import { MenuItem, OrderItem } from "../types";
import { currencyFormat } from "../helpers/Index";

type orderContentProps = {
    order: OrderItem[],
    removeItem: (id: MenuItem['id']) => void
};

const OrderContent = ({ order, removeItem }: orderContentProps) => {
    return (
        <div>
            <h2 className=" font-black text-4xl">Consumo</h2>
            <div className=" space-y-3 mt-10">
                {order.length === 0 ? (
                    <p className=" text-center">Order is empty</p>
                ) : (
                    order.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
                        >
                            <div>
                                <p className="text-lg">
                                    {item.name} - {currencyFormat(item.price)}
                                </p>
                                <p className=" font-black">
                                    Amount: {item.quantity} -{" "}
                                    {currencyFormat(item.price * item.quantity)}
                                </p>
                            </div>

                            <button
                                className=" bg-red-600 h-8 w-8 rounded-full text-white font-black"
                                onClick={() => removeItem(item.id)}
                            >
                                X
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default OrderContent;

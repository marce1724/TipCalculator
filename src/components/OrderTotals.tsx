
import { useMemo } from "react"
import { OrderItem } from "../types"
import { currencyFormat } from "../helpers/Index"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

const OrderTotals = ({ order, tip, placeOrder } : OrderTotalsProps) => {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0),[order])
    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order])
    return (
        <>
            <div className=" space-y-3">
                <h2 className=" font-black text-2xl">Totals and Tip:</h2>
                <p>SubTotal to Pay:{' '}
                    <span className="font-bold">{currencyFormat(subtotalAmount)}</span>
                </p>
                <p>Tip:{' '}
                    <span className="font-bold">{(currencyFormat(tipAmount))}</span>
                </p>
                <p>Total to Pay:{' '}
                    <span className="font-bold">{(currencyFormat(totalAmount))}</span>
                </p>
            </div>
            <button
                 className=" w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
                 disabled={totalAmount===0}
                 onClick={placeOrder}
            >
                Save Order
            </button>
        </>
    )
}
export default OrderTotals
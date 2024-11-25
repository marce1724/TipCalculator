import { menuItems } from "./data/db";
import MenuItems from "./components/MenuItems";
import OrderContent from "./components/OrderContent";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import useOrder from "./hooks/useOrder";

function App() {
  const { order, addItem, removeItem, tip, setTip, placeOrder} = useOrder();

  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className=" text-center text-3xl font-black">
          {" "}
          Tips and Consumptions Calculator
        </h1>
      </header>

      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className=" text-4xl font-black">Menú</h2>
          <div className=" space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItems
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div className=" border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <OrderContent
            order={order}
            removeItem={removeItem}
          />


          <TipPercentageForm
              setTip={setTip}
              tip={tip}
          />
          <OrderTotals
            order={order}
            tip={tip}
            placeOrder={placeOrder}
          />
        </div>
      </main>
    </>
  );
}

export default App;

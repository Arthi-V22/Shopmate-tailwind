import { useMemo } from "react";
import { useCart } from "../contex/CartContex";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const totalPrice = useMemo(() => {
    return cart.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  }, [cart]);

  return (
    <div className="min-h-screen bg-slate-50 py-12">

      <div className="mx-auto max-w-5xl px-6">

        <h1 className="text-4xl font-bold text-slate-900">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="mt-8 rounded-2xl bg-white p-12 text-center shadow-sm">

            <div className="text-5xl">
              🛒
            </div>

            <h2 className="mt-4 text-xl font-semibold">
              Your cart is empty
            </h2>

            <p className="mt-2 text-slate-500">
              Add some products to your cart.
            </p>

          </div>
        ) : (
          <div className="mt-8 space-y-4">

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-5 rounded-2xl bg-white p-5 shadow-sm sm:flex-row sm:items-center"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 rounded-xl object-cover"
                />

                <div className="flex-1">

                  <h2 className="font-semibold text-slate-900">
                    {item.name}
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    ₹{item.price}
                  </p>

                </div>

                <div className="flex items-center gap-3">

                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                    className="h-9 w-9 rounded-lg bg-slate-100 font-bold"
                  >
                    −
                  </button>

                  <span className="w-6 text-center font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                    className="h-9 w-9 rounded-lg bg-blue-600 font-bold text-white"
                  >
                    +
                  </button>

                </div>

                <p className="font-bold text-blue-600">
                  ₹{item.price * item.quantity}
                </p>

                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                  className="text-sm font-semibold text-red-500 hover:text-red-600"
                >
                  Remove
                </button>

              </div>
            ))}


            <div className="rounded-2xl bg-slate-900 p-6 text-white">

              <div className="flex items-center justify-between">

                <span className="text-slate-300">
                  Total
                </span>

                <span className="text-2xl font-bold">
                  ₹{totalPrice}
                </span>

              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default Cart;
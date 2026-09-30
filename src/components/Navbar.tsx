import { Link } from "react-router-dom";
import { useCart } from "../contex/CartContex";

function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">

      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
            S
          </div>

          <span className="text-xl font-bold">
            Shop<span className="text-blue-600">Mate</span>
          </span>
        </Link>


        <div className="hidden items-center gap-8 md:flex">

          <Link to="/">
            Home
          </Link>

          <Link to="/products">
            Products
          </Link>

          <Link to="/cart">
            Cart
          </Link>

        </div>


        <div className="flex items-center gap-3">

          <Link
            to="/cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-100"
          >
            🛒

            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}

          </Link>


          <Link
            to="/login"
            className="hidden rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white sm:block"
          >
            Sign in
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
import { Link } from "react-router-dom";
import type { Product } from "../types/product";
import { useCart } from "../contex/CartContex";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">

        <p className="text-sm text-slate-400">
          {product.category}
        </p>

        <h2 className="mt-1 text-xl font-semibold text-slate-900">
          {product.name}
        </h2>

        <p className="mt-2 text-lg font-bold text-blue-600">
          ₹{product.price}
        </p>

        <div className="mt-4 flex gap-2">

          <Link
            to={`/products/${product.id}`}
            className="flex-1 rounded-lg border border-slate-200 py-2 text-center text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
          >
            Details
          </Link>

          <button
            onClick={() => addToCart(product)}
            className="flex-1 rounded-lg bg-blue-600 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProductCard;
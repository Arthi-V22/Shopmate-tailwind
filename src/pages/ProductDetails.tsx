import { Link, useParams } from "react-router-dom";
import { products } from "../data/product";
import { useCart } from "../contex/CartContex";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 px-6 py-20 text-center">
        <h1 className="text-3xl font-bold text-slate-900">
          Product not found
        </h1>

        <Link
          to="/products"
          className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-6xl px-6">

        <Link
          to="/products"
          className="text-sm font-semibold text-blue-600"
        >
          ← Back to Products
        </Link>

        <div className="mt-8 grid overflow-hidden rounded-3xl bg-white shadow-sm md:grid-cols-2">

          <div className="h-full min-h-96 bg-slate-100">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-8 md:p-12">

            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              {product.category}
            </p>

            <h1 className="mt-3 text-4xl font-bold text-slate-900">
              {product.name}
            </h1>

            <p className="mt-5 text-3xl font-bold text-blue-600">
              ₹{product.price}
            </p>

            <p className="mt-5 leading-7 text-slate-500">
              {product.description}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Add to Cart
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
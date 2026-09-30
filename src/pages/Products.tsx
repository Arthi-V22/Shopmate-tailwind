import {
  useMemo,
  useRef,
  useState,
} from "react";

import { products } from "../data/product";
import ProductCard from "../components/ProductCard";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const searchRef = useRef<HTMLInputElement>(null);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const focusSearch = () => {
    searchRef.current?.focus();
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Shop
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            Explore Products
          </h1>

          <p className="mt-3 text-slate-500">
            Find your favorite products.
          </p>
        </div>


        <div className="mb-8 flex flex-col gap-4 md:flex-row">

          <div className="flex gap-2">

            <input
              ref={searchRef}
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search products..."
              className="w-full rounded-xl border border-slate-200 bg-white px-5 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 md:w-96"
            />

            <button
              onClick={focusSearch}
              className="rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white hover:bg-blue-600"
            >
              Search
            </button>

          </div>


          <select
            value={category}
            onChange={(event) =>
              setCategory(event.target.value)
            }
            className="rounded-xl border border-slate-200 bg-white px-5 py-3 outline-none focus:border-blue-500"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

        </div>


        <p className="mb-5 text-sm text-slate-500">
          {filteredProducts.length} products found
        </p>


        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>


        {filteredProducts.length === 0 && (
          <div className="rounded-2xl bg-white p-12 text-center">
            <h2 className="text-xl font-semibold">
              No products found
            </h2>

            <p className="mt-2 text-slate-500">
              Try another search.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Products;
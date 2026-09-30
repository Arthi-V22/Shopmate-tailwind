import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-slate-50 text-slate-900">

      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8 lg:py-28">

          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Fresh products. Better shopping.
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Everything you need,
              <span className="text-blue-400"> delivered simply.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
              Discover quality products, compare prices and shop your
              favorites from one beautiful and easy-to-use store.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/products"
                className="rounded-xl bg-blue-600 px-7 py-3.5 text-center font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
              >
                Start Shopping →
              </Link>

              <Link
                to="/products"
                className="rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Explore Products
              </Link>

            </div>

            <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-400">
              <div>
                <p className="text-xl font-bold text-white">10K+</p>
                Happy customers
              </div>

              <div>
                <p className="text-xl font-bold text-white">500+</p>
                Products
              </div>

              <div>
                <p className="text-xl font-bold text-white">4.8/5</p>
                Customer rating
              </div>
            </div>
          </div>


          <div className="relative mx-auto w-full max-w-lg">

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">

              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80"
                alt="Fresh vegetables"
                className="h-80 w-full rounded-2xl object-cover sm:h-96"
              />

              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/20 bg-white/95 p-4 shadow-xl backdrop-blur">

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Today's pick
                    </p>

                    <p className="mt-1 font-semibold text-slate-900">
                      Fresh & Healthy
                    </p>
                  </div>

                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Fresh
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        <div className="mb-8 flex items-end justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Browse
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Shop by category
            </h2>

            <p className="mt-2 text-slate-500">
              Everything organized for easier shopping.
            </p>
          </div>

          <Link
            to="/products"
            className="hidden text-sm font-semibold text-blue-600 hover:text-blue-700 sm:block"
          >
            View all →
          </Link>

        </div>


        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

          <CategoryCard
            icon="🍎"
            title="Fruits"
            text="Fresh & natural"
          />

          <CategoryCard
            icon="🥬"
            title="Vegetables"
            text="Healthy choices"
          />

          <CategoryCard
            icon="🥤"
            title="Beverages"
            text="Refresh yourself"
          />

          <CategoryCard
            icon="🛒"
            title="All products"
            text="Explore everything"
          />

        </div>

      </section>


      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">

        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Popular
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Trending products
          </h2>
        </div>


        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
<ProductPreview
  image="https://i0.wp.com/travelingtulls.com/wp-content/uploads/2022/09/apple-orchard-pick-your-own.jpg?w=800&ssl=1"
  name="Fresh Red Apples"
  category="Fruits"
  price="₹120"
/>

          <ProductPreview
            image="https://chilli-no5.com/wp-content/uploads/2021/01/health-benefits-of-mangoes.jpg"
            name="Sweet Mango"
            category="Fruits"
            price="₹180"
          />

          <ProductPreview
            image="https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=700&q=80"
            name="Green Grapes"
            category="Fruits"
            price="₹150"
          />

        </div>

      </section>


      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl bg-blue-600 px-6 py-12 sm:px-12">

          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
                Shop smarter
              </p>

              <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                Ready to find your favorites?
              </h2>

              <p className="mt-3 max-w-xl text-blue-100">
                Browse our products and discover something you'll love.
              </p>
            </div>

            <Link
              to="/products"
              className="shrink-0 rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Browse Products
            </Link>

          </div>

        </div>

      </section>


      <footer className="border-t border-slate-200 bg-white">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

          <div>
            <p className="font-bold text-slate-900">
              Shop<span className="text-blue-600">Mate</span>
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Simple shopping. Better experience.
            </p>
          </div>

          <p className="text-sm text-slate-400">
            © 2026 ShopMate. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}


interface CategoryCardProps {
  icon: string;
  title: string;
  text: string;
}

function CategoryCard({
  icon,
  title,
  text,
}: CategoryCardProps) {
  return (
    <Link
      to="/products"
      className="group rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-3xl transition group-hover:bg-blue-50">
        {icon}
      </div>

      <h3 className="mt-5 font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        {text}
      </p>
    </Link>
  );
}


interface ProductPreviewProps {
  image: string;
  name: string;
  category: string;
  price: string;
}

function ProductPreview({
  image,
  name,
  category,
  price,
}: ProductPreviewProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="relative overflow-hidden bg-slate-100">

        <img
          src={image}
          alt={name}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
          Popular
        </span>

      </div>

      <div className="p-5">

        <p className="text-sm text-slate-400">
          {category}
        </p>

        <div className="mt-1 flex items-center justify-between gap-4">

          <h3 className="font-semibold text-slate-900">
            {name}
          </h3>

          <p className="font-bold text-blue-600">
            {price}
          </p>

        </div>

        <Link
          to="/products"
          className="mt-5 block rounded-xl border border-slate-200 py-2.5 text-center text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
        >
          View product
        </Link>

      </div>

    </div>
  );
}

export default Home;
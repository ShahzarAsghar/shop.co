const BRANDS = ['VERSACE', 'ZARA', 'GUCCI', 'PRADA', 'Calvin Klein'];

const BrandBar = () => (
  <section className="bg-primary py-14 lg:py-16">
    <ul className="container-app flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:justify-between">
      {BRANDS.map((brand) => (
        <li
          key={brand}
          className="font-integral text-2xl text-white sm:text-3xl lg:text-[2rem] lg:font-black"
        >
          {brand}
        </li>
      ))}
    </ul>
  </section>
);

export default BrandBar;

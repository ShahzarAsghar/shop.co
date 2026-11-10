import { Link } from 'react-router-dom';

const CATEGORIES = [
  {
    label: 'Casual',
    image:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1000&q=80',
    position: '50% 22%',
    span: 'sm:col-span-2 lg:col-span-5',
  },
  {
    label: 'Formal',
    image:
      'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1200&q=80',
    position: '50% 18%',
    span: 'sm:col-span-3 lg:col-span-7',
  },
  {
    label: 'Party',
    image:
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=80',
    position: '50% 35%',
    span: 'sm:col-span-3 lg:col-span-7',
  },
  {
    label: 'Gym',
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80',
    position: '50% 40%',
    span: 'sm:col-span-2 lg:col-span-5',
  },
];

const CategoryCard = ({ category }) => (
  <Link
    to={`/shop?style=${category.label.toLowerCase()}`}
    className={`group relative block min-h-[150px] overflow-hidden rounded-[20px] bg-white sm:min-h-[175px] lg:min-h-[188px] ${category.span}`}
  >
    <img
      src={category.image}
      alt={`${category.label} style outfit`}
      loading="lazy"
      style={{ objectPosition: category.position }}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
    />
    <span className="absolute left-6 top-5 z-10 text-2xl font-medium leading-none text-primary sm:left-8 sm:top-6 sm:text-[1.85rem] lg:text-[2rem]">
      {category.label}
    </span>
  </Link>
);

const CategoryGrid = () => (
  <section className="container-app py-7 lg:py-9">
    <div className="rounded-[40px] bg-secondary px-4 py-9 sm:px-10 lg:px-14 lg:py-12">
      <h2 className="text-center font-integral text-[2rem] font-black leading-none sm:text-4xl xl:text-[2.6rem]">
        BROWSE BY DRESS STYLE
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-5 lg:grid-cols-12">
        {CATEGORIES.map((category) => (
          <CategoryCard key={category.label} category={category} />
        ))}
      </div>
    </div>
  </section>
);

export default CategoryGrid;

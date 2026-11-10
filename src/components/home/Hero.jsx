import { Link } from 'react-router-dom';

const STATS = [
  { value: '200+', label: 'International Brands' },
  { value: '2,000+', label: 'High-Quality Products' },
  { value: '30,000+', label: 'Happy Customers' },
];

const StarShape = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 0c.6 6.6 5.4 11.4 12 12-6.6.6-11.4 5.4-12 12-.6-6.6-5.4-11.4-12-12C6.6 11.4 11.4 6.6 12 0z" />
  </svg>
);

const Hero = () => (
  <section className="overflow-hidden bg-hero-gradient">
    <div className="container-app grid grid-cols-1 items-center gap-10 pb-8 pt-10 lg:grid-cols-2 lg:pb-0 lg:pt-0">
      {/* Left */}
      <div className="relative z-10 pb-4 lg:pb-0">
        <h1 className="font-integral text-[2.5rem] font-black leading-[1.1] tracking-tight sm:text-5xl xl:text-[4rem] xl:leading-[1.05]">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="mt-6 max-w-md text-base text-primary/60">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Link to="/shop" className="btn-primary mt-8 w-full max-w-[210px]">
          Shop Now
        </Link>

        {/* Stats */}
        <div className="mt-12 flex items-start gap-3 sm:gap-6 lg:divide-x lg:divide-borderlight lg:border-t-0 lg:pb-16 lg:pt-10">
          {STATS.map((stat, index) => (
            <div key={stat.label} className={index > 0 ? 'pl-3 sm:pl-6' : undefined}>
              <p className="text-2xl font-bold sm:text-4xl">{stat.value}</p>
              <p className="mt-1 max-w-[90px] text-xs leading-snug text-primary/60 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right visual */}
      <div className="relative h-[300px] sm:h-[420px] lg:h-auto">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=80"
          alt="Stylish model wearing trendy outfits"
          className="absolute inset-0 h-full w-full object-cover object-top sm:absolute lg:static"
        />
        <StarShape className="absolute left-4 top-4 h-6 w-6 text-primary sm:h-8 sm:w-8" />
        <StarShape className="absolute bottom-24 left-8 h-3.5 w-3.5 text-primary sm:bottom-40 lg:bottom-56" />
        <StarShape className="absolute right-6 top-40 h-10 w-10 text-accent sm:top-52 lg:top-1/3 lg:h-14 lg:w-14" />
        <StarShape className="absolute right-1/3 bottom-6 h-5 w-5 text-primary lg:bottom-16" />
      </div>
    </div>
  </section>
);

export default Hero;

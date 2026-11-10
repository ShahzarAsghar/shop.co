import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProductCard from '@/components/common/ProductCard';
import { getProductsForSection } from '@/services/productService';

const ProductSection = ({ title, category, viewAllTo }) => {
  const [products, setProducts] = useState([]);
  const [scrollPos, setScrollPos] = useState({ hasPrev: false, hasNext: true });
  const scrollerRef = useRef(null);

  useEffect(() => {
    let active = true;
    getProductsForSection(category, 4).then((data) => {
      if (active) setProducts(data);
    });
    return () => {
      active = false;
    };
  }, [category]);

  const updateScrollState = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setScrollPos({
      hasPrev: el.scrollLeft > 8,
      hasNext: el.scrollLeft < el.scrollWidth - el.clientWidth - 8,
    });
  };

  useEffect(() => {
    if (!scrollerRef.current) return;
    updateScrollState();
    window.addEventListener('resize', updateScrollState);
    return () => window.removeEventListener('resize', updateScrollState);
  }, [products]);

  const scrollBy = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector('a');
    const step = card ? (card.offsetWidth + 20) * 2 : el.clientWidth;
    el.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  return (
    <section className="container-app border-y border-borderlight py-14 lg:py-16">
      <h2 className="text-center font-integral text-[2rem] font-black leading-none sm:text-4xl xl:text-[3rem]">
        {title}
      </h2>

      <div className="relative mt-10 hidden lg:block">
        {scrollPos.hasPrev && (
          <button
            type="button"
            aria-label="Previous products"
            onClick={() => scrollBy(-1)}
            className="absolute -left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-primary hover:bg-secondary"
          >
            <ArrowLeft />
          </button>
        )}
        {scrollPos.hasNext && (
          <button
            type="button"
            aria-label="Next products"
            onClick={() => scrollBy(1)}
            className="absolute -right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-primary hover:bg-secondary"
          >
            <ArrowRight />
          </button>
        )}
      </div>

      <div
        ref={scrollerRef}
        onScroll={updateScrollState}
        className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-4 lg:overflow-visible"
      >
        {products.map((product) => (
          <div key={product.id} className="w-[240px] shrink-0 snap-start sm:w-[276px] lg:w-auto">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link to={viewAllTo} className="btn-outline">
          View All
        </Link>
      </div>
    </section>
  );
};

export default ProductSection;

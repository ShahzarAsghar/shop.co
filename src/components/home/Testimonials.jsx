import { useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, BadgeCheck } from 'lucide-react';
import StarRating from '@/components/common/StarRating';

const REVIEWS = [
  {
    id: 'r1',
    name: 'Sarah M.',
    rating: 5,
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual tees to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    id: 'r2',
    name: 'Alex K.',
    rating: 5,
    text: 'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable.',
  },
  {
    id: 'r3',
    name: 'James L.',
    rating: 5,
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection is not only diverse but also on-point.",
  },
  {
    id: 'r4',
    name: 'Monica R.',
    rating: 5,
    text: 'The delivery was fast and the packaging was beautiful. Everything fits exactly as described — definitely ordering again soon.',
  },
  {
    id: 'r5',
    name: 'Christine B.',
    rating: 4.5,
    text: 'I was a bit hesitant to try a new clothing brand, but Shop.co proved me wrong. The ordering process was smooth and my order arrived on time.',
  },
  {
    id: 'r6',
    name: 'David P.',
    rating: 5,
    text: 'Customer service at Shop.co is top notch. They helped me find the perfect size and provided style recommendations I actually love.',
  },
];

const ReviewCard = ({ review }) => (
  <article className="block w-[340px] max-w-[85vw] shrink-0 snap-start rounded-2xl border border-borderlight bg-white p-7 shadow-sm sm:w-[400px]">
    <StarRating rating={review.rating} showCount={false} />
    <p className="mt-3 flex items-center gap-1.5">
      <span className="font-bold">{review.name}</span>
      <BadgeCheck size={20} className="text-verified" />
    </p>
    <p className="mt-3 text-base leading-relaxed text-primary/60">{review.text}</p>
  </article>
);

const Testimonials = () => {
  const scrollerRef = useRef(null);

  const scroll = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector('article');
    const step = card ? (card.offsetWidth + 16) * 3 : el.clientWidth * 0.5;
    el.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (el) {
      el.style.setProperty('scrollbar-width', 'none');
    }
  }, []);

  return (
    <section className="container-app py-14 lg:py-16">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-integral text-[2rem] font-black leading-none sm:text-4xl xl:text-[3rem]">
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="flex gap-3">
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scroll(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-2xl text-primary transition-colors hover:bg-secondary disabled:opacity-40"
          >
            <ArrowLeft size={26} />
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scroll(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-2xl text-primary transition-colors hover:bg-secondary disabled:opacity-40"
          >
            <ArrowRight size={26} />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="no-scrollbar -mx-4 mt-10 flex snap-x gap-4 overflow-x-auto scroll-smooth px-4 sm:mx-0 sm:px-0"
      >
        {REVIEWS.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

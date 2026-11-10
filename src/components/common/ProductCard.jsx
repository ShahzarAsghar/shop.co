import { Link } from 'react-router-dom';
import StarRating from './StarRating';

const ProductCard = ({ product }) => {
  const { id, title, price, originalPrice, discount, rating, reviewsCount, imageUrl } =
    product;

  return (
    <Link
      to={`/product/${id}`}
      className="group block transition-transform duration-200 hover:-translate-y-1"
    >
      <div className="relative flex max-h-[300px] min-h-[250px] items-center justify-center overflow-hidden rounded-2xl bg-secondary">
        {discount ? (
          <span className="absolute left-3 top-3 z-10 inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
            -{discount}%
          </span>
        ) : null}
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="mt-2 flex items-center gap-2">
          <StarRating rating={rating} />
          <span className="text-sm text-primary/60">
            {rating ? `${rating}/` : ''}<span className="text-primary/40">5</span>
          </span>
          {reviewsCount != null && (
            <span className="text-sm text-primary/40">
              {reviewsCount} Reviews
            </span>
          )}
        </div>
        <div className="mt-2 flex items-center gap-2.5">
          <span className="text-2xl font-bold">
            {price != null ? `$${price}` : '—'}
          </span>
          {originalPrice != null && (
            <s className="text-2xl font-bold text-muted/60 line-through">
              ${originalPrice}
            </s>
          )}
          {discount ? (
            <span className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
              {discount}% Off
            </span>
          ) : null}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

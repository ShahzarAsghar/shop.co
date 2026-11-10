const StarRating = ({ rating = 0, reviewsCount = null, size = 18, showCount = true }) => {
  const clamped = Math.max(0, Math.min(5, rating));

  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="flex" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((index) => {
          const filled = clamped >= index + 1;
          const half = !filled && clamped > index + 0.25;
          return (
            <svg
              key={index}
              width={size}
              height={size}
              viewBox="0 0 24 24"
              className={half ? '-ml-0.5' : undefined}
            >
              {half ? (
                <def>
                  <linearGradient id={`half-star-${index}`}>
                    <stop offset="50%" stopColor="#FFC633" />
                    <stop offset="50%" stopColor="#E5E5E5" />
                  </linearGradient>
                </def>
              ) : null}
              <mask id={`star-mask-${index}`}>
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  fill="white"
                />
              </mask>
              <rect
                width="24"
                height="24"
                fill={
                  half
                    ? `url(#half-star-${index})`
                    : filled
                      ? '#FFC633'
                      : '#E5E5E5'
                }
                mask={`url(#star-mask-${index})`}
              />
            </svg>
          );
        })}
      </span>
      {showCount && reviewsCount != null && (
        <span className="text-sm leading-none text-primary/60">
          {clamped}/<span className="text-primary/40">5</span>
        </span>
      )}
    </span>
  );
};

export default StarRating;

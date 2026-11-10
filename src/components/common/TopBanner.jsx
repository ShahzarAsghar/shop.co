import { Link } from 'react-router-dom';

const TopBanner = () => (
  <div className="bg-primary py-2.5 text-center text-xs text-white sm:text-sm">
    Sign up and get 20% off to your first order.{' '}
    <Link to="/signup" className="font-bold underline underline-offset-2">
      Sign Up Now
    </Link>
  </div>
);

export default TopBanner;

import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search, Menu, X, ChevronDown, ShoppingCart, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';

const NAV_LINKS = [
  { label: 'Shop', to: '/shop', hasDropdown: true },
  { label: 'On Sale', to: '/sale' },
  { label: 'New Arrivals', to: '/new-arrivals' },
  { label: 'Brands', to: '/brands' },
];

const SHOP_DROPDOWN = [
  { label: 'Casual', to: '/shop?style=casual' },
  { label: 'Formal', to: '/shop?style=formal' },
  { label: 'Party', to: '/shop?style=party' },
  { label: 'Gym', to: '/shop?style=gym' },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { totalItems } = useCart();
  const { isAuthenticated } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const lockScroll = () =>
      (document.body.style.overflow = mobileOpen ? 'hidden' : '');
    lockScroll();
    return () => lockScroll();
  }, [mobileOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    navigate(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
    setSearchQuery('');
    setMobileOpen(false);
  };

  const linkClass = ({ isActive }) =>
    `transition-colors hover:text-primary ${
      isActive ? 'text-primary' : 'text-primary/60'
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-borderlight bg-white">
      <nav className="container-app flex h-[74px] items-center gap-4 lg:gap-10">
        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className="shrink-0 lg:hidden"
        >
          <Menu size={26} />
        </button>

        {/* Logo */}
        <Link
          to="/"
          className="shrink-0 font-integral text-2xl font-black tracking-tight lg:text-3xl"
        >
          SHOP.CO
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <li
              key={link.label}
              className={link.hasDropdown ? 'group relative' : undefined}
            >
              <NavLink to={link.to} className={linkClass} end={link.to === '/'}>
                <span className="inline-flex items-center gap-1 py-6">
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={16} />}
                </span>
              </NavLink>
              {link.hasDropdown && (
                <div className="invisible absolute left-0 top-full w-44 rounded-xl border border-borderlight bg-white p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                  {SHOP_DROPDOWN.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="block rounded-lg px-3 py-2 text-sm text-primary/70 hover:bg-secondary hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="ml-auto hidden min-w-0 flex-1 max-w-xl lg:ml-0 lg:block"
        >
          <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2.5">
            <Search size={20} className="shrink-0 text-muted" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products..."
              className="w-full bg-transparent text-sm text-primary outline-none placeholder:text-muted"
            />
          </div>
        </form>

        {/* Actions */}
        <div className="ml-auto flex shrink-0 items-center gap-3 lg:ml-0 lg:gap-4">
          <button
            type="button"
            aria-label="Search"
            onClick={() => navigate('/search')}
            className="lg:hidden"
          >
            <Search size={24} />
          </button>
          <Link to="/cart" aria-label="Cart" className="relative">
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-white">
                {totalItems > 99 ? '99+' : totalItems}
              </span>
            )}
          </Link>
          <Link
            to={isAuthenticated ? '/account' : '/login'}
            aria-label="Account"
            className="hover:opacity-70"
          >
            <User size={24} />
          </Link>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${mobileOpen ? 'visible' : 'invisible'}`}
      >
        <div
          role="button"
          tabIndex={0}
          aria-label="Close menu overlay"
          onClick={() => setMobileOpen(false)}
          onKeyDown={(e) => e.key === 'Escape' && setMobileOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <aside
          className={`absolute left-0 top-0 flex h-full w-80 max-w-[85vw] flex-col bg-white p-6 transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="font-integral text-2xl font-black">SHOP.CO</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <X size={26} />
            </button>
          </div>

          <form onSubmit={handleSearch} className="mb-6 lg:hidden">
            <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2.5">
              <Search size={18} className="text-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
              />
            </div>
          </form>

          <ul className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`text-lg font-medium ${
                    link.hasDropdown ? 'inline-flex items-center gap-1' : ''
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={18} />}
                </NavLink>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </header>
  );
};

export default Navbar;

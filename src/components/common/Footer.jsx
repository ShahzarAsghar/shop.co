import { useState } from 'react';
import { Twitter, Facebook, Instagram, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const COLUMNS = [
  {
    title: 'COMPANY',
    links: ['About', 'Features', 'Works', 'Career'],
  },
  {
    title: 'HELP',
    links: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'],
  },
  {
    title: 'FAQ',
    links: ['Account', 'Manage Deliveries', 'Orders', 'Payments'],
  },
  {
    title: 'RESOURCES',
    links: ['Free eBooks', 'Development Tutorial', 'How to - Blog', 'YouTube Playlist'],
  },
];

const SOCIALS = [
  { label: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { label: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { label: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { label: 'GitHub', icon: Github, href: 'https://github.com' },
];

const PAYMENTS = ['Visa', 'Mastercard', 'PayPal', 'Apple Pay', 'Google Pay'];

const Footer = () => {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="bg-secondary pb-16 pt-14 lg:pb-12 lg:pt-[116px]">
      <div className="container-app">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-integral text-[1.6rem] font-black">
              SHOP.CO
            </Link>
            <p className="mt-4 max-w-xs text-base text-primary/60">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-borderlight bg-white text-primary transition-all hover:bg-primary hover:text-white"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h4 className="text-sm font-medium tracking-wide text-primary">
                {column.title}
              </h4>
              <ul className="mt-5 flex flex-col gap-3.5">
                {column.links.map((label) => (
                  <li key={label}>
                    <Link
                      to="/"
                      className="text-base text-primary/60 transition-colors hover:text-primary"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-borderlight pt-6 sm:flex-row">
          <p className="text-sm text-primary/60">
            Shop.co &copy; {year}, All Rights Reserved
          </p>
          <ul className="flex flex-wrap items-center gap-2.5">
            {PAYMENTS.map((method) => (
              <li
                key={method}
                className="rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-primary shadow-sm"
              >
                {method}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

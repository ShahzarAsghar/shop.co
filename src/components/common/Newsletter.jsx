import { useState } from 'react';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <section className="container-app relative z-10 -mb-6 pb-14 lg:-mb-[72px] lg:pb-0">
      <div className="flex flex-col gap-8 rounded-[20px] bg-primary px-6 py-10 text-left sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:py-14">
        <h2 className="max-w-[480px] font-integral text-[1.65rem] font-black leading-[1.15] text-white sm:text-3xl lg:text-[2.3rem]">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>

        <form onSubmit={handleSubmit} className="flex w-full max-w-[512px] flex-col gap-3.5">
          <div className="flex items-center gap-2.5 rounded-full bg-white px-5 py-3.5">
            <Mail size={20} className="shrink-0 text-muted" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email address"
              className="w-full bg-transparent text-sm text-primary outline-none placeholder:text-muted"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-white py-3.5 text-sm font-medium text-primary transition-opacity hover:opacity-90"
          >
            Subscribe to Newsletter
          </button>
          {subscribed && (
            <p className="text-sm text-white/80">
              Thanks for subscribing! Keep an eye on your inbox.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Newsletter;

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AuthProvider } from '@/context/AuthContext';
import { CartProvider } from '@/context/CartContext';
import TopBanner from '@/components/common/TopBanner';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import Newsletter from '@/components/common/Newsletter';
import Home from '@/pages/Home';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = () => (
  <div className="flex min-h-screen flex-col">
    <TopBanner />
    <Navbar />
    <main className="flex-1">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Newsletter />
            </>
          }
        />
        {/* Future routes: /product/:id, /cart, /checkout, /login, /signup, /shop */}
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <CartProvider>
        <ScrollToTop />
        <Layout />
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>
);

export default App;

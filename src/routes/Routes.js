
import React, { lazy} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from '../pages/error/PageNotFound';

// Lazy-load your components as before
const Home = lazy(() => import('../pages/Home'));
const Market = lazy(() => import('../pages/Market'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const Contact = lazy(() => import('../pages/Contact'));
const Manufacturers = lazy(() => import('../pages/Manufacturers'));
const Product = lazy(() => import('../pages/Products'));
const PassivesProduct = lazy(() => import('../pages/PassivesProduct'));
const SemiProduct = lazy(() => import('../pages/SemiProduct'));
const ConnectivityProduct = lazy(() => import('../pages/ConnectivityProduct'));
const InterconnectionProduct = lazy(() => import('../pages/InterconnectionProduct'));
const ElectromecProduct = lazy(() => import('../pages/ElectromecProduct'));
const ProductDetail = lazy(() => import('../pages/ProductDetail'));
const ManufactureDetail = lazy(() => import('../pages/ManufactureDetail'));
const OurBusinessDetail = lazy(() => import('../pages/OurBussinessDetail'));
const MarketDetail = lazy(() => import('../pages/MarketDetail'));
const Policy = lazy(() => import('../pages/Policy'));

export default function Router() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/manufacturers" element={<Manufacturers />} />
          <Route path="/products" element={<Product />} />
          <Route path="/passives-products" element={<PassivesProduct />} />
          <Route path="/semi-products" element={<SemiProduct />} />
          <Route path="/connectivity-products" element={<ConnectivityProduct />} />
          <Route path="/interconect-products" element={<InterconnectionProduct />} />
          <Route path="/electromec-products" element={<ElectromecProduct />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/manufacture-detail/:id" element={<ManufactureDetail />} />
          <Route path="/ourbusiness-detail/:id" element={<OurBusinessDetail />} />
          <Route path="/market-detail/:id" element={<MarketDetail />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

import Navbar from './components/Navbar';
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Service,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from './sections';

const App = () => (
  <main className="relative">
    <Navbar></Navbar>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero></Hero>
    </section>
    <section className="padding">
      <PopularProducts></PopularProducts>
    </section>
    <section className="padding">
      <SuperQuality></SuperQuality>
    </section>
    <section className="padding-x py-10">
      <Service></Service>
    </section>
    <section className="padding">
      <SpecialOffer></SpecialOffer>
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews></CustomerReviews>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe></Subscribe>
    </section>
    <section className="padding bg-black padding-x padding-t pb-8">
      <Footer></Footer>
    </section>
  </main>
);

export default App;

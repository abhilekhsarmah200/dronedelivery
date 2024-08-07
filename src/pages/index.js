import Head from 'next/head';
import HeroSection from '../../components/HeroSection';
import HowItWorks from '../../components/HowItWorks';
import Features from '../../components/Features';
import Testimonials from '../../components/Testimonials';
import ContactUs from '../../components/ContactUs';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>SkyDine Delivery</title>
        <meta
          name='description'
          content='Experience the future of food delivery with our fast, eco-friendly drone service.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <HeroSection />
      <div className={'relative bg-white text-black'}>
        <HowItWorks />
        <Features />
        <ContactUs />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { Products } from '@/components/landing/Products';
import { ResellerProgram } from '@/components/landing/ResellerProgram';
import { Pricing } from '@/components/landing/Pricing';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { FloatingActionButton } from '@/components/ui/floating-action-button';
import { ChatbotTrigger } from '@/components/ui/ai-chatbot';

const ProductsPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Products - Mapzo AI | Magic QR Solutions</title>
        <meta
          name="description"
          content="Explore Mapzo AI's innovative products like Magic QR. Advanced digital QR solutions for Google Business Profile management."
        />
      </Helmet>

      <ScrollProgress />
      <main className="min-h-screen bg-background">
        <Header />
        <FloatingActionButton />
        <ChatbotTrigger />
        
        <div className="pt-24 pb-12 bg-slate-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Products</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Innovative tools designed to automate your local SEO and boost your digital presence.
            </p>
          </div>
        </div>

        <Products />
        <ResellerProgram />
        <Pricing />
        
        <Footer />
      </main>
    </>
  );
};

export default ProductsPage;

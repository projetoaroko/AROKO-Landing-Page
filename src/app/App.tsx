import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Ticker } from './components/Ticker';
import { Conceito } from './components/Conceito';
import { TicketWidget } from './components/TicketWidget';
import { Desfile } from './components/Desfile';
import { ContactForm } from './components/ContactForm';
import { Idealizadora } from './components/Idealizadora';
import { Apoiadores } from './components/Apoiadores';
import { Footer } from './components/Footer';
import { FloatingButton } from './components/FloatingButton';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <div className="w-full">
      <Navbar />
      <TicketWidget />
      <FloatingButton />
      <main>
        <Hero />
        <Ticker />
        <Conceito />
        <Desfile />
        <ContactForm />
        <Idealizadora />
        <Apoiadores />
      </main>
      <Footer />
    </div>
  );
}

import Header from '../components/header';
import Hero from '../components/hero';
import Servicos from '../components/servicos';
import Sobre from '../components/sobre';
import Clientes from '../components/clientes';
import Footer from '../components/footer';
import Whatsapp from '../components/whatsapp'

export default function home() {


  return (
    <main className="relative">
      <Whatsapp />
      <Header />
      <Hero />
      <Servicos />
      <Sobre />
      <Clientes />
      <Footer />
    </main>
  );
}

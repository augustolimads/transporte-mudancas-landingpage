import { FaWhatsapp } from 'react-icons/fa';
import Titulo from './titulo';

const contatos = {
  telefone: '+55(99)99999-9999',
  endereco: 'Caruaru - PE',
  CNPJ: '99.999.999/0001-99',
};

export default function Footer() {
  return (
    <footer id='contato' className="bg-gray px-4 pb-4 sm:px-6 md:px-12 md:pt-16">
      <section className="flex flex-col justify-center items-center py-4 md:flex-row md:justify-between">
        <div className="md:w-1/2">
          <img
            src="img/logo.png"
            alt="marca checkin mudanças"
            className="p-4"
            loading='lazy'
          />
        </div>
        <div className="md:w-1/2">
          <div className="md:pl-4 md:w-3/4">
            <Titulo className="inline">Contato</Titulo>
            <p className="py-4">
              Entre em contato pelo WhatsApp e peça seu orçamento gratuitamente.
              Responderemos o quanto antes!
            </p>
            <div className="flex">
              <i>
                <FaWhatsapp />
              </i>
              <p>{contatos.telefone}</p>
            </div>
            <p className='my-2'>{contatos.endereco}</p>
            <p>CNPJ: {contatos.CNPJ}</p>
          </div>
        </div>
      </section>
      <p className="text-center py-4">
        Tranporte Mudanças {new Date().getFullYear()}. Todos os direitos reservados.
      </p>
    </footer>
  );
}

import Titulo from './titulo';

const servicos = [
  {
    icon: 'img/servicos/mudancas_residenciais.png',
    title: 'Mudanças Residenciais Exclusivas / Compartilhadas',
    text:
      'Disponibilizamos de um caminhão para carregar suas mudanças da forma mais cômoda para você',
  },
  {
    icon: 'img/servicos/embalagem.png',
    title: 'Mudanças Comerciais e Remanejamento de Ambientes Empresariais',
    text: 'Embalamos suas mudanças para maior segurança e comodidade',
  },
  {
    icon: 'img/servicos/fretamento.png',
    title: 'Mudanças e Cargas Rastreadas',
    text:
      'Entrega para diversos estados, principalmente entre São Paulo e Manaus',
  },
  {
    icon: 'img/servicos/embalagem.png',
    title: 'Montagens e Desmontagens',
    text: 'Embalamos suas mudanças para maior segurança e comodidade',
  },
  {
    icon: 'img/servicos/embalagem.png',
    title: 'Içamentos até 1T',
    text: 'Embalamos suas mudanças para maior segurança e comodidade',
  },
  {
    icon: 'img/servicos/embalagem.png',
    title: 'Transporte de veículos, Motos e Barcos',
    text: 'Embalamos suas mudanças para maior segurança e comodidade',
  },
  {
    icon: 'img/servicos/embalagem.png',
    title: 'Transporte de Animais Domésticos',
    text: 'Embalamos suas mudanças para maior segurança e comodidade',
  },
  {
    icon: 'img/servicos/moveis.png',
    title: 'Guarda Móveis',
    text:
      'Oferecemos Guarda Móveis nas seguintes capitais: Cuiabá MT, Belo Horizonte MG, São Paulo, Manaus AM',
  },
  {
    icon: 'img/servicos/balsa.png',
    title: 'Convênio com Balsas',
    text:
      'Entrega para diversos estados, principalmente entre São Paulo e Manaus',
  },
];

export default function Servicos() {
  return (
    <section className="section sm:px-6 md:px-12 md:py-12" id="servicos">
      <Titulo className="title">Serviços</Titulo>
      <div className="grid grid-cols-1 gap-8 py-4 sm:grid-cols-2 md:grid-cols-3">
        {servicos.map((item, index) => {
          return (
            <Servico
              icon={item.icon}
              title={item.title}
              text={item.text}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
}

const Servico = ({ icon, title, text }) => {
  return (
    <div className="flip-card w-56 h-64">
      <div className="flip-card-inner shadow-sm w-full h-full">
        <div
          className="card-front flex flex-col justify-center items-center w-full h-full p-4"
        >
          <img src={icon} className="mb-4 w-24" alt={title} loading="lazy" />
          <h2 className="text-lg font-semibold sm:text-xl text-center">{title}</h2>
        </div>
        <div className='card-back flex flex-col justify-center items-center w-full h-full p-4 bg-primary'>
          <p className='text-center font-semibold text-xl text-white'>{text}</p>
        </div>
      </div>
    </div>
  );
};

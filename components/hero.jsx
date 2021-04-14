const hero = {
  bg: 'img/hero/bg.jpg',
  texto: 'O melhor serviço em',
  chamada: [
    'Mudanças Residenciais Exclusivas ou Compartilhadas',
    'Mudanças e Cargas Rastreadas',
    'Montagens e Desmontagens',
    'Içamento até 1T',
    'Transporte de Veículos, Motos e Barcos',
    'Transporte de Animais Domésticos',
    'Guarda Móveis',
    'Remanejamento de Ambientes Empresariais',
    'Mudanças Comerciais'
  ],
};

export default function Hero() {
  const [order, setOrder] = React.useState(0);
  const [anima, setAnima] = React.useState(null);
  const timer = React.useRef();
  const frames = React.useRef();
  const chamadas = hero.chamada.length;

  //timer
  React.useEffect(() => {
    timer.current = setTimeout(() => {
      setOrder(order + 1 >= chamadas ? 0 : order + 1);
    }, 3000);
    return () => clearTimeout(timer);
  });

  //animation
  React.useEffect(() => {
    setAnima('flip');
    frames.current = setTimeout(() => {
      setAnima(null);
    }, 500);
  }, [order]);

  return (
    <section
      className="hero section"
      style={{ backgroundImage: `url(${hero.bg})` }}
    >
      <h2 className="text-center font-semibold text-2xl sm:text-3xl md:text-4xl">
        {hero.texto}
      </h2>
      <div className='w-full h-24'>
        <h1
          className={`text-center font-bold text-3xl sm:text-4xl md:text-5xl ${anima}`}
          key={order}
        >
          {hero.chamada[order]}
        </h1>
      </div>
    </section>
  );
}

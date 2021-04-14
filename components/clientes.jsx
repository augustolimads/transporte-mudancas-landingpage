import Titulo from './titulo';

const clientes = [
  'img/clientes/ceasa',
  'img/clientes/confianca',
  'img/clientes/engesombra',
  'img/clientes/inovary',
  'img/clientes/jeep',
  'img/clientes/macal',
  'img/clientes/madeira',
  'img/clientes/granero',
];

function clientName(url) {
  return url.slice(13);
}

export default function Clientes() {
  return (
    <section id="clientes" className="p-4 py-10 sm:px-6 md:px-12">
      <Titulo className="inline">Empresas Atendidas</Titulo>
      <div className="flex flex-wrap justify-between items-center py-8">
        {clientes.map((cliente, index) => {
          return (
            <img
              src={`${cliente}.png`}
              alt={clientName(cliente)}
              title={clientName(cliente)}
              key={index}
              className="m-2 hover:shadow-xs transition ease-in-out duration-300"
              loading="lazy"
            />
          );
        })}
      </div>
    </section>
  );
}

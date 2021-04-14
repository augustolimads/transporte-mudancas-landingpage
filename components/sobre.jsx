import Titulo from './titulo';
import Slide from './slide';

const sobre = {
  bg: 'img/sobre/bg.jpg',
  texto:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis risus sed arcu interdum, vitae interdum metus volutpat. Donec condimentum ut diam vitae efficitur. Phasellus placerat mollis lacus, consectetur porta neque consectetur lacinia. Proin dolor velit, efficitur vitae tincidunt vel, lacinia ac sem. Morbi pretium dictum purus sit amet ullamcorper. Quisque sit amet tristique lacus. Mauris lectus nibh, efficitur non nisi in, malesuada aliquam mi. Quisque laoreet, odio et dapibus tincidunt, nisl enim malesuada mi, et rutrum ante urna dictum metus.',
  caminhao: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  ],
  galeria: ['img/sobre/caminhao.jpg', 'img/sobre/aberto.jpg'],
};

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="section p-4 sm:px-6 md:px-12"
      style={{ backgroundImage: `url(${sobre.bg})` }}
    >
      <Titulo className="text-white">Sobre a Empresa</Titulo>
      <p className="text-white mt-4 mb-10">{sobre.texto}</p>
      <div className="flex flex-col justify-center text-center md:flex-row">
        <div className='md:w-1/2 h-64 my-4'>
          <Slide slides={sobre.galeria} />
        </div>
        {/*<img src={sobre.galeria[0]} alt="caminhao" className="mb-4" loading='lazy'/>*/}
        <div className="md:pl-6">
          <Titulo className="text-white inline">O Caminhão</Titulo>
          <ul className="text-white text-left mt-4 ml-6">
            {sobre.caminhao.map((item, index) => {
              return (
                <li key={index} className="list-disc">
                  <p>{item}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import useWindowSize from './hooks/useWindowSize';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';

export default function Header() {
  const { width } = useWindowSize();
  const [headerStyle, setHeaderStyle] = React.useState({
    transition: 'all 200ms ease-in',
  });

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isVisible = currPos.y > prevPos.y;
      const top = currPos.y === 0;
      const shouldBeStyle = {
        backgroundColor: top ? 'transparent' : 'white',
        visibility: isVisible ? 'visible' : 'hidden',
        transition: `all 200ms ${isVisible ? 'ease-in' : 'ease-out'}`,
        transform: isVisible ? 'none' : 'translate(0, -100%)',
      };

      if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return;
      setHeaderStyle(shouldBeStyle);
    },
    [headerStyle]
  );

  return width <= 640 ? (
    <NavMobile headerStyle={headerStyle} />
  ) : (
    <NavPC headerStyle={headerStyle} />
  );
}

const NavMobile = ({ headerStyle }) => {
  const [modal, setModal] = React.useState('invisible');

  function toggle() {
    setModal(modal === 'invisible' ? 'visible' : 'invisible');
  }

  return (
    <>
      <header
        className="navbar p-4 flex justify-between items-center w-full fixed sm:px-6"
        style={{ ...headerStyle }}
      >
        <Link href="/">
          <a>
            <img
              className="w-32"
              src="img/logo.png"
              alt="logo checkin"
              loading="lazy"
            />
          </a>
        </Link>
        <nav className="relative">
          <button className="p-4" onClick={toggle}>
            <i className="text-2xl">
              <FaBars />
            </i>
          </button>
        </nav>
      </header>
      <NavModal modal={modal} toggle={toggle} />
    </>
  );
};

const NavModal = ({ modal, toggle }) => {
  return (
    <div
      className={`fixed bg-white z-10 top-0 w-full h-full p-4 flex flex-col items-center ${modal}`}
    >
      <button className="p-4" onClick={toggle}>
        <i className="text-2xl">
          <FaBars />
        </i>
      </button>
      <Link href="/">
        <a onClick={toggle}>
          <img
            className="w-56 mt-4 mb-12"
            src="img/logo.png"
            alt="logo checkin"
            loading="lazy"
          />
        </a>
      </Link>
      <nav className="text-2xl font-semibold flex flex-col items-center leading-loose">
        <a href="/#servicos" className="mr-2 link" onClick={toggle}>
          Serviços
        </a>
        <a href="/#sobre" className="mr-2 link" onClick={toggle}>
          Sobre
        </a>
        <a href="/#clientes" className="mr-2 link" onClick={toggle}>
          Clientes
        </a>
        <a href="/#contato" onClick={toggle} className='link'>
          Contato
        </a>
      </nav>
    </div>
  );
};

const NavPC = ({ headerStyle }) => {
  return (
    <header
      className="p-4 flex justify-between items-center w-full fixed md:px-12"
      style={{ ...headerStyle }}
    >
      <Link href="/">
        <a>
          <img
            className="w-32"
            src="img/logo.png"
            alt="logo checkin"
            loading="lazy"
          />
        </a>
      </Link>
      <nav className="text-lg font-semibold">
        <a href="/#servicos" className="mr-2 link">
          Serviços
        </a>
        <a href="/#sobre" className="mr-2 link">
          Sobre
        </a>
        <a href="/#clientes" className="mr-2 link">
          Clientes
        </a>
        <a href="/#contato" className='link'>Contato</a>
      </nav>
    </header>
  );
};

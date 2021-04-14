import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Slide({ slides }) {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    setPosition(-(100 * active));
  }, [active]);

  function slidePrev() {
    if (active > 0) setActive(active - 1);
  }

  function slideNext() {
    if (active < slides.length - 1) setActive(active + 1);
  }

  return (
    <section className="container overflow-hidden h-full relative flex items-center justify-center">
      <div
        ref={contentRef}
        className="flex slide"
        style={{ transform: `translateX(${position}%)` }}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            className="w-full flex-shrink-0 bg-gray-200 rounded text-center py-40 object-contain"
            src={slide}
          />
        ))}
      </div>
      <button
        className="p-2 absolute left-0 text-white bg-glass h-full"
        onClick={slidePrev}
      >
        <FaArrowLeft />
      </button>
      <button
        className="p-2 absolute right-0 text-white bg-glass h-full"
        onClick={slideNext}
      >
        <FaArrowRight />
      </button>
    </section>
  );
}

export default function Modal() {
  return (
    <div
      className={`fixed bg-white p-4 z-10 w-3/4 h-screen items-center flex flex-col inset-x-0 bottom-0`}
    >
      <img
        className="w-32"
        src="img/logo.png"
        alt="logo checkin"
        loading="lazy"
      />
    </div>
  );
}

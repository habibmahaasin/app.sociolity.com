export default function Header() {
  return (
    <header className="flex justify-between items-center bg-accent px-6 py-4 sticky top-0 z-10">
      <button className="cursor-pointer text-secondary hover:text-primary transition-colors duration-200 focus:outline-none">
        <img
          src="https://www.mahaasin.my.id/logo.svg"
          className="w-7 h-7"
          alt="mahaasin"
        />
      </button>
      <div className="avatar rounded-full shadow-xl">
        <div className="w-10 rounded-full shadow-2xl">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
    </header>
  );
}

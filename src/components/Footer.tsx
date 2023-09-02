const Footer = () => {
  return (
    <footer className="mt-[10%]">
      <div className="w-[25%] mb-2 bg-black mx-auto">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-amber-300 to-transparent shadow-inner"></div>
      </div>
      <div className="flex justify-center items-center flex-col sm:items-end sm:flex-row">
        <span>Created by&nbsp;</span>
        <h2 className="name">
          <a
            href="https://artempchelenkov.online/"
            target="_blank"
            className="relative transition-colors duration-300 ease-in-out hover:text-[#f9a826]"
          >
            <span className="text-[#f9a826]">T</span>he
            <span className="text-[#f9a826]">C</span>raziest
            <span className="text-[#f9a826]">B</span>ee
          </a>
        </h2>
        <span>&nbsp;&copy; 2023</span>
      </div>
    </footer>
  );
};

export default Footer;

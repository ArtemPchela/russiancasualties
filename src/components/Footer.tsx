import { useEffect, useState } from "react";

const text = "BeehiveCode";

const Footer = () => {
  // eslint-disable-next-line no-undef
  const [formattedText, setFormattedText] = useState<JSX.Element[] | null>(
    null,
  );

  useEffect(() => {
    const formatted = text.split("").map((letters, index) => (
      <span
        key={index}
        className={letters.match(/[A-Z]/) ? "text-[#f9a826]" : "text-[#ffffff]"}
      >
        {letters}
      </span>
    ));

    setFormattedText(formatted);
  }, []);

  return (
    <footer className="items-center mx-auto">
      <span className="items-center flex text-clamp mb-4">
        <sup className="text-green-500 text-2xl">&#x2a;</sup>
        Official stats <br /> Ministry of Defence of Ukraine
      </span>
      <div className="h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-inner"></div>
      <div className="justify-center py-2 items-center flex sm:items-end sm:flex-row text-clamp">
        <span>
          Created by&nbsp;
          <a
            href="https://artempchelenkov.online/"
            target="_blank"
            className="transition-colors duration-300 ease-in-out text-secondary hover:text-[#f9a826] underline underline-offset-4 animate-pulse"
          >
            {formattedText}
          </a>
          &nbsp;&copy; 2023
        </span>
      </div>
    </footer>
  );
};

export default Footer;

import { useEffect, useState } from "react";

const partners = [
  "Kachi Aghasili Initiative",
  "Anambra State Government",
  "Isi-Nri Museum",
  "AI Movement Tech Academy",
  "App Zoo",
];

export default function PartnersSection() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fadeOut = setTimeout(() => setVisible(false), 2500);
    const changePartner = setTimeout(() => {
      setIndex((prev) => (prev + 1) % partners.length);
      setVisible(true);
    }, 3000);

    return () => {
      clearTimeout(fadeOut);
      clearTimeout(changePartner);
    };
  }, [index]);

  return (
    <section className="bg-[#f5f5f5] p-12 md:px-62">
      <h1 className="">
        Kachi James Gallery <br />
        <span className="font-light">would like to thank our major partners</span>
      </h1>

      <div className="">
        <span
          className={`text-xl md:text-2xl font-semibold tracking-wide transition-opacity duration-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {partners[index]}
        </span>
      </div>
    </section>
  );
}

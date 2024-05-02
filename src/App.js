import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Why learn HTML and CSS?",
    text: "HTML & CSS are the core programming languages for web development, vital for anyone hoping to work in this field. Learning these languages not only equips you with fundamental skills but also lays a solid foundation for more complex languages, opening up various career opportunities in web development.",
  },
  {
    title: "Why learn Git?",
    text: "Git lets users build an archive of their work and make changes more quickly and easily since everything is documented. It also lets users start the process of shared source code collaboration by allowing teams of developers to work with each other more efficiently across multiple devices.",
  },
  {
    title: "Why learn JavaScript?",
    text: "The most obvious reason for learning JavaScript is if you have hopes of becoming a web developer. Even if you haven't got your heart set on a tech career, being proficient in this language will enable you to build websites from scratch—a pretty useful skill to have in today's job market!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem title={el.title} text={el.text} num={i} key={el.title} />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import './Footer styles/footer.css';


function Footer() {
  const faqLinks = [
    { text: "Central de ajuda", url: "/help" },
    { text: "Conta", url: "/account" },
    { text: "Privacidade", url: "/privacy" },
    { text: "Termos de uso", url: "/terms" }
  ];
  const gitLinks = [
    { text: "NathanRodriguesVieira99", url: "https://github.com/NathanRodriguesVieira99" },
    { text: "isaaccrvg", url: "https://github.com/isaaccrvg" },
    { text: "belmayer", url: "https://github.com/belmayer" },
    { text: "victormoraes0", url: "https://github.com/victormoraes0" }
  ];
  const linkedinLinks = [
    { text: "Victor Hugo Moraes", url: "https://linkedin.com/in/victor-hugo-moraes-026567213" },
    { text: "Isabella Mayer", url: "https://linkedin.com/in/isabellamayer" },
    { text: "Marcos Isaac", url: "https://linkedin.com/in/marcosisaac" },
    { text: "NathanRodriguesVieira99", url: "https://linkedin.com/in/nathanrodriguesvieira99" }
  ];

  return (
    <footer className="container">
      <nav className="faq">
        <h2>FAQ</h2>
        <ul>
          {faqLinks.map((item, index) => (
            <li key={index} className="faqClass">
              <a href={item.url}>{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="git">
        <h2>
          <FaGithub style={{ marginRight: '8px', color: '#333', fontSize: '24px' }} />
          GITHUB
        </h2>
        <ul>
          {gitLinks.map((item, index) => (
            <li key={index} className="gitClass">
              <a href={item.url} target="_blank" rel="noopener noreferrer">{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="link">
        <h2>
        <FaLinkedin style={{ marginRight: '8px', color: '#333', fontSize: '24px' }} /> LINKEDIN
        </h2>
        <ul>
          {linkedinLinks.map((item, index) => (
            <li key={index} className="linkClass">
              <a href={item.url} target="_blank" rel="noopener noreferrer">{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>

      <p>&copy; 2024 Todos os direitos reservados. MovieFlix</p>
    </footer>
  );
}

export default Footer;

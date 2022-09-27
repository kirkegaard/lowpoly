import {
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaTumblr,
  FaGithub,
  FaBehance,
  FaFacebook,
  FaLastfm,
  FaLinkedin,
  FaImdb,
} from "react-icons/fa";

const icon_size = 25;

const links = [
  {
    icon: <FaGithub size={icon_size} />,
    url: "https://github.com/kirkegaard",
  },
  {
    icon: <FaInstagram size={icon_size} />,
    url: "http://instagram.com/christiank",
  },
  {
    icon: <FaLastfm size={icon_size} />,
    url: "http://last.fm/user/ranza",
  },
  {
    icon: <FaTwitter size={icon_size} />,
    url: "http://twitter.com/ranza",
  },
  {
    icon: <FaBehance size={icon_size} />,
    url: "http://www.behance.net/christiankirkegaard",
  },
  {
    icon: <FaTumblr size={icon_size} />,
    url: "http://knaegt.dk/",
  },
  {
    icon: <FaImdb size={icon_size} />,
    url: "https://www.imdb.com/name/nm6347740/",
  },
  {
    icon: <FaLinkedin size={icon_size} />,
    url: "https://www.linkedin.com/in/christian-kirkegaard/",
  },
  {
    icon: <FaFacebook size={icon_size} />,
    url: "http://facebook.com/christian.kirkegaard",
  },
  {
    icon: <FaEnvelope size={icon_size} />,
    url: "mailto:christian@lowpoly.dk",
  },
];

export const Socials = () => (
  <ul className="flex justify-center space-x-2">
    {links.map(({ url, icon }) => (
      <li key={url}>
        <a href={url}>{icon}</a>
      </li>
    ))}
  </ul>
);

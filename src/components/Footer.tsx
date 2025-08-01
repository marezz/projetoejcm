import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="flex flex-col w-full h-full bg-orange-300 text-[#2B2B2B] p-10 items-center gap-2 mt-4">
      <h3 className="text-xl">Siga-nos nas redes sociais!</h3>
      <div className="flex flex-row gap-1">
        <FaFacebook size={24} />
        <FaInstagram size={24} />
        <FaTiktok size={24} />
        <FaTwitter size={24} />
        <FaLinkedin size={24} />
      </div>
    </div>
  );
}

export default Footer;

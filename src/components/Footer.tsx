import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tactura</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Ljepota je različita od doba do doba. Specijalizirani smo za dekorativne tehnike i mikrocement koji transformišu vaš prostor.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Brzi linkovi</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Početna
                </Link>
              </li>
              <li>
                <Link to="/o-nama" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  O nama
                </Link>
              </li>
              <li>
                <Link to="/usluge" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Usluge
                </Link>
              </li>
              <li>
                <Link to="/galerija" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Galerija
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <p className="text-sm opacity-90 mb-3">Tactura j.d.o.o.</p>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm opacity-90">
                <Phone size={16} />
                <a href="tel:+385951239870" className="hover:opacity-100 transition-opacity">095 123 9870</a>
              </li>
              <li className="flex items-center space-x-2 text-sm opacity-90">
                <Mail size={16} />
                <a href="mailto:tactura.hr@gmail.com" className="hover:opacity-100 transition-opacity">tactura.hr@gmail.com</a>
              </li>
              <li className="flex items-start space-x-2 text-sm opacity-90">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Ivana Gundulića 78<br />31000 Osijek</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                <Facebook size={20} />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Tactura. Sva prava pridržana.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

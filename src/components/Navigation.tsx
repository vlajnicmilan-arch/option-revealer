import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/tactura-logo-new.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Početna", path: "/" },
    { name: "O nama", path: "/o-nama" },
    { name: "Usluge", path: "/usluge" },
    { name: "Galerija", path: "/galerija" },
    { name: "Kontakt", path: "/kontakt" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-border" style={{ backgroundColor: '#f7f7f7' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-6">
          {/* Logo Section - Left */}
          <Link to="/" className="ml-2 md:ml-6">
            <img 
              src={logo} 
              alt="Tactura - ljepota je različita od doba do doba" 
              className="h-[72px] md:h-[80px] w-auto"
            />
          </Link>

          {/* Desktop Navigation - Right */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm uppercase transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-foreground"
                    : "text-foreground/80 hover:text-foreground"
                }`}
                style={{
                  fontWeight: 500,
                  letterSpacing: '-0.2px',
                  textDecoration: 'none',
                  textUnderlineOffset: '6px',
                  textDecorationColor: '#a78c69',
                  textDecorationThickness: '2px',
                  ...(isActive(item.path) && {
                    textDecoration: 'underline',
                  }),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textDecoration = 'underline';
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.path)) {
                    e.currentTarget.style.textDecoration = 'none';
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary px-4 py-2 rounded-lg text-center ${
                    isActive(item.path)
                      ? "text-primary bg-muted"
                      : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

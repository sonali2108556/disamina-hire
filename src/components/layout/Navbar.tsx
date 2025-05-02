
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    // { name: "Contact", href: "/contact" },
    {
      name: "For Employer", type: "dropdown", items: [
        { name: "Solutions", href: "/solutions" },
        { name: "Assessments", href: "/assessments" },
        { name: "Pricing", href: "/pricing" },
      ]
    },
    {
      name: "For Candidates", type: "dropdown", items: [
        { name: "AI Resume Scorer", href: "/candidates" },
        { name: "AI Resume Builder", href: "/candidates" },
        { name: "Browse Jobs & Apply", href: "https://jobs.disamina.ai" },

      ]
    },
    { name: "Resources", href: "/resources", type: "item" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isHomePage
        ? scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-md py-3"
          : "bg-transparent py-5"
        : "bg-white shadow-md py-3"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Disamina" width="130px" />
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                link.type === "item" ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-gray-700 hover:text-primary transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <div key={link.name} className="relative group">
                    <button className="text-gray-700 hover:text-primary transition-colors font-medium flex items-center">
                      {link.name}
                      <svg
                        className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {link.items && link.items.length > 0 && (
                      <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        {link.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              ))}

            </div>

            <div className="flex items-center space-x-4">
              <Link to="https://portal.disamina.ai/candidate/login" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Candidate Login
                </Button>
              </Link>
              <a href="https://portal.disamina.ai/signup" target="_blank" rel="noreferrer noopener">
                <Button className="bg-primary hover:bg-primary-dark text-white">
                  Employer Login
                </Button>
              </a>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 rounded-md"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full bg-white shadow-lg animate-fade-in">
            <div className="flex flex-col px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-700 hover:text-primary py-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <Link to="https://portal.disamina.ai/candidate/login" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white w-full">
                    Candidate Login
                  </Button>
                </Link>
                <a href="https://portal.disamina.ai/signup" target="_blank" rel="noreferrer noopener">
                  <Button className="bg-primary hover:bg-primary-dark text-white w-full">
                    Employer Login
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Poruka uspješno poslana! Javit ćemo vam se uskoro.");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Kontaktirajte nas</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Rado ćemo odgovoriti na sva vaša pitanja i pomoći vam u realizaciji projekta
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Pošaljite nam poruku</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      Ime *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Vaše ime"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Prezime *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Vaše prezime"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="vas@email.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefon
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+385 XX XXX XXXX"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Tema upita *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <option value="">Odaberite temu...</option>
                    <option value="microcement">Mikrocement</option>
                    <option value="decorative">Dekorativne tehnike</option>
                    <option value="consultation">Besplatna konzultacija</option>
                    <option value="quote">Ponuda za projekt</option>
                    <option value="other">Ostalo</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Poruka *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Opišite svoj projekat ili postavite pitanje..."
                    className="w-full min-h-[150px]"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Šaljem..." : "Pošalji poruku"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Informacije</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telefon</h3>
                      <a href="tel:+385951239870" className="text-muted-foreground hover:text-primary transition-colors">095 123 9870</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:tactura.hr@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">tactura.hr@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adresa</h3>
                      <p className="text-muted-foreground">Tactura j.d.o.o.</p>
                      <p className="text-muted-foreground">Ivana Gundulića 78</p>
                      <p className="text-muted-foreground">31000 Osijek</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Radno vrijeme</h3>
                      <p className="text-muted-foreground">Pon - Pet: 8:00 - 17:00</p>
                      <p className="text-muted-foreground">Sub: 9:00 - 14:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Besplatna konzultacija</h3>
                <p className="mb-6 opacity-95">
                  Pozovite nas ili pošaljite upit za besplatnu inicijalnu konsultaciju i procjenu vašeg projekta.
                </p>
                <p className="text-sm opacity-90">
                  Odgovoramo na sve upite u roku 24 sata radnim danima.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

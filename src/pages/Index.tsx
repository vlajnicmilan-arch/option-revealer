import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Palette, Sparkles, Users } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import serviceDecorative from "@/assets/service-decorative.jpg";
import serviceMicrocement from "@/assets/service-microcement.jpg";
import serviceConsultation from "@/assets/service-consultation.jpg";
const Index = () => {
  return <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-32 mb-24">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${heroHome})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-primary/50" />
          {/* Bottom fade gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto opacity-95 animate-fade-in">
            <span className="block text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Prostori koji ostavljaju dojam.</span>
            Dekorativne tehnike i mikrocement vrhunske kvalitete.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button asChild size="lg" className="text-lg border-2 bg-transparent text-white hover:text-white transition-all duration-300" style={{
            borderColor: '#a78c69',
            borderRadius: '8px',
            fontWeight: 500
          }} onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#a78c69';
          }} onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}>
              <Link to="/usluge">
                Naše usluge <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild size="lg" className="text-lg border-2 bg-transparent text-white hover:text-white transition-all duration-300" style={{
            borderColor: '#a78c69',
            borderRadius: '8px',
            fontWeight: 500
          }} onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#a78c69';
          }} onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}>
              <Link to="/kontakt">Kontaktirajte nas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Zašto Tactura?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Spoj estetike, preciznosti i dugotrajnosti.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-[#f9f7f4] hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Palette className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Kreativnost</h3>
              <p className="text-muted-foreground leading-relaxed">
                Svaki projekat je jedinstvena priča. Kreiramo rešenja prilagođena vašem stilu i potrebama.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-[#f9f7f4] hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Kvalitet</h3>
              <p className="text-muted-foreground leading-relaxed">
                Koristimo samo najbolje materijale i tehnike za rezultate koji traju godinama.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-[#f9f7f4] hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Iskustvo</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tim stručnjaka s godinama iskustva u dekorativnim tehnikama i mikrocementu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Naše usluge</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specijalizirani za transformaciju prostora
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="relative h-64 overflow-hidden">
                <img src={serviceDecorative} alt="Dekorativne tehnike" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-primary-foreground">
                  Dekorativne tehnike
                </h3>
              </div>
              <div className="p-6 bg-card">
                <p className="text-muted-foreground mb-4">
                  Stucco venetiano, marmorino i druge tehnike za jedinstvene teksture.
                </p>
                <Button asChild variant="outline">
                  <Link to="/usluge">Saznaj više</Link>
                </Button>
              </div>
            </div>

            <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="relative h-64 overflow-hidden">
                <img src={serviceMicrocement} alt="Mikrocement" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-primary-foreground">
                  Mikrocement
                </h3>
              </div>
              <div className="p-6 bg-card">
                <p className="text-muted-foreground mb-4">
                  Moderan, izdržljiv i bezvremenski finish za podove i zidove.
                </p>
                <Button asChild variant="outline">
                  <Link to="/usluge">Saznaj više</Link>
                </Button>
              </div>
            </div>

            <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="relative h-64 overflow-hidden">
                <img src={serviceConsultation} alt="Konsultacije" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-primary-foreground">
                  Konsultacije
                </h3>
              </div>
              <div className="p-6 bg-card">
                <p className="text-muted-foreground mb-4">
                  Profesionalni saveti za izbor materijala i tehnike.
                </p>
                <Button asChild variant="outline">
                  <Link to="/usluge">Saznaj više</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Spremni za transformaciju vašeg prostora?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Kontaktirajte nas danas i započnimo vaš projekat
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link to="/kontakt">
              Zatražite ponudu <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;
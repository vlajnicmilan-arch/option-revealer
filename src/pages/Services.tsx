import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import serviceDecorative from "@/assets/service-decorative.jpg";
import serviceMicrocement from "@/assets/service-microcement.jpg";
import serviceConsultation from "@/assets/service-consultation.jpg";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Naše usluge</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Profesionalna rješenja za transformaciju vašeg prostora
          </p>
        </div>
      </section>

      {/* Service 1 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold mb-6">Dekorativne tehnike</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Specijalizirani smo za najfinije dekorativne tehnike koje donose eleganciju i karakter u svaki prostor. 
                Od klasičnog stucco venetiano do modernih interpretacija tradicionalnih metoda.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start space-x-3">
                  <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Stucco Venetiano - klasična talijanska tehnika</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Marmorino - prirodni mramorni finish</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Travertino - rustikalni ili moderni izgled</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Specialne teksture po želji</span>
                </div>
              </div>

              <Button asChild size="lg">
                <Link to="/kontakt">Zatražite ponudu</Link>
              </Button>
            </div>

            <div className="order-1 lg:order-2">
              <img
                src={serviceDecorative}
                alt="Dekorativne tehnike"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 2 */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={serviceMicrocement}
                alt="Mikrocement"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-6">Mikrocement</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Mikrocement je revolucionarni materijal koji omogućava besavne, izdržljive i estetski savršene površine. 
                Idealan za podove, zidove, kupaonice, kuhinje i vanjske prostore.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start space-x-3">
                  <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Besavne površine za moderni look</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Vodootporan i izdržljiv</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Primjena na različite podloge</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Široka paleta boja i finisha</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Pogodno za podne grijanje</span>
                </div>
              </div>

              <Button asChild size="lg">
                <Link to="/kontakt">Zatražite ponudu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold mb-6">Konsultacije i dizajn</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Nudimo stručne konsultacije kako bi vaš projekat bio savršeno izveden. Od izbora materijala 
                do konačnog izgleda - pratimo vas kroz cijeli proces.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start space-x-3">
                  <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Besplatna inicijalna konzultacija</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Pomoć u izboru boja i tekstura</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>3D vizualizacije i uzorci</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Procjena projekta i rokova</span>
                </div>
              </div>

              <Button asChild size="lg">
                <Link to="/kontakt">Zakažite konsultaciju</Link>
              </Button>
            </div>

            <div className="order-1 lg:order-2">
              <img
                src={serviceConsultation}
                alt="Konsultacije"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Započnimo vaš projekat
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Kontaktirajte nas za besplatnu konsultaciju i procjenu
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link to="/kontakt">Kontaktirajte nas</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Heart, Target, Users } from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroAbout})` }}
        >
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">O nama</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-95">
            Strast prema ljepoti i savršenstvu
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="pt-[100px] pb-[100px]">
        <div className="container mx-auto px-4">
          <div className="max-w-[760px] mx-auto">
            <h2 className="text-[38px] font-semibold text-[#2b2b2b] mb-8 text-center">Naša priča</h2>
            <div className="space-y-6 text-[18px] font-light leading-[1.55] text-[#595959]">
              <p>
                <strong className="text-foreground">Tactura</strong> je nastala iz istinske ljubavi prema dekorativnim tehnikama 
                i želje da prostoru damo karakter, toplinu i trajnu ljepotu.
                Vodimo se jednostavnom filozofijom: <em className="text-primary">"Ljepota je različita od doba do doba."</em>
                Zato svaki projekt promatramo kao priliku da stvorimo nešto autentično i vizualno upečatljivo.
              </p>
              <p>
                Specijalizirani smo za mikrocement i suvremene dekorativne tehnike 
                koje spajaju tradiciju, estetiku i vrhunsku izradu.
                Naš pristup temelji se na preciznosti, kvalitetnim materijalima i dubokom poštovanju prostora u kojem radimo.
              </p>
              <p>
                Vjerujemo da prostor nije samo mjesto — on je odraz osobnosti, stila i načina života.
                Zato svaki detalj radimo s pažnjom i predanošću.
              </p>
              <p>
                Tactura tim čine majstori s dugogodišnjim iskustvom i zajedničkom strašću prema kvaliteti koja traje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Naše vrijednosti</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Strast</h3>
              <p className="text-muted-foreground">
                Svaki projekat radimo s punim srcem i predanošću
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Kvalitet</h3>
              <p className="text-muted-foreground">
                Bez kompromisa u izboru materijala i izvođenju
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Preciznost</h3>
              <p className="text-muted-foreground">
                Svaki detalj je bitan za savršen rezultat
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Povjerenje</h3>
              <p className="text-muted-foreground">
                Gradimo dugoročne odnose s našim klijentima
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-primary text-primary-foreground rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Naša misija</h2>
            <p className="text-xl leading-relaxed opacity-95">
              Transformisati prostore u umjetnička djela koja odražavaju individualnost svakog klijenta, 
              koristeći najkvalitetnije materijale, tradicionalne tehnike i moderan pristup. 
              Želimo da svaki projekt bude dokaz da ljepota nikad ne izlazi iz mode - samo se transformiše.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

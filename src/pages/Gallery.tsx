import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import galleryPod1 from "@/assets/gallery-pod-1.jpg";
import galleryKupaonica from "@/assets/gallery-kupaonica-dekor.jpg";
import galleryZidKontrast from "@/assets/gallery-zid-kontrast.png";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null);

  const projects = [
    {
      id: 1,
      title: "Moderni dnevni boravak",
      description: "Stucco venetiano u toplim earth tonovima",
      image: gallery1,
      category: "Dekorativne tehnike",
    },
    {
      id: 2,
      title: "Luksuzna kupaonica",
      description: "Mikrocement za besavne površine",
      image: gallery2,
      category: "Mikrocement",
    },
    {
      id: 3,
      title: "Mikrocement pod u spavaćoj sobi",
      description: "Elegantna besavna podna površina u neutralnim tonovima",
      image: galleryPod1,
      category: "Mikrocement",
    },
    {
      id: 4,
      title: "Dekorativni zid u kupaonici",
      description: "Unikatna dekorativna tehnika s ornamentalnim uzorcima",
      image: galleryKupaonica,
      category: "Dekorativne tehnike",
    },
    {
      id: 5,
      title: "Jedan zid, dva potpuno različita dojma",
      description: "Kontrast između minimalizma i dekorativne teksture sa zlatnim akcentima",
      image: galleryZidKontrast,
      category: "Dekorativne tehnike",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Galerija projekata</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pogledajte naše realizirane projekte i uvjerite se u kvalitet našeg rada
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all bg-card cursor-pointer"
                onClick={() => setSelectedImage({ image: project.image, title: project.title })}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-sm font-medium opacity-90">{project.category}</span>
                    <h3 className="text-xl font-bold mt-1">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}

            {/* Placeholder cards */}
            {[3, 4, 5, 6].map((num) => (
              <div
                key={num}
                className="rounded-xl border-2 border-dashed border-border bg-muted/30 h-80 flex items-center justify-center"
              >
                <p className="text-muted-foreground">Uskoro nove fotografije</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Želite vidjeti više?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Galerija se redovno ažurira s novim projektima. Pratite nas na društvenim mrežama 
            za najnovije radove ili nas kontaktirajte za detaljniji portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/tactura"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 border-none bg-transparent shadow-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
          >
            <X size={24} />
          </button>
          {selectedImage && (
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-full object-contain max-h-[85vh] rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;

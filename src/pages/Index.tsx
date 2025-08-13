import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      
      <footer className="py-8 px-6 border-t border-border bg-secondary/20">
        <div className="container max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Shraddap. Oracle Apps Techno Functional Consultant
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

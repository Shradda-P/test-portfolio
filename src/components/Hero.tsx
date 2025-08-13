import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="gradient-text">SHRADDAP</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-muted-foreground">
            Oracle Apps Techno Functional Consultant
          </h2>
          <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            With 3.8 years of experience, I specialize in configuring and customizing Oracle applications,
            developing solutions, and integrating systems to effectively bridge business requirements with technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="default" size="lg" className="min-w-[200px]">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px]">
              Download Resume
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +91 74830 55474
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              shraddaprem3@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Bengaluru, Karnataka
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
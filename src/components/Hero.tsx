import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Mail, Phone } from "lucide-react";
const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          {/* Profile Picture Section */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-primary/20 shadow-2xl animate-profile-float">
                <AvatarImage 
                  src="/lovable-uploads/66c2b6d6-4157-44d7-aea2-4467cfef4b91.png" 
                  alt="Shraddap - Oracle Apps Consultant"
                  className="object-cover"
                />
                <AvatarFallback className="text-3xl md:text-4xl font-bold bg-gradient-primary text-primary-foreground">
                  SP
                </AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse-slow"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="gradient-text">SHRADDA P</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-muted-foreground">
            Oracle Apps Techno Functional Consultant
          </h2>
          <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed">With 4 years of experience, I am specialized in configuring and customizing Oracle applications, developing solutions, and integrating systems to effectively bridge business requirements with technology.</p>
          
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
    </section>;
};
export default Hero;
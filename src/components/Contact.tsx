import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 74830 55474",
      href: "tel:+917483055474"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "shraddaprem3@gmail.com",
      href: "mailto:shraddaprem3@gmail.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Bengaluru, Karnataka",
      href: "#"
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/20" id="contact">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss Oracle EBS solutions and how I can help optimize your business processes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card 
              key={index}
              className="p-6 text-center card-glow animate-fade-in-up bg-card border-border hover:cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => info.href !== "#" && window.open(info.href, "_blank")}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  {info.icon}
                </div>
              </div>
              <h3 className="font-semibold mb-2">{info.label}</h3>
              <p className="text-muted-foreground text-sm">{info.value}</p>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in-up">
          <Card className="p-8 card-glow bg-card border-border">
            <h3 className="text-xl font-semibold mb-4">Ready to Work Together?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities, challenging projects, 
              and how Oracle EBS can drive your business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => window.open("mailto:shraddaprem3@gmail.com", "_blank")}
                className="min-w-[180px]"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open("tel:+917483055474", "_blank")}
                className="min-w-[180px]"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
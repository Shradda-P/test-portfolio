import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "BE in Electronics and Telecommunication",
      institution: "KSIT",
      grade: "8 CGPA",
      year: "2017 - 2021",
      type: "Bachelor's Degree"
    },
    {
      degree: "Pre University College",
      institution: "Sri Kumarans Pre University College",
      grade: "85%",
      year: "2015 - 2017",
      type: "Higher Secondary"
    },
    {
      degree: "High School",
      institution: "Vijaya High School",
      grade: "90%",
      year: "2015",
      type: "Secondary Education"
    }
  ];

  return (
    <section className="py-20 px-6" id="education">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation in engineering and technology
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="p-6 card-glow animate-fade-in-right bg-card border-border"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4 mb-4 sm:mb-0">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{edu.degree}</h3>
                    <p className="text-muted-foreground text-sm mb-1">{edu.institution}</p>
                    <p className="text-xs text-muted-foreground">{edu.type}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center gap-2 justify-end mb-1">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{edu.year}</span>
                  </div>
                  <div className="text-lg font-semibold text-primary">
                    {edu.grade}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
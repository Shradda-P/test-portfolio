import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Associate Consultant",
      company: "Capgemini",
      location: "Canon Europa, Netherlands (Europe-based engagement)",
      duration: "August 2021 - Present",
      description: "Experienced Oracle E-Business Suite (EBS) consultant with deep functional knowledge of Oracle EBS R12 and R11, specializing in Finance modules and Supply Chain Management.",
      keyAchievements: [
        "Extensive hands-on experience in managing and supporting end-to-end procurement processes within Oracle EBS R12",
        "Proven ability to handle complex business scenarios, optimize procurement workflows, and ensure seamless integration with financial modules",
        "Successfully handled change requests for PRs and ensured alignment with approval hierarchies and budget constraints",
        "Streamlined procurement approval workflows, reducing turnaround time and improving process transparency",
        "Supported GRN-related issue resolution and ensured accurate matching between PO, GRN, and Invoices to maintain 3-way matching compliance",
        "Managed supplier-related tasks including onboarding, issue resolution, and communication to support uninterrupted supply chain operations",
        "Acted as a liaison between functional teams and technical developers to implement procurement enhancements and resolve issues quickly"
      ],
      specializations: [
        "Finance Expertise",
        "Oracle Lease Management", 
        "Audit & Compliance Support",
        "Month-End Closure & Support",
        "Project Support & Migration",
        "Oracle EBS Customization & Development"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/20" id="experience">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep expertise in Oracle EBS implementations and business process optimization
          </p>
        </div>

        {experiences.map((exp, index) => (
          <Card 
            key={index} 
            className="p-8 mb-8 card-glow animate-fade-in-left bg-card border-border"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="mb-4 lg:mb-0">
                <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <Building className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-primary">{exp.company}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{exp.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{exp.duration}</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {exp.description}
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-4">Key Achievements & Responsibilities</h4>
              <ul className="space-y-3">
                {exp.keyAchievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Specializations</h4>
              <div className="flex flex-wrap gap-2">
                {exp.specializations.map((spec, specIndex) => (
                  <Badge 
                    key={specIndex} 
                    variant="secondary" 
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    {spec}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;
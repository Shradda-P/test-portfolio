import { Card } from "@/components/ui/card";
import { Database, FileText, MessageSquare, Settings, TrendingUp, Users } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      category: "Oracle Technologies",
      icon: <Database className="w-6 h-6" />,
      items: ["Oracle EBS Suite", "Oracle Forms & Reports", "SQL and PLSQL"]
    },
    {
      category: "Financial Modules",
      icon: <TrendingUp className="w-6 h-6" />,
      items: ["AP and AR Modules", "Financial Reporting", "Order Management"]
    },
    {
      category: "Business Operations",
      icon: <Settings className="w-6 h-6" />,
      items: ["Operations Management", "Communication", "Client Relationship Management"]
    }
  ];

  const expertiseAreas = [
    "Purchase Requisition (PR) & Purchase Order (PO) Management",
    "Approval Workflow Optimization",
    "GRN (Goods Receipt Note) Processing",
    "Supplier Relationship & Issue Management",
    "Functional & Technical Coordination",
    "Finance Expertise (AR/AP Modules)",
    "Oracle Lease Management",
    "Audit & Compliance Support",
    "Month-End Closure & Support",
    "Project Support & Migration",
    "Oracle EBS Customization & Development"
  ];

  return (
    <section className="py-20 px-6" id="skills">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Strengths & Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized skills in Oracle technologies and business process optimization
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <Card 
              key={skill.category} 
              className="p-6 card-glow animate-fade-in-up bg-card border-border"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-muted-foreground text-sm">
                    • {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <Card className="p-8 card-glow animate-fade-in-up bg-card border-border">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Key Areas of Expertise
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {expertiseAreas.map((area, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{area}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
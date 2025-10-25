import { Shield, Award, Truck, FileCheck } from "lucide-react";

export const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Safety Certified",
      description: "ISO 9001:2015 compliant",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Rigorous testing protocols",
    },
    {
      icon: Truck,
      title: "Global Shipping",
      description: "Worldwide delivery network",
    },
    {
      icon: FileCheck,
      title: "Full Documentation",
      description: "SDS & COA provided",
    },
  ];

  return (
    <section className="py-3 bg-muted/50">
      <div className="container mx-auto px-3">
        <div className="flex flex-wrap justify-center gap-3">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div key={index} className="flex items-center gap-2 bg-background/60 px-3 py-1.5 rounded-md shadow-sm hover:bg-background/80 transition-colors">
                <Icon className="w-4 h-4 text-primary" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium whitespace-nowrap">{badge.title}</span>
                  <span className="text-xs text-muted-foreground">{badge.description}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

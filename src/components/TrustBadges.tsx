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
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{badge.title}</h3>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

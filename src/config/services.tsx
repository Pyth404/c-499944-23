import { Zap, RefreshCw, Shield, Cog } from "lucide-react";

export const services = [
  {
    title: "Content Repurposer",
    description: "Turn your models' best content into new revenue streams. Build a new brand by applying fresh faces to proven high-performing content.",
    icon: <RefreshCw className="w-6 h-6" />,
    image: "/lovable-uploads/Content Repurposer.jpg"
  },
  {
    title: "Content Multiplier",
    description: "Generate unlimited professional content using your models' actual faces. Triple their posting without extra work.",
    icon: <Zap className="w-6 h-6" />,
    image: {
      mobile: "/lovable-uploads/Content Multiplier-mobile.jpg",
      desktop: "/lovable-uploads/Content Multiplier.jpg"
    },
    badge: "Most popular"
  },
  {
    title: "Privacy Shield",
    description: "Perfect for models wanting total privacy. Create content using substitute faces while they stay hidden.",
    icon: <Shield className="w-6 h-6" />,
    image: "/lovable-uploads/Privacy Shield.jpg"
  },
  {
    title: "Custom AI Models",
    description: "Create custom models designed for your exact market. No contracts, no drama, pure profit.",
    icon: <Cog className="w-6 h-6" />,
    image: "/lovable-uploads/Custom AI models.jpg"
  }
];

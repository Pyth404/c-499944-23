
import { motion } from "framer-motion";

interface FeatureTabProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isActive: boolean;
  badge?: string;
}

export const FeatureTab = ({ title, description, icon, isActive, badge }: FeatureTabProps) => {
  return (
    <motion.div
      className={`w-full p-6 rounded-xl border text-left transition-all duration-300 flex flex-col min-h-[140px] ${
        isActive 
          ? "border-primary bg-primary/5" 
          : "border-white/10 bg-transparent hover:border-white/20 hover:bg-white/5"
      }`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={`p-2 rounded-lg flex-shrink-0 ${isActive ? "bg-primary/20" : "bg-white/10"}`}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <h3 className="font-medium text-lg">{title}</h3>
            {badge && (
              <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-2 py-1 flex-shrink-0 whitespace-nowrap">
                {badge}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="flex-1">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

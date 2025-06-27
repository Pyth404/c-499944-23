import { motion } from "framer-motion";

interface FeatureContentProps {
  image: string | { mobile: string; desktop: string };
  title: string;
}

export const FeatureContent = ({ image, title }: FeatureContentProps) => {
  const isResponsive = typeof image === 'object' && image.mobile && image.desktop;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full flex items-center justify-center"
    >
      <div className="glass rounded-xl overflow-hidden w-full relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        {isResponsive ? (
          <>
            <img
              src={image.mobile}
              alt={title}
              className="w-full h-full object-contain relative z-10 block sm:hidden"
            />
            <img
              src={image.desktop}
              alt={title}
              className="w-full h-full object-contain relative z-10 hidden sm:block"
            />
          </>
        ) : (
          <img
            src={typeof image === 'string' ? image : ''}
            alt={title}
            className="w-full h-full object-contain relative z-10"
          />
        )}
      </div>
    </motion.div>
  );
};

import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Users, Camera, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative container px-4 pt-40 pb-20"
      >
        <div 
          className="absolute inset-0 -z-10 bg-[#0A0A0A]"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
        >
          <span className="text-sm font-medium">
            <Camera className="w-4 h-4 inline-block mr-2" />
            AI Content Creation for Creators & Agencies
          </span>
        </motion.div>
        
        <div className="max-w-4xl relative z-10">          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl text-left"
          >
            Free up your models time to focus on making money.{" "}
            <span className="text-white">Turn existing photos into unlimited content.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Button size="lg" className="button-gradient">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="link" className="text-white">
              Contact Us <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative mx-auto max-w-5xl mt-20"
        >
          <div className="glass rounded-xl overflow-hidden">
            <img
              src="/lovable-uploads/c32c6788-5e4a-4fee-afee-604b03113c7f.png"
              alt="AI Content Creation Dashboard"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Problems Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container px-4 py-24"
      >
        <div className="max-w-2xl mb-20">
          <h2 className="text-5xl md:text-6xl font-normal mb-6 tracking-tight text-left">
            What's killing your
            <br />
            <span className="text-gradient font-medium">agency's revenue</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass rounded-xl p-8"
          >
            <Zap className="w-12 h-12 text-red-400 mb-6" />
            <h3 className="text-xl font-medium mb-4">Fresh ideas are impossible daily</h3>
            <p className="text-gray-400">
              Your girls exhaust new ideas within weeks. Repetitive content kills your earnings.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass rounded-xl p-8"
          >
            <Users className="w-12 h-12 text-red-400 mb-6" />
            <h3 className="text-xl font-medium mb-4">Content demands burn out your top earners</h3>
            <p className="text-gray-400">
              Models feel constant pressure to create new content. The stress of daily posting demands is wearing them down.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass rounded-xl p-8"
          >
            <Camera className="w-12 h-12 text-red-400 mb-6" />
            <h3 className="text-xl font-medium mb-4">Amateur content kills your earnings</h3>
            <p className="text-gray-400">
              DIY content can't compete with professional-looking posts. Quality affects your bottom line.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Solution Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container px-4 py-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-normal mb-6 tracking-tight">
              Turn existing photos into
              <br />
              <span className="text-gradient font-medium">unlimited content</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Same faces, better results. Give your models the choice to focus on what they want.
            </p>
            <Button className="button-gradient">
              Get Started Today
            </Button>
          </div>
          <div className="glass rounded-xl overflow-hidden">
            <img
              src="/lovable-uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png"
              alt="Content transformation example"
              className="w-full h-auto"
            />
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container px-4 py-24"
      >
        <div className="max-w-2xl mb-20 text-center mx-auto">
          <h2 className="text-5xl md:text-6xl font-normal mb-6">
            How it <span className="text-gradient font-medium">works</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass rounded-xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-xl font-medium mb-4">You send photos</h3>
            <p className="text-gray-400">
              Send us 10-20 high-quality photos of each model. Secure, encrypted, and confidential.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass rounded-xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="text-xl font-medium mb-4">We craft premium content</h3>
            <p className="text-gray-400">
              Our AI analyses her features while our creative directors ensure high-quality, authentic appeal.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass rounded-xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="text-xl font-medium mb-4">You receive professional content</h3>
            <p className="text-gray-400">
              Get professional content ready for posts, PPV, and social media.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="services" 
        className="bg-black"
      >
        <FeaturesSection />
      </motion.div>

      {/* Pricing Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="pricing" 
        className="bg-black"
      >
        <PricingSection />
      </motion.div>

      {/* FAQ Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container px-4 py-24"
      >
        <div className="max-w-2xl mb-20 text-center mx-auto">
          <h2 className="text-5xl md:text-6xl font-normal mb-6">
            Frequently Asked <span className="text-gradient font-medium">Questions</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              question: "How much does this cost?",
              answer: "$30 one-time training fee per creator, then per-image pricing: SFW from $8, NSFW from $12. Bulk discounts for 50+ images."
            },
            {
              question: "Do I own the content?",
              answer: "Yes, you own all generated content with full commercial rights included."
            },
            {
              question: "What type of content do you create?",
              answer: "We generate all content types to match your models' existing style and audience expectations. Works for OnlyFans, Fanvue, PPV, and social media."
            },
            {
              question: "Can't I just do this myself with AI tools?",
              answer: "Basic AI tools exist, but professional results require specialised training and art direction. Our creative directors ensure studio-quality aesthetics that convert to sales."
            },
            {
              question: "Can fans tell it's AI-generated?",
              answer: "We run quality checks to maximise realism. Eagle-eyed viewers may notice, but most fans cannot distinguish our work from real photos."
            },
            {
              question: "How long does it take to get content?",
              answer: "Initial AI training takes 24-48 hours. After that, new content batches are delivered within 48 hours."
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-lg font-medium mb-3">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container px-4 py-20 relative bg-black"
      >
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url("/lovable-uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to transform your agency's content?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Chat with our team about your specific needs. Free consultation, no commitment.
          </p>
          <Button size="lg" className="button-gradient">
            Get Free Consultation
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Index;

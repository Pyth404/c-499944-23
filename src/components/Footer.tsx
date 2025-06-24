
import { Mail, Shield, FileText } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="w-full py-12 mt-20">
      <div className="container px-4">
        <div className="glass glass-hover rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-medium text-lg">ContentAI</h3>
              <p className="text-sm text-muted-foreground">
                Professional AI content creation for OnlyFans agencies
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Content Multiplier
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Content Recycler
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Privacy Shield
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Get Free Consultation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} ContentAI. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground">
                Contact: <a href="mailto:hello@contentai.com" className="text-primary hover:underline">hello@contentai.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

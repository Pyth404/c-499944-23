import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FeatureTab } from "./FeatureTab";
import { FeatureContent } from "./FeatureContent";
import { services } from "@/config/services";
import { useState } from "react";

export const FeaturesSection = () => {
  // Mobile active card state
  const [activeIndex, setActiveIndex] = useState(0);
  // Desktop active tab state
  const [desktopActive, setDesktopActive] = useState(services[0].title);

  return (
    <section className="container px-4 py-24">
      {/* Header Section */}
      <div className="max-w-2xl mx-auto text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-normal mb-6 tracking-tight">
          <span className="text-white font-medium">Our </span>
          <span className="text-gradient font-medium">Services</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto">
          Professional AI content creation solutions designed for OnlyFans agencies and content creators.
        </p>
      </div>

      {/* Mobile: accordion-style feature selection */}
      <div className="block md:hidden">
        {services.map((service, idx) => (
          <div key={service.title} className={idx !== services.length - 1 ? 'mb-3' : ''}>
            <button
              className="w-full text-left focus:outline-none"
              onClick={() => setActiveIndex(idx)}
              tabIndex={0}
            >
              <FeatureTab
                title={service.title}
                description={service.description}
                icon={service.icon}
                isActive={activeIndex === idx}
                badge={service.badge}
              />
            </button>
            {/* Accordion image section for this card */}
            <div
              className={`transition-all duration-300 ease-out overflow-hidden ${
                activeIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pt-6">
                <FeatureContent image={service.image} title={service.title} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: tabbed interface with active card styling */}
      <div className="hidden md:block">
        <Tabs defaultValue={services[0].title} className="w-full" onValueChange={setDesktopActive}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Left side - Tab triggers */}
            <div className="md:col-span-5 space-y-3">
              <TabsList className="flex flex-col w-full bg-transparent h-auto p-0 space-y-3">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.title}
                    value={service.title}
                    className="w-full data-[state=active]:shadow-none data-[state=active]:bg-transparent"
                  >
                    <FeatureTab
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                      isActive={desktopActive === service.title}
                      badge={service.badge}
                    />
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Right side - Tab content with images */}
            <div className="md:col-span-7">
              {services.map((service) => (
                <TabsContent
                  key={service.title}
                  value={service.title}
                  className="mt-0 h-full"
                >
                  <FeatureContent
                    image={service.image}
                    title={service.title}
                  />
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

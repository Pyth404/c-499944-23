
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FeatureTab } from "./FeatureTab";
import { FeatureContent } from "./FeatureContent";
import { services } from "@/config/services";

export const FeaturesSection = () => {
  return (
    <section className="container px-4 py-24">
      {/* Header Section */}
      <div className="max-w-2xl mx-auto text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-normal mb-6 tracking-tight">
          Our
          <br />
          <span className="text-gradient font-medium">Services</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400">
          Professional AI content creation solutions designed for OnlyFans agencies and content creators.
        </p>
      </div>

      <Tabs defaultValue={services[0].title} className="w-full">
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
                    isActive={false}
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
    </section>
  );
};

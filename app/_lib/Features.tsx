import React from "react";
import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
} from "lucide-react";
const features = [
  {
    name: "Store your PDF Documents",
    description:
      "Keep all your important PDF files securely stored and easily accessible anytime, anywhere.",
    icon: GlobeIcon,
  },
  {
    name: "Blazing Fast Responses",
    description:
      "Experience lightning-fast answers to your queries, ensuring you get the information you need instantly.",
    icon: ZapIcon,
  },
  {
    name: "Chat Memorisation",
    description:
      "Our intelligent chatbot remembers previous interactions, providing a seamless and personalized experience.",
    icon: BrainCogIcon,
  },
  {
    name: "Interactive PDF Viewer",
    description:
      "Engage with your PDFs like never before using our intuitive and interactive viewer.",
    icon: EyeIcon,
  },
  {
    name: "Cloud Backup",
    description:
      "Rest assured knowing your documents are safely backed up on the cloud, protected from loss or damage.",
    icon: ServerCogIcon,
  },
  {
    name: "Responsive Across Devices",
    description:
      "Access and chat with your PDFs seamlessly on any device, whether it's your desktop, tablet, or smartphone.",
    icon: MonitorSmartphoneIcon,
  },
];
const Features = () => {
  return (
    <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="tag">Our Features</h1>
        <p className="text-3xl section-title mt-5">Discover all features</p>
      </div>
      <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="relative pl-9 p-6 border-2 border-gray-200 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <dt className="inline font-semibold text-gray-900">
              <feature.icon
                aria-hidden="true"
                className="absolute left-2 top-7 h-5 w-5 text-indigo-600"
              />
              {feature.name}
            </dt>
            <dd>{feature.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default Features;

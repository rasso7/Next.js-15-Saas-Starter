import React from "react";

const Pricing = () => {
  return (
    <div id="pricing" className="bg-white text-center py-16 px-4">
      <h2 className="tag">Pricing</h2>
      <h1 className="text-3xl section-title mt-5">
        Unlock the Full Potential of the SaaS Template
      </h1>
      <p className="mt-4 text-gray-500">
        A free and open-source landing page template for your SaaS business,
        built with React, TypeScript, Shadcn UI, and Tailwind CSS.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="border border-gray-200 rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-semibold text-gray-900">Free</h3>
          <p className="mt-4 text-4xl font-bold text-gray-900">
            $0 <span className="text-base font-normal">/ month</span>
          </p>
          <p className="text-gray-500 mt-2">For individuals</p>
          <button className=" w-full mt-6 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
            Get Started
          </button>
          <ul className="mt-6 space-y-2 text-left">
            <li className="flex items-center text-gray-600">
              <span className="text-indigo-500 mr-2">✓</span> 2 Team Members
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-indigo-500 mr-2">✓</span> 2 Websites
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-indigo-500 mr-2">✓</span> 2 GB Storage
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-indigo-500 mr-2">✓</span> 2 TB Transfer
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-indigo-500 mr-2">✓</span> Email Support
            </li>
          </ul>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-semibold text-gray-900">Premium</h3>
          <p className="mt-4 text-4xl font-bold text-gray-900">
            $79 <span className="text-base font-normal">/ month</span>
          </p>
          <p className="text-gray-500 mt-2">For small teams</p>
          <button className="  w-full mt-6 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
            Get Started
          </button>
          <ul className="mt-6 space-y-2 text-left">
            <li className="flex items-center text-gray-600">
              <span className="text-indigo-500 mr-2">✓</span> 5 Team Members
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-indigo-500 mr-2">✓</span> 5 Websites
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-indigo-500 mr-2">✓</span> 5 GB Storage
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-indigo-500 mr-2">✓</span> 5 TB Transfer
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-indigo-500 mr-2">✓</span> Email Support
            </li>
          </ul>
        </div>

        <div className="relative border border-gray-200 rounded-lg p-6 shadow-md">
          <div className="absolute top-6 -right-6 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-600 text-sm text-white  font-medium px-2 py-1 rounded-lg rotate-90">
            Recommended
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Enterprise</h3>
          <p className="mt-4 text-4xl font-bold text-gray-900">
            $199 <span className="text-base font-normal">/ month</span>
          </p>
          <p className="text-gray-500 mt-2">For industry leaders</p>
          <button className=" w-full mt-6 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
            Get Started
          </button>
          <ul className="mt-6 space-y-2 text-left">
            <li className="flex items-center text-gray-600">
              <span className="text-indigo-500 mr-2">✓</span> 100 Team Members
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-indigo-500 mr-2">✓</span> 100 Websites
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-indigo-500 mr-2">✓</span> 100 GB Storage
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-indigo-500 mr-2">✓</span> 100 TB Transfer
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-indigo-500 mr-2">✓</span> Email Support
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

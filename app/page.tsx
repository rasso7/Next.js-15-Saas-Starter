import React from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

import Testimonials from "@/app/_lib/Testimonials";
import { RiGithubFill } from "react-icons/ri";
import Navmenu from "@/app/_lib/Navmenu";
import Pricing from "@/app/_lib/Pricing";
import Features from "@/app/_lib/Features";

const page = () => {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600">
      <div className="bg-white  rounded-md drop-shadow-xl">
        <div className="flex flex-row justify-center pb-24 sm:pb-32 pt-2">
          <Link href="" className="px-4 pt-2">
            About
          </Link>
          <Navmenu />

          <Link href="#pricing" className="px-4 pt-2">
            Pricing
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <Link
              href="https://github.com/rasso7"
              target="_blank"
              className={`${buttonVariants({
                variant: "outline",
                size: "sm",
                rounded: "full",
              })} px-4 py-2`}
            >
              <span className="mr-3">🎉</span>
              <span className="hidden md:flex">Introducing&nbsp;</span> Next
              Saas Template on <RiGithubFill className="ml-2 size-4" />
            </Link>

            <h1 className="mt-2 text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]">
              Launch with a bang with{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-600 bg-clip-text text-transparent font-extrabold">
                SaaS Starter
              </span>
            </h1>

            <p className="mt-3 text-lg leading-8 text-gray-600">
              <br />
              Supercharge your next project with the latest tech stack: Next.js
              , Prisma, Supabase, Auth.js, Shadcn/ui, and Stripe.{" "}
              <span className="text-indigo-600 font-semibold">
                Build Faster
              </span>
              ,scale smarter, and deliver seamless{" "}
              <span className="font-bold"> User </span>experiences that make an
              impact!
            </p>
          </div>

          <Button className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-600 mt-10 rounded-full px-10 py-7">
            <Link href="">Get Started</Link>
          </Button>
        </div>

        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              alt="App screenshot"
              src="https://i.imgur.com/Cdl0pNj.jpg"
              width={2432}
              height={1442}
              className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]" />
            </div>
          </div>
        </div>
        <Features />

        <Pricing />

        <Testimonials />
      </div>
    </main>
  );
};

export default page;

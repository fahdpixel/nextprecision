import React from "react";
import Image from "next/image";
import Wrapper from "@/components/Wrapper";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";
import Link from "next/link";


const Footer = () => {
  return (
    <div className="bg-black text-white">
      <Wrapper className="py-5 md:py-10">
        <div className="flex flex-col md:flex-row justify-between">
          <Image
            src="/footerlogo.png"
            width={150}
            height={150}
            alt="Footer Logo"
            style={{ alignSelf: "flex-start" }}
          />
          <div>
            <div className="lg:mt-0 mt-4 flex flex-col md:flex-row md:justify-end gap-4 lg:gap-12 font-sans text-sm md:text-lg font-normal">
              <Link href="/" className="cursor-pointer  hover:text-white/[0.5] text-white">
                Home
              </Link>
              <Link href="/WhoWeAre" className="cursor-pointer  hover:text-white/[0.5] text-white">
                Who We Are
              </Link>
              <p className="cursor-pointer  hover:text-white/[0.5] text-white">
                Why Choose Us
              </p>
              <p className="cursor-pointer  hover:text-white/[0.5] text-white">
                What We Do
              </p>
              <p className="cursor-pointer  hover:text-white/[0.5] text-white">
                Gallery
              </p>
              <p className="cursor-pointer  hover:text-white/[0.5] text-white">
                Reach
              </p>
            </div>
            <div className="mt-6 flex flex-col md:justify-end md:flex-row  gap-4 lg:gap-12 font-sans text-xs md:text-sm font-thin">
              <p className="cursor-pointer  text-white/[0.5] hover:text-white">
                Blogs
              </p>
              <p className="cursor-pointer  text-white/[0.5] hover:text-white">
                Testimonials
              </p>
              <p className="cursor-pointer  text-white/[0.5] hover:text-white">
                Careers
              </p>
              <p className="cursor-pointer  text-white/[0.5] hover:text-white">
                Privacy Policy
              </p>
            </div>
            <div className="flex gap-4 my-6 md:justify-end">
              <div className="w-8 h-8 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                <FaFacebookF size={16} />
              </div>
              <div className="w-8 h-8 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                <FaInstagram size={16} />
              </div>

              <div className="w-8 h-8 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                <FaYoutube size={16} />
              </div>
              <div className="w-8 h-8 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                <FaLinkedinIn size={16} />
              </div>
            </div>
            <div className="flex md:justify-end font-light items-center gap-4 cursor-pointer">
              <p>+91 9841 00 1213</p>
              <FaPhone size={16} className="rotate-90" />
            </div>
          </div>
        </div>
        <hr className="border-t mt-4 opacity-40" />
        <p className="pt-6 text-center text-white font-sans font-thin text-sm">
          Copyright @ 2023 Precision Pro Events | All Rights Reserved.
        </p>
      </Wrapper>
    </div>
  );
};

export default Footer;

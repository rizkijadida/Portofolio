"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaLinkedin, FaSquareWhatsapp } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="container flex justify-between items-center">
      <div className="flex items-center">
        <div className="h-[60px] w-[60px] relative m-5">
          <Image
            src="/rizki.jpeg"
            alt=""
            className="object-cover rounded-full"
            fill
          />
        </div>
      </div>
      <div className="flex ">
        <Button
          variant={"ghost"}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/rahmad-rizki-jadida-287965248/"
            )
          }
        >
          <FaLinkedin size={30} />
        </Button>

        <Button
          variant={"ghost"}
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/send/?phone=6281377058754&text&type=phone_number&app_absent=0"
            )
          }
        >
          <FaSquareWhatsapp size={30} />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;

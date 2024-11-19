import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

const Education = () => {
  return (
    <div className="container mx-auto">
      <p className="font-bold   md:text-8xl text-3xl justify-center text-center mt-28">
        This is where I study
      </p>
      <div className="md:flex md:m-6 md:space-y-10 gap-10 mx-auto justify-center text-center items-center ml-5 md:ml-0">
        <Link href="https://purwadhika.com/" target="_blank">
          <Card className="rounded-3xl bg-slate-100 w-[300px] ">
            <CardHeader>
              <CardTitle>Purwadhika</CardTitle>
              <CardDescription>Digital Technology School</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center m-auto">
              <img
                src="purwadhika.png"
                alt=""
                className="w-[200px] h-[200px]"
              />
            </CardContent>
            <CardFooter className="text-xs ">
              © 2023 Purwadhika Digital Technology School All Rights Reserved
              Owned by PT Purwadhika Kirana Nusan
            </CardFooter>
          </Card>
        </Link>

        <Link href="https://www.usu.ac.id/" target="_blank">
          <Card className="rounded-3xl bg-slate-100 p-4 w-[300px] my-10 md:my-0">
            <CardHeader>
              <CardTitle className="">University Of Sumatera Utara</CardTitle>
            </CardHeader>
            <CardDescription className="mb-4">
              University OF Sumatera Utara
            </CardDescription>
            <CardContent className="flex items-center justify-center m-auto">
              <img src="/usu.png" alt="" className="w-[150px] h-[150px]" />
            </CardContent>
            <CardFooter className="text-xs">
              Copyright 2023 - Universitas Sumatera Utara
            </CardFooter>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Education;

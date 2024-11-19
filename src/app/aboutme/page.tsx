import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";

const AboutMe = () => {
  return (
    <div className="container">
      <p className="font-bold md:text-8xl text-4xl justify-center text-center mt-28">
        Here’s what you can expect from me...
      </p>

      {/* Bagian pertama dengan dua kolom */}
      <div className="md:grid grid-cols-2 md:justify-between md:mx-24 gap-y-10 md:gap-y-0 mr-5">
        <Card className="bg-amber-400 rounded-3xl text-center w-72 shadow-2xl text-7xl mx-10 mt-24">
          <CardHeader className="flex items-center my-auto mx-auto">
            <CardTitle>
              I am passionate about creating innovative and user-centric web
              experiences. My journey has been fueled by curiosity and a desire
              to solve real-world problems with code. I believe that technology
              should empower people and make their lives easier.
            </CardTitle>
          </CardHeader>
        </Card>

        <Card className="bg-lime-500 rounded-3xl text-center md:h-[210px] shadow-2xl text-7xl mt-24 mx-auto md:mx-0">
          <CardHeader>
            <CardTitle>
              I specialize in full-stack development, blending creativity with
              technical expertise. Whether it's building responsive web
              applications or optimizing backend performance, I always aim for
              excellence in everything I do.
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Bagian kedua dengan dua kolom */}
      <div className="grid md:grid-cols-2 justify-center md:mx-24 md:mt-24 gap-y-10">
        <Card className="bg-emerald-300 rounded-3xl mx-0.5 text-center w-96 h-72 text-7xl shadow-2xl mt-24">
          <CardHeader>
            <CardTitle>
              I am continuously evolving as a developer, keeping up with the
              latest technologies and trends. I believe in the power of lifelong
              learning and am always looking for new challenges to tackle,
              whether it's mastering a new framework or improving my
              problem-solving skills.
            </CardTitle>
          </CardHeader>
        </Card>

        <Card className="bg-sky-700 rounded-3xl text-center w-72 shadow-2xl h-96 text-7xl mx-12 md:mx-20 mb-24">
          <CardHeader>
            <CardTitle>
              Collaboration is at the heart of everything I do. I work best when
              I’m part of a team, sharing ideas, challenging assumptions, and
              driving projects to completion. I thrive in environments that
              foster creativity and innovation.
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default AboutMe;

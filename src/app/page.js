'use client'
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const elements = document.querySelectorAll('[data-parallax]');

      elements.forEach((el) => {
        const speed = el.getAttribute('data-speed');
        const scale = el.getAttribute('data-scale') || 1;  // Default scale is 1 if not provided
        const x = (clientX - window.innerWidth / 2) * speed;
        const y = (clientY - window.innerHeight / 2) * speed;

        // Combine scale and translate transformations
        el.style.transform = `translateX(${x}px) translateY(${y}px) scale(${scale})`;
      });
    };


    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  //scroll up elements with data-scrollup attribute
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-scrollup]');

      elements.forEach((el) => {
        //move elements up by 1px for every 10px scrolled
        const speed = el.getAttribute('data-speed');
        const y = window.scrollY * speed;
        el.style.transform = `translateY(-${y}px)`;

        //reset position when element is out of view
        if (y > window.innerHeight) {
          el.style.transform = `translateY(0px)`;
        }
      });

      //for elements with data-flyacross attribute
      const flyacross = document.querySelectorAll('[data-flyacross]');
      flyacross.forEach((el) => {
        const speed = el.getAttribute('data-speed');
        const x = window.scrollY * speed;
        el.style.transform = `translateX(${-x}px)`;

        if (x > window.innerWidth) {
          el.style.transform = `translateX(0px)`;
        }
      });
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <main className="overflow-hidden">
      <div className="w-screen h-screen overflow-hidden bg-sky-300 relative">
        <div className="">
          <img src="/landing/background-blue.png" alt="hero" />
          <img src="/landing/mountains.png" alt="hero" className="min-h-screen absolute z-20 top-0 scale-110" data-parallax data-speed="0.01" data-scale="1.1" />
          <img src="/landing/bear.svg" alt="hero" className="absolute z-30 scale-50 right-40 top-40" data-parallax data-speed="0.01" data-scale="0.5" />
          <img src="/landing/cloud-1.svg" alt="cloud" className="absolute z-10 top-0 cloud cloud-1 " data-parallax data-speed="0.03" />
          <img src="/landing/cloud-2.svg" alt="cloud" className="absolute z-10 top-0 cloud cloud-2 " data-parallax data-speed="0.05" data-scale="0.7" />
          <img src="/landing/cloud-3.svg" alt="cloud" className="absolute z-10 top-0 cloud cloud-3 " />
          <img src="/landing/cloud-4.svg" alt="cloud" className="absolute z-10 top-0 cloud cloud-4 " data-parallax data-speed="0.07" data-scale="0.7" />
          <img src="/landing/cloud-5.svg" alt="cloud" className="absolute z-10 top-0 cloud cloud-5 " data-parallax data-speed="0.00" data-scale="0.7" />
          <img src="/landing/flower-1.svg" alt="flower" className="absolute z-30 bottom-0 -left-40 scale-[0.7]" data-parallax data-speed="0.01" data-scale="0.7" />
          <img src="/landing/flower-2.svg" alt="flower" className="absolute z-30 -bottom-48 scale-50" data-parallax data-speed="0.03" data-scale="0.5" />
        </div>

        <div className="flex justify-center items-center absolute inset-0 z-40">
          <div className="flex flex-col items-center fade-in -translate-y-7">
            <h3 className="font-medium text-lg">Welcome to</h3>
            <h1 className="text-7xl font-bold">Studio Ghibli</h1>
          </div>
        </div>
      </div>

      <div className="w-screen h-screen bg-sky-300 relative">
        <img src="/page-2.png" alt="characters" />
        <img src="/characters-1.png" alt="characters" className="absolute z-30 -top-40 -right-20 w-[600px]" data-scrollup data-speed="0.1" />
        <img src="/characters-2.png" alt="characters" className="absolute z-30 -top-40 -left-20 w-[600px]" data-scrollup data-speed="0.1" />
        <img src="/bird-1.png" alt="characters" className="absolute z-30 top-[100px] -right-0 w-[100px]" data-scrollup data-flyacross data-speed="0.1" />
        <img src="/bird-1.png" alt="characters" className="absolute z-30 top-[300px] -right-0 w-[150px]" data-scrollup data-flyacross data-speed="0.5" />
        <img src="/bird-2.png" alt="characters" className="absolute z-30 top-[100px] left-[100px] w-[200px]" data-scrollup data-flyacross data-speed="0.3" />

        <div className="absolute flex flex-col justify-center items-center inset-0 z-30">
          <div className="flex flex-col">
            <h1 className="text-7xl font-bold">Arriety</h1>
            <p className="text-base max-w-80">
             A secret friendship forms when 12-year-old Shawn meets Arrietty, but their relationship could spell danger for Arrietty's family.
            </p>
          </div>
        </div>
      </div>

      <div className="w-screen h-screen bg-sky-300 relative">
       <img src="/page-3.png" alt="characters" />
       <img src="/dragon.png" alt="characters" className="absolute z-30 -top-40 -right-20 w-[600px]" data-scrollup data-speed="0.1"/>
       <img src="/spirit.png" alt="characters" className="absolute z-30 -bottom-44 -left-20 w-[400px]" data-scrollup data-speed="0.1"/>

       <div className="absolute flex flex-col justify-center items-center inset-0 z-30">
          <div className="flex flex-col">
            <h1 className="text-7xl font-bold">Spirited Away</h1>
            <p className="text-base max-w-96">
              Chihiro wanders into a magical, bathhouse where she works to free herself and her parents from a witch's spell.
            </p>
          </div>
        </div>

      </div>

    </main>
  );
}


"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 7; // Total number of images

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 2000); // Auto-scroll every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="w-full flex justify-center">
      <Carousel
        className="w-full max-w-[90%] sm:max-w-[600px] md:max-w-[800px] mx-auto"
        opts={{ loop: true }}
        value={currentIndex}
        onValueChange={setCurrentIndex}
      >
        <CarouselContent>
          <CarouselItem><img src="./p-1.png" alt="Slide 1" className="w-full h-auto rounded-lg" /></CarouselItem>
          <CarouselItem><img src="./p-2.png" alt="Slide 2" className="w-full h-auto rounded-lg" /></CarouselItem>
          <CarouselItem><img src="./p-3.png" alt="Slide 3" className="w-full h-auto rounded-lg" /></CarouselItem>
          <CarouselItem><img src="./p-4.png" alt="Slide 4" className="w-full h-auto rounded-lg" /></CarouselItem>
          <CarouselItem><img src="./p-5.png" alt="Slide 5" className="w-full h-auto rounded-lg" /></CarouselItem>
          <CarouselItem><img src="./p-6.png" alt="Slide 6" className="w-full h-auto rounded-lg" /></CarouselItem>
          <CarouselItem><img src="./p-7.png" alt="Slide 7" className="w-full h-auto rounded-lg" /></CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Slider;


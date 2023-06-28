import * as React from "react";
import popupImg from "../assets/popup-main.png";
import Image from "next/image";

/**
 * An Image slider element that slides in from the side of the screen then slides out
 * Displays a personalized note from the Founder
 */
export default function ImageSlider() {
  return (
    <div className="pt-3">
      <div className="mx-auto max-w-lg px-6">
        <div className="pointer-events-none fixed right-0 bottom-48 px-2 pb-5">
          <div className="pointer-events-auto flex items-center justify-between gap-x-6 px-6 py-2.5 rounded-xl sm:py-3 sm:px-4 animate-rotate-image max-w-lg">
            <p className="text-sm leading-6 text-white font-light">
              <Image src={popupImg} alt="popup" className="h-auto w-96" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

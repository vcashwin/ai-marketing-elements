import * as React from "react";

/**
 * A Slider element that slides in from the bottom of the screen at random intervals sand then slides out
 * Displays the purchase of a new user of the product to drive the current user towards purchasing.
 */
export default function TextSlider() {
  const divRef = React.useRef(null);

  const playAnimation = () => {
    const slidingDiv = divRef.current;
    slidingDiv.classList.remove("animate-slider-left");
    void slidingDiv.offsetWidth; // Trigger reflow to restart animation
    slidingDiv.classList.add("animate-slider-left");
  };

  const getRandomInterval = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  React.useEffect(() => {
    let animationTimeout;

    const startRandomAnimation = () => {
      playAnimation();
      const minInterval = 6000; // Minimum interval in milliseconds
      const maxInterval = 30000; // Maximum interval in milliseconds
      const interval = getRandomInterval(minInterval, maxInterval);
      animationTimeout = setTimeout(startRandomAnimation, interval);
    };

    // Start the initial animation after a delay
    const initialDelay = 5000; // Delay in milliseconds
    const initialTimeout = setTimeout(startRandomAnimation, initialDelay);

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(animationTimeout);
    };
  }, []);

  return (
    <div className="pt-3">
      <div className="mx-auto max-w-lg px-6">
        <div className="pointer-events-none fixed inset-x-0 top-0 px-2 pt-5">
          <div
            ref={divRef}
            className="pointer-events-auto flex items-center justify-between gap-x-6 bg-gray-900 px-6 py-2.5 rounded-r-xl sm:py-3 sm:pl-4 sm:pr-3.5 animate-slider-left max-w-lg"
          >
            <p className="text-sm leading-6 text-white font-light">
              <a href="#">
                <span className="font-bold">Jonathan C.</span> from{" "}
                <span className="font-bold">USA</span> just joined Assemble
                Growth AI and is ready to generate leads&nbsp;
              </a>
            </p>
            <button
              type="button"
              className="-m-3 flex-none p-3 focus-visible:outline-offset-[-4px]"
            >
              <span className="sr-only">Dismiss</span>
              <svg
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

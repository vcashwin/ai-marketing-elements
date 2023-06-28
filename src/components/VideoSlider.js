import * as React from "react";

/**
 * A Slider element that slides in from the bottom of the screen at random intervals sand then slides out
 * Displays the purchase of a new user of the product to drive the current user towards purchasing.
 */
export default function VideoSlider() {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("entry.isIntersecting", entry.isIntersecting);
          const video = videoRef.current;
          video.muted = false;
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const video = videoRef.current;
    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);

  return (
    <div className="pt-3">
      <div className="mx-auto max-w-lg px-6">
        <div className="pointer-events-none fixed right-0 bottom-48 px-2 pb-5">
          <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-gray-900 px-6 py-2.5 rounded-xl sm:py-3 sm:px-4 animate-slider-right max-w-lg">
            <p className="text-sm leading-6 text-white font-light">
              <video
                ref={videoRef}
                src="http://techslides.com/demos/sample-videos/small.mp4"
                autoPlay
                muted
                loop
                className="w-96 h-auto rounded-lg z-99"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

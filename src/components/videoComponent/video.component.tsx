"use client"

interface VideoProps {
  videoUrl: string;
  classNames: string;
}

export default function VideoComponent({ videoUrl, classNames }: VideoProps) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <video
        className={classNames}
        autoPlay
        preload="none"
        playsInline
        muted
        loop
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
}

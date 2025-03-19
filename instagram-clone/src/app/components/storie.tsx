import { useRef, WheelEvent } from "react";
import { Card } from "./card";

type StoryCardProps = {
  index: number;
};

function StoryCard({ index }: StoryCardProps) {
  return (
    <Card className="min-w-[80px] h-[80px] rounded-full flex items-center justify-center shadow-md">
      Story {index + 1}
    </Card>
  );
}

export default function InstagramStories() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (event: WheelEvent<HTMLDivElement>) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += event.deltaY;
    }
  };

  return (
    <div className="relative w-full max-w-xl overflow-hidden">
      {/* Scrollable Stories Container */}
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-hidden p-4"
        onWheel={handleScroll}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <StoryCard key={index} index={index} />
        ))}
      </div>

      
      
      
    </div>
  );
}

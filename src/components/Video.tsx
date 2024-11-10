"use client";
import { useState } from "react";
import { Container } from "@/components/Container";

interface VideoProps {
  videoId: string;
}

export function Video({ videoId }: Readonly<VideoProps>) {
  const [playVideo, setPlayVideo] = useState(false);

  if (!videoId) return null;

  return (
    <Container>
      <div
        className="
          relative w-full h-[100px] sm:h-[400px] md:h-[470px] max-w-4xl mx-auto overflow-hidden
          rounded-2xl cursor-pointer 
          bg-gradient-to-tr 
          from-purple-300 via-purple-400 to-indigo-600 
          sm:from-purple-400 sm:via-purple-500 sm:to-indigo-700
          md:from-purple-500 md:via-purple-600 md:to-indigo-800
          lg:mb-20
        "
      >
        {!playVideo && (
          <button
            onClick={() => setPlayVideo(!playVideo)}
            className="absolute inset-auto w-16 h-16 text-white transform -translate-x-1/2 -translate-y-1/2 lg:w-28 lg:h-28 top-1/2 left-1/2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16  lg:w-28 lg:h-28"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Play Video</span>
          </button>
        )}
        {playVideo && (
          <iframe
            src={`https://www.facebook.com/plugins/video.php?height=295&href=https%3A%2F%2Fwww.facebook.com%2FBotanasRanchoLosCoyotes%2Fvideos%2F764818842533639%2F&show_text=false&width=560&t=0`}
            title="Fabebook player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full h-full aspect-video"
          ></iframe>
        )}
      </div>
    </Container>
  );
}

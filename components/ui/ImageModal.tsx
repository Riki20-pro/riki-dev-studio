import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectMedia {
  type: "image" | "video";
  src: string;
}

interface ImageModalProps {
  media: ProjectMedia[];
  title: string;
  initialIndex: number;
  onClose: () => void;
}

export function ImageModal({
  media,
  title,
  initialIndex,
  onClose,
}: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const currentMedia = media[currentIndex];

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation(); // Mencegah modal tertutup saat klik tombol
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation(); // Mencegah modal tertutup saat klik tombol
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + media.length) % media.length,
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
      onClick={onClose}
    >
      {/* Tombol Close */}
      <button
        onClick={onClose}
        className="absolute right-6 top-6 z-[60] rounded-full bg-zinc-900/80 p-3 text-white border border-zinc-800 transition-all hover:bg-zinc-800 hover:scale-110 active:scale-95 shadow-lg"
        aria-label="Close modal"
      >
        <X className="size-6" />
      </button>

      {/* Kontainer Utama */}
      <div
        className="relative flex h-full max-h-[75vh] w-full max-w-5xl items-center justify-center overflow-hidden rounded-2xl bg-zinc-950/40 p-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navigasi Kiri */}
        {media.length > 1 && (
          <button
            onClick={goToPrevious}
            className="absolute left-4 z-20 rounded-full bg-black/60 p-3 text-white border border-zinc-800/50 backdrop-blur-sm transition-all hover:bg-black/90 hover:scale-110 active:scale-95"
            aria-label="Previous media"
          >
            <ChevronLeft className="size-6" />
          </button>
        )}

        {/* Render Media */}
        <div className="relative flex h-full w-full items-center justify-center">
          {currentMedia.type === "video" ? (
            <video
              src={currentMedia.src}
              controls
              autoPlay
              className="max-h-[75vh] max-w-full rounded-lg object-contain shadow-xl"
            />
          ) : (
            <div className="relative h-full w-full flex items-center justify-center">
              <img
                src={currentMedia.src}
                alt={title}
                className="max-h-[75vh] max-w-full rounded-lg object-contain shadow-xl select-none"
              />
            </div>
          )}
        </div>

        {/* Navigasi Kanan */}
        {media.length > 1 && (
          <button
            onClick={goToNext}
            className="absolute right-4 z-20 rounded-full bg-black/60 p-3 text-white border border-zinc-800/50 backdrop-blur-sm transition-all hover:bg-black/90 hover:scale-110 active:scale-95"
            aria-label="Next media"
          >
            <ChevronRight className="size-6" />
          </button>
        )}
      </div>
    </div>
  );
}

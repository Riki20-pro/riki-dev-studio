import React from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export function ImageModal({ src, alt, onClose }: ImageModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-6 top-6 z-[60] rounded-full bg-black/50 p-3 text-white transition-all hover:bg-black/80 hover:scale-110 active:scale-95"
        aria-label="Close modal"
      >
        <X className="size-7" />
      </button>

      <div
        className="relative max-h-[90vh] max-w-[95vw] overflow-hidden rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          priority
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}

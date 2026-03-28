"use client";
import { useState, memo } from "react";
import { X } from "lucide-react";

export const Caja = memo(
  ({ numero, user }: { numero: number; user: any }) => {
    const [flipped, setFlipped] = useState(false);
    const tomado = !!user;

    return (
      <div
        className={`relative w-full aspect-square select-none ${tomado
            ? "cursor-pointer"
            : "cursor-default transition-transform hover:-translate-y-1"
          }`}
        style={{
          perspective: tomado ? "1000px" : "none",
          contentVisibility: "auto",
          containIntrinsicSize: "80px",
        }}
        onClick={() => tomado && setFlipped((f) => !f)}
      >
        <div
          className={`w-full h-full relative ${tomado ? "transition-transform duration-500 ease-out" : ""}`}
          style={{
            transformStyle: tomado ? "preserve-3d" : undefined,
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Frente */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center rounded-xl shadow-sm transition-colors duration-200 border-2 
            ${tomado
                ? "border-pink-300 bg-pink-100/80"
                : "border-stone-200 bg-white hover:border-stone-300 hover:bg-stone-50 hover:shadow-md"
              }
          `}
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <p
              className={`font-bold text-lg sm:text-xl leading-none ${tomado ? "text-pink-600" : "text-stone-700"
                }`}
            >
              {String(numero).padStart(2, "0")}
            </p>
            {tomado && (
              <div className="absolute top-1 right-1 sm:top-1.5 sm:right-1.5">
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 stroke-3" />
              </div>
            )}
          </div>

          {/* Dorso */}
          {tomado && (
            <div
              className="absolute inset-0 border-2 border-pink-300 bg-linear-to-br from-pink-200 to-rose-300 flex flex-col items-center justify-center rounded-xl shadow-md p-1 sm:p-2 overflow-hidden"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <p className="text-pink-900 font-bold text-center text-[10px] sm:text-xs leading-tight line-clamp-3 wrap-break-word w-full">
                {[user?.nombre, user?.apellido]
                  .filter((v) => v && v.trim() !== "")
                  .join(" ") ||
                  user?.apodo ||
                  "Sin nombre"}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.numero === nextProps.numero &&
      prevProps.user?.id === nextProps.user?.id
    );
  },
);

"use client";
import { useState, memo } from "react";
import { X } from "lucide-react";

export const Caja = memo(({ numero, user }: { numero: number; user: any }) => {
    const [flipped, setFlipped] = useState(false);
    const tomado = !!user

    return (
        <div
            className={`relative w-full aspect-square select-none ${tomado
                ? "cursor-pointer"
                : "cursor-default drop-shadow-sm hover:drop-shadow-md transition-all hover:-translate-y-1"
                }`}
            style={{ perspective: "1000px" }}
            onClick={() => tomado && setFlipped((f) => !f)}
        >
            <div
                className="w-full h-full relative transition-transform duration-500 ease-out"
                style={{
                    transformStyle: "preserve-3d",
                    transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
            >
                {/* Frente */}
                <div
                    className={`absolute inset-0 flex flex-col items-center justify-center rounded-xl shadow-sm border-2 
            ${tomado
                            ? "border-pink-300 bg-pink-100/80"
                            : "border-sky-200 bg-white hover:border-sky-300 hover:bg-sky-50"
                        }
          `}
                    style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                    }}
                >
                    <p
                        className={`font-bold text-xl sm:text-2xl leading-none ${tomado ? "text-pink-600" : "text-sky-700"
                            }`}
                    >
                        {numero}
                    </p>
                    {tomado && (
                        <div className="absolute top-1 right-1 sm:top-1.5 sm:right-1.5">
                            <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 drop-shadow-sm stroke-3" />
                        </div>
                    )}
                </div>

                {/* Dorso */}
                <div
                    className="absolute inset-0 border-2 border-pink-300 bg-linear-to-br from-pink-200 to-rose-300 flex flex-col items-center justify-center rounded-xl shadow-md p-2"
                    style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }}
                >
                    <p className="text-pink-900 font-bold text-center text-xs sm:text-sm leading-tight line-clamp-3">
                        {`${user?.nombre} ${user?.apellido}` || user?.apodo}
                    </p>
                </div>
            </div>
        </div>
    );
});
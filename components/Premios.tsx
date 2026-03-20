import { Trophy, Gift, Sparkles } from "lucide-react";
import huevopascua from '../public/huevopascua.png'
import Image from "next/image";

export const Premios = () => {
    return (
        <section className="w-full max-w-4xl mx-auto px-4 py-8 mb-4">
            <div className="text-center mb-12 group">
                <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-slate-500 to-slate-600 inline-flex items-center gap-3 justify-center">
                    <Sparkles className="w-7 h-7 md:w-10 md:h-10 text-pink-300 animate-pulse" />
                    Premios de la Rifa
                    <Sparkles className="w-7 h-7 md:w-10 md:h-10 text-pink-300 animate-pulse" />
                </h2>
                <p className="text-gray-600 mt-3 text-lg font-medium">¡Conseguí tu número y participá por estos dos lindos premios!</p>
                <p className="text-gray-600 mt-3 text-lg font-medium">Para más información: 341 371-1846</p>
            </div>

            <div className="relative flex justify-center items-center my-16 md:my-28 group">
                {/* Efecto de difuminado (glow) gigante detrás de la imagen */}
                <div className="absolute bg-linear-to-r from-pink-400 via-orange-300 to-yellow-400 rounded-full blur-[80px] md:blur-[120px] opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700 w-80 h-80 sm:w-96 sm:h-96 md:w-lg md:h-lg z-0"></div>

                {/* Contenedor interactivo de la imagen */}
                <div className="relative z-10 transform transition-all duration-700 hover:scale-105 hover:-rotate-2">
                    <Image
                        src={huevopascua}
                        alt="gigante huevo de pascua 40cm"
                        width={600}
                        height={600}
                        className="drop-shadow-[0_40px_40px_rgba(0,0,0,0.5)] object-contain w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
                        priority
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-20">
                {/* 1er Premio */}
                <div className="relative group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100 overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-3 bg-linear-to-r from-yellow-200 via-orange-200 to-pink-200"></div>
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-100 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="p-8 md:p-10 flex flex-col items-center text-center relative z-10">
                        <div className="w-24 h-24 bg-linear-to-br from-orange-50 to-yellow-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-inner border border-orange-200">
                            <Trophy className="w-12 h-12 text-orange-400 drop-shadow-sm" />
                        </div>
                        <h3 className="text-3xl font-black text-gray-800 mb-4 tracking-tight">
                            1<span className="text-xl font-bold text-gray-500 align-top">er</span> Premio
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed font-medium">
                            Un súper huevo de pascua nro. 35 con <span className="font-bold text-orange-500">aproximadamente 1 kilo y 40cm de alto</span> del más rico chocolate relleno con confites, bombones y sorpresa.
                        </p>
                    </div>
                </div>

                {/* 2do Premio */}
                <div className="relative group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-sky-100 overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-3 bg-linear-to-r from-sky-200 via-teal-200 to-cyan-200"></div>
                    <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-sky-100 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="p-8 md:p-10 flex flex-col items-center text-center relative z-10">
                        <div className="w-24 h-24 bg-linear-to-br from-sky-50 to-teal-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-inner border border-sky-200">
                            <Gift className="w-12 h-12 text-sky-400 drop-shadow-sm" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-4 tracking-tight">
                            2<span className="text-xl font-semibold text-gray-500 align-top">do</span> Premio
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed font-medium">
                            Una deliciosa <span className="font-bold text-sky-500">rosca casera</span> de pascua para disfrutar y compartir en familia.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
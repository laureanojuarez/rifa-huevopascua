import { Trophy, Gift, Sparkles } from "lucide-react";

export const Premios = () => {
    return (
        <section className="w-full max-w-4xl mx-auto px-4 py-8 mb-4">
            <div className="text-center mb-10 group">
                <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-slate-500 to-slate-600 inline-flex items-center gap-3 justify-center">
                    <Sparkles className="w-7 h-7 md:w-10 md:h-10 text-pink-300 animate-pulse" />
                    Premios de la Rifa
                    <Sparkles className="w-7 h-7 md:w-10 md:h-10 text-pink-300 animate-pulse" />
                </h2>
                <p className="text-gray-600 mt-3 text-lg font-medium">¡Conseguí tu número y participá por estos increíbles premios!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
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
                            Un súper huevo de pascua nro. 40 con <span className="font-bold text-orange-500">más de 1 kilo</span> del más rico chocolate relleno con confites y bombones.
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
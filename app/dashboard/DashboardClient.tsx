"use client";

import { useState } from "react";
import { useActionState } from "react";
import { assignUserToNumber, unassignNumber } from "@/app/actions/raffle";

export function DashboardClient({ numerosData }: { numerosData: any[] }) {
    const MAX_NUMEROS = 100;
    
    const dbNumerosMap = new Map();
    numerosData.forEach((n) => {
        dbNumerosMap.set(n.numero, n);
    });

    const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

    const currentNumberData = selectedNumber ? dbNumerosMap.get(selectedNumber) : null;
    const currentUser = currentNumberData?.usuario || null;

    const [assignState, assignAction, isAssigning] = useActionState(assignUserToNumber, null);
    const [unassignState, unassignAction, isUnassigning] = useActionState(unassignNumber, null);

    const handleClose = () => {
        setSelectedNumber(null);
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Panel de Administración de Rifa</h1>

            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                {Array.from({ length: MAX_NUMEROS }, (_, i) => i + 1).map((num) => {
                    const data = dbNumerosMap.get(num);
                    const isOccupied = !!data?.usuario_id;
                    
                    return (
                        <button
                            key={num}
                            onClick={() => setSelectedNumber(num)}
                            className={`p-4 rounded-lg font-bold text-center border transition hover:opacity-80 
                            ${isOccupied 
                                ? 'bg-indigo-100 text-indigo-700 border-indigo-300' 
                                : 'bg-gray-50 text-gray-600 border-gray-200 shadow-sm'}`}
                        >
                            {num}
                        </button>
                    )
                })}
            </div>

            {/* Modal */}
            {selectedNumber !== null && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
                        <div className="bg-indigo-600 px-6 py-4 flex justify-between items-center text-white">
                            <h2 className="text-xl font-bold">Gestionar Número {selectedNumber}</h2>
                            <button onClick={handleClose} className="text-indigo-200 hover:text-white text-xl">✕</button>
                        </div>
                        
                        <div className="p-6 max-h-[80vh] overflow-y-auto">
                            {(assignState?.error || unassignState?.error) && (
                                <div className="mb-4 bg-red-100 text-red-700 p-3 rounded-lg text-sm">
                                    {assignState?.error || unassignState?.error}
                                </div>
                            )}
                            
                            {(assignState?.success || unassignState?.success) && (
                                <div className="mb-4 bg-green-100 text-green-700 p-3 rounded-lg text-sm">
                                    {assignState?.success || unassignState?.success}
                                </div>
                            )}

                            <form action={(formData) => {
                                formData.append("numero", selectedNumber.toString());
                                assignAction(formData);
                            }} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                                    <input 
                                        name="nombre" 
                                        type="text" 
                                        required 
                                        defaultValue={currentUser?.nombre || ''}
                                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" 
                                        placeholder="Ej: Juan"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Apellido</label>
                                    <input 
                                        name="apellido" 
                                        type="text" 
                                        required 
                                        defaultValue={currentUser?.apellido || ''}
                                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                        placeholder="Ej: Perez" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Apodo (opcional)</label>
                                    <input 
                                        name="apodo" 
                                        type="text" 
                                        defaultValue={currentUser?.apodo || ''}
                                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" 
                                    />
                                </div>

                                <div className="mt-6">
                                    <button 
                                        type="submit" 
                                        disabled={isAssigning || isUnassigning}
                                        className="w-full py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 disabled:opacity-50"
                                    >
                                        {isAssigning ? "Guardando..." : "Guardar Asignación"}
                                    </button>
                                </div>
                            </form>

                            {currentUser && (
                                <form action={(formData) => {
                                    formData.append("numero", selectedNumber.toString());
                                    unassignAction(formData);
                                }} className="mt-4 pt-4 border-t">
                                    <p className="text-sm text-gray-500 mb-3">Si liberas el número, volverá a estar disponible para la venta.</p>
                                    <button 
                                        type="submit"
                                        disabled={isAssigning || isUnassigning} 
                                        className="w-full py-2 bg-red-100 text-red-700 hover:bg-red-200 rounded-lg font-medium disabled:opacity-50 transition"
                                    >
                                        {isUnassigning ? "Liberando..." : "Liberar Número"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

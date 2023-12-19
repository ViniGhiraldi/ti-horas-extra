'use client'

import { usePdfContext } from "@/contexts/pdf-context";
import { Button } from "./button";

export const TIPdfButton = () => {
    const { toPDF, handleFileName, fileName } = usePdfContext();

    return (
        <div className="flex gap-4">
            <div className="relative hidden sm:flex items-center">
                <input type="text" value={fileName} className="w-fit h-full border-b pr-8 focus:border-b-sky-500 transition-colors outline-none" placeholder="Nome do arquivo" onChange={e => handleFileName(e.currentTarget.value)} />
                <span className="absolute right-0 text-zinc-400">.pdf</span>
            </div>
            <Button onClick={() => toPDF()} className="hover:bg-emerald-500 hover:text-white hover:shadow-none transition-colors">Gerar PDF</Button>
        </div>
    ) 
}
'use client'

import { usePdfContext } from "@/contexts/pdf-context";
import { Button } from "./button";

export const TIPdfButton = () => {
    const { toPDF } = usePdfContext();

    return <Button onClick={() => toPDF()} className="hover:bg-emerald-500 hover:text-white hover:shadow-none transition-colors">Gerar PDF</Button>
}
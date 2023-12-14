'use client'

import { usePdfContext } from "@/contexts/pdf-context";
import { Button } from "./button";

export const TIPdfButton = () => {
    const { toPDF } = usePdfContext();

    return <Button onClick={() => toPDF()} className="hover:bg-emerald-500 hover:text-white transition-colors hover:shadow-none">Gerar PDF</Button>
}
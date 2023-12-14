'use client'

import { createContext, useContext } from "react";
import { Options, usePDF } from 'react-to-pdf';

interface IPdfContext{
    targetRef: React.MutableRefObject<any>;
    toPDF: (options?: Options | undefined) => void;
}

const PdfContext = createContext({} as IPdfContext);

export const usePdfContext = () => {
    return useContext(PdfContext);
}

const pdfOption: Options = {
    filename: 'horas-extras.pdf',
    page: {
        margin: 10,
    }
}

export const PdfProvider = ({children}: {children: React.ReactNode}) => {
    const {targetRef, toPDF} = usePDF(pdfOption);

    return(
        <PdfContext.Provider value={{targetRef, toPDF}}>
            {children}
        </PdfContext.Provider>
    )
}
'use client'

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { Options, usePDF } from 'react-to-pdf';

interface IPdfContext{
    targetRef: React.MutableRefObject<any>;
    toPDF: (options?: Options | undefined) => void;
    fileName: string;
    handleFileName: (name: string) => void;
}

const PdfContext = createContext({} as IPdfContext);

export const usePdfContext = () => {
    return useContext(PdfContext);
}


export const PdfProvider = ({children}: {children: React.ReactNode}) => {
    const [fileName, setFileName] = useState('horas-extras');

    const pdfOption: Options = {
        filename: `${fileName}.pdf`,
        page: {
            margin: 10,
        }
    }

    const {targetRef, toPDF} = usePDF(pdfOption);

    useEffect(() => {
        const filenameLocalStorage = localStorage.getItem('filename');
        if(filenameLocalStorage) setFileName(filenameLocalStorage);
    }, [])

    const handleFileName = useCallback((name: string) => {
        setFileName(name);
        localStorage.setItem('filename', name);
    }, []);

    return(
        <PdfContext.Provider value={{targetRef, toPDF, fileName, handleFileName}}>
            {children}
        </PdfContext.Provider>
    )
}
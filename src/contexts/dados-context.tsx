'use client'

import { IDados } from "@/models/dados"
import { IDadosEntrada } from "@/models/dados-entrada";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"

interface IDadosContext{
    dados: IDados[] | undefined;
    formDados: IDadosEntrada | undefined;
    handleFormDados: (dados: IDadosEntrada | undefined) => void;
    handleAddDados: (dados: IDadosEntrada) => void;
    handleEditDados: (dados: IDadosEntrada) => void;
    handleExcludeDados: (id: string) => void;
    totalHoras: string;
}

const DadosContext = createContext({} as IDadosContext)

export const useDadosContext = () => {
    return useContext(DadosContext);
}

export const DadosProvider = ({ children }: {children: React.ReactNode}) => {
    const [dados, setDados] = useState<IDados[]>();
    const [formDados, setFormDados] = useState<IDadosEntrada>();

    useEffect(() => {
        if(dados){
            localStorage.setItem('dados', JSON.stringify(dados));
        }
    }, [dados])
    
    useEffect(() => {
        const dadosLocalStorage = localStorage.getItem('dados');

        if(dadosLocalStorage){
            setDados(JSON.parse(dadosLocalStorage));
        }
    }, [])

    const totalHoras = useMemo(() => {
        let horas = 0;
        let minutos = 0;

        dados?.forEach(val => {
            const horario = val.tempoTotal.split(':');
            horas += Number(horario[0]);
            minutos += Number(horario[1]);
        })

        if(minutos > 60){ // 60 seconds
            horas += Math.trunc(minutos / 60);
            minutos = minutos % 60;
        }

        return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
    }, [dados])

    const calcTempoTotal = useCallback((entradaHorario: string, saidaHorario: string) => {
        const saida = saidaHorario.split(':');
        const saidaHoras = Number(saida[0]);
        const saidaMinutos = Number(saida[1]);

        const entrada = entradaHorario.split(':');
        const entradaHoras = Number(entrada[0]);
        const entradaMinutos = Number(entrada[1]);

        if(entradaHoras > saidaHoras || (entradaHoras === saidaHoras && entradaMinutos > saidaMinutos)) return;

        let horas = saidaHoras - entradaHoras;
        let minutos;

        if(entradaMinutos > saidaMinutos){
            horas--;
            minutos = (60-entradaMinutos) + saidaMinutos;
        }else{
            minutos = saidaMinutos - entradaMinutos
        }

        return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
    }, [])

    const handleConvertDate = useCallback((date: string) => {
        return new Date(date).toLocaleDateString('pt-BR', {timeZone: 'UTC'});
    }, [])

    const handleAddDados = useCallback((dado: IDadosEntrada) => {
        const tempoTotal = calcTempoTotal(dado.entrada, dado.saida);

        if(tempoTotal){
            dado.date = handleConvertDate(dado.date);
            setDados(oldValue => oldValue ? [{...dado, tempoTotal}, ...oldValue] : [{...dado, tempoTotal}]);
        }
    }, [])

    const handleEditDados = useCallback((dado: IDadosEntrada) => {
        const tempoTotal = calcTempoTotal(dado.entrada, dado.saida);

        if(tempoTotal){
            dado.date = handleConvertDate(dado.date);
            setDados(oldValue => {
                const newValue = oldValue?.map(val => {
                    if(val.id === dado.id){
                        val = {...dado, tempoTotal};
                    }
                    return val;
                })
                return newValue;
            });
        }
    }, [])

    const handleExcludeDados = useCallback((id: string) => {
        setDados(oldValue => {
            const newValue = oldValue?.filter(val => val.id !== id);
            return newValue;
        })
    }, [])
    
    const handleFormDados = useCallback((dados?: IDadosEntrada) => {
        if(dados){
            const dateArray = dados.date.split('/');
            const date = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
            setFormDados({...dados, date});
        }else{
            setFormDados(undefined);
        }
    }, [])

    return(
        <DadosContext.Provider value={{dados, handleAddDados, handleEditDados, handleExcludeDados, formDados, handleFormDados, totalHoras}}>
            {children}
        </DadosContext.Provider>
    )
}
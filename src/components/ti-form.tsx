'use client'

import { useCallback, useEffect, useState } from "react"
import { Button } from "./button"
import { Card } from "./card"
import { Input } from "./input"
import { useDadosContext } from "@/contexts/dados-context"
import { Cross1Icon } from "@radix-ui/react-icons"

export const TIForm = () => {
    const { handleAddDados, handleEditDados, formDados, handleFormDados } = useDadosContext();

    const [id, setId] = useState<string>();
    const [date, setDate] = useState('');
    const [entrada, setEntrada] = useState('');
    const [saida, setSaida] = useState('');

    useEffect(() => {
        if(formDados){
            setDate(formDados.date);
            setEntrada(formDados.entrada);
            setSaida(formDados.saida);
            setId(formDados.id)
        }
    }, [formDados])

    const resetForm = useCallback((resetFormDados?: boolean) => {
        if(resetFormDados){
            handleFormDados(undefined);
            setDate('');
        }
        setEntrada('');
        setSaida('');
    }, [])

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(formDados){
            const idAsString = id as string;
            handleEditDados({date, entrada, saida, id: idAsString});
            resetForm(true);
        }else{
            if(date && entrada && saida) {
                handleAddDados({date, entrada, saida, id: self.crypto.randomUUID()});
                resetForm();
            }
        }
    }

    return(
        <Card.CardRoot>
            <Card.CardHeader>Formulário</Card.CardHeader>
            <Card.CardContent>
                <form className="flex flex-col gap-2 w-56" onSubmit={handleOnSubmit}>
                    <div className="flex flex-col">
                        <label htmlFor="date" className="text-sm">Data</label>
                        <Input type="date" id="date" value={date} onChange={e => setDate(e.currentTarget.value)}/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="entrada" className="text-sm">Entrada</label>
                        <Input type="time" id="entrada" value={entrada} onChange={e => setEntrada(e.currentTarget.value)}/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="saida" className="text-sm">Saída</label>
                        <Input type="time" id="saida" value={saida} onChange={e => setSaida(e.currentTarget.value)}/>
                    </div>
                    <div className="flex gap-2 mt-4">
                        <Button type="submit" className="w-full">Salvar</Button>
                        {formDados && <Button type="button" className="hover:bg-red-500 hover:text-white hover:shadow-none transition-colors" onClick={() => resetForm(true)}><Cross1Icon width={16} height={16}/></Button>}
                    </div>
                </form>
            </Card.CardContent>
        </Card.CardRoot>
    )
}
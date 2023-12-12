'use client'

import { useState } from "react"
import { Button } from "./button"
import { Card } from "./card"
import { Input } from "./input"
import { db } from "@/../.mock/db"

export const TIForm = () => {
    const [date, setDate] = useState<string>();
    const [entrada, setEntrada] = useState<string>();
    const [saida, setSaida] = useState<string>();

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(date && entrada && saida) db.push({date, entrada, saida});
    }

    return(
        <Card.CardRoot>
            <Card.CardHeader>Formulário</Card.CardHeader>
            <Card.CardContent>
                <form className="flex flex-col gap-4 w-56" onSubmit={handleOnSubmit}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="date">Data</label>
                        <Input type="date" id="date" onChange={e => setDate(e.currentTarget.value)}/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label>Horários</label>
                        <Input type="time" onChange={e => setEntrada(e.currentTarget.value)}/>
                        <Input type="time" onChange={e => setSaida(e.currentTarget.value)}/>
                    </div>
                    <Button type="submit">Enviar</Button>
                </form>
            </Card.CardContent>
        </Card.CardRoot>
    )
}
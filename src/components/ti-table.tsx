'use client'

import { useDadosContext } from "@/contexts/dados-context"
import { Table } from "./table"
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { usePdfContext } from "@/contexts/pdf-context";

export const TITable = () => {
    const { dados, handleFormDados, handleExcludeDados, totalHoras } = useDadosContext();
    const { targetRef } = usePdfContext();

    return (
      <div ref={targetRef} className="w-full">
        <Table.TableRoot>
          <Table.TableHead>
            <Table.Tr>
              <Table.Th>Data</Table.Th>
              <Table.Th>Entrada</Table.Th>
              <Table.Th>Saída</Table.Th>
              <Table.Th>Total de Horas</Table.Th>
              <Table.Th>Opções</Table.Th>
            </Table.Tr>
          </Table.TableHead>
          <Table.TableBody>
            {dados?.map((dado, i) => (
              <Table.Tr key={i}>
                <Table.Td>{dado.date}</Table.Td>
                <Table.Td>{dado.entrada}</Table.Td>
                <Table.Td>{dado.saida}</Table.Td>
                <Table.Td>{dado.tempoTotal}</Table.Td>
                <Table.Td className="space-x-2">
                  <button onClick={() => handleFormDados(dado)} title="Editar"><Pencil1Icon width={18} height={18} className="hover:text-amber-500"/></button>
                  <button onClick={() => handleExcludeDados(dado.id)} title="Excluir"><TrashIcon width={18} height={18} className="hover:text-red-500"/></button>
                </Table.Td>
              </Table.Tr>
            ))}
            <Table.Tr>
              <Table.Td className="border-none"></Table.Td>
              <Table.Td className="border-none"></Table.Td>
              <Table.Td className="border-none"></Table.Td>
              <Table.Td>Total: {totalHoras}</Table.Td>
              <Table.Td className="border-none"></Table.Td>
            </Table.Tr>
          </Table.TableBody>
        </Table.TableRoot>
      </div>
    )
}
import { Table } from "@/components/table";
import { TIForm } from "@/components/ti-form";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-12 min-h-screen p-12">
      <TIForm/>
      <Table.TableRoot>
        <thead className="bg-zinc-200">
          <Table.Tr>
            <Table.Th>Data</Table.Th>
            <Table.Th>Entrada</Table.Th>
            <Table.Th>Saída</Table.Th>
            <Table.Th>Total de Horas</Table.Th>
            <Table.Th>Opçoes</Table.Th>
          </Table.Tr>
        </thead>
        <tbody>
          <Table.Tr>
            <Table.Td>Data</Table.Td>
            <Table.Td>Entrada</Table.Td>
            <Table.Td>Saída</Table.Td>
            <Table.Td>Total de Horas</Table.Td>
            <Table.Td>Opçoes</Table.Td>
          </Table.Tr>
        </tbody>
      </Table.TableRoot>
    </div>
  )
}

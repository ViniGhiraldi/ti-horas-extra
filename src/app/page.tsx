import { TIForm } from "@/components/ti-form";
import { TIPdfButton } from "@/components/ti-pdf-button";
import { TITable } from "@/components/ti-table";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-12 min-h-screen p-12">
      <TIForm/>
      <TITable/>
      <TIPdfButton/>
    </div>
  )
}

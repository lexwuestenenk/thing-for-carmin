"use client"

import * as XLSX from 'xlsx';

import { useState } from "react";
import { Input } from "@/components/ui/input";

import { columns } from '@/components/ui/temp-table/columns';
import { DataTable } from '@/components/ui/temp-table/data-table';

export default function Home() {
  const [excelData, setExcelData] = useState<any[]>([]);

  const getExcel = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files == null || e.target.files?.length == 0) return;

    const xlsx_file = e.target.files[0]
    const reader = new FileReader()

    reader.onload = (event) => {
      const data = event.target?.result
      const workbook = XLSX.read(data, { type: 'binary' })
      const sheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[sheetName]

      const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 })
      const formattedArray: any[] = []

      json.map((row: any) => {
        const rowObject = {
          "name": row[0],
          "amount": row[1],
          "unitPrice": row[2],
          "price": (row[2] * row[1]).toFixed(2),
        }
        formattedArray.push(rowObject)
      })

      setExcelData(formattedArray)
    }

    reader.readAsArrayBuffer(xlsx_file)
  }

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-12">
        <div>
          <h1></h1>
          <Input type="file" onChange={(event) => getExcel(event)}/>
        </div>
        <div>
          <DataTable columns={columns} data={excelData} />
        </div>
      </main>
    </div>
  );
}

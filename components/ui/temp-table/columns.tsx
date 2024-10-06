"use client"

import { ArrowUpDown } from "lucide-react"
import { ColumnDef } from "@tanstack/react-table"
import { Product } from "@/lib/types/temp"
import { Button } from "@/components/ui/button"

export const columns : ColumnDef<Product>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "amount",
        header: ({ column }) => {
            return (
                <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Amount
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "unitPrice",
        header: "Price per unit"
    },
    {
        accessorKey: "price",
        header: ({ column }) => {
            return (
                <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Price (Total)
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
]
import React from "react"
import { Eye, Download, Home, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { prisma } from "@/lib/prisma/prisma"

const NoticeBoard = async () => {
  const notices = await prisma.notice.findMany({
    orderBy: { createdAt: "desc" },
  })

  return (
    <section className="w-full bg-background pb-20">
      {/* --- Breadcrumb Header --- */}
      <div className="border-b bg-muted/30 py-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">নোটিশ বোর্ড</h1>
      </div>

      <div className="container mt-12 px-4">
        {/* --- Notice Table --- */}
        <div className="shadow-soft overflow-hidden rounded-xl border bg-card">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[100px] py-4 font-bold text-foreground">
                  ক্রমিক
                </TableHead>
                <TableHead className="font-bold text-foreground">
                  বিষয়
                </TableHead>
                <TableHead className="font-bold text-foreground">
                  তারিখ এবং সময়
                </TableHead>
                <TableHead className="text-right font-bold text-foreground">
                  কার্যকলাপ
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {notices.map((notice, i) => (
                <TableRow
                  key={notice.id}
                  className="transition-colors hover:bg-muted/30"
                >
                  <TableCell className="py-4 font-medium">{i++}</TableCell>
                  <TableCell className="max-w-md">
                    <p className="line-clamp-2 font-medium text-foreground">
                      {notice.title}
                    </p>
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-muted-foreground">
                    {new Date(notice.createdAt).toDateString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={notice.id}
                        className="flex items-center gap-2 rounded-md bg-[#2D3139] text-white hover:bg-[#1F232B]"
                      >
                        <Eye className="h-4 w-4" />
                        পুরোটা দেখুন
                      </Link>
                      <Button
                        size="sm"
                        className="flex items-center gap-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <Download className="h-4 w-4" />
                        ডাউনলোড করুন
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}

export default NoticeBoard

"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { smartGlassData } from "./smart-glass.data";

const SmartGlassTabs = () => {
  const { specifications, boxItems, features } = smartGlassData;

  return (
    <div className="container mx-auto px-0 py-8">
      <Card className="rounded-3xl border-0 shadow-sm">
        <CardContent className="p-6 lg:p-8">
          <Tabs defaultValue="specification" className="w-full">
            <TabsList className="mb-6 flex h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0">
              <TabsTrigger
                value="specification"
                className="rounded-full border border-slate-200 bg-white px-5 py-2 data-[state=active]:border-[#0B1A2E] data-[state=active]:bg-[#0B1A2E] data-[state=active]:text-white"
              >
                Specification
              </TabsTrigger>

              <TabsTrigger
                value="box"
                className="rounded-full border border-slate-200 bg-white px-5 py-2 data-[state=active]:border-[#0B1A2E] data-[state=active]:bg-[#0B1A2E] data-[state=active]:text-white"
              >
                What&apos;s in the Box
              </TabsTrigger>

              {/* <TabsTrigger
                value="features"
                className="rounded-full border border-slate-200 bg-white px-5 py-2 data-[state=active]:border-[#0B1A2E] data-[state=active]:bg-[#0B1A2E] data-[state=active]:text-white"
              >
                Key Features
              </TabsTrigger> */}
            </TabsList>

            <TabsContent value="specification" className="mt-0 space-y-8">
              <div className="overflow-hidden rounded-md border bg-white">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[220px]">Specification</TableHead>
                      <TableHead>Details</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {specifications.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {item.title}
                        </TableCell>
                        <TableCell>{item.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="box" className="mt-0">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {boxItems.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-200 bg-white p-4 text-center"
                  >
                    <div className="mb-3 flex aspect-square items-center justify-center rounded-xl bg-slate-50 p-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <p className="text-sm font-medium text-slate-700">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* <TabsContent value="features" className="mt-0">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="mb-4 text-xl font-semibold text-[#0B1A2E]">
                  Key Features
                </h3>

                <ul className="list-disc space-y-2 pl-6 text-[18px] leading-8 text-slate-800 marker:text-slate-900">
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </TabsContent> */}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default SmartGlassTabs;
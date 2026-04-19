import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { productData, reviewsData } from "./product-data";
import Image from "next/image";

const Reviews = () => {
  const { specifications, boxItems } = productData;

  return (
    <div className="mx-auto container px-4 py-8">
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
              <TabsTrigger
                value="reviews"
                className="rounded-full border border-slate-200 bg-white px-5 py-2 data-[state=active]:border-[#0B1A2E] data-[state=active]:bg-[#0B1A2E] data-[state=active]:text-white"
              >
                Reviews
              </TabsTrigger>
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
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
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

            <TabsContent value="reviews" className="mt-0">
              <div className="space-y-5">
                {reviewsData.map((review) => (
                  <div
                    key={review.id}
                    className="rounded-3xl border border-slate-200 bg-white p-5"
                  >
                    <div className="flex flex-col md:flex-row items-start gap-4">
                      <Image
                        src={review.profile_link}
                        alt={review.name}
                        width={44}
                        height={44}
                        className="rounded-full"
                      />

                      <div className="flex-1">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <h4 className="font-semibold text-slate-900">
                              {review.name}
                            </h4>
                            <p className="text-sm text-slate-500">
                              {review.date}
                            </p>
                          </div>
                        </div>

                        <p className="mt-4 leading-7 text-slate-600">
                          {review.reviewText}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reviews;

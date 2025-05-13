import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "./ui/skeleton";
import SkeletonWrapper from "./SkeletonWrapper";

const CardComp = () => {
  return (
    <Card className="h-full shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          Todo Status Overview
        </CardTitle>
        <CardDescription>Distribution of your todos by status</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <BarGraphChart />
      </CardContent>
    </Card>
  );
};

export default CardComp;

export type BarQueryDataType = {
  status: string;
  count: number;
  color: string;
};

function BarGraphChart() {
  const demoData: BarQueryDataType[] = [
    { status: "Pending", count: 12, color: "#ff6b6b" },
    { status: "Completed", count: 8, color: "#4ecdc4" },
  ];
  const BarQuery = useQuery({
    queryKey: ["bar"],
    queryFn: async () => {
      const res = await fetch(`/api/get-bar-data`);
      const data: BarQueryDataType[] = await res.json();
      return data;
    },
    refetchOnWindowFocus: false,
  });

  if (BarQuery.isFetching) {
    return <BarGraphChartSkeleton />;
  }

  if (BarQuery.isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <>
      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={BarQuery.data || demoData}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="status" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{
              backgroundColor: "rgba(0,0,0,0.4)",
              color: "white",
              borderRadius: "8px",
            }}
          />
          <Bar
            dataKey="count"
            fill="#8884d8"
            radius={[4, 4, 0, 0]}
            barSize={40}
          />
        </BarChart>
      </ResponsiveContainer>
      <TodoStatusSummary data={BarQuery.data as BarQueryDataType[]} />
    </>
  );
}

function BarGraphChartSkeleton() {
  return (
    <SkeletonWrapper isLoading={true} fullWidth={true}>
      <div className="w-full h-[150px]">
        <Skeleton className="w-full h-full rounded-lg" />
      </div>
    </SkeletonWrapper>
  );
}

function TodoStatusSummary({ data }: { data: BarQueryDataType[] }) {
  const statusItems = data || [
    { label: "Pending Todos", count: 12, color: "bg-red-500" },
    { label: "Completed Todos", count: 8, color: "bg-green-500" },
  ];

  return (
    <div className="flex justify-between">
      {statusItems.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <div
            className={cn("w-3 h-3 rounded-full")}
            style={{ backgroundColor: item.color }}
          />
          <div>
            <p className="text-sm font-medium">{item.status}</p>
            <p className="text-xs text-muted-foreground">{item.count} todos</p>
          </div>
        </div>
      ))}
    </div>
  );
}

import { Metadata } from "next";

import { Button } from "@/components/_ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/_ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/_ui/tabs";
import { CalendarDateRangePicker } from "@/components/analytics/date-range-picker";
import { MainNav } from "@/components/analytics/main-nav";
import {
  AreaChartAnalytics,
  AreaChartAnalyticsSmall,
  BarChartAnalytics,
  BarChartHorizontalAnalytics,
  BarChartInteractiveAnalytics,
  BarChartInteractiveAnalyticsSmall,
  LineChartAnalytics,
  Overview,
  PieChartAnalytics,
  RadarChartAnalytics,
  RadialBarChartAnalytics,
} from "@/components/analytics/overview";
import { RecentSales } from "@/components/analytics/recent-sales";
import { Search } from "@/components/analytics/search";
import TeamSwitcher from "@/components/analytics/team-switcher";
import { UserNav } from "@/components/analytics/user-nav";
import { LineChartStepAnalytics, LineChartStepAnalyticsSmall } from "@/components/analytics/chart-modules/line-chat-step";
import { BarChartNegativeAnalytics } from "@/components/analytics/chart-modules/bar-chart-negative";
import {
  RadialChartAnalytics,
  RadialChartStackedAnalytics,
  RadialChartStackedAnalyticsSmall,
} from "@/components/analytics/chart-modules/radial-chart";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

export default async function Dashboard() {
  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <header className="top-0 z-30 sm:static sticky flex flex-col gap-4 sm:border-0 bg-background sm:bg-transparent border-b h-14 sm:h-auto">
        <div className="border-b">
          <div className="flex items-center px-4 h-16">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="flex items-center space-x-4 ml-auto">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex justify-between items-center space-y-2">
            <h2 className="font-bold text-3xl tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 items-start gap-4 md:gap-8 grid sm:px-6 sm:py-0 p-4">
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics" disabled>
              Analytics
            </TabsTrigger>
            <TabsTrigger value="reports" disabled>
              Reports
            </TabsTrigger>
            <TabsTrigger value="notifications" disabled>
              Notifications
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="gap-4 grid md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
                  <CardTitle className="font-medium text-sm">
                    Total Revenue
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-muted-foreground"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent className="flex justify-between">
                  <div>
                    <div className="font-bold text-2xl">$45,231.89</div>
                    <p className="text-xs text-green-600 mt-[6px]">
                      +20.1% from last month
                    </p>
                  </div>
                  <BarChartInteractiveAnalyticsSmall />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
                  <CardTitle className="font-medium text-sm">
                    Subscriptions
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-muted-foreground"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </CardHeader>
                <CardContent className="flex justify-between">
                  <div>
                    <div className="font-bold text-2xl">-2350</div>
                    <p className="text-muted-foreground text-xs text-red-600 mt-[6px]">
                      -180.1% from last month
                    </p>
                  </div>
                  <AreaChartAnalyticsSmall />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
                  <CardTitle className="font-medium text-sm">Sales</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-muted-foreground"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </CardHeader>
                <CardContent className="flex justify-between">
                  <div>
                    <div className="font-bold text-2xl">+12,234</div>
                    <p className=" text-xs text-blue-500">
                      +19% from last month
                    </p>
                  </div>
                  <LineChartStepAnalyticsSmall />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
                  <CardTitle className="font-medium text-sm">
                    Active Now
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-muted-foreground"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </CardHeader>
                <CardContent className="flex justify-between max-h-12 overflow-hidden">
                  <div>
                    <div className="font-bold text-2xl">+573</div>
                    <p className=" text-xs text-green-600">
                      +201 since last hour
                    </p>
                  </div>
                  <RadialChartStackedAnalyticsSmall />
                </CardContent>
              </Card>
            </div>
            <div className="gap-4 grid md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-7">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <AreaChartAnalytics />
                </CardContent>
              </Card>
            </div>
            <div className="gap-4 grid md:grid-cols-2 lg:grid-cols-10">
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Active Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadialChartStackedAnalytics />
                </CardContent>
              </Card>
            </div>
            <div className="gap-4 grid md:grid-cols-2 lg:grid-cols-9">
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <PieChartAnalytics />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <RadialChartAnalytics />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <RadarChartAnalytics />
                </CardContent>
              </Card>
            </div>
            <div className="gap-4 grid md:grid-cols-2 lg:grid-cols-9">
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <BarChartAnalytics />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <BarChartHorizontalAnalytics />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <RadialBarChartAnalytics />
                </CardContent>
              </Card>
            </div>
            <div className="gap-4 grid md:grid-cols-2 lg:grid-cols-9">
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <LineChartAnalytics />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <LineChartStepAnalytics />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <BarChartNegativeAnalytics />
                </CardContent>
              </Card>
            </div>

            <div className="gap-4 grid md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-7">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <BarChartInteractiveAnalytics />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

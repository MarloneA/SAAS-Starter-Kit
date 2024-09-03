import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
} from "lucide-react";

import { Badge } from "@/components/_ui/primitives/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/_ui/primitives/breadcrumb";
import { Button } from "@/components/_ui/primitives/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/_ui/primitives/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/_ui/primitives/dropdown-menu";
import { Input } from "@/components/_ui/primitives/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/_ui/primitives/pagination";
import { Progress } from "@/components/_ui/primitives/progress";
import { Separator } from "@/components/_ui/primitives/separator";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/_ui/primitives/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/_ui/primitives/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/_ui/primitives/tabs";
import { UserNav } from "@/components/templates/analytics/user-nav";

export default function Orders() {
  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <header className="top-0 z-30 sm:static sticky flex items-center gap-4 sm:border-0 bg-background sm:bg-transparent px-4 sm:px-6 border-b h-14 sm:h-auto">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="sm:hidden">
              <PanelLeft className="w-5 h-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs">
            <nav className="gap-6 grid font-medium text-lg">
              <Link
                href="#"
                className="flex justify-center items-center gap-2 bg-primary rounded-full w-10 h-10 font-semibold text-lg text-primary-foreground md:text-base group shrink-0"
              >
                <Package2 className="group-hover:scale-110 w-5 h-5 transition-all" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <Home className="w-5 h-5" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-foreground"
              >
                <ShoppingCart className="w-5 h-5" />
                Orders
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <Package className="w-5 h-5" />
                Products
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <Users2 className="w-5 h-5" />
                Customers
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <LineChart className="w-5 h-5" />
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Breadcrumb className="md:flex hidden">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#">Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#">Orders</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Recent Orders</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="relative flex-1 ml-auto md:grow-0">
          <Search className="top-2.5 left-2.5 absolute w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="bg-background pl-8 rounded-lg w-full md:w-[200px] lg:w-[336px]"
          />
        </div>
        <UserNav />
      </header>
      <main className="flex-1 items-start gap-4 md:gap-8 grid lg:grid-cols-3 xl:grid-cols-3 sm:px-6 sm:py-0 p-4">
        <div className="items-start gap-4 md:gap-8 grid lg:col-span-2 auto-rows-max">
          <div className="gap-4 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
              <CardHeader className="pb-3">
                <CardTitle>Your Orders</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Introducing Our Dynamic Orders Dashboard for Seamless
                  Management and Insightful Analysis.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button>Create New Order</Button>
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-05-chunk-1">
              <CardHeader className="pb-2">
                <CardDescription>This Week</CardDescription>
                <CardTitle className="text-4xl">$1,329</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground text-xs">
                  +25% from last week
                </div>
              </CardContent>
              <CardFooter>
                <Progress value={25} aria-label="25% increase" />
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-05-chunk-2">
              <CardHeader className="pb-2">
                <CardDescription>This Month</CardDescription>
                <CardTitle className="text-4xl">$5,329</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground text-xs">
                  +10% from last month
                </div>
              </CardContent>
              <CardFooter>
                <Progress value={12} aria-label="12% increase" />
              </CardFooter>
            </Card>
          </div>
          <Tabs defaultValue="week">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="month">Month</TabsTrigger>
                <TabsTrigger value="year">Year</TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-2 ml-auto">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1 h-7 text-sm"
                    >
                      <ListFilter className="w-3.5 h-3.5" />
                      <span className="sr-only sm:not-sr-only">Filter</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Fulfilled
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Declined
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Refunded
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-1 h-7 text-sm"
                >
                  <File className="w-3.5 h-3.5" />
                  <span className="sr-only sm:not-sr-only">Export</span>
                </Button>
              </div>
            </div>
            <TabsContent value="week">
              <Card x-chunk="dashboard-05-chunk-3">
                <CardHeader className="px-7">
                  <CardTitle>Orders</CardTitle>
                  <CardDescription>
                    Recent orders from your store.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead className="hidden sm:table-cell">
                          Type
                        </TableHead>
                        <TableHead className="hidden sm:table-cell">
                          Status
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Date
                        </TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="bg-accent">
                        <TableCell>
                          <div className="font-medium">Liam Johnson</div>
                          <div className="md:inline hidden text-muted-foreground text-sm">
                            liam@example.com
                          </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          Sale
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge className="text-xs" variant="secondary">
                            Fulfilled
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-06-23
                        </TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Olivia Smith</div>
                          <div className="md:inline hidden text-muted-foreground text-sm">
                            olivia@example.com
                          </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          Refund
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge className="text-xs" variant="outline">
                            Declined
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-06-24
                        </TableCell>
                        <TableCell className="text-right">$150.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Noah Williams</div>
                          <div className="md:inline hidden text-muted-foreground text-sm">
                            noah@example.com
                          </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          Subscription
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge className="text-xs" variant="secondary">
                            Fulfilled
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-06-25
                        </TableCell>
                        <TableCell className="text-right">$350.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Emma Brown</div>
                          <div className="md:inline hidden text-muted-foreground text-sm">
                            emma@example.com
                          </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          Sale
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge className="text-xs" variant="secondary">
                            Fulfilled
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-06-26
                        </TableCell>
                        <TableCell className="text-right">$450.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Liam Johnson</div>
                          <div className="md:inline hidden text-muted-foreground text-sm">
                            liam@example.com
                          </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          Sale
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge className="text-xs" variant="secondary">
                            Fulfilled
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-06-23
                        </TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Liam Johnson</div>
                          <div className="md:inline hidden text-muted-foreground text-sm">
                            liam@example.com
                          </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          Sale
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge className="text-xs" variant="secondary">
                            Fulfilled
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-06-23
                        </TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Olivia Smith</div>
                          <div className="md:inline hidden text-muted-foreground text-sm">
                            olivia@example.com
                          </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          Refund
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge className="text-xs" variant="outline">
                            Declined
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-06-24
                        </TableCell>
                        <TableCell className="text-right">$150.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Emma Brown</div>
                          <div className="md:inline hidden text-muted-foreground text-sm">
                            emma@example.com
                          </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          Sale
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge className="text-xs" variant="secondary">
                            Fulfilled
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-06-26
                        </TableCell>
                        <TableCell className="text-right">$450.00</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div>
          <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
            <CardHeader className="flex flex-row items-start bg-muted/50">
              <div className="gap-0.5 grid">
                <CardTitle className="flex items-center gap-2 text-lg group">
                  Order Oe31b70H
                  <Button
                    size="icon"
                    variant="outline"
                    className="opacity-0 group-hover:opacity-100 w-6 h-6 transition-opacity"
                  >
                    <Copy className="w-3 h-3" />
                    <span className="sr-only">Copy Order ID</span>
                  </Button>
                </CardTitle>
                <CardDescription>Date: November 23, 2023</CardDescription>
              </div>
              <div className="flex items-center gap-1 ml-auto">
                <Button size="sm" variant="outline" className="gap-1 h-8">
                  <Truck className="w-3.5 h-3.5" />
                  <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                    Track Order
                  </span>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="outline" className="w-8 h-8">
                      <MoreVertical className="w-3.5 h-3.5" />
                      <span className="sr-only">More</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Export</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Trash</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="p-6 text-sm">
              <div className="gap-3 grid">
                <div className="font-semibold">Order Details</div>
                <ul className="gap-3 grid">
                  <li className="flex justify-between items-center">
                    <span className="text-muted-foreground">
                      Glimmer Lamps x <span>2</span>
                    </span>
                    <span>$250.00</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-muted-foreground">
                      Aqua Filters x <span>1</span>
                    </span>
                    <span>$49.00</span>
                  </li>
                </ul>
                <Separator className="my-2" />
                <ul className="gap-3 grid">
                  <li className="flex justify-between items-center">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>$299.00</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>$5.00</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-muted-foreground">Tax</span>
                    <span>$25.00</span>
                  </li>
                  <li className="flex justify-between items-center font-semibold">
                    <span className="text-muted-foreground">Total</span>
                    <span>$329.00</span>
                  </li>
                </ul>
              </div>
              <Separator className="my-4" />
              <div className="gap-4 grid grid-cols-2">
                <div className="gap-3 grid">
                  <div className="font-semibold">Shipping Information</div>
                  <address className="gap-0.5 grid text-muted-foreground not-italic">
                    <span>Liam Johnson</span>
                    <span>1234 Main St.</span>
                    <span>Anytown, CA 12345</span>
                  </address>
                </div>
                <div className="gap-3 grid auto-rows-max">
                  <div className="font-semibold">Billing Information</div>
                  <div className="text-muted-foreground">
                    Same as shipping address
                  </div>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="gap-3 grid">
                <div className="font-semibold">Customer Information</div>
                <dl className="gap-3 grid">
                  <div className="flex justify-between items-center">
                    <dt className="text-muted-foreground">Customer</dt>
                    <dd>Liam Johnson</dd>
                  </div>
                  <div className="flex justify-between items-center">
                    <dt className="text-muted-foreground">Email</dt>
                    <dd>
                      <a href="mailto:">liam@acme.com</a>
                    </dd>
                  </div>
                  <div className="flex justify-between items-center">
                    <dt className="text-muted-foreground">Phone</dt>
                    <dd>
                      <a href="tel:">+1 234 567 890</a>
                    </dd>
                  </div>
                </dl>
              </div>
              <Separator className="my-4" />
              <div className="gap-3 grid">
                <div className="font-semibold">Payment Information</div>
                <dl className="gap-3 grid">
                  <div className="flex justify-between items-center">
                    <dt className="flex items-center gap-1 text-muted-foreground">
                      <CreditCard className="w-4 h-4" />
                      Visa
                    </dt>
                    <dd>**** **** **** 4532</dd>
                  </div>
                </dl>
              </div>
            </CardContent>
            <CardFooter className="flex flex-row items-center bg-muted/50 px-6 py-3 border-t">
              <div className="text-muted-foreground text-xs">
                Updated <time dateTime="2023-11-23">November 23, 2023</time>
              </div>
              <Pagination className="mr-0 ml-auto w-auto">
                <PaginationContent>
                  <PaginationItem>
                    <Button size="icon" variant="outline" className="w-6 h-6">
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span className="sr-only">Previous Order</span>
                    </Button>
                  </PaginationItem>
                  <PaginationItem>
                    <Button size="icon" variant="outline" className="w-6 h-6">
                      <ChevronRight className="w-3.5 h-3.5" />
                      <span className="sr-only">Next Order</span>
                    </Button>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}

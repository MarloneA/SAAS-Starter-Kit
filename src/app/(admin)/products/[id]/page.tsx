import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  ShoppingCart,
  Upload,
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
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/_ui/primitives/dropdown-menu";
import { Input } from "@/components/_ui/primitives/input";
import { Label } from "@/components/_ui/primitives/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/_ui/primitives/select";
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
import { Textarea } from "@/components/_ui/primitives/textarea";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/_ui/primitives/toggle-group";

export default function ProductDetails() {
  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 h-full">
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
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <ShoppingCart className="w-5 h-5" />
                Orders
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-foreground"
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
                <Link href="#">Products</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Edit Product</BreadcrumbPage>
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full overflow-hidden"
            >
              <Image
                src="/placeholder-user.jpg"
                width={36}
                height={36}
                alt="Avatar"
                className="rounded-full overflow-hidden"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="flex-1 items-start gap-4 md:gap-8 grid sm:px-6 sm:py-0 p-4">
        <div className="flex-1 gap-4 grid auto-rows-max mx-auto max-w-screen">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="w-7 h-7">
              <ChevronLeft className="w-4 h-4" />
              <span className="sr-only">Back</span>
            </Button>
            <h1 className="flex-1 sm:grow-0 font-semibold text-xl tracking-tight whitespace-nowrap shrink-0">
              Pro Controller
            </h1>
            <Badge variant="outline" className="ml-auto sm:ml-0">
              In stock
            </Badge>
            <div className="md:flex items-center gap-2 hidden md:ml-auto">
              <Button variant="outline" size="sm">
                Discard
              </Button>
              <Button size="sm">Save Product</Button>
            </div>
          </div>
          <div className="gap-4 lg:gap-8 grid md:grid-cols-[1fr_250px] lg:grid-cols-3">
            <div className="items-start gap-4 lg:gap-8 grid lg:col-span-2 auto-rows-max">
              <Card x-chunk="dashboard-07-chunk-0">
                <CardHeader>
                  <CardTitle>Product Details</CardTitle>
                  <CardDescription>
                    Lipsum dolor sit amet, consectetur adipiscing elit
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="gap-6 grid">
                    <div className="gap-3 grid">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        type="text"
                        className="w-full"
                        defaultValue="Gamer Gear Pro Controller"
                      />
                    </div>
                    <div className="gap-3 grid">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                        className="min-h-32"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card x-chunk="dashboard-07-chunk-1">
                <CardHeader>
                  <CardTitle>Stock</CardTitle>
                  <CardDescription>
                    Lipsum dolor sit amet, consectetur adipiscing elit
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">SKU</TableHead>
                        <TableHead>Stock</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead className="w-[100px]">Size</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-semibold w-72">
                          GGPC-001
                        </TableCell>
                        <TableCell>
                          <Label htmlFor="stock-1" className="sr-only">
                            Stock
                          </Label>
                          <Input
                            id="stock-1"
                            type="number"
                            defaultValue="100"
                          />
                        </TableCell>
                        <TableCell>
                          <Label htmlFor="price-1" className="sr-only">
                            Price
                          </Label>
                          <Input
                            id="price-1"
                            type="number"
                            defaultValue="99.99"
                          />
                        </TableCell>
                        <TableCell>
                          <ToggleGroup
                            type="single"
                            defaultValue="s"
                            variant="outline"
                          >
                            <ToggleGroupItem value="s">S</ToggleGroupItem>
                            <ToggleGroupItem value="m">M</ToggleGroupItem>
                            <ToggleGroupItem value="l">L</ToggleGroupItem>
                          </ToggleGroup>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">
                          GGPC-002
                        </TableCell>
                        <TableCell>
                          <Label htmlFor="stock-2" className="sr-only">
                            Stock
                          </Label>
                          <Input
                            id="stock-2"
                            type="number"
                            defaultValue="143"
                          />
                        </TableCell>
                        <TableCell>
                          <Label htmlFor="price-2" className="sr-only">
                            Price
                          </Label>
                          <Input
                            id="price-2"
                            type="number"
                            defaultValue="99.99"
                          />
                        </TableCell>
                        <TableCell>
                          <ToggleGroup
                            type="single"
                            defaultValue="m"
                            variant="outline"
                          >
                            <ToggleGroupItem value="s">S</ToggleGroupItem>
                            <ToggleGroupItem value="m">M</ToggleGroupItem>
                            <ToggleGroupItem value="l">L</ToggleGroupItem>
                          </ToggleGroup>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">
                          GGPC-003
                        </TableCell>
                        <TableCell>
                          <Label htmlFor="stock-3" className="sr-only">
                            Stock
                          </Label>
                          <Input id="stock-3" type="number" defaultValue="32" />
                        </TableCell>
                        <TableCell>
                          <Label htmlFor="price-3" className="sr-only">
                            Stock
                          </Label>
                          <Input
                            id="price-3"
                            type="number"
                            defaultValue="99.99"
                          />
                        </TableCell>
                        <TableCell>
                          <ToggleGroup
                            type="single"
                            defaultValue="s"
                            variant="outline"
                          >
                            <ToggleGroupItem value="s">S</ToggleGroupItem>
                            <ToggleGroupItem value="m">M</ToggleGroupItem>
                            <ToggleGroupItem value="l">L</ToggleGroupItem>
                          </ToggleGroup>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="justify-center p-4 border-t">
                  <Button size="sm" variant="ghost" className="gap-1">
                    <PlusCircle className="w-3.5 h-3.5" />
                    Add Variant
                  </Button>
                </CardFooter>
              </Card>
              <Card x-chunk="dashboard-07-chunk-2">
                <CardHeader>
                  <CardTitle>Product Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="gap-6 grid sm:grid-cols-3">
                    <div className="gap-3 grid">
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger
                          id="category"
                          aria-label="Select category"
                        >
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="clothing">Clothing</SelectItem>
                          <SelectItem value="electronics">
                            Electronics
                          </SelectItem>
                          <SelectItem value="accessories">
                            Accessories
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="gap-3 grid">
                      <Label htmlFor="subcategory">
                        Subcategory (optional)
                      </Label>
                      <Select>
                        <SelectTrigger
                          id="subcategory"
                          aria-label="Select subcategory"
                        >
                          <SelectValue placeholder="Select subcategory" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="t-shirts">T-Shirts</SelectItem>
                          <SelectItem value="hoodies">Hoodies</SelectItem>
                          <SelectItem value="sweatshirts">
                            Sweatshirts
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="items-start gap-4 lg:gap-8 grid auto-rows-max">
              <Card x-chunk="dashboard-07-chunk-3">
                <CardHeader>
                  <CardTitle>Product Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="gap-6 grid">
                    <div className="gap-3 grid">
                      <Label htmlFor="status">Status</Label>
                      <Select>
                        <SelectTrigger id="status" aria-label="Select status">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="published">Active</SelectItem>
                          <SelectItem value="archived">Archived</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
                <CardHeader>
                  <CardTitle>Product Images</CardTitle>
                  <CardDescription>
                    Lipsum dolor sit amet, consectetur adipiscing elit
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="gap-2 grid">
                    <Image
                      alt="Product image"
                      className="rounded-md w-full aspect-square object-cover"
                      height="300"
                      src="/images/product/lamp.jpg"
                      width="300"
                    />
                    <div className="gap-2 grid grid-cols-3">
                      <button>
                        <Image
                          alt="Product image"
                          className="rounded-md w-full aspect-square object-cover"
                          height="84"
                          src="/images/product/mic.jpg"
                          width="84"
                        />
                      </button>
                      <button>
                        <Image
                          alt="Product image"
                          className="rounded-md w-full aspect-square object-cover"
                          height="84"
                          src="/images/product/headphones.jpg"
                          width="84"
                        />
                      </button>
                      <button className="flex justify-center items-center border border-dashed rounded-md w-full aspect-square">
                        <Upload className="w-4 h-4 text-muted-foreground" />
                        <span className="sr-only">Upload</span>
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card x-chunk="dashboard-07-chunk-5">
                <CardHeader>
                  <CardTitle>Archive Product</CardTitle>
                  <CardDescription>
                    Lipsum dolor sit amet, consectetur adipiscing elit.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div></div>
                  <Button size="sm" variant="secondary">
                    Archive Product
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 md:hidden">
            <Button variant="outline" size="sm">
              Discard
            </Button>
            <Button size="sm">Save Product</Button>
          </div>
        </div>
      </main>
    </div>
  );
}

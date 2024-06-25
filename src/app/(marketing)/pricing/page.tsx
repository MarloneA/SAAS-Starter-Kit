import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/_ui/button"
import { Icons } from "@/components/icons"

export const metadata = {
  title: "Pricing",
}

export default function PricingPage() {
  return (
    <section className="flex flex-col gap-6 py-8 md:py-12 lg:py-24 md:max-w-[64rem] container">
      <div className="flex flex-col gap-4 mx-auto w-full md:max-w-[58rem]">
        <h2 className="font-heading text-3xl sm:text-3xl md:text-6xl leading-[1.1]">
          Simple, transparent pricing
        </h2>
        <p className="max-w-[85%] text-muted-foreground sm:text-lg leading-normal sm:leading-7">
          Unlock all features including unlimited posts for your blog.
        </p>
      </div>
      <div className="items-start gap-10 grid md:grid-cols-[1fr_200px] p-10 border rounded-lg w-full">
        <div className="gap-6 grid">
          <h3 className="font-bold text-xl sm:text-2xl">
            What&apos;s included in the PRO plan
          </h3>
          <ul className="gap-3 grid sm:grid-cols-2 text-muted-foreground text-sm">
            <li className="flex items-center">
              <Icons.check className="mr-2 w-4 h-4" /> Unlimited Posts
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 w-4 h-4" /> Unlimited Users
            </li>

            <li className="flex items-center">
              <Icons.check className="mr-2 w-4 h-4" /> Custom domain
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 w-4 h-4" /> Dashboard Analytics
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 w-4 h-4" /> Access to Discord
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 w-4 h-4" /> Premium Support
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <div>
            <h4 className="font-bold text-7xl">$19</h4>
            <p className="font-medium text-muted-foreground text-sm">
              Billed Monthly
            </p>
          </div>
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Get Started
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4 mx-auto w-full max-w-[58rem]">
        <p className="max-w-[85%] text-muted-foreground leading-normal sm:leading-7">
          Taxonomy is a demo app.{" "}
          <strong>You can test the upgrade and won&apos;t be charged.</strong>
        </p>
      </div>
    </section>
  )
}

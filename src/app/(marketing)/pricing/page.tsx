"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/_ui/primitives/button";
import { Icons } from "@/components/_ui/icons";
import { useSearchParams } from "next/navigation";
import { pricingCards } from "@/lib/constants/landing-page";

// export const metadata = {
//   title: "Pricing",
// };

export default function PricingPage() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");
  const cards = pricingCards.filter((card) => card.title === plan);
  const features = cards[0].features || [];

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
            {`What's included in the ${plan} plan`}
          </h3>
          <ul className="gap-3 grid sm:grid-cols-2 text-muted-foreground text-sm">
            {features.map((pricing, index) => (
              <li key={index} className="flex items-center">
                {pricing.available ? (
                  <Icons.check className="mr-2 w-4 h-4" />
                ) : (
                  <Icons.close className="mr-2 w-4 h-4" />
                )}

                {pricing.feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <div>
            <h4 className="font-bold text-7xl">{cards[0].price}</h4>
            <p className="font-medium text-muted-foreground text-sm">
              {`Billed ${cards[0].duration}`}
            </p>
          </div>
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Get Started
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4 mx-auto w-full max-w-[58rem]">
        <p className="max-w-[85%] text-muted-foreground leading-normal sm:leading-7">
          Not Ready to commit.{" "}
          <strong>
            You can try out the free version{" "}
            <Link href="/pricing?plan=Free">here</Link>.
          </strong>
        </p>
      </div>
    </section>
  );
}

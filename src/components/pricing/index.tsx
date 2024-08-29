import { pricingCards } from "@/constants/landing-page";
import * as Layout from "../_ui/layout";
import { H2, P } from "../_ui/typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../_ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";
import { Badge } from "../_ui/badge";
import { Button } from "../_ui/button";

export const Pricing = () => {
  return (
    <Layout.Section>
      <section
        id="pricing"
        className="flex flex-col justify-center items-center gap-4 mt-10"
      >
        <H2>Choose your plan</H2>
        <P>
          Our straightforward pricing plans are tailored to meet your needs. If
          <br />
          {" you're"} not ready to commit you can get started for free.
        </P>
      </section>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {pricingCards.map((card) => (
          <Card
            key={card.title}
            className={cn("w-[300px] flex flex-col justify-between", {
              "border-2 border-primary bg-[#ffff0021]": card.title === "Plus",
            })}
          >
            <CardHeader>
              <div className="flex justify-between">
                <CardTitle className="text-orange">{card.title}</CardTitle>
                {card.title === "Plus" && (
                  <Badge className="bg-white text-black">Best Value</Badge>
                )}
              </div>
              <CardDescription>
                {pricingCards.find((c) => c.title === card.title)?.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="font-bold text-4xl">{card.price}</span>
              <span className="text-muted-foreground">
                <span>/ {card.duration} </span>
              </span>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div>
                {card.features.map((feature) => (
                  <div key={feature.feature} className="flex gap-2">
                    {feature.available ? (
                      <Icons.check color="green" className="mr-2 w-4 h-4" />
                    ) : (
                      <Icons.close color="gray" className="mr-2 w-4 h-4" />
                    )}
                    <p>{feature.feature}</p>
                  </div>
                ))}
              </div>
              <Link
                className="w-full flex justify-center"
                href={`/pricing?plan=${card.title}`}
              >
                <Button className="w-full" variant="outline">
                  Get Started
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Layout.Section>
  );
};

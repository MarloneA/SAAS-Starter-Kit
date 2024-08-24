import * as Layout from "@/components/_ui/layout";

import { ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../_ui/accordion";
import { H2, P } from "../_ui/typography";
import { content } from "./constants";

const FAQ = () => {
  return (
    <Layout.Section>
      <Layout.Section
        id="faq"
        className="flex flex-col justify-center items-center gap-4 mt-10"
      >
        <H2>Have any Questions?</H2>
      </Layout.Section>
      <Layout.Container>
        <h3 className="!mt-0">Frequently Asked Questions</h3>
        <h4 className="text-muted-foreground">
          Can&apos;t find the answer you&apos;re looking for? Reach out to support@starterkit.com.
        </h4>
        <div className="flex flex-col gap-4 mt-4 md:mt-8 not-prose">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem
                value={item.question}
                className="bg-muted/20 hover:bg-muted/50 px-4 border rounded-md transition-all"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="md:w-3/4 text-base">
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className="flex items-center opacity-60 hover:opacity-100 mt-2 w-full transition-all"
                    >
                      Learn more <ArrowUpRight className="ml-1" size="16" />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Layout.Container>
    </Layout.Section>
  );
};

export default FAQ;

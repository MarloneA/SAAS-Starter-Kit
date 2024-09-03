"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/_ui/primitives/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/_ui/primitives/form";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/_ui/primitives/radio-group";
import { toast } from "@/components/_ui/primitives/use-toast";
import { useTheme } from "next-themes";

const appearanceFormSchema = z.object({
  theme: z.enum(["light", "dark"], {
    required_error: "Please select a theme.",
  }),
  font: z.enum(["inter", "manrope", "system"], {
    invalid_type_error: "Select a font",
    required_error: "Please select a font.",
  }),
});

type AppearanceFormValues = z.infer<typeof appearanceFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AppearanceFormValues> = {
  theme: "light",
};

export function AppearanceForm() {
  const { setTheme } = useTheme();

  const form = useForm<AppearanceFormValues>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues,
  });

  function onSubmit(data: AppearanceFormValues) {
    setTheme(data?.theme);

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="bg-slate-950 mt-2 p-4 rounded-md w-[340px]">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="font"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Font</FormLabel>
              <div className="relative w-max">
                <FormControl>
                  <select
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "w-[200px] appearance-none bg-transparent font-normal"
                    )}
                    {...field}
                  >
                    <option value="inter">Inter</option>
                    <option value="manrope">Manrope</option>
                    <option value="system">System</option>
                  </select>
                </FormControl>
                <ChevronDownIcon className="top-2.5 right-3 absolute opacity-50 w-4 h-4" />
              </div>
              <FormDescription>
                Set the font you want to use in the dashboard.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="theme"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>Theme</FormLabel>
              <FormDescription>
                Select the theme for the dashboard.
              </FormDescription>
              <FormMessage />
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="gap-8 grid grid-cols-2 pt-2 max-w-md"
              >
                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                    <FormControl>
                      <RadioGroupItem value="light" className="sr-only" />
                    </FormControl>
                    <div className="items-center border-2 border-muted hover:border-accent p-1 rounded-md">
                      <div className="space-y-2 bg-[#ecedef] p-2 rounded-sm">
                        <div className="space-y-2 bg-white shadow-sm p-2 rounded-md">
                          <div className="bg-[#ecedef] rounded-lg w-[80px] h-2" />
                          <div className="bg-[#ecedef] rounded-lg w-[100px] h-2" />
                        </div>
                        <div className="flex items-center space-x-2 bg-white shadow-sm p-2 rounded-md">
                          <div className="bg-[#ecedef] rounded-full w-4 h-4" />
                          <div className="bg-[#ecedef] rounded-lg w-[100px] h-2" />
                        </div>
                        <div className="flex items-center space-x-2 bg-white shadow-sm p-2 rounded-md">
                          <div className="bg-[#ecedef] rounded-full w-4 h-4" />
                          <div className="bg-[#ecedef] rounded-lg w-[100px] h-2" />
                        </div>
                      </div>
                    </div>
                    <span className="block p-2 w-full font-normal text-center">
                      Light
                    </span>
                  </FormLabel>
                </FormItem>
                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                    <FormControl>
                      <RadioGroupItem value="dark" className="sr-only" />
                    </FormControl>
                    <div className="items-center border-2 border-muted bg-popover hover:bg-accent p-1 rounded-md hover:text-accent-foreground">
                      <div className="space-y-2 bg-slate-950 p-2 rounded-sm">
                        <div className="space-y-2 bg-slate-800 shadow-sm p-2 rounded-md">
                          <div className="bg-slate-400 rounded-lg w-[80px] h-2" />
                          <div className="bg-slate-400 rounded-lg w-[100px] h-2" />
                        </div>
                        <div className="flex items-center space-x-2 bg-slate-800 shadow-sm p-2 rounded-md">
                          <div className="bg-slate-400 rounded-full w-4 h-4" />
                          <div className="bg-slate-400 rounded-lg w-[100px] h-2" />
                        </div>
                        <div className="flex items-center space-x-2 bg-slate-800 shadow-sm p-2 rounded-md">
                          <div className="bg-slate-400 rounded-full w-4 h-4" />
                          <div className="bg-slate-400 rounded-lg w-[100px] h-2" />
                        </div>
                      </div>
                    </div>
                    <span className="block p-2 w-full font-normal text-center">
                      Dark
                    </span>
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormItem>
          )}
        />

        <Button type="submit">Update preferences</Button>
      </form>
    </Form>
  );
}

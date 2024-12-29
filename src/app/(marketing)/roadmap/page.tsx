import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import { z } from "zod";
import { DataTable } from "@/components/templates/tasks/modules/data-table";
import { columns } from "@/components/templates/tasks/modules/columns";
import { taskSchema } from "@/components/templates/tasks/data/schema";

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/components/templates/tasks/data/tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function TaskPage() {
  const tasks = await getTasks();
  return (
    <div className="py-6 lg:py-10 max-w-8xl container">
      <div className="flex md:flex-row flex-col md:justify-between items-start gap-4 md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl lg:text-5xl tracking-tight">
            Project Roadmap
          </h1>
          <p className="text-muted-foreground text-xl">
            A sneek peek into what's coming next in our future release cycles.
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <main className="py-10">
        <DataTable data={tasks} columns={columns} />
      </main>
    </div>
  );
}

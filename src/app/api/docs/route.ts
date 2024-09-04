import { createDocHandler, getDocsHandler } from "@/server/controllers/docs";

export async function GET() {
  return await getDocsHandler();
}

export async function POST(req: Request) {
  return await createDocHandler(req);
}

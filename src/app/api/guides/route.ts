import { createGuideHandler, getGuidesHandler } from "@/server/controllers/guides";

export async function GET() {
  return await getGuidesHandler();
}

export async function POST(req: Request) {
  return await createGuideHandler(req);
}

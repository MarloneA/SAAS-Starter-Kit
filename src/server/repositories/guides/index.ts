import { db } from "@/lib/db";
import {
  CreateGuideInputInteface,
  CreateGuideInterface,
  PatchGuideInterface,
  GuideInterface,
  PublishGuideInterface,
} from "@/server/interface/guides";

export class GuideRepository {
  static async findGuidesByUserId(userId: string): Promise<GuideInterface[]> {
    return await db.guide.findMany({
      select: {
        id: true,
        title: true,
        published: true,
        createdAt: true,
      },
      where: {
        authorId: userId,
      },
    });
  }

  static async countGuidesByUserId(userId: string): Promise<number> {
    return await db.guide.count({
      where: { authorId: userId },
    });
  }

  static async createGuide(
    userId: string,
    body: CreateGuideInputInteface
  ): Promise<CreateGuideInterface> {
    return await db.guide.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
      select: {
        id: true,
      },
    });
  }

  static async deleteGuide(guideId: string): Promise<void> {
    await db.guide.delete({
      where: {
        id: guideId,
      },
    });
  }

  static async updateGuide(
    guideId: string,
    body: PatchGuideInterface
  ): Promise<void> {
    await db.guide.update({
      where: {
        id: guideId,
      },
      data: {
        title: body.title,
        content: body.content,
        published: body.published,
      },
    });
  }

  static async publishGuide(
    guideId: string,
    body: PublishGuideInterface
  ): Promise<void> {
    await db.guide.update({
      where: {
        id: guideId,
      },
      data: {
        published: body.published,
      },
    });
  }
}

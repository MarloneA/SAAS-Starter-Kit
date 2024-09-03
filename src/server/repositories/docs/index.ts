import { db } from "@/lib/db"
import { CreateDocInputInteface, CreateDocInterface, PatchDocInterface, DocInterface } from "@/server/interface/docs"

export class DocRepository {
  static async findDocsByUserId(userId: string): Promise<DocInterface[]> {
    return await db.doc.findMany({
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

  static async countDocsByUserId(userId: string): Promise<number> {
    return await db.doc.count({
      where: { authorId: userId },
    });
  }

  static async createDoc(userId: string, body: CreateDocInputInteface): Promise<CreateDocInterface> {
    return await db.doc.create({
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

  static async deleteDoc(docId: string): Promise<void> {
    await db.doc.delete({
      where: {
        id: docId,
      },
    });
  }

  static async updateDoc(docId: string, body: PatchDocInterface): Promise<void> {
    await db.doc.update({
      where: {
        id: docId,
      },
      data: {
        title: body.title,
        content: body.content,
        published: body.published,
      },
    });
  }
}


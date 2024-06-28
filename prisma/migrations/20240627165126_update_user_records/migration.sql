/*
  Warnings:

  - You are about to drop the column `scope` on the `accounts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "scope",
ADD COLUMN     "role" TEXT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "password" TEXT;

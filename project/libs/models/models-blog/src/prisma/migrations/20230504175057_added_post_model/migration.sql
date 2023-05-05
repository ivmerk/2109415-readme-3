/*
  Warnings:

  - You are about to drop the column `name` on the `quote_posts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "quote_posts" DROP COLUMN "name",
ADD COLUMN     "text" TEXT NOT NULL DEFAULT '';

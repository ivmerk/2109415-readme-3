/*
  Warnings:

  - You are about to drop the column `iption` on the `link_posts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "link_posts" DROP COLUMN "iption",
ADD COLUMN     "options" TEXT DEFAULT '';

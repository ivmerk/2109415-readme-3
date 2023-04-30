/*
  Warnings:

  - You are about to drop the column `tags` on the `posts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "posts" DROP COLUMN "tags";

-- CreateTable
CREATE TABLE "tags" (
    "tag_id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("tag_id")
);

-- CreateTable
CREATE TABLE "_PostEntityToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PostEntityToTag_AB_unique" ON "_PostEntityToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_PostEntityToTag_B_index" ON "_PostEntityToTag"("B");

-- AddForeignKey
ALTER TABLE "_PostEntityToTag" ADD CONSTRAINT "_PostEntityToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "posts"("post_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostEntityToTag" ADD CONSTRAINT "_PostEntityToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "tags"("tag_id") ON DELETE CASCADE ON UPDATE CASCADE;

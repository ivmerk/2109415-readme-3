/*
  Warnings:

  - You are about to drop the column `body` on the `posts` table. All the data in the column will be lost.
  - The `type` column on the `posts` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "PostType" AS ENUM ('VideoPost', 'TextPost', 'QuotePost', 'PicturePost', 'LinkPost');

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "body",
ADD COLUMN     "tags" TEXT,
DROP COLUMN "type",
ADD COLUMN     "type" "PostType" NOT NULL DEFAULT 'VideoPost';

-- CreateTable
CREATE TABLE "video_posts" (
    "video_post_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "linkVideo" TEXT NOT NULL DEFAULT '',
    "post_id" INTEGER NOT NULL,

    CONSTRAINT "video_posts_pkey" PRIMARY KEY ("video_post_id")
);

-- CreateTable
CREATE TABLE "text_posts" (
    "text_post_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "announcement" TEXT NOT NULL DEFAULT '',
    "text" TEXT NOT NULL DEFAULT '',
    "post_id" INTEGER NOT NULL,

    CONSTRAINT "text_posts_pkey" PRIMARY KEY ("text_post_id")
);

-- CreateTable
CREATE TABLE "quote_posts" (
    "quote_post_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "autor" TEXT NOT NULL DEFAULT '',
    "post_id" INTEGER NOT NULL,

    CONSTRAINT "quote_posts_pkey" PRIMARY KEY ("quote_post_id")
);

-- CreateTable
CREATE TABLE "picture_posts" (
    "picture_post_id" SERIAL NOT NULL,
    "picture" TEXT NOT NULL DEFAULT '',
    "post_id" INTEGER NOT NULL,

    CONSTRAINT "picture_posts_pkey" PRIMARY KEY ("picture_post_id")
);

-- CreateTable
CREATE TABLE "link_posts" (
    "link_post_id" SERIAL NOT NULL,
    "link" TEXT NOT NULL DEFAULT '',
    "iption" TEXT DEFAULT '',
    "post_id" INTEGER NOT NULL,

    CONSTRAINT "link_posts_pkey" PRIMARY KEY ("link_post_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "video_posts_post_id_key" ON "video_posts"("post_id");

-- CreateIndex
CREATE UNIQUE INDEX "text_posts_post_id_key" ON "text_posts"("post_id");

-- CreateIndex
CREATE UNIQUE INDEX "quote_posts_post_id_key" ON "quote_posts"("post_id");

-- CreateIndex
CREATE UNIQUE INDEX "picture_posts_post_id_key" ON "picture_posts"("post_id");

-- CreateIndex
CREATE UNIQUE INDEX "link_posts_post_id_key" ON "link_posts"("post_id");

-- AddForeignKey
ALTER TABLE "video_posts" ADD CONSTRAINT "video_posts_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("post_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "text_posts" ADD CONSTRAINT "text_posts_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("post_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quote_posts" ADD CONSTRAINT "quote_posts_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("post_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "picture_posts" ADD CONSTRAINT "picture_posts_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("post_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "link_posts" ADD CONSTRAINT "link_posts_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("post_id") ON DELETE CASCADE ON UPDATE CASCADE;

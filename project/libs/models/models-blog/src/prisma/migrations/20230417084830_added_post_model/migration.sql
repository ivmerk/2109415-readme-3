/*
  Warnings:

  - The values [VideoPost,TextPost,QuotePost,PicturePost,LinkPost] on the enum `PostType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PostType_new" AS ENUM ('video', 'text', 'quote', 'picture', 'link');
ALTER TABLE "posts" ALTER COLUMN "type" DROP DEFAULT;
ALTER TABLE "posts" ALTER COLUMN "type" TYPE "PostType_new" USING ("type"::text::"PostType_new");
ALTER TYPE "PostType" RENAME TO "PostType_old";
ALTER TYPE "PostType_new" RENAME TO "PostType";
DROP TYPE "PostType_old";
ALTER TABLE "posts" ALTER COLUMN "type" SET DEFAULT 'video';
COMMIT;

-- AlterTable
ALTER TABLE "posts" ALTER COLUMN "type" SET DEFAULT 'video';

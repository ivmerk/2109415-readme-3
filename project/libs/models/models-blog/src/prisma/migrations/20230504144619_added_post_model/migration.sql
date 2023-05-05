/*
  Warnings:

  - You are about to drop the column `postType` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `linkVideo` on the `video_posts` table. All the data in the column will be lost.
  - Added the required column `post_type` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "posts" DROP COLUMN "postType",
ADD COLUMN     "is_draft" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_repost" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "original_post_id" INTEGER,
ADD COLUMN     "post_type" "PostType" NOT NULL;

-- AlterTable
ALTER TABLE "video_posts" DROP COLUMN "linkVideo",
ADD COLUMN     "link_video" TEXT NOT NULL DEFAULT '';

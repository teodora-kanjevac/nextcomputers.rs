/*
  Warnings:

  - You are about to drop the column `username` on the `user` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `username` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `username`;

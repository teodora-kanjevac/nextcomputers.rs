/*
  Warnings:

  - The primary key for the `review` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `review_id` on the `review` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Char(36)`.

*/
-- AlterTable
ALTER TABLE `review` DROP PRIMARY KEY,
    MODIFY `review_id` CHAR(36) NOT NULL DEFAULT (uuid()),
    ADD PRIMARY KEY (`review_id`);

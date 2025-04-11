/*
  Warnings:

  - You are about to drop the column `lastUpdated` on the `distributorprice` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `distributorprice` DROP COLUMN `lastUpdated`,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

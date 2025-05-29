/*
  Warnings:

  - You are about to drop the column `createdAt` on the `pendingverification` table. All the data in the column will be lost.
  - You are about to drop the column `expiresAt` on the `pendingverification` table. All the data in the column will be lost.
  - Added the required column `expires_at` to the `pendingverification` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `pendingverification_expiresAt_idx` ON `pendingverification`;

-- AlterTable
ALTER TABLE `pendingverification` DROP COLUMN `createdAt`,
    DROP COLUMN `expiresAt`,
    ADD COLUMN `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `expires_at` DATETIME(0) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `expires_at` DATETIME(0) NULL;

-- CreateIndex
CREATE INDEX `pendingverification_expires_at_idx` ON `pendingverification`(`expires_at`);

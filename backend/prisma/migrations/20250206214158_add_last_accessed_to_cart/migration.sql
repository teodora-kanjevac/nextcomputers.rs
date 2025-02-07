-- AlterTable
ALTER TABLE `cart` ADD COLUMN `last_accessed_at` TIMESTAMP(0) NOT NULL DEFAULT (now());

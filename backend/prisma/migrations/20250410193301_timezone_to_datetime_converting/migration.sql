/*
  Warnings:

  - You are about to alter the column `updated_at` on the `distributorprice` table. The data in that column could be lost. The data in that column will be cast from `DateTime(3)` to `DateTime(0)`.

*/
-- AlterTable
ALTER TABLE `cart` MODIFY `created_at` DATETIME(0) NOT NULL DEFAULT (now()),
    MODIFY `last_accessed_at` DATETIME(0) NOT NULL DEFAULT (now());

-- AlterTable
ALTER TABLE `cartitem` MODIFY `added_at` DATETIME(0) NOT NULL DEFAULT (now());

-- AlterTable
ALTER TABLE `distributorprice` MODIFY `updated_at` DATETIME(0) NOT NULL DEFAULT (now());

-- AlterTable
ALTER TABLE `order` MODIFY `created_at` DATETIME(0) NOT NULL DEFAULT (now());

-- AlterTable
ALTER TABLE `product` MODIFY `created_at` DATETIME(0) NOT NULL DEFAULT (now());

-- AlterTable
ALTER TABLE `promotion` MODIFY `start_date` DATETIME(0) NULL,
    MODIFY `end_date` DATETIME(0) NULL;

-- AlterTable
ALTER TABLE `review` MODIFY `created_at` DATETIME(0) NOT NULL DEFAULT (now()),
    ALTER COLUMN `product_id` DROP DEFAULT;

-- AlterTable
ALTER TABLE `user` MODIFY `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);

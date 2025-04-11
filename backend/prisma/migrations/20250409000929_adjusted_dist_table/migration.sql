/*
  Warnings:

  - The primary key for the `distributor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `distributor_id` on the `distributor` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.
  - The primary key for the `distributorprice` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `distributor_price_id` on the `distributorprice` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.
  - Added the required column `distributor_id` to the `distributorprice` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `distributorprice` DROP FOREIGN KEY `distributorprice_distributor_price_id_fkey`;

-- DropIndex
DROP INDEX `distributorprice_ean_distributor_price_id_idx` ON `distributorprice`;

-- AlterTable
ALTER TABLE `distributor` DROP PRIMARY KEY,
    MODIFY `distributor_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`distributor_id`);

-- AlterTable
ALTER TABLE `distributorprice` DROP PRIMARY KEY,
    ADD COLUMN `distributor_id` INTEGER UNSIGNED NOT NULL,
    MODIFY `distributor_price_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`distributor_price_id`);

-- CreateIndex
CREATE INDEX `distributorprice_ean_distributor_id_idx` ON `distributorprice`(`ean`, `distributor_id`);

-- AddForeignKey
ALTER TABLE `distributorprice` ADD CONSTRAINT `distributorprice_distributor_id_fkey` FOREIGN KEY (`distributor_id`) REFERENCES `distributor`(`distributor_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

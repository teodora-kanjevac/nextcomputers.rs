-- AlterTable
ALTER TABLE `product` ADD COLUMN `price_distributor` VARCHAR(50) NULL DEFAULT '';

-- CreateTable
CREATE TABLE `distributor` (
    `distributor_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `identifier` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `distributor_name_key`(`name`),
    PRIMARY KEY (`distributor_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `distributorprice` (
    `distributor_price_id` INTEGER NOT NULL AUTO_INCREMENT,
    `ean` VARCHAR(191) NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `stock` INTEGER NOT NULL,
    `lastUpdated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `distributorprice_ean_distributor_price_id_idx`(`ean`, `distributor_price_id`),
    PRIMARY KEY (`distributor_price_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `distributorprice` ADD CONSTRAINT `distributorprice_distributor_price_id_fkey` FOREIGN KEY (`distributor_price_id`) REFERENCES `distributor`(`distributor_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

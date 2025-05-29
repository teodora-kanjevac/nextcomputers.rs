/*
  Warnings:

  - You are about to drop the `order_info` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `order_info` DROP FOREIGN KEY `order_info_order_id_fkey`;

-- DropTable
DROP TABLE `order_info`;

-- CreateTable
CREATE TABLE `orderinfo` (
    `order_info_id` CHAR(36) NOT NULL DEFAULT (uuid()),
    `order_id` VARCHAR(12) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `address` VARCHAR(200) NOT NULL,
    `phone_number` VARCHAR(20) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `city` VARCHAR(50) NOT NULL,
    `zipcode` VARCHAR(20) NOT NULL,
    `payment_method` ENUM('CASH', 'CARD', 'ADVANCE') NOT NULL,
    `subtotal_price` DECIMAL(10, 2) NOT NULL,
    `shipping_price` DECIMAL(10, 2) NOT NULL,
    `discount_price` DECIMAL(10, 2) NOT NULL,
    `pib` VARCHAR(20) NULL,

    UNIQUE INDEX `orderinfo_order_id_key`(`order_id`),
    PRIMARY KEY (`order_info_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `orderinfo` ADD CONSTRAINT `order_id_orderinfo_FK` FOREIGN KEY (`order_id`) REFERENCES `order`(`order_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

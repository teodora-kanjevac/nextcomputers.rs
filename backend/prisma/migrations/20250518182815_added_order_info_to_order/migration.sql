-- AlterTable
ALTER TABLE `user` MODIFY `created_at` DATETIME(0) NOT NULL DEFAULT (now());

-- CreateTable
CREATE TABLE `order_info` (
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

    UNIQUE INDEX `order_info_order_id_key`(`order_id`),
    PRIMARY KEY (`order_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `order_info` ADD CONSTRAINT `order_info_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `order`(`order_id`) ON DELETE CASCADE ON UPDATE CASCADE;

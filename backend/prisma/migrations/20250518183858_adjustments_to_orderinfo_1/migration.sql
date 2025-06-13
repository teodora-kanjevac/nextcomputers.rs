-- DropForeignKey
ALTER TABLE `orderinfo` DROP FOREIGN KEY `order_id_orderinfo_FK`;

-- AlterTable
ALTER TABLE `orderinfo` MODIFY `order_id` VARCHAR(20) NOT NULL,
    MODIFY `name` VARCHAR(255) NOT NULL,
    MODIFY `address` VARCHAR(255) NOT NULL,
    MODIFY `phone_number` VARCHAR(50) NOT NULL,
    MODIFY `email` VARCHAR(255) NOT NULL,
    MODIFY `pib` VARCHAR(50) NULL;

-- AddForeignKey
ALTER TABLE `orderinfo` ADD CONSTRAINT `order_id_orderinfo_FK` FOREIGN KEY (`order_id`) REFERENCES `order`(`order_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

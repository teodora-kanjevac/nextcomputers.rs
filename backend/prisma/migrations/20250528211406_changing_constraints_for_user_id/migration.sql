-- DropForeignKey
ALTER TABLE `cart` DROP FOREIGN KEY `user_id_cart_FK`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `user_id_order_FK`;

-- AddForeignKey
ALTER TABLE `cart` ADD CONSTRAINT `user_id_cart_FK` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `user_id_order_FK` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;

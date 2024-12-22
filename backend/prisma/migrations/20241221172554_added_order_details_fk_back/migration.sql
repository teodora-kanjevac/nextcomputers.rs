-- CreateIndex
CREATE INDEX `order_id_orderdetails_FK` ON `orderdetails`(`order_id`);

-- AddForeignKey
ALTER TABLE `orderdetails` ADD CONSTRAINT `order_id_orderdetails_FK` FOREIGN KEY (`order_id`) REFERENCES `order`(`order_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

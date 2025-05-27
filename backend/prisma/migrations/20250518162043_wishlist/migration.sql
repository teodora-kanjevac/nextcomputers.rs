-- CreateTable
CREATE TABLE `wishlist` (
    `wishlist_id` CHAR(36) NOT NULL DEFAULT (uuid()),
    `user_id` CHAR(36) NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT (now()),
    `name` VARCHAR(100) NOT NULL DEFAULT '',
    `is_default` BOOLEAN NOT NULL DEFAULT true,

    INDEX `user_id_wishlist_FK`(`user_id`),
    PRIMARY KEY (`wishlist_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wishlistitem` (
    `wishlist_item_id` CHAR(36) NOT NULL DEFAULT (uuid()),
    `wishlist_id` CHAR(36) NOT NULL,
    `product_id` INTEGER UNSIGNED NOT NULL,
    `added_at` DATETIME(0) NOT NULL DEFAULT (now()),
    `priority` INTEGER UNSIGNED NOT NULL DEFAULT 0,

    INDEX `wishlist_id_wishlistitem_FK`(`wishlist_id`),
    INDEX `product_id_wishlistitem_FK`(`product_id`),
    PRIMARY KEY (`wishlist_item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `wishlist` ADD CONSTRAINT `user_id_wishlist_FK` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `wishlistitem` ADD CONSTRAINT `wishlist_id_wishlistitem_FK` FOREIGN KEY (`wishlist_id`) REFERENCES `wishlist`(`wishlist_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `wishlistitem` ADD CONSTRAINT `product_id_wishlistitem_FK` FOREIGN KEY (`product_id`) REFERENCES `product`(`product_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

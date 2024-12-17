-- CreateTable
CREATE TABLE `cart` (
    `cart_id` CHAR(36) NOT NULL DEFAULT (uuid()),
    `user_id` CHAR(36) NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT (now()),

    INDEX `user_id_cart_FK`(`user_id`),
    PRIMARY KEY (`cart_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cartitem` (
    `cart_item_id` CHAR(36) NOT NULL DEFAULT (uuid()),
    `cart_id` CHAR(36) NOT NULL,
    `product_id` INTEGER UNSIGNED NOT NULL,
    `quantity` TINYINT UNSIGNED NOT NULL DEFAULT 0,
    `added_at` TIMESTAMP(0) NOT NULL DEFAULT (now()),

    INDEX `cart_id_cartitem_FK`(`cart_id`),
    INDEX `product_id_cartitem_FK`(`product_id`),
    PRIMARY KEY (`cart_item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `category` (
    `category_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL DEFAULT '',

    UNIQUE INDEX `name`(`name`),
    PRIMARY KEY (`category_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order` (
    `order_id` CHAR(36) NOT NULL DEFAULT (uuid()),
    `user_id` CHAR(36) NOT NULL DEFAULT '',
    `total_price` DECIMAL(10, 2) NOT NULL,
    `order_status` VARCHAR(20) NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT (now()),

    INDEX `user_id_order_FK`(`user_id`),
    PRIMARY KEY (`order_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orderdetails` (
    `order_detail_id` CHAR(36) NOT NULL DEFAULT (uuid()),
    `order_id` CHAR(36) NOT NULL,
    `product_id` INTEGER UNSIGNED NOT NULL,
    `quantity` TINYINT UNSIGNED NOT NULL DEFAULT 0,

    INDEX `order_id_orderdetails_FK`(`order_id`),
    INDEX `product_id_orderdetails_FK`(`product_id`),
    PRIMARY KEY (`order_detail_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product` (
    `product_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `image_url` JSON NULL,
    `name` VARCHAR(255) NOT NULL DEFAULT '',
    `stock` SMALLINT UNSIGNED NOT NULL DEFAULT 0,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT (now()),
    `brand` VARCHAR(100) NOT NULL DEFAULT '',
    `specification` JSON NULL,
    `ean` VARCHAR(100) NOT NULL DEFAULT '',
    `country` VARCHAR(100) NULL DEFAULT '',
    `supplier` VARCHAR(100) NULL DEFAULT '',
    `price` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `retail_price` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `sale_price` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `discount_price` DECIMAL(10, 2) NULL,
    `payment_advance` SMALLINT NOT NULL DEFAULT 0,
    `subcategory_id` INTEGER UNSIGNED NULL,

    UNIQUE INDEX `ean`(`ean`),
    INDEX `subcategory_id_FK`(`subcategory_id`),
    PRIMARY KEY (`product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `promotion` (
    `promotion_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER UNSIGNED NOT NULL,
    `discount_percentage` TINYINT UNSIGNED NOT NULL DEFAULT 0,
    `start_date` TIMESTAMP(0) NULL,
    `end_date` TIMESTAMP(0) NOT NULL,

    INDEX `product_id_promotion_FK`(`product_id`),
    PRIMARY KEY (`promotion_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `review` (
    `review_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT (now()),
    `product_id` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `user_id` CHAR(36) NOT NULL DEFAULT '',
    `rating` TINYINT UNSIGNED NOT NULL,
    `comment` MEDIUMTEXT NOT NULL,

    INDEX `product_id_review_FK`(`product_id`),
    INDEX `user_id_FK`(`user_id`),
    PRIMARY KEY (`review_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subcategory` (
    `subcategory_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL DEFAULT '',
    `category_id` INTEGER UNSIGNED NOT NULL,

    UNIQUE INDEX `name`(`name`),
    INDEX `category_id_FK`(`category_id`),
    PRIMARY KEY (`subcategory_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `user_id` CHAR(36) NOT NULL DEFAULT (uuid()),
    `username` VARCHAR(100) NOT NULL DEFAULT '',
    `email` VARCHAR(100) NOT NULL DEFAULT '',
    `first_name` VARCHAR(50) NULL DEFAULT '',
    `last_name` VARCHAR(50) NULL DEFAULT '',
    `address` VARCHAR(255) NULL,
    `phone_number` VARCHAR(50) NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `password_hash` VARCHAR(255) NOT NULL DEFAULT '',

    UNIQUE INDEX `username`(`username`),
    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cart` ADD CONSTRAINT `user_id_cart_FK` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `cartitem` ADD CONSTRAINT `cart_id_cartitem_FK` FOREIGN KEY (`cart_id`) REFERENCES `cart`(`cart_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `cartitem` ADD CONSTRAINT `product_id_cartitem_FK` FOREIGN KEY (`product_id`) REFERENCES `product`(`product_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `user_id_order_FK` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `orderdetails` ADD CONSTRAINT `order_id_orderdetails_FK` FOREIGN KEY (`order_id`) REFERENCES `order`(`order_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `orderdetails` ADD CONSTRAINT `product_id_orderdetails_FK` FOREIGN KEY (`product_id`) REFERENCES `product`(`product_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `subcategory_id_FK` FOREIGN KEY (`subcategory_id`) REFERENCES `subcategory`(`subcategory_id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `promotion` ADD CONSTRAINT `product_id_promotion_FK` FOREIGN KEY (`product_id`) REFERENCES `product`(`product_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `review` ADD CONSTRAINT `product_id_review_FK` FOREIGN KEY (`product_id`) REFERENCES `product`(`product_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `review` ADD CONSTRAINT `user_id_FK` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `subcategory` ADD CONSTRAINT `category_id_FK` FOREIGN KEY (`category_id`) REFERENCES `category`(`category_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

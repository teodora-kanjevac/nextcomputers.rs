/*
  Warnings:

  - A unique constraint covering the columns `[cart_id,product_id]` on the table `cartitem` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `unique_cart_product` ON `cartitem`(`cart_id`, `product_id`);

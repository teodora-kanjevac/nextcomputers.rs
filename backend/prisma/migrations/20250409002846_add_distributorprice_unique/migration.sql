/*
  Warnings:

  - A unique constraint covering the columns `[ean,distributor_id]` on the table `distributorprice` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `distributorprice_ean_distributor_id_idx` ON `distributorprice`;

-- CreateIndex
CREATE UNIQUE INDEX `distributorprice_ean_distributor_id_key` ON `distributorprice`(`ean`, `distributor_id`);

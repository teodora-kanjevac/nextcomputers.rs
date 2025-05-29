/*
  Warnings:

  - Made the column `order_status` on table `order` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `order` MODIFY `order_status` ENUM('CANCELED', 'PENDING', 'CONFIRMED', 'SHIPPED', 'DELIVERED') NOT NULL;

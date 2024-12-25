/*
  Warnings:

  - The primary key for the `order` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `order_id` on the `order` table. The data in that column could be lost. The data in that column will be cast from `Char(36)` to `VarChar(12)`.
  - You are about to alter the column `order_id` on the `orderdetails` table. The data in that column could be lost. The data in that column will be cast from `Char(36)` to `VarChar(12)`.

*/
-- DropForeignKey
ALTER TABLE `orderdetails` DROP FOREIGN KEY `order_id_orderdetails_FK`;

-- DropIndex
DROP INDEX `order_id_orderdetails_FK` ON `orderdetails`;

-- AlterTable
ALTER TABLE `order` DROP PRIMARY KEY,
    MODIFY `order_id` VARCHAR(12) NOT NULL,
    MODIFY `user_id` CHAR(36) NULL DEFAULT '',
    ADD PRIMARY KEY (`order_id`);

-- AlterTable
ALTER TABLE `orderdetails` MODIFY `order_id` VARCHAR(12) NOT NULL;

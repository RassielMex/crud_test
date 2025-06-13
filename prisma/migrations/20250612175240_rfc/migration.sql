/*
  Warnings:

  - You are about to drop the column `RFC` on the `User` table. All the data in the column will be lost.
  - Added the required column `rfc` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `RFC`,
    ADD COLUMN `rfc` VARCHAR(191) NOT NULL;

/*
  Warnings:

  - You are about to drop the column `passEmail` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `passPass` on the `Event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "passEmail",
DROP COLUMN "passPass";

/*
  Warnings:

  - Added the required column `number` to the `ServiceOrder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ServiceOrder" ADD COLUMN     "number" INTEGER NOT NULL;

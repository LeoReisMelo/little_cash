/*
  Warnings:

  - A unique constraint covering the columns `[number]` on the table `ServiceOrder` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ServiceOrder_number_key" ON "ServiceOrder"("number");

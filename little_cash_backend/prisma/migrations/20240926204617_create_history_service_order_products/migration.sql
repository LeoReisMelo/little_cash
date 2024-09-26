-- CreateTable
CREATE TABLE "HistoryServiceOrder" (
    "id" TEXT NOT NULL,
    "clientCpf" TEXT NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "closingDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paymentMethod" TEXT NOT NULL,

    CONSTRAINT "HistoryServiceOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HistoryServiceOrderProducts" (
    "id" TEXT NOT NULL,
    "historyServiceOrderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "HistoryServiceOrderProducts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "HistoryServiceOrderProducts" ADD CONSTRAINT "HistoryServiceOrderProducts_historyServiceOrderId_fkey" FOREIGN KEY ("historyServiceOrderId") REFERENCES "HistoryServiceOrder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistoryServiceOrderProducts" ADD CONSTRAINT "HistoryServiceOrderProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

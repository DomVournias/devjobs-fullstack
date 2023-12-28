/*
  Warnings:

  - The `sizeId` column on the `Company` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_sizeId_fkey";

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "sizeId",
ADD COLUMN     "sizeId" INTEGER;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "Size"("id") ON DELETE SET NULL ON UPDATE CASCADE;

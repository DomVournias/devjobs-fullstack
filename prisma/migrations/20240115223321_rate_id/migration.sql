/*
  Warnings:

  - The primary key for the `Rate` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Developer" DROP CONSTRAINT "Developer_rateId_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_rateId_fkey";

-- DropIndex
DROP INDEX "Rate_name_key";

-- AlterTable
ALTER TABLE "Developer" ALTER COLUMN "rateId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Job" ALTER COLUMN "rateId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Rate" DROP CONSTRAINT "Rate_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Rate_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Rate_id_seq";

-- AddForeignKey
ALTER TABLE "Developer" ADD CONSTRAINT "Developer_rateId_fkey" FOREIGN KEY ("rateId") REFERENCES "Rate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_rateId_fkey" FOREIGN KEY ("rateId") REFERENCES "Rate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

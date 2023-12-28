/*
  Warnings:

  - You are about to drop the column `salaryId` on the `Developer` table. All the data in the column will be lost.
  - You are about to drop the column `salaryId` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the `Salary` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Developer" DROP CONSTRAINT "Developer_salaryId_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_salaryId_fkey";

-- AlterTable
ALTER TABLE "Developer" DROP COLUMN "salaryId",
ADD COLUMN     "maxSalaryId" INTEGER,
ADD COLUMN     "minSalaryId" INTEGER;

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "salaryId",
ADD COLUMN     "maxSalaryId" INTEGER,
ADD COLUMN     "minSalaryId" INTEGER;

-- DropTable
DROP TABLE "Salary";

-- CreateTable
CREATE TABLE "MinSalary" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "MinSalary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MaxSalary" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "MaxSalary_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Developer" ADD CONSTRAINT "Developer_minSalaryId_fkey" FOREIGN KEY ("minSalaryId") REFERENCES "MinSalary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Developer" ADD CONSTRAINT "Developer_maxSalaryId_fkey" FOREIGN KEY ("maxSalaryId") REFERENCES "MaxSalary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_minSalaryId_fkey" FOREIGN KEY ("minSalaryId") REFERENCES "MinSalary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_maxSalaryId_fkey" FOREIGN KEY ("maxSalaryId") REFERENCES "MaxSalary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `name` on the `Salary` table. All the data in the column will be lost.
  - Added the required column `maxName` to the `Salary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minName` to the `Salary` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Salary_name_key";

-- AlterTable
ALTER TABLE "Salary" DROP COLUMN "name",
ADD COLUMN     "maxName" TEXT NOT NULL,
ADD COLUMN     "minName" TEXT NOT NULL;

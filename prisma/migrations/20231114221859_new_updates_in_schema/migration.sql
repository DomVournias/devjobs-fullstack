/*
  Warnings:

  - You are about to drop the column `employerId` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `industryId` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `locationId` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `positionId` on the `Job` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Industry` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Location` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Position` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Skill` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_employerId_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_industryId_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_locationId_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_positionId_fkey";

-- AlterTable
ALTER TABLE "Applicant" ADD COLUMN     "level" TEXT;

-- AlterTable
ALTER TABLE "Employer" ADD COLUMN     "salary" TEXT;

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "employerId",
DROP COLUMN "industryId",
DROP COLUMN "locationId",
DROP COLUMN "positionId",
ADD COLUMN     "employer" TEXT,
ADD COLUMN     "industry" TEXT,
ADD COLUMN     "international" BOOLEAN,
ADD COLUMN     "level" TEXT,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "position" TEXT;

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Salary" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "min" INTEGER NOT NULL,
    "max" INTEGER NOT NULL,

    CONSTRAINT "Salary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Level" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Level_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_JobToTag" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Salary_name_key" ON "Salary"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Level_name_key" ON "Level"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_JobToTag_AB_unique" ON "_JobToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_JobToTag_B_index" ON "_JobToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Industry_name_key" ON "Industry"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Location_name_key" ON "Location"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Position_name_key" ON "Position"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_name_key" ON "Skill"("name");

-- AddForeignKey
ALTER TABLE "Applicant" ADD CONSTRAINT "Applicant_level_fkey" FOREIGN KEY ("level") REFERENCES "Level"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employer" ADD CONSTRAINT "Employer_salary_fkey" FOREIGN KEY ("salary") REFERENCES "Salary"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_level_fkey" FOREIGN KEY ("level") REFERENCES "Level"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_salary_fkey" FOREIGN KEY ("salary") REFERENCES "Salary"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_industry_fkey" FOREIGN KEY ("industry") REFERENCES "Industry"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_position_fkey" FOREIGN KEY ("position") REFERENCES "Position"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_employer_fkey" FOREIGN KEY ("employer") REFERENCES "Employer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_location_fkey" FOREIGN KEY ("location") REFERENCES "Location"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobToTag" ADD CONSTRAINT "_JobToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobToTag" ADD CONSTRAINT "_JobToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

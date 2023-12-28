/*
  Warnings:

  - The `rateId` column on the `Developer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `salaryId` column on the `Developer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `shiftId` column on the `Developer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `positionId` column on the `Developer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `locationId` column on the `Developer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `timezoneId` column on the `Developer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `hoursId` column on the `Developer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `seniorityId` column on the `Developer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `industryId` column on the `Developer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Hours` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Hours` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Industry` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Industry` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `hoursId` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `industryId` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `locationId` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `positionId` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `rateId` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `salaryId` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `seniorityId` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `shiftId` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `timezoneId` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `typeId` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Location` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Location` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Position` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Position` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Rate` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Rate` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Salary` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Salary` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Seniority` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Seniority` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Shift` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Shift` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Skill` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Skill` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Stack` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Stack` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Tag` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Tag` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Timezone` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Timezone` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Type` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Type` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `B` on the `_DeveloperToSkill` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_DeveloperToStack` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_DeveloperToTag` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_DeveloperToType` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_JobToSkill` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_JobToStack` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_JobToTag` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Developer" DROP CONSTRAINT "Developer_hoursId_fkey";

-- DropForeignKey
ALTER TABLE "Developer" DROP CONSTRAINT "Developer_industryId_fkey";

-- DropForeignKey
ALTER TABLE "Developer" DROP CONSTRAINT "Developer_locationId_fkey";

-- DropForeignKey
ALTER TABLE "Developer" DROP CONSTRAINT "Developer_positionId_fkey";

-- DropForeignKey
ALTER TABLE "Developer" DROP CONSTRAINT "Developer_rateId_fkey";

-- DropForeignKey
ALTER TABLE "Developer" DROP CONSTRAINT "Developer_salaryId_fkey";

-- DropForeignKey
ALTER TABLE "Developer" DROP CONSTRAINT "Developer_seniorityId_fkey";

-- DropForeignKey
ALTER TABLE "Developer" DROP CONSTRAINT "Developer_shiftId_fkey";

-- DropForeignKey
ALTER TABLE "Developer" DROP CONSTRAINT "Developer_timezoneId_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_hoursId_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_industryId_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_locationId_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_positionId_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_rateId_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_salaryId_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_seniorityId_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_shiftId_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_timezoneId_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_typeId_fkey";

-- DropForeignKey
ALTER TABLE "_DeveloperToSkill" DROP CONSTRAINT "_DeveloperToSkill_B_fkey";

-- DropForeignKey
ALTER TABLE "_DeveloperToStack" DROP CONSTRAINT "_DeveloperToStack_B_fkey";

-- DropForeignKey
ALTER TABLE "_DeveloperToTag" DROP CONSTRAINT "_DeveloperToTag_B_fkey";

-- DropForeignKey
ALTER TABLE "_DeveloperToType" DROP CONSTRAINT "_DeveloperToType_B_fkey";

-- DropForeignKey
ALTER TABLE "_JobToSkill" DROP CONSTRAINT "_JobToSkill_B_fkey";

-- DropForeignKey
ALTER TABLE "_JobToStack" DROP CONSTRAINT "_JobToStack_B_fkey";

-- DropForeignKey
ALTER TABLE "_JobToTag" DROP CONSTRAINT "_JobToTag_B_fkey";

-- AlterTable
ALTER TABLE "Developer" DROP COLUMN "rateId",
ADD COLUMN     "rateId" INTEGER,
DROP COLUMN "salaryId",
ADD COLUMN     "salaryId" INTEGER,
DROP COLUMN "shiftId",
ADD COLUMN     "shiftId" INTEGER,
DROP COLUMN "positionId",
ADD COLUMN     "positionId" INTEGER,
DROP COLUMN "locationId",
ADD COLUMN     "locationId" INTEGER,
DROP COLUMN "timezoneId",
ADD COLUMN     "timezoneId" INTEGER,
DROP COLUMN "hoursId",
ADD COLUMN     "hoursId" INTEGER,
DROP COLUMN "seniorityId",
ADD COLUMN     "seniorityId" INTEGER,
DROP COLUMN "industryId",
ADD COLUMN     "industryId" INTEGER;

-- AlterTable
ALTER TABLE "Hours" DROP CONSTRAINT "Hours_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Hours_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Industry" DROP CONSTRAINT "Industry_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Industry_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "hoursId",
ADD COLUMN     "hoursId" INTEGER,
DROP COLUMN "industryId",
ADD COLUMN     "industryId" INTEGER,
DROP COLUMN "locationId",
ADD COLUMN     "locationId" INTEGER,
DROP COLUMN "positionId",
ADD COLUMN     "positionId" INTEGER,
DROP COLUMN "rateId",
ADD COLUMN     "rateId" INTEGER,
DROP COLUMN "salaryId",
ADD COLUMN     "salaryId" INTEGER,
DROP COLUMN "seniorityId",
ADD COLUMN     "seniorityId" INTEGER,
DROP COLUMN "shiftId",
ADD COLUMN     "shiftId" INTEGER,
DROP COLUMN "timezoneId",
ADD COLUMN     "timezoneId" INTEGER,
DROP COLUMN "typeId",
ADD COLUMN     "typeId" INTEGER;

-- AlterTable
ALTER TABLE "Location" DROP CONSTRAINT "Location_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Location_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Position" DROP CONSTRAINT "Position_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Position_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Rate" DROP CONSTRAINT "Rate_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Rate_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Salary" DROP CONSTRAINT "Salary_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Salary_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Seniority" DROP CONSTRAINT "Seniority_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Seniority_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Shift" DROP CONSTRAINT "Shift_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Shift_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Skill" DROP CONSTRAINT "Skill_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Skill_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Stack" DROP CONSTRAINT "Stack_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Stack_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Tag_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Timezone" DROP CONSTRAINT "Timezone_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Timezone_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Type" DROP CONSTRAINT "Type_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Type_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "_DeveloperToSkill" DROP COLUMN "B",
ADD COLUMN     "B" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "_DeveloperToStack" DROP COLUMN "B",
ADD COLUMN     "B" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "_DeveloperToTag" DROP COLUMN "B",
ADD COLUMN     "B" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "_DeveloperToType" DROP COLUMN "B",
ADD COLUMN     "B" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "_JobToSkill" DROP COLUMN "B",
ADD COLUMN     "B" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "_JobToStack" DROP COLUMN "B",
ADD COLUMN     "B" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "_JobToTag" DROP COLUMN "B",
ADD COLUMN     "B" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "_DeveloperToSkill_AB_unique" ON "_DeveloperToSkill"("A", "B");

-- CreateIndex
CREATE INDEX "_DeveloperToSkill_B_index" ON "_DeveloperToSkill"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DeveloperToStack_AB_unique" ON "_DeveloperToStack"("A", "B");

-- CreateIndex
CREATE INDEX "_DeveloperToStack_B_index" ON "_DeveloperToStack"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DeveloperToTag_AB_unique" ON "_DeveloperToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_DeveloperToTag_B_index" ON "_DeveloperToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DeveloperToType_AB_unique" ON "_DeveloperToType"("A", "B");

-- CreateIndex
CREATE INDEX "_DeveloperToType_B_index" ON "_DeveloperToType"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_JobToSkill_AB_unique" ON "_JobToSkill"("A", "B");

-- CreateIndex
CREATE INDEX "_JobToSkill_B_index" ON "_JobToSkill"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_JobToStack_AB_unique" ON "_JobToStack"("A", "B");

-- CreateIndex
CREATE INDEX "_JobToStack_B_index" ON "_JobToStack"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_JobToTag_AB_unique" ON "_JobToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_JobToTag_B_index" ON "_JobToTag"("B");

-- AddForeignKey
ALTER TABLE "Developer" ADD CONSTRAINT "Developer_rateId_fkey" FOREIGN KEY ("rateId") REFERENCES "Rate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Developer" ADD CONSTRAINT "Developer_salaryId_fkey" FOREIGN KEY ("salaryId") REFERENCES "Salary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Developer" ADD CONSTRAINT "Developer_shiftId_fkey" FOREIGN KEY ("shiftId") REFERENCES "Shift"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Developer" ADD CONSTRAINT "Developer_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Developer" ADD CONSTRAINT "Developer_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Developer" ADD CONSTRAINT "Developer_timezoneId_fkey" FOREIGN KEY ("timezoneId") REFERENCES "Timezone"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Developer" ADD CONSTRAINT "Developer_hoursId_fkey" FOREIGN KEY ("hoursId") REFERENCES "Hours"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Developer" ADD CONSTRAINT "Developer_seniorityId_fkey" FOREIGN KEY ("seniorityId") REFERENCES "Seniority"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Developer" ADD CONSTRAINT "Developer_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "Industry"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_rateId_fkey" FOREIGN KEY ("rateId") REFERENCES "Rate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_salaryId_fkey" FOREIGN KEY ("salaryId") REFERENCES "Salary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_shiftId_fkey" FOREIGN KEY ("shiftId") REFERENCES "Shift"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_timezoneId_fkey" FOREIGN KEY ("timezoneId") REFERENCES "Timezone"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_hoursId_fkey" FOREIGN KEY ("hoursId") REFERENCES "Hours"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_seniorityId_fkey" FOREIGN KEY ("seniorityId") REFERENCES "Seniority"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "Industry"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DeveloperToStack" ADD CONSTRAINT "_DeveloperToStack_B_fkey" FOREIGN KEY ("B") REFERENCES "Stack"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DeveloperToSkill" ADD CONSTRAINT "_DeveloperToSkill_B_fkey" FOREIGN KEY ("B") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DeveloperToTag" ADD CONSTRAINT "_DeveloperToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DeveloperToType" ADD CONSTRAINT "_DeveloperToType_B_fkey" FOREIGN KEY ("B") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobToStack" ADD CONSTRAINT "_JobToStack_B_fkey" FOREIGN KEY ("B") REFERENCES "Stack"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobToSkill" ADD CONSTRAINT "_JobToSkill_B_fkey" FOREIGN KEY ("B") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobToTag" ADD CONSTRAINT "_JobToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `applicantId` on the `Chat` table. All the data in the column will be lost.
  - You are about to drop the column `employerId` on the `Chat` table. All the data in the column will be lost.
  - You are about to drop the column `chatId` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `employer` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the `Applicant` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Employer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ApplicantToJob` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ApplicantToSkill` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Applicant" DROP CONSTRAINT "Applicant_level_fkey";

-- DropForeignKey
ALTER TABLE "Applicant" DROP CONSTRAINT "Applicant_locationId_fkey";

-- DropForeignKey
ALTER TABLE "Chat" DROP CONSTRAINT "Chat_applicantId_fkey";

-- DropForeignKey
ALTER TABLE "Chat" DROP CONSTRAINT "Chat_employerId_fkey";

-- DropForeignKey
ALTER TABLE "Employer" DROP CONSTRAINT "Employer_industryId_fkey";

-- DropForeignKey
ALTER TABLE "Employer" DROP CONSTRAINT "Employer_locationId_fkey";

-- DropForeignKey
ALTER TABLE "Employer" DROP CONSTRAINT "Employer_salary_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_employer_fkey";

-- DropForeignKey
ALTER TABLE "_ApplicantToJob" DROP CONSTRAINT "_ApplicantToJob_A_fkey";

-- DropForeignKey
ALTER TABLE "_ApplicantToJob" DROP CONSTRAINT "_ApplicantToJob_B_fkey";

-- DropForeignKey
ALTER TABLE "_ApplicantToSkill" DROP CONSTRAINT "_ApplicantToSkill_A_fkey";

-- DropForeignKey
ALTER TABLE "_ApplicantToSkill" DROP CONSTRAINT "_ApplicantToSkill_B_fkey";

-- AlterTable
ALTER TABLE "Chat" DROP COLUMN "applicantId",
DROP COLUMN "employerId",
ADD COLUMN     "job" TEXT;

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "chatId",
DROP COLUMN "employer",
ADD COLUMN     "user" TEXT;

-- DropTable
DROP TABLE "Applicant";

-- DropTable
DROP TABLE "Employer";

-- DropTable
DROP TABLE "_ApplicantToJob";

-- DropTable
DROP TABLE "_ApplicantToSkill";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "locationId" INTEGER,
    "level" TEXT,
    "salary" TEXT,
    "industryId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_SkillToUser" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ChatToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_SkillToUser_AB_unique" ON "_SkillToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_SkillToUser_B_index" ON "_SkillToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ChatToUser_AB_unique" ON "_ChatToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ChatToUser_B_index" ON "_ChatToUser"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_level_fkey" FOREIGN KEY ("level") REFERENCES "Level"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_salary_fkey" FOREIGN KEY ("salary") REFERENCES "Salary"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "Industry"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_job_fkey" FOREIGN KEY ("job") REFERENCES "Job"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SkillToUser" ADD CONSTRAINT "_SkillToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SkillToUser" ADD CONSTRAINT "_SkillToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChatToUser" ADD CONSTRAINT "_ChatToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Chat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChatToUser" ADD CONSTRAINT "_ChatToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

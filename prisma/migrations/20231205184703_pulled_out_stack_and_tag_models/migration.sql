/*
  Warnings:

  - You are about to drop the `Stack` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DeveloperToStack` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DeveloperToTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_JobToStack` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_JobToTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_DeveloperToStack" DROP CONSTRAINT "_DeveloperToStack_A_fkey";

-- DropForeignKey
ALTER TABLE "_DeveloperToStack" DROP CONSTRAINT "_DeveloperToStack_B_fkey";

-- DropForeignKey
ALTER TABLE "_DeveloperToTag" DROP CONSTRAINT "_DeveloperToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_DeveloperToTag" DROP CONSTRAINT "_DeveloperToTag_B_fkey";

-- DropForeignKey
ALTER TABLE "_JobToStack" DROP CONSTRAINT "_JobToStack_A_fkey";

-- DropForeignKey
ALTER TABLE "_JobToStack" DROP CONSTRAINT "_JobToStack_B_fkey";

-- DropForeignKey
ALTER TABLE "_JobToTag" DROP CONSTRAINT "_JobToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_JobToTag" DROP CONSTRAINT "_JobToTag_B_fkey";

-- DropTable
DROP TABLE "Stack";

-- DropTable
DROP TABLE "Tag";

-- DropTable
DROP TABLE "_DeveloperToStack";

-- DropTable
DROP TABLE "_DeveloperToTag";

-- DropTable
DROP TABLE "_JobToStack";

-- DropTable
DROP TABLE "_JobToTag";

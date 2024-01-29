/*
  Warnings:

  - You are about to drop the column `value` on the `Rate` table. All the data in the column will be lost.
  - Added the required column `fixed` to the `Rate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `from` to the `Rate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `to` to the `Rate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Rate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rate" DROP COLUMN "value",
ADD COLUMN     "fixed" INTEGER NOT NULL,
ADD COLUMN     "from" INTEGER NOT NULL,
ADD COLUMN     "to" INTEGER NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;

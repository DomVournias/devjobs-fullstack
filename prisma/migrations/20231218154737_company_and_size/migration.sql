-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "excerpt" TEXT,
ADD COLUMN     "facebook" TEXT,
ADD COLUMN     "linkedin" TEXT,
ADD COLUMN     "sizeId" TEXT;

-- AlterTable
ALTER TABLE "Developer" ADD COLUMN     "about" TEXT,
ADD COLUMN     "excerpt" TEXT;

-- CreateTable
CREATE TABLE "Size" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Size_name_key" ON "Size"("name");

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "Size"("name") ON DELETE SET NULL ON UPDATE CASCADE;

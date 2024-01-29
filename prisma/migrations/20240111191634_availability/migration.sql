-- AlterTable
ALTER TABLE "Developer" ADD COLUMN     "availabilityId" INTEGER;

-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "availabilityId" INTEGER;

-- CreateTable
CREATE TABLE "Availability" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "range" TEXT NOT NULL,

    CONSTRAINT "Availability_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Availability_name_key" ON "Availability"("name");

-- AddForeignKey
ALTER TABLE "Developer" ADD CONSTRAINT "Developer_availabilityId_fkey" FOREIGN KEY ("availabilityId") REFERENCES "Availability"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_availabilityId_fkey" FOREIGN KEY ("availabilityId") REFERENCES "Availability"("id") ON DELETE SET NULL ON UPDATE CASCADE;

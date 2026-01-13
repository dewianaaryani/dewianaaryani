/*
  Warnings:

  - You are about to drop the `workExperience` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "workExperience";

-- CreateTable
CREATE TABLE "WorkExperience" (
    "id" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "company" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "description" TEXT,
    "pin" TEXT[],
    "location" TEXT,
    "skills" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WorkExperience_pkey" PRIMARY KEY ("id")
);

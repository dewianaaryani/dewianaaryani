-- CreateTable
CREATE TABLE "workExperience" (
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

    CONSTRAINT "workExperience_pkey" PRIMARY KEY ("id")
);

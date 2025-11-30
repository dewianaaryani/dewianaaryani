-- CreateEnum
CREATE TYPE "Role" AS ENUM ('owner', 'visitor');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'visitor';

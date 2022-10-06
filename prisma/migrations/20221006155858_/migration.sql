-- CreateEnum
CREATE TYPE "type" AS ENUM ('workshop', 'hackathon', 'event');

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "sections" JSONB,
ADD COLUMN     "size" TEXT,
ADD COLUMN     "time" TEXT DEFAULT '00:00',
ADD COLUMN     "venue" TEXT DEFAULT 'TBD';

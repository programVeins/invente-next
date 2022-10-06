/*
  Warnings:

  - You are about to drop the `Event_User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Event_User" DROP CONSTRAINT "Event_User_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Event_User" DROP CONSTRAINT "Event_User_userEmail_fkey";

-- DropTable
DROP TABLE "Event_User";

-- CreateTable
CREATE TABLE "EventHead" (
    "id" INTEGER NOT NULL,
    "eventId" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,

    CONSTRAINT "EventHead_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EventHead" ADD CONSTRAINT "EventHead_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventHead" ADD CONSTRAINT "EventHead_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

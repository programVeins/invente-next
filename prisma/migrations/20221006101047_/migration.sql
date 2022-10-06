-- CreateEnum
CREATE TYPE "pass" AS ENUM ('tech', 'nonTech', 'bmeHack', 'cseHack', 'wsCentral', 'wsBme');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "college_name" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL,
    "firebase_id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "Pass" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "pass" "pass" NOT NULL,
    "created_at" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,

    CONSTRAINT "Pass_pkey" PRIMARY KEY ("email","pass")
);

-- CreateTable
CREATE TABLE "Event" (
    "event_name" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "pass" "pass" NOT NULL,
    "passEmail" TEXT NOT NULL,
    "passPass" TEXT NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Registration" (
    "id" SERIAL NOT NULL,
    "userEmail" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,

    CONSTRAINT "Registration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event_User" (
    "userEmail" TEXT NOT NULL,
    "eventId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Event_User_userEmail_key" ON "Event_User"("userEmail");

-- AddForeignKey
ALTER TABLE "Pass" ADD CONSTRAINT "Pass_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event_User" ADD CONSTRAINT "Event_User_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event_User" ADD CONSTRAINT "Event_User_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

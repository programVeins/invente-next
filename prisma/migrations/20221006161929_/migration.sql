-- AddForeignKey
ALTER TABLE "EventHead" ADD CONSTRAINT "EventHead_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

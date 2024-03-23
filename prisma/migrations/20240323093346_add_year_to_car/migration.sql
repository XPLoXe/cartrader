-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "numberOfSeats" INTEGER NOT NULL,
    "miles" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "features" TEXT[],
    "description" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "make" TEXT NOT NULL,
    "listerId" TEXT NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "listingId" INTEGER NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

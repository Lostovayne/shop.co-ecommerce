-- CreateEnum
CREATE TYPE "Color" AS ENUM ('Black', 'Blue', 'Green');

-- CreateEnum
CREATE TYPE "Size" AS ENUM ('Small', 'Medium', 'Large', 'XLarge');

-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "color" "Color"[],
    "size" "Size"[],
    "price" INTEGER NOT NULL,
    "image" TEXT[],
    "quantity" INTEGER NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "discount" INTEGER NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

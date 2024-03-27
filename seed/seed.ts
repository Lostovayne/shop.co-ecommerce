import { DataProducts } from "@/data/data-products";
import prisma from "@/lib/db";

async function main() {
  await prisma.products.deleteMany({});
  await prisma.products.createMany({
    data: DataProducts,
  });

  console.log("Seeded successfully");
}

main();



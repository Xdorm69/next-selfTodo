/*
  Warnings:

  - You are about to drop the column `desc` on the `Todos` table. All the data in the column will be lost.
  - Added the required column `description` to the `Todos` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Todos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Todos" ("createdAt", "id", "title", "updatedAt", "userId") SELECT "createdAt", "id", "title", "updatedAt", "userId" FROM "Todos";
DROP TABLE "Todos";
ALTER TABLE "new_Todos" RENAME TO "Todos";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

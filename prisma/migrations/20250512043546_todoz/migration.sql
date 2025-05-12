-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Todos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Todos" ("createdAt", "description", "id", "title", "updatedAt", "userId") SELECT "createdAt", "description", "id", "title", "updatedAt", "userId" FROM "Todos";
DROP TABLE "Todos";
ALTER TABLE "new_Todos" RENAME TO "Todos";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

/*
  Warnings:

  - You are about to drop the `Chat` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "Chat_stringKey_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Chat";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "privateChat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "stringKey" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_messagens" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" INTEGER,
    CONSTRAINT "messagens_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "privateChat" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_messagens" ("authorId", "data", "id", "message", "username") SELECT "authorId", "data", "id", "message", "username" FROM "messagens";
DROP TABLE "messagens";
ALTER TABLE "new_messagens" RENAME TO "messagens";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "privateChat_stringKey_key" ON "privateChat"("stringKey");

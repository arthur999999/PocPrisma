-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "categories_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "films" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "conclued" BOOLEAN NOT NULL,
    "image" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "films_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "actorfilm" (
    "id" SERIAL NOT NULL,
    "filmId" INTEGER NOT NULL,
    "actorId" INTEGER NOT NULL,

    CONSTRAINT "actorfilm_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "actors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "actors_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "films_name_key" ON "films"("name");

-- CreateIndex
CREATE UNIQUE INDEX "actors_name_key" ON "actors"("name");

-- AddForeignKey
ALTER TABLE "films" ADD CONSTRAINT "films_fk0" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "actorfilm" ADD CONSTRAINT "actorfilm_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "films"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "actorfilm" ADD CONSTRAINT "actorfilm_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "actors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

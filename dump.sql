CREATE TABLE "films" (
	"id" serial NOT NULL UNIQUE,
	"name" TEXT NOT NULL UNIQUE,
	"conclued" BOOLEAN NOT NULL,
	"image" TEXT NOT NULL,
	"categoryId" integer NOT NULL,
	CONSTRAINT "films_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "categories" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL UNIQUE,
	CONSTRAINT "categories_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "films" ADD CONSTRAINT "films_fk0" FOREIGN KEY ("categoryId") REFERENCES "categories"("id");

INSERT INTO categories (name) VALUES ('Ação');
INSERT INTO categories (name) VALUES ('Comédia');
INSERT INTO categories (name) VALUES ('Romance');
INSERT INTO categories (name) VALUES ('Aventura');
INSERT INTO categories (name) VALUES ('Infantil');
INSERT INTO categories (name) VALUES ('Terror');





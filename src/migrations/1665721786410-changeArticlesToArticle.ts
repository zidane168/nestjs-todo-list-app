import { MigrationInterface, QueryRunner } from "typeorm";

export class changeArticlesToArticle1665721786410 implements MigrationInterface {
    name = 'changeArticlesToArticle1665721786410'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "article" ("id" BIGSERIAL NOT NULL, "slug" character varying NOT NULL, "enabled" boolean NOT NULL DEFAULT true, "created" TIMESTAMP DEFAULT 'now()', "created_by" integer, "modified" TIMESTAMP DEFAULT 'now()', "modified_by" integer, CONSTRAINT "PK_40808690eb7b915046558c0f81b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "articleLanguage" ("id" BIGSERIAL NOT NULL, "alias" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "articleId" bigint, CONSTRAINT "PK_d45b6b3493abe436d4e529a2c6b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "created" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "modified" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "modified" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "created" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "modified" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "permissions" ALTER COLUMN "created" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "permissions" ALTER COLUMN "modified" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "created" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "modified" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "enabled" SET DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "created" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "modified" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "articleLanguage" ADD CONSTRAINT "FK_908fd97ccbc99ba371082e0b050" FOREIGN KEY ("articleId") REFERENCES "article"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`DROP TABLE "articleLanguages"`);
        await queryRunner.query(`DROP TABLE "articles"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articleLanguage" DROP CONSTRAINT "FK_908fd97ccbc99ba371082e0b050"`);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "modified" SET DEFAULT '2022-10-14 03:30:14.636312'`);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "created" SET DEFAULT '2022-10-14 03:30:14.636312'`);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "enabled" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "modified" SET DEFAULT '2022-10-14 03:30:14.636312'`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "created" SET DEFAULT '2022-10-14 03:30:14.636312'`);
        await queryRunner.query(`ALTER TABLE "permissions" ALTER COLUMN "modified" SET DEFAULT '2022-10-14 03:30:14.636312'`);
        await queryRunner.query(`ALTER TABLE "permissions" ALTER COLUMN "created" SET DEFAULT '2022-10-14 03:30:14.636312'`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "modified" SET DEFAULT '2022-10-14 03:30:14.636312'`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "created" SET DEFAULT '2022-10-14 03:30:14.636312'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "modified" SET DEFAULT '2022-10-14 03:30:14.636312'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created" SET DEFAULT '2022-10-14 03:30:14.636312'`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "modified" SET DEFAULT '2022-10-14 03:30:14.636312'`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "created" SET DEFAULT '2022-10-14 03:30:14.636312'`);
        await queryRunner.query(`DROP TABLE "articleLanguage"`);
        await queryRunner.query(`DROP TABLE "article"`);
    }

}

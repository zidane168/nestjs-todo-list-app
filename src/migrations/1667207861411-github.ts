import { MigrationInterface, QueryRunner } from "typeorm";

export class github1667207861411 implements MigrationInterface {
    name = 'github1667207861411'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "github" ("id" BIGSERIAL NOT NULL, "enabled" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP DEFAULT 'now()', "createdBy" integer, "modifiedAt" TIMESTAMP DEFAULT 'now()', "modifiedBy" integer, "deletedAt" TIMESTAMP, "deletedBy" integer, "login" character varying NOT NULL, "node_id" character varying NOT NULL, CONSTRAINT "PK_d56780d391da316e085474c73c3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "githubImage" ("id" BIGSERIAL NOT NULL, "enabled" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP DEFAULT 'now()', "createdBy" integer, "modifiedAt" TIMESTAMP DEFAULT 'now()', "modifiedBy" integer, "deletedAt" TIMESTAMP, "deletedBy" integer, "myFileId" integer, "githubId" bigint, CONSTRAINT "PK_6bafbfc1c9d57f188865e831e2b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "article" ALTER COLUMN "createdAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "article" ALTER COLUMN "modifiedAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "articleImage" ALTER COLUMN "createdAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "articleImage" ALTER COLUMN "modifiedAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "created" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "modified" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "myFile" ALTER COLUMN "createdAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "myFile" ALTER COLUMN "modifiedAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "modified" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "created" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "modified" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "permissions" ALTER COLUMN "created" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "permissions" ALTER COLUMN "modified" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "created" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "modified" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "createdAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "modifiedAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "githubImage" ADD CONSTRAINT "FK_36f015b7f540c3c156acdad018e" FOREIGN KEY ("githubId") REFERENCES "github"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "githubImage" DROP CONSTRAINT "FK_36f015b7f540c3c156acdad018e"`);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "modifiedAt" SET DEFAULT '2022-10-19 07:46:16.064471'`);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "createdAt" SET DEFAULT '2022-10-19 07:46:16.064471'`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "modified" SET DEFAULT '2022-10-19 07:46:16.064471'`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "created" SET DEFAULT '2022-10-19 07:46:16.064471'`);
        await queryRunner.query(`ALTER TABLE "permissions" ALTER COLUMN "modified" SET DEFAULT '2022-10-19 07:46:16.064471'`);
        await queryRunner.query(`ALTER TABLE "permissions" ALTER COLUMN "created" SET DEFAULT '2022-10-19 07:46:16.064471'`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "modified" SET DEFAULT '2022-10-19 07:46:16.064471'`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "created" SET DEFAULT '2022-10-19 07:46:16.064471'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "modified" SET DEFAULT '2022-10-19 07:46:16.064471'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created" SET DEFAULT '2022-10-19 07:46:16.064471'`);
        await queryRunner.query(`ALTER TABLE "myFile" ALTER COLUMN "modifiedAt" SET DEFAULT '2022-10-19 07:46:16.064471'`);
        await queryRunner.query(`ALTER TABLE "myFile" ALTER COLUMN "createdAt" SET DEFAULT '2022-10-19 07:46:16.064471'`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "modified" SET DEFAULT '2022-10-19 07:46:16.064471'`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "created" SET DEFAULT '2022-10-19 07:46:16.064471'`);
        await queryRunner.query(`ALTER TABLE "articleImage" ALTER COLUMN "modifiedAt" SET DEFAULT '2022-10-19 07:46:16.064471'`);
        await queryRunner.query(`ALTER TABLE "articleImage" ALTER COLUMN "createdAt" SET DEFAULT '2022-10-19 07:46:16.064471'`);
        await queryRunner.query(`ALTER TABLE "article" ALTER COLUMN "modifiedAt" SET DEFAULT '2022-10-19 07:46:16.064471'`);
        await queryRunner.query(`ALTER TABLE "article" ALTER COLUMN "createdAt" SET DEFAULT '2022-10-19 07:46:16.064471'`);
        await queryRunner.query(`DROP TABLE "githubImage"`);
        await queryRunner.query(`DROP TABLE "github"`);
    }

}

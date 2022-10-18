import { MigrationInterface, QueryRunner } from "typeorm";

export class changeStructure1666075196147 implements MigrationInterface {
    name = 'changeStructure1666075196147'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articleImage" DROP COLUMN "path"`);
        await queryRunner.query(`ALTER TABLE "articleImage" DROP COLUMN "originalName"`);
        await queryRunner.query(`ALTER TABLE "articleImage" DROP COLUMN "mimetype"`);
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "created"`);
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "created_by"`);
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "modified"`);
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "modified_by"`);
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "deleted_by"`);
        await queryRunner.query(`ALTER TABLE "myFile" ADD "enabled" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "myFile" ADD "size" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "articleImage" ADD "enabled" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "articleImage" ADD "createdAt" TIMESTAMP DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "articleImage" ADD "createdBy" integer`);
        await queryRunner.query(`ALTER TABLE "articleImage" ADD "modifiedAt" TIMESTAMP DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "articleImage" ADD "modifiedBy" integer`);
        await queryRunner.query(`ALTER TABLE "articleImage" ADD "deletedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "articleImage" ADD "deletedBy" integer`);
        await queryRunner.query(`ALTER TABLE "articleImage" ADD "myFileId" bigint`);
        await queryRunner.query(`ALTER TABLE "article" ADD "createdAt" TIMESTAMP DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "article" ADD "createdBy" integer`);
        await queryRunner.query(`ALTER TABLE "article" ADD "modifiedAt" TIMESTAMP DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "article" ADD "modifiedBy" integer`);
        await queryRunner.query(`ALTER TABLE "article" ADD "deletedBy" integer`);
        await queryRunner.query(`ALTER TABLE "myFile" ALTER COLUMN "createdAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "myFile" ALTER COLUMN "modifiedAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "created" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "modified" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "modified" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "created" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "modified" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "permissions" ALTER COLUMN "created" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "permissions" ALTER COLUMN "modified" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "enabled" SET DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "created" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "modified" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "created" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "modified" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "articleImage" ADD CONSTRAINT "FK_3ec530d43116eca75378699e360" FOREIGN KEY ("myFileId") REFERENCES "myFile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articleImage" DROP CONSTRAINT "FK_3ec530d43116eca75378699e360"`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "modified" SET DEFAULT '2022-10-18 04:25:06.792057'`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "created" SET DEFAULT '2022-10-18 04:25:06.792057'`);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "modified" SET DEFAULT '2022-10-18 04:25:06.792057'`);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "created" SET DEFAULT '2022-10-18 04:25:06.792057'`);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "enabled" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "permissions" ALTER COLUMN "modified" SET DEFAULT '2022-10-18 04:25:06.792057'`);
        await queryRunner.query(`ALTER TABLE "permissions" ALTER COLUMN "created" SET DEFAULT '2022-10-18 04:25:06.792057'`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "modified" SET DEFAULT '2022-10-18 04:25:06.792057'`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "created" SET DEFAULT '2022-10-18 04:25:06.792057'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "modified" SET DEFAULT '2022-10-18 04:25:06.792057'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created" SET DEFAULT '2022-10-18 04:25:06.792057'`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "modified" SET DEFAULT '2022-10-18 04:25:06.792057'`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "created" SET DEFAULT '2022-10-18 04:25:06.792057'`);
        await queryRunner.query(`ALTER TABLE "myFile" ALTER COLUMN "modifiedAt" SET DEFAULT '2022-10-18 04:25:06.792057'`);
        await queryRunner.query(`ALTER TABLE "myFile" ALTER COLUMN "createdAt" SET DEFAULT '2022-10-18 04:25:06.792057'`);
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "deletedBy"`);
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "modifiedBy"`);
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "modifiedAt"`);
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "createdBy"`);
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "articleImage" DROP COLUMN "myFileId"`);
        await queryRunner.query(`ALTER TABLE "articleImage" DROP COLUMN "deletedBy"`);
        await queryRunner.query(`ALTER TABLE "articleImage" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "articleImage" DROP COLUMN "modifiedBy"`);
        await queryRunner.query(`ALTER TABLE "articleImage" DROP COLUMN "modifiedAt"`);
        await queryRunner.query(`ALTER TABLE "articleImage" DROP COLUMN "createdBy"`);
        await queryRunner.query(`ALTER TABLE "articleImage" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "articleImage" DROP COLUMN "enabled"`);
        await queryRunner.query(`ALTER TABLE "myFile" DROP COLUMN "size"`);
        await queryRunner.query(`ALTER TABLE "myFile" DROP COLUMN "enabled"`);
        await queryRunner.query(`ALTER TABLE "article" ADD "deleted_by" integer`);
        await queryRunner.query(`ALTER TABLE "article" ADD "modified_by" integer`);
        await queryRunner.query(`ALTER TABLE "article" ADD "modified" TIMESTAMP DEFAULT '2022-10-18 04:25:06.792057'`);
        await queryRunner.query(`ALTER TABLE "article" ADD "created_by" integer`);
        await queryRunner.query(`ALTER TABLE "article" ADD "created" TIMESTAMP DEFAULT '2022-10-18 04:25:06.792057'`);
        await queryRunner.query(`ALTER TABLE "articleImage" ADD "mimetype" character varying`);
        await queryRunner.query(`ALTER TABLE "articleImage" ADD "originalName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "articleImage" ADD "path" character varying NOT NULL`);
    }

}

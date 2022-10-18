import { MigrationInterface, QueryRunner } from "typeorm";

export class myfile41666067052832 implements MigrationInterface {
    name = 'myfile41666067052832'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "myFile" RENAME COLUMN "mimetype" TO "mimeType"`);
        await queryRunner.query(`ALTER TABLE "article" ALTER COLUMN "created" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "article" ALTER COLUMN "modified" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "created" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "modified" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "modified" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "created" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "modified" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "permissions" ALTER COLUMN "created" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "permissions" ALTER COLUMN "modified" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "myFile" ALTER COLUMN "createdAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "myFile" ALTER COLUMN "modifiedAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "created" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "modified" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "enabled" SET DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "created" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "modified" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "modified" SET DEFAULT '2022-10-18 04:12:10.276661'`);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "created" SET DEFAULT '2022-10-18 04:12:10.276661'`);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "enabled" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "modified" SET DEFAULT '2022-10-18 04:12:10.276661'`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "created" SET DEFAULT '2022-10-18 04:12:10.276661'`);
        await queryRunner.query(`ALTER TABLE "myFile" ALTER COLUMN "modifiedAt" SET DEFAULT '2022-10-18 04:12:10.276661'`);
        await queryRunner.query(`ALTER TABLE "myFile" ALTER COLUMN "createdAt" SET DEFAULT '2022-10-18 04:12:10.276661'`);
        await queryRunner.query(`ALTER TABLE "permissions" ALTER COLUMN "modified" SET DEFAULT '2022-10-18 04:12:10.276661'`);
        await queryRunner.query(`ALTER TABLE "permissions" ALTER COLUMN "created" SET DEFAULT '2022-10-18 04:12:10.276661'`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "modified" SET DEFAULT '2022-10-18 04:12:10.276661'`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "created" SET DEFAULT '2022-10-18 04:12:10.276661'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "modified" SET DEFAULT '2022-10-18 04:12:10.276661'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created" SET DEFAULT '2022-10-18 04:12:10.276661'`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "modified" SET DEFAULT '2022-10-18 04:12:10.276661'`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "created" SET DEFAULT '2022-10-18 04:12:10.276661'`);
        await queryRunner.query(`ALTER TABLE "article" ALTER COLUMN "modified" SET DEFAULT '2022-10-18 04:12:10.276661'`);
        await queryRunner.query(`ALTER TABLE "article" ALTER COLUMN "created" SET DEFAULT '2022-10-18 04:12:10.276661'`);
        await queryRunner.query(`ALTER TABLE "myFile" RENAME COLUMN "mimeType" TO "mimetype"`);
    }

}

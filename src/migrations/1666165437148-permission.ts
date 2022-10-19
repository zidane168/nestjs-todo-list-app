import { MigrationInterface, QueryRunner } from "typeorm";

export class permission1666165437148 implements MigrationInterface {
    name = 'permission1666165437148'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "permissions" RENAME COLUMN "functionName" TO "controller"`);
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
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "createdAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "modifiedAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "created" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "modified" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "modified" SET DEFAULT '2022-10-18 10:26:28.380565'`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "created" SET DEFAULT '2022-10-18 10:26:28.380565'`);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "modifiedAt" SET DEFAULT '2022-10-18 10:26:28.380565'`);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "createdAt" SET DEFAULT '2022-10-18 10:26:28.380565'`);
        await queryRunner.query(`ALTER TABLE "permissions" ALTER COLUMN "modified" SET DEFAULT '2022-10-18 10:26:28.380565'`);
        await queryRunner.query(`ALTER TABLE "permissions" ALTER COLUMN "created" SET DEFAULT '2022-10-18 10:26:28.380565'`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "modified" SET DEFAULT '2022-10-18 10:26:28.380565'`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "created" SET DEFAULT '2022-10-18 10:26:28.380565'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "modified" SET DEFAULT '2022-10-18 10:26:28.380565'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created" SET DEFAULT '2022-10-18 10:26:28.380565'`);
        await queryRunner.query(`ALTER TABLE "myFile" ALTER COLUMN "modifiedAt" SET DEFAULT '2022-10-18 10:26:28.380565'`);
        await queryRunner.query(`ALTER TABLE "myFile" ALTER COLUMN "createdAt" SET DEFAULT '2022-10-18 10:26:28.380565'`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "modified" SET DEFAULT '2022-10-18 10:26:28.380565'`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "created" SET DEFAULT '2022-10-18 10:26:28.380565'`);
        await queryRunner.query(`ALTER TABLE "articleImage" ALTER COLUMN "modifiedAt" SET DEFAULT '2022-10-18 10:26:28.380565'`);
        await queryRunner.query(`ALTER TABLE "articleImage" ALTER COLUMN "createdAt" SET DEFAULT '2022-10-18 10:26:28.380565'`);
        await queryRunner.query(`ALTER TABLE "article" ALTER COLUMN "modifiedAt" SET DEFAULT '2022-10-18 10:26:28.380565'`);
        await queryRunner.query(`ALTER TABLE "article" ALTER COLUMN "createdAt" SET DEFAULT '2022-10-18 10:26:28.380565'`);
        await queryRunner.query(`ALTER TABLE "permissions" RENAME COLUMN "controller" TO "functionName"`);
    }

}

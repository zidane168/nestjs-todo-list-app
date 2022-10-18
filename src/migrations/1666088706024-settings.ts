import { MigrationInterface, QueryRunner } from "typeorm";

export class settings1666088706024 implements MigrationInterface {
    name = 'settings1666088706024'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "setting" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "setting" DROP COLUMN "created"`);
        await queryRunner.query(`ALTER TABLE "setting" DROP COLUMN "created_by"`);
        await queryRunner.query(`ALTER TABLE "setting" DROP COLUMN "modified"`);
        await queryRunner.query(`ALTER TABLE "setting" DROP COLUMN "modified_by"`);
        await queryRunner.query(`ALTER TABLE "setting" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "setting" ADD "createdAt" TIMESTAMP DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "setting" ADD "createdBy" integer`);
        await queryRunner.query(`ALTER TABLE "setting" ADD "modifiedAt" TIMESTAMP DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "setting" ADD "modifiedBy" integer`);
        await queryRunner.query(`ALTER TABLE "setting" ADD "deletedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "setting" ADD "deletedBy" integer`);
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
        await queryRunner.query(`ALTER TABLE "setting" DROP COLUMN "content"`);
        await queryRunner.query(`ALTER TABLE "setting" ADD "content" jsonb`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "setting" DROP COLUMN "content"`);
        await queryRunner.query(`ALTER TABLE "setting" ADD "content" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "modified" SET DEFAULT '2022-10-18 08:22:40.17597'`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "created" SET DEFAULT '2022-10-18 08:22:40.17597'`);
        await queryRunner.query(`ALTER TABLE "permissions" ALTER COLUMN "modified" SET DEFAULT '2022-10-18 08:22:40.17597'`);
        await queryRunner.query(`ALTER TABLE "permissions" ALTER COLUMN "created" SET DEFAULT '2022-10-18 08:22:40.17597'`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "modified" SET DEFAULT '2022-10-18 08:22:40.17597'`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "created" SET DEFAULT '2022-10-18 08:22:40.17597'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "modified" SET DEFAULT '2022-10-18 08:22:40.17597'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created" SET DEFAULT '2022-10-18 08:22:40.17597'`);
        await queryRunner.query(`ALTER TABLE "myFile" ALTER COLUMN "modifiedAt" SET DEFAULT '2022-10-18 08:22:40.17597'`);
        await queryRunner.query(`ALTER TABLE "myFile" ALTER COLUMN "createdAt" SET DEFAULT '2022-10-18 08:22:40.17597'`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "modified" SET DEFAULT '2022-10-18 08:22:40.17597'`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "created" SET DEFAULT '2022-10-18 08:22:40.17597'`);
        await queryRunner.query(`ALTER TABLE "articleImage" ALTER COLUMN "modifiedAt" SET DEFAULT '2022-10-18 08:22:40.17597'`);
        await queryRunner.query(`ALTER TABLE "articleImage" ALTER COLUMN "createdAt" SET DEFAULT '2022-10-18 08:22:40.17597'`);
        await queryRunner.query(`ALTER TABLE "article" ALTER COLUMN "modifiedAt" SET DEFAULT '2022-10-18 08:22:40.17597'`);
        await queryRunner.query(`ALTER TABLE "article" ALTER COLUMN "createdAt" SET DEFAULT '2022-10-18 08:22:40.17597'`);
        await queryRunner.query(`ALTER TABLE "setting" DROP COLUMN "deletedBy"`);
        await queryRunner.query(`ALTER TABLE "setting" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "setting" DROP COLUMN "modifiedBy"`);
        await queryRunner.query(`ALTER TABLE "setting" DROP COLUMN "modifiedAt"`);
        await queryRunner.query(`ALTER TABLE "setting" DROP COLUMN "createdBy"`);
        await queryRunner.query(`ALTER TABLE "setting" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "setting" ADD "value" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "setting" ADD "modified_by" integer`);
        await queryRunner.query(`ALTER TABLE "setting" ADD "modified" TIMESTAMP DEFAULT '2022-10-18 08:22:40.17597'`);
        await queryRunner.query(`ALTER TABLE "setting" ADD "created_by" integer`);
        await queryRunner.query(`ALTER TABLE "setting" ADD "created" TIMESTAMP DEFAULT '2022-10-18 08:22:40.17597'`);
        await queryRunner.query(`ALTER TABLE "setting" ADD "name" character varying NOT NULL`);
    }

}

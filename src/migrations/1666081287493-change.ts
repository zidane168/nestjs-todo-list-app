import { MigrationInterface, QueryRunner } from "typeorm";

export class change1666081287493 implements MigrationInterface {
    name = 'change1666081287493'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articleImage" DROP CONSTRAINT "FK_3ec530d43116eca75378699e360"`);
        await queryRunner.query(`ALTER TABLE "article" ALTER COLUMN "createdAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "article" ALTER COLUMN "modifiedAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "articleImage" ALTER COLUMN "createdAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "articleImage" ALTER COLUMN "modifiedAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "articleImage" DROP COLUMN "myFileId"`);
        await queryRunner.query(`ALTER TABLE "articleImage" ADD "myFileId" integer`);
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
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "enabled" SET DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "created" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "modified" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "modified" SET DEFAULT '2022-10-18 06:45:49.436344'`);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "created" SET DEFAULT '2022-10-18 06:45:49.436344'`);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "enabled" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "modified" SET DEFAULT '2022-10-18 06:45:49.436344'`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "created" SET DEFAULT '2022-10-18 06:45:49.436344'`);
        await queryRunner.query(`ALTER TABLE "permissions" ALTER COLUMN "modified" SET DEFAULT '2022-10-18 06:45:49.436344'`);
        await queryRunner.query(`ALTER TABLE "permissions" ALTER COLUMN "created" SET DEFAULT '2022-10-18 06:45:49.436344'`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "modified" SET DEFAULT '2022-10-18 06:45:49.436344'`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "created" SET DEFAULT '2022-10-18 06:45:49.436344'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "modified" SET DEFAULT '2022-10-18 06:45:49.436344'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created" SET DEFAULT '2022-10-18 06:45:49.436344'`);
        await queryRunner.query(`ALTER TABLE "myFile" ALTER COLUMN "modifiedAt" SET DEFAULT '2022-10-18 06:45:49.436344'`);
        await queryRunner.query(`ALTER TABLE "myFile" ALTER COLUMN "createdAt" SET DEFAULT '2022-10-18 06:45:49.436344'`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "modified" SET DEFAULT '2022-10-18 06:45:49.436344'`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "created" SET DEFAULT '2022-10-18 06:45:49.436344'`);
        await queryRunner.query(`ALTER TABLE "articleImage" DROP COLUMN "myFileId"`);
        await queryRunner.query(`ALTER TABLE "articleImage" ADD "myFileId" bigint`);
        await queryRunner.query(`ALTER TABLE "articleImage" ALTER COLUMN "modifiedAt" SET DEFAULT '2022-10-18 06:45:49.436344'`);
        await queryRunner.query(`ALTER TABLE "articleImage" ALTER COLUMN "createdAt" SET DEFAULT '2022-10-18 06:45:49.436344'`);
        await queryRunner.query(`ALTER TABLE "article" ALTER COLUMN "modifiedAt" SET DEFAULT '2022-10-18 06:45:49.436344'`);
        await queryRunner.query(`ALTER TABLE "article" ALTER COLUMN "createdAt" SET DEFAULT '2022-10-18 06:45:49.436344'`);
        await queryRunner.query(`ALTER TABLE "articleImage" ADD CONSTRAINT "FK_3ec530d43116eca75378699e360" FOREIGN KEY ("myFileId") REFERENCES "myFile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}

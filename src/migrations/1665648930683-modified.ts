import { MigrationInterface, QueryRunner } from "typeorm";

export class modified1665648930683 implements MigrationInterface {
    name = 'modified1665648930683'

    public async up(queryRunner: QueryRunner): Promise<void> {
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
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "modified" SET DEFAULT '2022-10-13 06:54:47.341749'`);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "created" SET DEFAULT '2022-10-13 06:54:47.341749'`);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "enabled" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "modified" SET DEFAULT '2022-10-13 08:12:25.839967'`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "created" SET DEFAULT '2022-10-13 08:12:25.839967'`);
        await queryRunner.query(`ALTER TABLE "permissions" ALTER COLUMN "modified" SET DEFAULT '2022-10-13 08:12:25.839967'`);
        await queryRunner.query(`ALTER TABLE "permissions" ALTER COLUMN "created" SET DEFAULT '2022-10-13 08:12:25.839967'`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "modified" SET DEFAULT '2022-10-13 08:12:25.839967'`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "created" SET DEFAULT '2022-10-13 08:12:25.839967'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "modified" SET DEFAULT '2022-10-13 08:12:25.839967'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created" SET DEFAULT '2022-10-13 08:12:25.839967'`);
    }

}

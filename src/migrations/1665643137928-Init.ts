import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1665643137928 implements MigrationInterface {
    name = 'Init1665643137928'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" BIGSERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "enabled" boolean NOT NULL DEFAULT true, "created" TIMESTAMP DEFAULT 'now()', "created_by" integer, "modified" TIMESTAMP DEFAULT 'now()', "modified_by" integer, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles" ("id" BIGSERIAL NOT NULL, "slug" character varying NOT NULL, "name" character varying NOT NULL, "enabled" boolean NOT NULL DEFAULT true, "created" TIMESTAMP DEFAULT 'now()', "created_by" integer, "modified" TIMESTAMP DEFAULT 'now()', "modified_by" integer, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "permissions" ("id" BIGSERIAL NOT NULL, "slug" character varying NOT NULL, "name" character varying NOT NULL, "method" character varying NOT NULL, "functionName" character varying NOT NULL, "created" TIMESTAMP DEFAULT 'now()', "enabled" boolean NOT NULL DEFAULT true, "created_by" integer, "modified" TIMESTAMP DEFAULT 'now()', "modified_by" integer, CONSTRAINT "PK_920331560282b8bd21bb02290df" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "post" ("id" BIGSERIAL NOT NULL, "enabled" boolean NOT NULL, "created" TIMESTAMP DEFAULT 'now()', "created_by" integer NOT NULL, "modified" TIMESTAMP DEFAULT 'now()', "modified_by" integer NOT NULL, CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "setting" ("id" BIGSERIAL NOT NULL, "name" character varying NOT NULL, "value" character varying NOT NULL, "enabled" boolean NOT NULL DEFAULT '1', "created" TIMESTAMP DEFAULT 'now()', "created_by" integer, "modified" TIMESTAMP DEFAULT 'now()', "modified_by" integer, CONSTRAINT "PK_fcb21187dc6094e24a48f677bed" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "todo" ("id" BIGSERIAL NOT NULL, "title" character varying NOT NULL, "content" character varying NOT NULL, "f_done" boolean NOT NULL, CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles_ur_users" ("rolesId" bigint NOT NULL, "usersId" bigint NOT NULL, CONSTRAINT "PK_d5cbeb73d921ec21f1ab4e60eb0" PRIMARY KEY ("rolesId", "usersId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e8c7a7c8dfa4231d77af5810f1" ON "roles_ur_users" ("rolesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_3aaf2f22159d4e8c5cb31d074c" ON "roles_ur_users" ("usersId") `);
        await queryRunner.query(`CREATE TABLE "permissions_rp_roles" ("permissionsId" bigint NOT NULL, "rolesId" bigint NOT NULL, CONSTRAINT "PK_47ae23f6ffd6e049e0f3414152a" PRIMARY KEY ("permissionsId", "rolesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_434cf886f31515e1bb3d19c66e" ON "permissions_rp_roles" ("permissionsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_da43cbb1c328cf2015a13ee05a" ON "permissions_rp_roles" ("rolesId") `);
        await queryRunner.query(`ALTER TABLE "roles_ur_users" ADD CONSTRAINT "FK_e8c7a7c8dfa4231d77af5810f16" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "roles_ur_users" ADD CONSTRAINT "FK_3aaf2f22159d4e8c5cb31d074c9" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "permissions_rp_roles" ADD CONSTRAINT "FK_434cf886f31515e1bb3d19c66e9" FOREIGN KEY ("permissionsId") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "permissions_rp_roles" ADD CONSTRAINT "FK_da43cbb1c328cf2015a13ee05ac" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "permissions_rp_roles" DROP CONSTRAINT "FK_da43cbb1c328cf2015a13ee05ac"`);
        await queryRunner.query(`ALTER TABLE "permissions_rp_roles" DROP CONSTRAINT "FK_434cf886f31515e1bb3d19c66e9"`);
        await queryRunner.query(`ALTER TABLE "roles_ur_users" DROP CONSTRAINT "FK_3aaf2f22159d4e8c5cb31d074c9"`);
        await queryRunner.query(`ALTER TABLE "roles_ur_users" DROP CONSTRAINT "FK_e8c7a7c8dfa4231d77af5810f16"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_da43cbb1c328cf2015a13ee05a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_434cf886f31515e1bb3d19c66e"`);
        await queryRunner.query(`DROP TABLE "permissions_rp_roles"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3aaf2f22159d4e8c5cb31d074c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e8c7a7c8dfa4231d77af5810f1"`);
        await queryRunner.query(`DROP TABLE "roles_ur_users"`);
        await queryRunner.query(`DROP TABLE "todo"`);
        await queryRunner.query(`DROP TABLE "setting"`);
        await queryRunner.query(`DROP TABLE "post"`);
        await queryRunner.query(`DROP TABLE "permissions"`);
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}

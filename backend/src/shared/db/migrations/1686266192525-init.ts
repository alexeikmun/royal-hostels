import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1686266192525 implements MigrationInterface {
    name = 'init1686266192525';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "first_name"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "last_name"`);
        await queryRunner.query(
            `ALTER TABLE "user" DROP COLUMN "contact_number"`,
        );
        await queryRunner.query(`ALTER TABLE "admin" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "guest" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "guest" DROP COLUMN "age"`);
        await queryRunner.query(`ALTER TABLE "guest" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "guest" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "guest" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "guest" DROP COLUMN "city"`);
        await queryRunner.query(
            `ALTER TABLE "user" ADD "name" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "password" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "phone" character varying`,
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "role" character varying NOT NULL`,
        );
        await queryRunner.query(`ALTER TABLE "user" ADD "lastLogin" TIMESTAMP`);
        await queryRunner.query(
            `ALTER TABLE "user" ADD "hashRefreshToken" character varying`,
        );
        await queryRunner.query(
            `ALTER TABLE "user" ALTER COLUMN "email" SET NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "admin" ADD CONSTRAINT "FK_e032310bcef831fb83101899b10" FOREIGN KEY ("id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "guest" ADD CONSTRAINT "FK_57689d19445de01737dbc458857" FOREIGN KEY ("id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "guest" DROP CONSTRAINT "FK_57689d19445de01737dbc458857"`,
        );
        await queryRunner.query(
            `ALTER TABLE "admin" DROP CONSTRAINT "FK_e032310bcef831fb83101899b10"`,
        );
        await queryRunner.query(
            `ALTER TABLE "user" ALTER COLUMN "email" DROP NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "user" DROP COLUMN "hashRefreshToken"`,
        );
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastLogin"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        await queryRunner.query(
            `ALTER TABLE "guest" ADD "city" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "guest" ADD "address" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "guest" ADD "phone" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "guest" ADD "email" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "guest" ADD "age" integer NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "guest" ADD "name" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "admin" ADD "name" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "contact_number" character varying`,
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "last_name" character varying`,
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "first_name" character varying NOT NULL`,
        );
    }
}

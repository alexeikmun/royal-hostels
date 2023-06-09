import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1686261919836 implements MigrationInterface {
    name = 'init1686261919836';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "property" ADD "adminId" integer`);
        await queryRunner.query(
            `ALTER TABLE "property" ADD CONSTRAINT "FK_93b826da7861915d11946bc483b" FOREIGN KEY ("adminId") REFERENCES "admin"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "property" DROP CONSTRAINT "FK_93b826da7861915d11946bc483b"`,
        );
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "adminId"`);
    }
}

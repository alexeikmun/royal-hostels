import { MigrationInterface, QueryRunner } from "typeorm";

export class init1683808656385 implements MigrationInterface {
    name = 'init1683808656385'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "property_type" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_eb483bf7f6ddf612998949edd26" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "booking_status" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_f3b521fe4729cfad477690ca29d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comment" ("id" SERIAL NOT NULL, "title" text NOT NULL, "comment" text NOT NULL, "overallRating" integer NOT NULL, CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "booking" ("id" SERIAL NOT NULL, "startDate" TIMESTAMP NOT NULL DEFAULT now(), "endDate" TIMESTAMP NOT NULL DEFAULT now(), "statusId" integer NOT NULL, "guests" integer NOT NULL, "commentId" integer, CONSTRAINT "REL_9b8f32a7aa67946d0eb89e8c09" UNIQUE ("commentId"), CONSTRAINT "PK_49171efc69702ed84c812f33540" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "room" ("id" SERIAL NOT NULL, "price" integer NOT NULL, "description" character varying NOT NULL, "name" character varying NOT NULL, "maxGuests" integer NOT NULL, "propertyId" integer NOT NULL, CONSTRAINT "PK_c6d46db005d623e691b2fbcba23" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "property" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "address" character varying NOT NULL, "city" character varying NOT NULL, "country" character varying NOT NULL, "zipcode" character varying NOT NULL, "typeId" integer NOT NULL, "image" character varying NOT NULL, "description" character varying NOT NULL, "rate" numeric(6,2) NOT NULL, "availableRooms" integer NOT NULL, "price" numeric NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d80743e6191258a5003d5843b4f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "amenity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f981de7b1a822823e5f31da10dc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "profile" ("id" SERIAL NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying, "address" character varying, "country" character varying, "city" character varying, "zipcode" character varying, "birthday" date, "contact_number" character varying, "email" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "guest" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "age" integer NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "address" character varying NOT NULL, "city" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_57689d19445de01737dbc458857" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "admin" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "isSuper" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e032310bcef831fb83101899b10" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "booking_rooms_room" ("bookingId" integer NOT NULL, "roomId" integer NOT NULL, CONSTRAINT "PK_a0b509c26a53b6c21c5d3339a97" PRIMARY KEY ("bookingId", "roomId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8f1a8045893e516c9e6a74c1cb" ON "booking_rooms_room" ("bookingId") `);
        await queryRunner.query(`CREATE INDEX "IDX_f002f6e24167ea10d48ad286b6" ON "booking_rooms_room" ("roomId") `);
        await queryRunner.query(`CREATE TABLE "room_amenities_amenity" ("roomId" integer NOT NULL, "amenityId" integer NOT NULL, CONSTRAINT "PK_9ea6107886c6596061c59874964" PRIMARY KEY ("roomId", "amenityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5bfa52967d1e4749ccdf0a1c65" ON "room_amenities_amenity" ("roomId") `);
        await queryRunner.query(`CREATE INDEX "IDX_3acd6e0d83817c14b380521af6" ON "room_amenities_amenity" ("amenityId") `);
        await queryRunner.query(`CREATE TABLE "property_amenities_amenity" ("propertyId" integer NOT NULL, "amenityId" integer NOT NULL, CONSTRAINT "PK_095b2f02026c69c97793c158a39" PRIMARY KEY ("propertyId", "amenityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d7760c08391960d305d3545527" ON "property_amenities_amenity" ("propertyId") `);
        await queryRunner.query(`CREATE INDEX "IDX_c69572a61bce15aeded2e1d6ba" ON "property_amenities_amenity" ("amenityId") `);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_2805c8cb30d54f8272c830cb488" FOREIGN KEY ("statusId") REFERENCES "booking_status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_9b8f32a7aa67946d0eb89e8c091" FOREIGN KEY ("commentId") REFERENCES "comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "room" ADD CONSTRAINT "FK_6a9adbe3db58dad30c0c63ca31d" FOREIGN KEY ("propertyId") REFERENCES "property"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "property" ADD CONSTRAINT "FK_19f06dc4d98fde06c69fe2feb6b" FOREIGN KEY ("typeId") REFERENCES "property_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking_rooms_room" ADD CONSTRAINT "FK_8f1a8045893e516c9e6a74c1cb6" FOREIGN KEY ("bookingId") REFERENCES "booking"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "booking_rooms_room" ADD CONSTRAINT "FK_f002f6e24167ea10d48ad286b6b" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "room_amenities_amenity" ADD CONSTRAINT "FK_5bfa52967d1e4749ccdf0a1c654" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "room_amenities_amenity" ADD CONSTRAINT "FK_3acd6e0d83817c14b380521af63" FOREIGN KEY ("amenityId") REFERENCES "amenity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "property_amenities_amenity" ADD CONSTRAINT "FK_d7760c08391960d305d3545527f" FOREIGN KEY ("propertyId") REFERENCES "property"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "property_amenities_amenity" ADD CONSTRAINT "FK_c69572a61bce15aeded2e1d6bad" FOREIGN KEY ("amenityId") REFERENCES "amenity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "property_amenities_amenity" DROP CONSTRAINT "FK_c69572a61bce15aeded2e1d6bad"`);
        await queryRunner.query(`ALTER TABLE "property_amenities_amenity" DROP CONSTRAINT "FK_d7760c08391960d305d3545527f"`);
        await queryRunner.query(`ALTER TABLE "room_amenities_amenity" DROP CONSTRAINT "FK_3acd6e0d83817c14b380521af63"`);
        await queryRunner.query(`ALTER TABLE "room_amenities_amenity" DROP CONSTRAINT "FK_5bfa52967d1e4749ccdf0a1c654"`);
        await queryRunner.query(`ALTER TABLE "booking_rooms_room" DROP CONSTRAINT "FK_f002f6e24167ea10d48ad286b6b"`);
        await queryRunner.query(`ALTER TABLE "booking_rooms_room" DROP CONSTRAINT "FK_8f1a8045893e516c9e6a74c1cb6"`);
        await queryRunner.query(`ALTER TABLE "property" DROP CONSTRAINT "FK_19f06dc4d98fde06c69fe2feb6b"`);
        await queryRunner.query(`ALTER TABLE "room" DROP CONSTRAINT "FK_6a9adbe3db58dad30c0c63ca31d"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_9b8f32a7aa67946d0eb89e8c091"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_2805c8cb30d54f8272c830cb488"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c69572a61bce15aeded2e1d6ba"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d7760c08391960d305d3545527"`);
        await queryRunner.query(`DROP TABLE "property_amenities_amenity"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3acd6e0d83817c14b380521af6"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5bfa52967d1e4749ccdf0a1c65"`);
        await queryRunner.query(`DROP TABLE "room_amenities_amenity"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f002f6e24167ea10d48ad286b6"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8f1a8045893e516c9e6a74c1cb"`);
        await queryRunner.query(`DROP TABLE "booking_rooms_room"`);
        await queryRunner.query(`DROP TABLE "admin"`);
        await queryRunner.query(`DROP TABLE "guest"`);
        await queryRunner.query(`DROP TABLE "profile"`);
        await queryRunner.query(`DROP TABLE "amenity"`);
        await queryRunner.query(`DROP TABLE "property"`);
        await queryRunner.query(`DROP TABLE "room"`);
        await queryRunner.query(`DROP TABLE "booking"`);
        await queryRunner.query(`DROP TABLE "comment"`);
        await queryRunner.query(`DROP TABLE "booking_status"`);
        await queryRunner.query(`DROP TABLE "property_type"`);
    }

}

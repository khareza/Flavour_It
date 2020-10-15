import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateUsersTable1602789707897 implements MigrationInterface {
    name = 'UpdateUsersTable1602789707897'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `rate` `rate` int NOT NULL DEFAULT 0");
        await queryRunner.query("ALTER TABLE `user` CHANGE `votesUp` `votesUp` int NOT NULL DEFAULT 0");
        await queryRunner.query("ALTER TABLE `user` CHANGE `votesDown` `votesDown` int NOT NULL DEFAULT 0");
        await queryRunner.query("ALTER TABLE `user` CHANGE `offersAmount` `offersAmount` int NOT NULL DEFAULT 0");
        await queryRunner.query("ALTER TABLE `user` CHANGE `finishedOffersAmount` `finishedOffersAmount` int NOT NULL DEFAULT 0");
        await queryRunner.query("ALTER TABLE `user` CHANGE `activeOffersAmount` `activeOffersAmount` int NOT NULL DEFAULT 0");
        await queryRunner.query("ALTER TABLE `user` CHANGE `ordersAmount` `ordersAmount` int NOT NULL DEFAULT 0");
        await queryRunner.query("ALTER TABLE `user` CHANGE `finishedOrdersAmount` `finishedOrdersAmount` int NOT NULL DEFAULT 0");
        await queryRunner.query("ALTER TABLE `user` CHANGE `activeOrdersAmount` `activeOrdersAmount` int NOT NULL DEFAULT 0");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `activeOrdersAmount` `activeOrdersAmount` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `finishedOrdersAmount` `finishedOrdersAmount` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `ordersAmount` `ordersAmount` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `activeOffersAmount` `activeOffersAmount` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `finishedOffersAmount` `finishedOffersAmount` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `offersAmount` `offersAmount` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `votesDown` `votesDown` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `votesUp` `votesUp` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `rate` `rate` int NOT NULL");
    }

}

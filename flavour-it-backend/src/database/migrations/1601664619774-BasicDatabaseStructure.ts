import {MigrationInterface, QueryRunner} from "typeorm";

export class BasicDatabaseStructure1601664619774 implements MigrationInterface {
    name = 'BasicDatabaseStructure1601664619774'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `base_entity` (`id` int NOT NULL AUTO_INCREMENT, `createdOn` datetime NOT NULL, `modifiedOn` datetime NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `blocked_user` (`id` int NOT NULL AUTO_INCREMENT, `createdOn` datetime NOT NULL, `modifiedOn` datetime NULL, `blockDate` datetime NOT NULL, `isActive` tinyint NOT NULL, `blockingUserId` int NULL, `blockedUserId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `dish_type` (`id` int NOT NULL AUTO_INCREMENT, `createdOn` datetime NOT NULL, `modifiedOn` datetime NULL, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `order_ingredient` (`id` int NOT NULL AUTO_INCREMENT, `createdOn` datetime NOT NULL, `modifiedOn` datetime NULL, `amount` decimal(5,2) NOT NULL, `orderId` int NULL, `ingredientId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `unit` (`id` int NOT NULL AUTO_INCREMENT, `createdOn` datetime NOT NULL, `modifiedOn` datetime NULL, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `ingredient` (`id` int NOT NULL AUTO_INCREMENT, `createdOn` datetime NOT NULL, `modifiedOn` datetime NULL, `name` varchar(255) NOT NULL, `Icon` varchar(255) NOT NULL, `unitId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `forbidden_ingredient` (`id` int NOT NULL AUTO_INCREMENT, `createdOn` datetime NOT NULL, `modifiedOn` datetime NULL, `ingredientId` int NULL, `orderId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `order_review` (`id` int NOT NULL AUTO_INCREMENT, `createdOn` datetime NOT NULL, `modifiedOn` datetime NULL, `comment` varchar(255) NOT NULL, `vote` varchar(255) NOT NULL, `creationDate` datetime NOT NULL, `status` int NOT NULL, `asExcepted` decimal(2,2) NOT NULL, `cooperation` decimal(2,2) NOT NULL, `executionSpeed` decimal(2,2) NOT NULL, `reviewerId` int NULL, `orderId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `order` (`id` int NOT NULL AUTO_INCREMENT, `createdOn` datetime NOT NULL, `modifiedOn` datetime NULL, `photo` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `price` decimal(5,2) NOT NULL, `finishDate` datetime NOT NULL, `createDate` datetime NOT NULL, `time` varchar(255) NOT NULL, `cookingTimeMinutes` int NOT NULL, `status` int NOT NULL, `principalId` int NULL, `cuisineId` int NULL, `dishTypeId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `cuisine` (`id` int NOT NULL AUTO_INCREMENT, `createdOn` datetime NOT NULL, `modifiedOn` datetime NULL, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `offer_ingredient` (`id` int NOT NULL AUTO_INCREMENT, `createdOn` datetime NOT NULL, `modifiedOn` datetime NULL, `amount` decimal(5,2) NOT NULL, `offerId` int NULL, `ingredientId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `offer_review` (`id` int NOT NULL AUTO_INCREMENT, `createdOn` datetime NOT NULL, `modifiedOn` datetime NULL, `comment` varchar(255) NOT NULL, `vote` varchar(255) NOT NULL, `creationDate` datetime NOT NULL, `status` int NOT NULL, `workingConditions` decimal(2,2) NOT NULL, `cooperation` decimal(2,2) NOT NULL, `asDescribed` decimal(2,2) NOT NULL, `reviewerId` int NULL, `offerId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `reason` (`id` int NOT NULL AUTO_INCREMENT, `createdOn` datetime NOT NULL, `modifiedOn` datetime NULL, `reason` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `rejection_reason` (`id` int NOT NULL AUTO_INCREMENT, `createdOn` datetime NOT NULL, `modifiedOn` datetime NULL, `comment` varchar(255) NOT NULL, `rejectionDate` datetime NOT NULL, `offerId` int NULL, `reasonId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `offer` (`id` int NOT NULL AUTO_INCREMENT, `createdOn` datetime NOT NULL, `modifiedOn` datetime NULL, `photo` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `price` decimal(5,2) NOT NULL, `createDate` datetime NOT NULL, `blockDate` datetime NOT NULL, `cookingTimeMinutes` varchar(255) NOT NULL, `status` int NOT NULL, `contractorId` int NULL, `cuisineId` int NULL, `dishTypeId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `createdOn` datetime NOT NULL, `modifiedOn` datetime NULL, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `birthDate` datetime NOT NULL, `country` varchar(255) NOT NULL, `city` varchar(255) NOT NULL, `houseApartmentNumber` varchar(255) NOT NULL, `phone` varchar(255) NOT NULL, `joinDate` datetime NOT NULL, `avatarUrl` varchar(255) NOT NULL, `rate` int NOT NULL, `votesUp` int NOT NULL, `votesDown` int NOT NULL, `offersAmount` int NOT NULL, `finishedOffersAmount` int NOT NULL, `activeOffersAmount` int NOT NULL, `ordersAmount` int NOT NULL, `finishedOrdersAmount` int NOT NULL, `activeOrdersAmount` int NOT NULL, `resetPasswordHash` varchar(255) NOT NULL, `activationHash` varchar(255) NOT NULL, `isActive` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user_allergy` (`id` int NOT NULL AUTO_INCREMENT, `createdOn` datetime NOT NULL, `modifiedOn` datetime NULL, `userId` int NULL, `allergyId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `allergy` (`id` int NOT NULL AUTO_INCREMENT, `createdOn` datetime NOT NULL, `modifiedOn` datetime NULL, `name` varchar(255) NOT NULL, `icon` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `blocked_user` ADD CONSTRAINT `FK_02972d5482050ddce5b947ff27a` FOREIGN KEY (`blockingUserId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `blocked_user` ADD CONSTRAINT `FK_59bb7b96bfedcdc96f346dbf8c9` FOREIGN KEY (`blockedUserId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `order_ingredient` ADD CONSTRAINT `FK_f9bcc9f99cb63203eeafc28a3a0` FOREIGN KEY (`orderId`) REFERENCES `order`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `order_ingredient` ADD CONSTRAINT `FK_1b6d440339a46f3bc6cfcdd8a1d` FOREIGN KEY (`ingredientId`) REFERENCES `ingredient`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `ingredient` ADD CONSTRAINT `FK_5c15451ee870cfe7294ee1b5946` FOREIGN KEY (`unitId`) REFERENCES `unit`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `forbidden_ingredient` ADD CONSTRAINT `FK_04530e6ca17258846c331a63569` FOREIGN KEY (`ingredientId`) REFERENCES `ingredient`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `forbidden_ingredient` ADD CONSTRAINT `FK_f640b332c6bafe7de576dc0c53e` FOREIGN KEY (`orderId`) REFERENCES `order`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `order_review` ADD CONSTRAINT `FK_173970ba4b9a79d05c9f976b07a` FOREIGN KEY (`reviewerId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `order_review` ADD CONSTRAINT `FK_d2b82986ad264b7f66d2cc649b6` FOREIGN KEY (`orderId`) REFERENCES `order`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `order` ADD CONSTRAINT `FK_5afe4859073ffb2e2ff263b89c8` FOREIGN KEY (`principalId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `order` ADD CONSTRAINT `FK_856dbf8d8c552bdbd780d646e0b` FOREIGN KEY (`cuisineId`) REFERENCES `cuisine`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `order` ADD CONSTRAINT `FK_3de05db7cd64890b9f28955205b` FOREIGN KEY (`dishTypeId`) REFERENCES `dish_type`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `offer_ingredient` ADD CONSTRAINT `FK_44e77a8019347fa08d50eb28d5e` FOREIGN KEY (`offerId`) REFERENCES `offer`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `offer_ingredient` ADD CONSTRAINT `FK_dd2017f8a22a384e8ef5f83d2c8` FOREIGN KEY (`ingredientId`) REFERENCES `ingredient`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `offer_review` ADD CONSTRAINT `FK_3c295597d7f8056888347d2e828` FOREIGN KEY (`reviewerId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `offer_review` ADD CONSTRAINT `FK_331647d9754a30eb26397aeadcc` FOREIGN KEY (`offerId`) REFERENCES `offer`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `rejection_reason` ADD CONSTRAINT `FK_4a7fa434cf9305c108b33b6500d` FOREIGN KEY (`offerId`) REFERENCES `offer`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `rejection_reason` ADD CONSTRAINT `FK_e4690d743647ae1931d066a5ccf` FOREIGN KEY (`reasonId`) REFERENCES `reason`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `offer` ADD CONSTRAINT `FK_8f6a39a4bc98664496290a0254c` FOREIGN KEY (`contractorId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `offer` ADD CONSTRAINT `FK_5a75f78777821450734ef5a8691` FOREIGN KEY (`cuisineId`) REFERENCES `cuisine`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `offer` ADD CONSTRAINT `FK_6136ec9469fdd2bfc0806e8ff57` FOREIGN KEY (`dishTypeId`) REFERENCES `dish_type`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user_allergy` ADD CONSTRAINT `FK_6f1c0b114d1e95f22100cd04b3f` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user_allergy` ADD CONSTRAINT `FK_24955ded0fe98a0b8e1a5d29f9b` FOREIGN KEY (`allergyId`) REFERENCES `allergy`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_allergy` DROP FOREIGN KEY `FK_24955ded0fe98a0b8e1a5d29f9b`");
        await queryRunner.query("ALTER TABLE `user_allergy` DROP FOREIGN KEY `FK_6f1c0b114d1e95f22100cd04b3f`");
        await queryRunner.query("ALTER TABLE `offer` DROP FOREIGN KEY `FK_6136ec9469fdd2bfc0806e8ff57`");
        await queryRunner.query("ALTER TABLE `offer` DROP FOREIGN KEY `FK_5a75f78777821450734ef5a8691`");
        await queryRunner.query("ALTER TABLE `offer` DROP FOREIGN KEY `FK_8f6a39a4bc98664496290a0254c`");
        await queryRunner.query("ALTER TABLE `rejection_reason` DROP FOREIGN KEY `FK_e4690d743647ae1931d066a5ccf`");
        await queryRunner.query("ALTER TABLE `rejection_reason` DROP FOREIGN KEY `FK_4a7fa434cf9305c108b33b6500d`");
        await queryRunner.query("ALTER TABLE `offer_review` DROP FOREIGN KEY `FK_331647d9754a30eb26397aeadcc`");
        await queryRunner.query("ALTER TABLE `offer_review` DROP FOREIGN KEY `FK_3c295597d7f8056888347d2e828`");
        await queryRunner.query("ALTER TABLE `offer_ingredient` DROP FOREIGN KEY `FK_dd2017f8a22a384e8ef5f83d2c8`");
        await queryRunner.query("ALTER TABLE `offer_ingredient` DROP FOREIGN KEY `FK_44e77a8019347fa08d50eb28d5e`");
        await queryRunner.query("ALTER TABLE `order` DROP FOREIGN KEY `FK_3de05db7cd64890b9f28955205b`");
        await queryRunner.query("ALTER TABLE `order` DROP FOREIGN KEY `FK_856dbf8d8c552bdbd780d646e0b`");
        await queryRunner.query("ALTER TABLE `order` DROP FOREIGN KEY `FK_5afe4859073ffb2e2ff263b89c8`");
        await queryRunner.query("ALTER TABLE `order_review` DROP FOREIGN KEY `FK_d2b82986ad264b7f66d2cc649b6`");
        await queryRunner.query("ALTER TABLE `order_review` DROP FOREIGN KEY `FK_173970ba4b9a79d05c9f976b07a`");
        await queryRunner.query("ALTER TABLE `forbidden_ingredient` DROP FOREIGN KEY `FK_f640b332c6bafe7de576dc0c53e`");
        await queryRunner.query("ALTER TABLE `forbidden_ingredient` DROP FOREIGN KEY `FK_04530e6ca17258846c331a63569`");
        await queryRunner.query("ALTER TABLE `ingredient` DROP FOREIGN KEY `FK_5c15451ee870cfe7294ee1b5946`");
        await queryRunner.query("ALTER TABLE `order_ingredient` DROP FOREIGN KEY `FK_1b6d440339a46f3bc6cfcdd8a1d`");
        await queryRunner.query("ALTER TABLE `order_ingredient` DROP FOREIGN KEY `FK_f9bcc9f99cb63203eeafc28a3a0`");
        await queryRunner.query("ALTER TABLE `blocked_user` DROP FOREIGN KEY `FK_59bb7b96bfedcdc96f346dbf8c9`");
        await queryRunner.query("ALTER TABLE `blocked_user` DROP FOREIGN KEY `FK_02972d5482050ddce5b947ff27a`");
        await queryRunner.query("DROP TABLE `allergy`");
        await queryRunner.query("DROP TABLE `user_allergy`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `offer`");
        await queryRunner.query("DROP TABLE `rejection_reason`");
        await queryRunner.query("DROP TABLE `reason`");
        await queryRunner.query("DROP TABLE `offer_review`");
        await queryRunner.query("DROP TABLE `offer_ingredient`");
        await queryRunner.query("DROP TABLE `cuisine`");
        await queryRunner.query("DROP TABLE `order`");
        await queryRunner.query("DROP TABLE `order_review`");
        await queryRunner.query("DROP TABLE `forbidden_ingredient`");
        await queryRunner.query("DROP TABLE `ingredient`");
        await queryRunner.query("DROP TABLE `unit`");
        await queryRunner.query("DROP TABLE `order_ingredient`");
        await queryRunner.query("DROP TABLE `dish_type`");
        await queryRunner.query("DROP TABLE `blocked_user`");
        await queryRunner.query("DROP TABLE `base_entity`");
    }

}

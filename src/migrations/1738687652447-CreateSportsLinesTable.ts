import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateSportsLinesTable1738687652447 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        console.log('Running CreateUsersTable migration...');
        await queryRunner.createTable(new Table({
            name: 'sports_lines',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'line_id',
                    type: 'int',
                    isNullable: false,
                    isUnique: true                    
                },
                {
                    name: 'game_id',
                    type: 'int',
                    isNullable: false,
                    isUnique: false
                },
                {
                    name: 'player_name',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'team',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'line',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'market',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'league',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'is_available',
                    type: 'boolean',
                    isNullable: false,
                    default: true
                },                
                {
                    name: 'grade',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'completed',
                    type: 'boolean',
                    isNullable: false,
                    default: false
                },
                {
                    name: 'game_date',
                    type: 'date',
                    isNullable: false,
                },
                {
                    name: 'start_time',
                    type: 'timestamp',
                    isNullable: false,
                },
                {
                    name: 'createdAt',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updatedAt',
                    type: 'timestamp',
                    default: 'now()',
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('sports_lines')
    }

}

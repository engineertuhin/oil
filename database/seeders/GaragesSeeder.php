<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GaragesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $garage = [
            ['name' => 'CNG'],
            ['name' => 'Bus'],
            ['name' => 'Truck'],
            ['name' => 'Motors '],
            ['name' => 'Private Care'],
        ];

        DB::table('zones')->insert($garage);
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FleetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $garage = [
            ['name' => 'Trucks'],
            ['name' => 'Vans'],
            ['name' => 'Cars'],
            ['name' => 'Buses'],
            ['name' => 'Motorcycles'],
        ];

        DB::table('fleet_types')->insert($garage);
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClientHierarchiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $levels = [
            ['label' => 1, 'name' => 'Club Distributer', 'is_active' => 1],
            ['label' => 2, 'name' => 'Distributer', 'is_active' => 1],
            ['label' => 3, 'name' => 'Sub Distributer', 'is_active' => 1],
            ['label' => 4, 'name' => 'Retailer', 'is_active' => 1],
            ['label' => 5, 'name' => 'Garage', 'is_active' => 1],
            ['label' => 6, 'name' => 'Fleet', 'is_active' => 1],
            ['label' => 7, 'name' => 'Mechanic', 'is_active' => 1],
        ];

        DB::table('client_hierarchies')->insert($levels);
    }
}

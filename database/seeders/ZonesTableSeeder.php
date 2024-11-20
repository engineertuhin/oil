<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ZonesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $zones = [
            ['name' => 'Industrial Zone', 'code' => 'IZ', 'is_active' => 1],
            ['name' => 'Rangpur Zone', 'code' => 'RZ', 'is_active' => 1],
            ['name' => 'Dhaka Zone-1', 'code' => 'DZ1', 'is_active' => 1],
            ['name' => 'Dhaka Zone-2', 'code' => 'DZ2', 'is_active' => 1],
            ['name' => 'Dhaka Zone-3', 'code' => 'DZ3', 'is_active' => 1],
            ['name' => 'Tangail Zone', 'code' => 'TZ', 'is_active' => 1],
            ['name' => 'Sylhet Zone', 'code' => 'SZ', 'is_active' => 1],
            ['name' => 'Comilla Zone', 'code' => 'CZ', 'is_active' => 1],
            ['name' => 'Khulna Zone', 'code' => 'KZ', 'is_active' => 1],
            ['name' => 'Barisal Zone', 'code' => 'BZ', 'is_active' => 1],
            ['name' => 'Jessore Zone', 'code' => 'JZ', 'is_active' => 1],
            ['name' => 'Chattogram Zone', 'code' => 'CTZ', 'is_active' => 1],
            ['name' => 'Bogura Zone', 'code' => 'BZG', 'is_active' => 1],
        ];

        DB::table('zones')->insert($zones);
    }
}

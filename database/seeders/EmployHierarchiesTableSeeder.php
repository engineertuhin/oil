<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EmployHierarchiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $hierarchies = [
            ['label' => 1, 'name' => 'Deputy General Manager (DGM)', 'is_active' => 1],
            ['label' => 2, 'name' => 'Head of Sales (HOS)', 'is_active' => 1],
            ['label' => 3, 'name' => 'Asstt Manager', 'is_active' => 1],
            ['label' => 4, 'name' => 'Area Manager', 'is_active' => 1],
            ['label' => 5, 'name' => 'Jr. Manager', 'is_active' => 1],
            ['label' => 6, 'name' => 'Sr. Executive', 'is_active' => 1],
            ['label' => 7, 'name' => 'Executive', 'is_active' => 1],
            ['label' => 8, 'name' => 'Jr. Executive', 'is_active' => 1],
        ];

        DB::table('employ_hierarchies')->insert($hierarchies);
    }
}

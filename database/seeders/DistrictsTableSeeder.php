<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DistrictsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $districts = [
      
            ['zone_id' => 1, 'name' => 'Gazipur', 'code' => 'GZP','is_active' => 1],
            ['zone_id' => 1, 'name' => 'Narayanganj', 'code' => 'NRG','is_active' => 1],

           
            ['zone_id' => 2, 'name' => 'Dhaka', 'code' => 'DHA','is_active' => 1],
            ['zone_id' => 2, 'name' => 'Munshiganj', 'code' => 'MNS','is_active' => 1],

         
            ['zone_id' => 3, 'name' => 'Rangpur', 'code' => 'RNG','is_active' => 1],
            ['zone_id' => 3, 'name' => 'Dinajpur', 'code' => 'DJP','is_active' => 1],

          
            ['zone_id' => 4, 'name' => 'Manikganj', 'code' => 'MNK','is_active' => 1],
            ['zone_id' => 4, 'name' => 'Faridpur', 'code' => 'FRD','is_active' => 1],

           
            ['zone_id' => 5, 'name' => 'Tangail', 'code' => 'TGL','is_active' => 1],
            ['zone_id' => 5, 'name' => 'Jamalpur', 'code' => 'JMP','is_active' => 1],

          
            ['zone_id' => 6, 'name' => 'Sylhet', 'code' => 'SYL','is_active' => 1],
            ['zone_id' => 6, 'name' => 'Moulvibazar', 'code' => 'MLV','is_active' => 1],

          
            ['zone_id' => 7, 'name' => 'Comilla', 'code' => 'CML','is_active' => 1],
            ['zone_id' => 7, 'name' => 'Brahmanbaria', 'code' => 'BRB','is_active' => 1],

          
            ['zone_id' => 8, 'name' => 'Khulna', 'code' => 'KHL','is_active' => 1],
            ['zone_id' => 8, 'name' => 'Bagerhat', 'code' => 'BGT','is_active' => 1],

       
            ['zone_id' => 9, 'name' => 'Barisal', 'code' => 'BSL','is_active' => 1],
            ['zone_id' => 9, 'name' => 'Patuakhali', 'code' => 'PTK','is_active' => 1],

          
            ['zone_id' => 10, 'name' => 'Jessore', 'code' => 'JSR','is_active' => 1],
            ['zone_id' => 10, 'name' => 'Narail', 'code' => 'NRL','is_active' => 1],

          
            ['zone_id' => 11, 'name' => 'Shariatpur', 'code' => 'SRP','is_active' => 1],
            ['zone_id' => 11, 'name' => 'Madaripur', 'code' => 'MDR','is_active' => 1],

           
            ['zone_id' => 12, 'name' => 'Chattogram', 'code' => 'CTG','is_active' => 1],
            ['zone_id' => 12, 'name' => 'Cox\'s Bazar', 'code' => 'CXB','is_active' => 1],

        
            ['zone_id' => 13, 'name' => 'Bogura', 'code' => 'BGR','is_active' => 1],
            ['zone_id' => 13, 'name' => 'Joypurhat', 'code' => 'JPH','is_active' => 1],
        ];

        DB::table('districts')->insert($districts);
    }
}

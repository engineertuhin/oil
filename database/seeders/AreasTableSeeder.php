<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AreasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $upazilas = [
            // Dhaka District
            ['district_id' => 1, 'name' => 'Dhamrai', 'code' => 'DMR', 'is_active' => 1],
            ['district_id' => 1, 'name' => 'Keraniganj', 'code' => 'KRN', 'is_active' => 1],
            ['district_id' => 1, 'name' => 'Nawabganj', 'code' => 'NWB', 'is_active' => 1],
            ['district_id' => 1, 'name' => 'Savar', 'code' => 'SVR', 'is_active' => 1],

            // Gazipur District
            ['district_id' => 2, 'name' => 'Kapasia', 'code' => 'KPS', 'is_active' => 1],
            ['district_id' => 2, 'name' => 'Kaliganj', 'code' => 'KLJ', 'is_active' => 1],
            ['district_id' => 2, 'name' => 'Sreepur', 'code' => 'SRP', 'is_active' => 1],
            ['district_id' => 2, 'name' => 'Tongi', 'code' => 'TNG', 'is_active' => 1],

            // Narayanganj District
            ['district_id' => 3, 'name' => 'Sonargaon', 'code' => 'SNG', 'is_active' => 1],
            ['district_id' => 3, 'name' => 'Rupganj', 'code' => 'RPG', 'is_active' => 1],
            ['district_id' => 3, 'name' => 'Araihazar', 'code' => 'ARH', 'is_active' => 1],
            ['district_id' => 3, 'name' => 'Bandar', 'code' => 'BNR', 'is_active' => 1],
            ['district_id' => 3, 'name' => 'Narayanganj Sadar', 'code' => 'NRS', 'is_active' => 1],

            // Chattogram District
            ['district_id' => 4, 'name' => 'Anwara', 'code' => 'ANW', 'is_active' => 1],
            ['district_id' => 4, 'name' => 'Banshkhali', 'code' => 'BSK', 'is_active' => 1],
            ['district_id' => 4, 'name' => 'Boalkhali', 'code' => 'BLK', 'is_active' => 1],
            ['district_id' => 4, 'name' => 'Chandanaish', 'code' => 'CNS', 'is_active' => 1],
            ['district_id' => 4, 'name' => 'Fatikchhari', 'code' => 'FTC', 'is_active' => 1],
            ['district_id' => 4, 'name' => 'Hathazari', 'code' => 'HTZ', 'is_active' => 1],
            ['district_id' => 4, 'name' => 'Lohagara', 'code' => 'LGR', 'is_active' => 1],
            ['district_id' => 4, 'name' => 'Mirsharai', 'code' => 'MRS', 'is_active' => 1],
            ['district_id' => 4, 'name' => 'Patiya', 'code' => 'PTY', 'is_active' => 1],
            ['district_id' => 4, 'name' => 'Rangunia', 'code' => 'RNG', 'is_active' => 1],
            ['district_id' => 4, 'name' => 'Raozan', 'code' => 'RZN', 'is_active' => 1],
            ['district_id' => 4, 'name' => 'Sandwip', 'code' => 'SDW', 'is_active' => 1],
            ['district_id' => 4, 'name' => 'Satkania', 'code' => 'STK', 'is_active' => 1],
            ['district_id' => 4, 'name' => 'Sitakunda', 'code' => 'STC', 'is_active' => 1],

            // Sylhet District
            ['district_id' => 5, 'name' => 'Beanibazar', 'code' => 'BNB', 'is_active' => 1],
            ['district_id' => 5, 'name' => 'Golapganj', 'code' => 'GLP', 'is_active' => 1],
            ['district_id' => 5, 'name' => 'Jaintiapur', 'code' => 'JNT', 'is_active' => 1],
            ['district_id' => 5, 'name' => 'Sylhet Sadar', 'code' => 'SLS', 'is_active' => 1],
            ['district_id' => 5, 'name' => 'Kanaighat', 'code' => 'KNG', 'is_active' => 1],
            ['district_id' => 5, 'name' => 'Zakiganj', 'code' => 'ZKG', 'is_active' => 1],
            ['district_id' => 5, 'name' => 'Companiganj', 'code' => 'CPG', 'is_active' => 1],

            // Barisal District
            ['district_id' => 6, 'name' => 'Bakerganj', 'code' => 'BKG', 'is_active' => 1],
            ['district_id' => 6, 'name' => 'Banaripara', 'code' => 'BNR', 'is_active' => 1],
            ['district_id' => 6, 'name' => 'Barisal Sadar', 'code' => 'BRS', 'is_active' => 1],
            ['district_id' => 6, 'name' => 'Gournadi', 'code' => 'GRN', 'is_active' => 1],
            ['district_id' => 6, 'name' => 'Hizla', 'code' => 'HZL', 'is_active' => 1],
            ['district_id' => 6, 'name' => 'Mehendiganj', 'code' => 'MHD', 'is_active' => 1],
            ['district_id' => 6, 'name' => 'Muladi', 'code' => 'MLD', 'is_active' => 1],
            ['district_id' => 6, 'name' => 'Wazirpur', 'code' => 'WZR', 'is_active' => 1],

            // Rajshahi District
            ['district_id' => 8, 'name' => 'Bagha', 'code' => 'BGA', 'is_active' => 1],
            ['district_id' => 8, 'name' => 'Charghat', 'code' => 'CHR', 'is_active' => 1],
            ['district_id' => 8, 'name' => 'Durgapur', 'code' => 'DGP', 'is_active' => 1],
            ['district_id' => 8, 'name' => 'Godagari', 'code' => 'GDG', 'is_active' => 1],
            ['district_id' => 8, 'name' => 'Mohanpur', 'code' => 'MHP', 'is_active' => 1],
            ['district_id' => 8, 'name' => 'Paba', 'code' => 'PBA', 'is_active' => 1],


            // Rangpur District
            ['district_id' => 9, 'name' => 'Badarganj', 'code' => 'BDR', 'is_active' => 1],
            ['district_id' => 9, 'name' => 'Gangachara', 'code' => 'GNC', 'is_active' => 1],
            ['district_id' => 9, 'name' => 'Kaunia', 'code' => 'KNA', 'is_active' => 1],
            ['district_id' => 9, 'name' => 'Rangpur Sadar', 'code' => 'RGS', 'is_active' => 1],
            ['district_id' => 9, 'name' => 'Mithapukur', 'code' => 'MTP', 'is_active' => 1],
            ['district_id' => 9, 'name' => 'Pirgachha', 'code' => 'PRG', 'is_active' => 1],
            ['district_id' => 9, 'name' => 'Pirgaj', 'code' => 'PRJ', 'is_active' => 1],
            ['district_id' => 9, 'name' => 'Taraganj', 'code' => 'TRG', 'is_active' => 1],

            // Mymensingh District
            ['district_id' => 10, 'name' => 'Bhaluka', 'code' => 'BHL', 'is_active' => 1],
            ['district_id' => 10, 'name' => 'Gafargaon', 'code' => 'GFG', 'is_active' => 1],
            ['district_id' => 10, 'name' => 'Haluaghat', 'code' => 'HLG', 'is_active' => 1],
            ['district_id' => 10, 'name' => 'Ishwarganj', 'code' => 'ISH', 'is_active' => 1],
            ['district_id' => 10, 'name' => 'Mymensingh Sadar', 'code' => 'MYM', 'is_active' => 1],
            ['district_id' => 10, 'name' => 'Nandail', 'code' => 'NDL', 'is_active' => 1],
            ['district_id' => 10, 'name' => 'Phulpur', 'code' => 'PHP', 'is_active' => 1],
            ['district_id' => 10, 'name' => 'Trishal', 'code' => 'TRL', 'is_active' => 1],

            // Cumilla District
            ['district_id' => 11, 'name' => 'Barura', 'code' => 'BRR', 'is_active' => 1],
            ['district_id' => 11, 'name' => 'Brahmanpara', 'code' => 'BRP', 'is_active' => 1],
            ['district_id' => 11, 'name' => 'Burichong', 'code' => 'BRC', 'is_active' => 1],
            ['district_id' => 11, 'name' => 'Chandina', 'code' => 'CDN', 'is_active' => 1],
            ['district_id' => 11, 'name' => 'Daudkandi', 'code' => 'DDK', 'is_active' => 1],
            ['district_id' => 11, 'name' => 'Debidwar', 'code' => 'DBD', 'is_active' => 1],
            ['district_id' => 11, 'name' => 'Homna', 'code' => 'HMN', 'is_active' => 1],
            ['district_id' => 11, 'name' => 'Laksam', 'code' => 'LKS', 'is_active' => 1],
            ['district_id' => 11, 'name' => 'Muradnagar', 'code' => 'MRD', 'is_active' => 1],
            ['district_id' => 11, 'name' => 'Meghna', 'code' => 'MGN', 'is_active' => 1],
            ['district_id' => 11, 'name' => 'Monohorgonj', 'code' => 'MNH', 'is_active' => 1],
            ['district_id' => 11, 'name' => 'Cumilla Sadar', 'code' => 'CMS', 'is_active' => 1],
            ['district_id' => 11, 'name' => 'Titas', 'code' => 'TTS', 'is_active' => 1],

            // Khagrachhari District
            ['district_id' => 12, 'name' => 'Dighinala', 'code' => 'DGL', 'is_active' => 1],
            ['district_id' => 12, 'name' => 'Lakshmichhari', 'code' => 'LKH', 'is_active' => 1],
            ['district_id' => 12, 'name' => 'Mahalchhari', 'code' => 'MHC', 'is_active' => 1],
            ['district_id' => 12, 'name' => 'Manikchhari', 'code' => 'MKC', 'is_active' => 1],
            ['district_id' => 12, 'name' => 'Matiranga', 'code' => 'MTR', 'is_active' => 1],
            ['district_id' => 12, 'name' => 'Panchhari', 'code' => 'PNC', 'is_active' => 1],
            ['district_id' => 12, 'name' => 'Ramgarh', 'code' => 'RMG', 'is_active' => 1],
            ['district_id' => 12, 'name' => 'Khagrachhari Sadar', 'code' => 'KHS', 'is_active' => 1],

            // Dinajpur District
            ['district_id' => 13, 'name' => 'Birampur', 'code' => 'BRP', 'is_active' => 1],
            ['district_id' => 13, 'name' => 'Birganj', 'code' => 'BRG', 'is_active' => 1],
            ['district_id' => 13, 'name' => 'Biral', 'code' => 'BRL', 'is_active' => 1],
            ['district_id' => 13, 'name' => 'Bochaganj', 'code' => 'BCG', 'is_active' => 1],
            ['district_id' => 13, 'name' => 'Chirirbandar', 'code' => 'CHB', 'is_active' => 1],
            ['district_id' => 13, 'name' => 'Dinajpur Sadar', 'code' => 'DNS', 'is_active' => 1],
            ['district_id' => 13, 'name' => 'Ghoraghat', 'code' => 'GRH', 'is_active' => 1],
            ['district_id' => 13, 'name' => 'Hakimpur', 'code' => 'HKP', 'is_active' => 1],
            ['district_id' => 13, 'name' => 'Kaharole', 'code' => 'KHR', 'is_active' => 1],
            ['district_id' => 13, 'name' => 'Nawabganj', 'code' => 'NWB', 'is_active' => 1],
            ['district_id' => 13, 'name' => 'Parbatipur', 'code' => 'PBT', 'is_active' => 1],
        ];





        DB::table('areas')->insert($upazilas);
    }
}

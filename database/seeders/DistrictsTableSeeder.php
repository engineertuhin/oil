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
            ['name' => 'Bagerhat', 'code' => 'BGH'],
            ['name' => 'Bandarban', 'code' => 'BDB'],
            ['name' => 'Barguna', 'code' => 'BRG'],
            ['name' => 'Barishal', 'code' => 'BAR'],
            ['name' => 'Bhola', 'code' => 'BHL'],
            ['name' => 'Bogra', 'code' => 'BGR'],
            ['name' => 'Brahmanbaria', 'code' => 'BBA'],
            ['name' => 'Chandpur', 'code' => 'CDP'],
            ['name' => 'Chattogram', 'code' => 'CTG'],
            ['name' => 'Chuadanga', 'code' => 'CHD'],
            ['name' => 'Cox’s Bazar', 'code' => 'CXB'],
            ['name' => 'Cumilla', 'code' => 'CML'],
            ['name' => 'Dhaka', 'code' => 'DHK'],
            ['name' => 'Dinajpur', 'code' => 'DJP'],
            ['name' => 'Faridpur', 'code' => 'FRD'],
            ['name' => 'Feni', 'code' => 'FNI'],
            ['name' => 'Gaibandha', 'code' => 'GBD'],
            ['name' => 'Gazipur', 'code' => 'GZR'],
            ['name' => 'Gopalganj', 'code' => 'GPL'],
            ['name' => 'Habiganj', 'code' => 'HBG'],
            ['name' => 'Jamalpur', 'code' => 'JMP'],
            ['name' => 'Jashore', 'code' => 'JSR'],
            ['name' => 'Jhalokati', 'code' => 'JLK'],
            ['name' => 'Jhenaidah', 'code' => 'JND'],
            ['name' => 'Joypurhat', 'code' => 'JPT'],
            ['name' => 'Khagrachari', 'code' => 'KGR'],
            ['name' => 'Khulna', 'code' => 'KHU'],
            ['name' => 'Kishoreganj', 'code' => 'KIS'],
            ['name' => 'Kurigram', 'code' => 'KRG'],
            ['name' => 'Kushtia', 'code' => 'KUS'],
            ['name' => 'Lakshmipur', 'code' => 'LKM'],
            ['name' => 'Lalmonirhat', 'code' => 'LLM'],
            ['name' => 'Madaripur', 'code' => 'MDR'],
            ['name' => 'Magura', 'code' => 'MGR'],
            ['name' => 'Manikganj', 'code' => 'MNK'],
            ['name' => 'Meherpur', 'code' => 'MHP'],
            ['name' => 'Moulvibazar', 'code' => 'MLV'],
            ['name' => 'Munshiganj', 'code' => 'MSG'],
            ['name' => 'Mymensingh', 'code' => 'MYM'],
            ['name' => 'Naogaon', 'code' => 'NGN'],
            ['name' => 'Narail', 'code' => 'NRL'],
            ['name' => 'Narayanganj', 'code' => 'NYG'],
            ['name' => 'Narsingdi', 'code' => 'NSD'],
            ['name' => 'Natore', 'code' => 'NTR'],
            ['name' => 'Netrokona', 'code' => 'NTK'],
            ['name' => 'Nilphamari', 'code' => 'NLP'],
            ['name' => 'Noakhali', 'code' => 'NOK'],
            ['name' => 'Pabna', 'code' => 'PAB'],
            ['name' => 'Panchagarh', 'code' => 'PNC'],
            ['name' => 'Patuakhali', 'code' => 'PTK'],
            ['name' => 'Pirojpur', 'code' => 'PRJ'],
            ['name' => 'Rajbari', 'code' => 'RJB'],
            ['name' => 'Rajshahi', 'code' => 'RAJ'],
            ['name' => 'Rangamati', 'code' => 'RMT'],
            ['name' => 'Rangpur', 'code' => 'RAN'],
            ['name' => 'Satkhira', 'code' => 'SAT'],
            ['name' => 'Shariatpur', 'code' => 'SRT'],
            ['name' => 'Sherpur', 'code' => 'SHP'],
            ['name' => 'Sirajganj', 'code' => 'SRJ'],
            ['name' => 'Sunamganj', 'code' => 'SMG'],
            ['name' => 'Sylhet', 'code' => 'SYL'],
            ['name' => 'Tangail', 'code' => 'TGL'],
            ['name' => 'Thakurgaon', 'code' => 'THK'],
        ];


        DB::table('districts')->insert($districts);
    }
}

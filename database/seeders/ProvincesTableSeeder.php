<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Province;
use Illuminate\Support\Facades\Http;

class ProvincesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // fetch rest api
        $response= Http::withHeaders([
            'key' =>config('rajaongkir.api_key')
        ])->get('https://api.rajaongkir.com/starter/province');

        foreach ($response['rajaongkir']['results'] as $province) {
            Province::create([
                'id' => $province['province_id'],
                'name' => $province['province']
            ]);
        }
    }
}

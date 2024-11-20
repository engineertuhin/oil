<?php

namespace App\Http\Controllers\Report;

use App\Http\Controllers\Controller;
use App\Models\Designations;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ReportController extends Controller
{
   public function organography()
   {

      $data = Designations::select('d2.*', DB::raw('COUNT(user_areas.id) as area_count')) // Count the number of user_areas
      ->join('designations as d2', 'designations.district_id', '=', 'd2.district_id')
      ->join('user_areas', 'd2.user_id', '=', 'user_areas.user_id') // Join with user_areas to count them
      ->groupBy('d2.id', 'd2.district_id') // Group by d2.id and d2.district_id
      ->with(['user.areas', 'zone']) // Eager load user areas and zone
      ->orderBy('d2.level', 'ASC') // Order by level
      ->get()
      ->groupBy('district_id'); // Group the data by district_id
  

  return Inertia::render('Report/organographyReport',compact('data'));
  
  
}
}
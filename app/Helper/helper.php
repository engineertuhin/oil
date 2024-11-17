<?php



if (!function_exists("filterRequest")) {
    function filterRequest(array $data = [])
    {
        return  request()->except('proengsoft_jsvalidation', '_token', '_method','save','save_exit', ...$data);
    }
}
<?php



if (!function_exists("filterRequest")) {
    function filterRequest(array $data = [])
    {
        return  request()->except('proengsoft_jsvalidation', '_token', '_method', 'save', 'save_exit', ...$data);
    }
}




if (!function_exists("gender")) {
    function gender()
    {
        return  ['Male', 'Female'];
    }
}
if (!function_exists("designation")) {
    function designation()
    {
        return  ['DGM', 'HOS', 'Are Manager', 'Sr JR Executive'];
    }
}

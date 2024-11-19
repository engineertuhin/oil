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
if (!function_exists("clientDesignation")) {
    function clientDesignation()
    {
        return  ['Client', 'Retailer'];
    }
}


if (!function_exists("fileWithDataProcess")) {
    function fileWithDataProcess($data, $oldName = false, $column = 'image')
    {

        $collect = collect($data);
        if (isset($collect[$column]) && is_file($collect[$column])) {
            $imagePath = $collect[$column];
            $imageName = $imagePath->getClientOriginalName();
            $imageExtension = $imagePath->getClientOriginalExtension();
            $hashedName = md5($imageName);
            $hashedImageName = $hashedName . '.' . $imageExtension;
            $encrypted = $hashedImageName;
            $imagePath->move(public_path('images'), $encrypted);
            $prepared = $collect->except($column)->merge([$column => $encrypted]);
            if ($oldName) {
                if (file_exists('images/' . $oldName)) {
                    unlink('images/' . $oldName);
                }
            }
        } else {
            $prepared = $collect->except($column);
        }

        if (isset($collect[$column])  && empty($collect[$column]) &&  $oldName) {
            if ($oldName) {
                if (file_exists('images/' . $oldName)) {
                    unlink('images/' . $oldName);
                }
            }
        }

        return $prepared;
    }
}

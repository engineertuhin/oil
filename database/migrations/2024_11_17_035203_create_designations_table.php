<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('designations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('district_id')->nullable()->comment('nullable');
            $table->unsignedBigInteger('upazila_id')->nullable()->comment('nullable');
            $table->unsignedBigInteger('area_id')->nullable()->comment('nullable');
            $table->unsignedBigInteger('user_id')->nullable()->comment('nullable');
            $table->string('title');
            $table->integer('level');
            $table->boolean('is_active')->default(1)->comment('0: inactive, 1: active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('designations');
    }
};

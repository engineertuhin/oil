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
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('district_id')->nullable()->comment('nullable');
            $table->unsignedBigInteger('upazila_id')->nullable()->comment('nullable');
            $table->unsignedBigInteger('area_id')->nullable()->comment('nullable');
            $table->integer('nid')->nullable();
            $table->date('date_of_birth')->nullable();
            $table->string('gender')->nullable();
            $table->date('join_date')->nullable();
            $table->string('designation');
            $table->string('code')->nullable();
            $table->integer('level')->nullable();
            $table->boolean('is_active')->default(1)->comment('0: inactive, 1: active');
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
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

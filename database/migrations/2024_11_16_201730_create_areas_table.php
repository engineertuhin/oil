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
        Schema::create('areas', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('district_id');
            $table->string('name');
            $table->string('code');
            $table->boolean('is_active')->default(0);
            $table->timestamps();
            $table->foreign('district_id')
            ->references('id') 
            ->on('districts')
            ->onDelete('cascade'); 
        });

    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('areas');
    }
};

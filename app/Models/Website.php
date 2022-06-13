<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Orchid\Attachment\Attachable;
use Orchid\Filters\Filterable;
use Orchid\Screen\AsSource;
use Orchid\Attachment\Models\Attachment;

class Website extends Model
{
    use AsSource, Filterable, Attachable;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'slug',
        'link',
        'images',

    ];

// One-to-Many (with foreign id)
public function image()
{
    return $this->hasOne(Attachment::class, 'id', 'image')->withDefault();
}
public function show($value){
   return "<img src='$value' style='width:100px;' />";
}
}

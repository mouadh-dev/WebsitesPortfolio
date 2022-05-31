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
        'link',
        'featured_image_id',
    ];

    // One-to-Many (with foreign id)
    public function hero()
    {
        return $this->hasOne(Attachment::class, 'id', 'featured_image_id')->withDefault();
    }

}

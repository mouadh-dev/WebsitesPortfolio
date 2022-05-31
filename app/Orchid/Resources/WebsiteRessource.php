<?php

namespace App\Orchid\Resources;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Orchid\Attachment\Models\Attachment;
use Orchid\Crud\Resource;
use Orchid\Screen\Actions\ModalToggle;
use Orchid\Screen\Exceptions\FieldRequiredAttributeException;
use Orchid\Screen\Fields\Cropper;
use Orchid\Screen\TD;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Fields\Picture;
use Orchid\Screen\Fields\Upload;
use Orchid\Screen\Sight;

class WebsiteRessource extends Resource
{

    /**
     * The model the resource corresponds to.
     *
     * @var string
     */
    public static $model = \App\Models\Website::class;

    /**
     * Get the fields displayed by the resource.
     *
     * @return array
     */


    private $website;

    public function __construct(Request $request)
    {
        $this->website =  (static::$model)::find($request->id);
    }
    public function fields(): array
    {

        return [
            Input::make('title')
        ->title('Title')
        ->placeholder('Enter title here')->required(),

        Input::make('link')
        ->title('Link')
        ->placeholder('Enter link here'),
        Picture::make('images'),
    ];
    }

    /**
     * Get the columns displayed by the resource.
     *
     * @return TD[]
     */
    public function columns(): array
    {

        return [
            TD::make('id'),
            TD::make('title'),
            TD::make('link'),
            TD::make('images')->render(function ($model) {
                return $model->show($model->images);
            }),
            TD::make('created_at', 'Date of creation')
                ->render(function ($model) {
                    return $model->created_at->toDateTimeString();
                }),

            TD::make('updated_at', 'Update date')
                ->render(function ($model) {
                    return $model->updated_at->toDateTimeString();
                }),

        ];
    }

    /**
     * Get the sights displayed by the resource.
     *
     * @return Sight[]
     */
    public function legend(): array
    {
        return [
            Sight::make('id'),
        Sight::make('title'),
        Sight::make('link'),
        Sight::make('images')->render(function ($model) {
            return $model->show($model->images);
        }),
        ];
    }

    /**
     * Get the filters available for the resource.
     *
     * @return array
     */
    public function filters(): array
    {
        return [];
    }


}

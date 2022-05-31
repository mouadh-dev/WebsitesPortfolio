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
use Orchid\Screen\Fields\Quill;
use Orchid\Screen\Fields\Relation;
use Orchid\Screen\Fields\TextArea;
use Orchid\Screen\Fields\Upload;
use Orchid\Screen\Sight;
use Orchid\Support\Facades\Layout;

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
        ->placeholder('Enter link here')->required(),
            Cropper::make('image')
                ->title('image')
                ->width(500)
                ->height(300)
                ->horizontal()->required()
                ,

                // Upload::make('attachment')
                // //->groups('photo')
                // ->maxFiles(10)
                // ->parallelUploads(2)
                // ->maxFileSize(0.5)
                // ->acceptedFiles('image/*')
                // ->media()
                // ->value("attachment")
            // ->value(function ($website) {dd ($website) ;return $website->attachment();})

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

            TD::make('image')->render(function ($website) {

                if ($website->id) {
                    return "<img src='{$website->image}' />";
                }
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
            Sight::make('image')->render(function ($website) {

                if ($website->id) {
                    return "<img src='{$website->image}' />";
                }
            })

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


    /**
     * Get the validation rules that apply to save/update.
     *
     * @return array
     */
    public function rules(Model $model): array
    {
        return [
            // 'slug' => [
            //     'required',
            //     Rule::unique(self::$model, 'slug')->ignore($model),
            // ],
        ];
    }

    /**
     * Get the resource should be displayed in the navigation
     *
     * @return bool
     */
    public static function displayInNavigation(): bool
    {
        return true;
    }

    /**
     * Get relationships that should be eager loaded when performing an index query.
     *
     * @return array
     */
    public function with(): array
    {
        return ["image", "attachment"];
    }

    public function attributes(): array
    {
        return [];
    }


    /**
     * Get the number of models to return per page
     *
     * @return int
     */
    public static function perPage(): int
    {
        return 10;
    }

    /**
     * Get the permission key for the resource.
     *
     * @return string|null
     */
    // public static function permission(): ?string
    // {
    //     return "manage.posts";
    // }

    /**
     * Indicates whether should check for modifications
     * between viewing and updating a resource.
     *
     * @return  bool
     */
    public static function trafficCop(): bool
    {
        return true;
    }

    /**
     * @throws \Throwable
     */

    public static function onSave($request, $model)
    {


        $data = $request->all();
        dd($request->all());
        $images = $data["attachment"];
        $image = $data["image"];
        unset($data["attachment"]);
        unset($data["image"]);

         if (!$image) {
            throw  ValidationException::withMessages(["Please upload or choose a featured image "]);
         }

        $data["user_id"] = $request->user()->id;
        $data["image_id"] = $image ?? $images[0];


        $model->forceFill($data)->save();

        if (isset($images[0]) && $images[0] != "undefined") {
            $model->attachment()->sync($images);
        }
    }
}

<?php

abstract class AjaxRequestHandler
{
    public function handle(array $params)
    {
        return [
            'contentText' => 'This is my simple popup',
            'popupName' => $params['popupName']
        ];
    }
}

class HttpRequestHandler extends AjaxRequestHandler
{
    public function handle(array $params)
    {
        return json_encode(parent::handle($params));
    }
}

$handler = new HttpRequestHandler();
echo $handler->handle($_POST);

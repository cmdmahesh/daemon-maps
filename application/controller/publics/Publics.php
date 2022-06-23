<?php
namespace Ncode\Maps\controller\publics;
class Publics {
    private static $object = null;
    public static function instance() {
        if(is_null(self::$object)) {
            self::$object = new self;
        }
        return self::$object;
    }

    public function init(  ) {
        // shortcode service to render the map and function service at global scope
    }
}
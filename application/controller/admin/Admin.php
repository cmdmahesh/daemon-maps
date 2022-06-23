<?php
namespace Ncode\Maps\controller\admin;
class Admin {
    private static $object = null;
    public static function instance() {
        if(is_null(self::$object)) {
            self::$object = new self;
        }
        return self::$object;
    }

    public function init(  ) {        
        add_action( 'add_meta_boxes', array( $this, 'add_meta_box' ) );
        add_action( 'save_post', array( $this, 'save_meta') );
    }

    public function add_meta_box($post_type) {
        if ($post_type==='maps') {
            add_meta_box(
                'daemon_maps_meta',
                __( 'Configurations', 'daemon-maps' ),
                array( $this,'daemon_maps_meta'),
                $post_type,
                'advanced',
                'high'
            );
        }
    }

    public function daemon_maps_meta() {
        global $post;

        $zoom = (empty($post)?'3':get_post_meta($post->ID,'_zoom',true));
        $lat = (empty($post)?'0':get_post_meta($post->ID,'_lat',true));
        $lng = (empty($post)?'0':get_post_meta($post->ID,'_lng',true));

        wp_enqueue_script('daemon_maps', constant('NCODE_MAPS_URL').'assets/js/build/index.js',['jquery','wp-components'],time(),true);
        wp_localize_script('daemon_maps','daemon_maps',array(
            'ajax_url'=>admin_url('admin-ajax.php'),
            '_zoom'=> (empty($zoom)?'3':$zoom),
            '_lat'=> $lat,
            '_lng'=> $lng 
        ));
        wp_enqueue_script('google_maps', 'https://maps.googleapis.com/maps/api/js?&callback=daemond_map_init&libraries=places,drawing',['jquery'],time(),true);

        wp_enqueue_style('daemon_maps', constant('NCODE_MAPS_URL').'assets/js/build/index.css', array(),time(),'all');
        echo "<div class='daemon_maps_meta_container' id='daemon_maps_meta_container'></div>";
    }

    public function save_meta() {

    }
}
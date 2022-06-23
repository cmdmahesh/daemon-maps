<?php
/**
 * Plugin Name: Daemon Maps
 * Version: 1.0
 * Text-Domain: daemon-maps
 */

defined("NCODE_MAPS_DIR") || define("NCODE_MAPS_DIR", trailingslashit( plugin_dir_path(__FILE__)  ) );
defined("NCODE_MAPS_URL") || define("NCODE_MAPS_URL", trailingslashit( plugin_dir_url(__FILE__)  ) );

if(file_exists(constant("NCODE_MAPS_DIR").'vendor/autoload.php')) {
    require_once(constant("NCODE_MAPS_DIR").'vendor/autoload.php');
}

class NCODE_DAEMON_MAPS{
    private static $object = null;
    public static function instance() {
        if(is_null(self::$object)) {
            self::$object = new self;
        }
        return self::$object;
    }

    public function init(  ) {
        //register custom post type maps
        add_action('init',array($this,'register_post_type_maps'));        
        //add_action('carbon_fields_register_fields',array($this,'register_admin_fields'));

        if(wp_doing_ajax()) {
            // ajax service (AJAX Request)
        }  else {
            if(is_admin(  )) {                
                // admin service (Backend)
                \Ncode\Maps\controller\admin\Admin::instance()->init();
            } else {
                // publics service (Frontend)
                \Ncode\Maps\controller\publics\Publics::instance()->init();
            }
        }
    }

    public function register_admin_fields() {        
        \Carbon_Fields\Container::make( 'post_meta', 'Custom Data' )
        ->where( 'post_type', '=', 'maps' )
        ->add_fields( array(
            \Carbon_Fields\Field::make( 'map', 'daemon_map_container', 'Location' )
                /* ->set_position( 37.423156, -122.084917, 14 ) */,
            //\Carbon_Fields\Field::make( 'sidebar', 'crb_custom_sidebar' ),
            \Carbon_Fields\Field::make( 'media_gallery', 'crb_photo' ),
        ));
    }

    public function register_post_type_maps() {

        $labels = array(
            'name'                  => _x( 'Maps', 'Map type general name', 'daemon-maps' ),
            'singular_name'         => _x( 'Map', 'Map type singular name', 'daemon-maps' ),
            'menu_name'             => _x( 'Maps', 'Admin Menu text', 'daemon-maps' ),
            'name_admin_bar'        => _x( 'Map', 'Add New on Toolbar', 'daemon-maps' ),
            'add_new'               => __( 'Add New', 'daemon-maps' ),
            'add_new_item'          => __( 'Add New Map', 'daemon-maps' ),
            'new_item'              => __( 'New Map', 'daemon-maps' ),
            'edit_item'             => __( 'Edit Map', 'daemon-maps' ),
            'view_item'             => __( 'View Map', 'daemon-maps' ),
            'all_items'             => __( 'All Maps', 'daemon-maps' ),
            'search_items'          => __( 'Search Maps', 'daemon-maps' ),
            'parent_item_colon'     => __( 'Parent Maps:', 'daemon-maps' ),
            'not_found'             => __( 'No maps found.', 'daemon-maps' ),
            'not_found_in_trash'    => __( 'No maps found in Trash.', 'daemon-maps' ),
            'featured_image'        => _x( 'Map Cover Image', 'Overrides the “Featured Image” phrase for this post type. Added in 4.3', 'daemon-maps' ),
            'set_featured_image'    => _x( 'Set cover image', 'Overrides the “Set featured image” phrase for this post type. Added in 4.3', 'daemon-maps' ),
            'remove_featured_image' => _x( 'Remove cover image', 'Overrides the “Remove featured image” phrase for this post type. Added in 4.3', 'daemon-maps' ),
            'use_featured_image'    => _x( 'Use as cover image', 'Overrides the “Use as featured image” phrase for this post type. Added in 4.3', 'daemon-maps' ),
            'archives'              => _x( 'Maps archives', 'The post type archive label used in nav menus. Default “Post Archives”. Added in 4.4', 'daemon-maps' ),
            'insert_into_item'      => _x( 'Insert into Map', 'Overrides the “Insert into post”/”Insert into page” phrase (used when inserting media into a post). Added in 4.4', 'daemon-maps' ),
            'uploaded_to_this_item' => _x( 'Uploaded to this Map', 'Overrides the “Uploaded to this post”/”Uploaded to this page” phrase (used when viewing media attached to a post). Added in 4.4', 'daemon-maps' ),
            'filter_items_list'     => _x( 'Filter maps list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'daemon-maps' ),
            'items_list_navigation' => _x( 'Maps list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'daemon-maps' ),
            'items_list'            => _x( 'Maps list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'daemon-maps' ),
        );  

        register_post_type( 'maps',            
            array(
                'labels' => $labels,
                'public' => true,
                'has_archive' => true,
                'rewrite' => array('slug' => 'maps'),
                'show_in_rest' => true,
                'menu_icon'=>'dashicons-location-alt',
                'supports'=>array( 'title'),
            )
        );
        \flush_rewrite_rules(true);
        /* <span class="dashicons dashicons-location-alt"></span> */
    }

    public function activate() {

    }

    public function deactivate() {

    }

    public static function uninstall() {

    }
}

add_action('plugins_loaded',function(){
    //\Carbon_Fields\Carbon_Fields::boot();
    NCODE_DAEMON_MAPS::instance()->init();
});

register_activation_hook(__FILE__,[NCODE_DAEMON_MAPS::instance(),'activate']);
register_deactivation_hook(__FILE__,[NCODE_DAEMON_MAPS::instance(),'deactivate']);
register_uninstall_hook(__FILE__,'NCODE_DAEMON_MAPS::uninstall');

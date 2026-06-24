<?php 
// enqueue editor styles
function hhh_theme_styles_scripts() {
	wp_enqueue_style( 'styles', get_stylesheet_uri() );
    wp_enqueue_style( 'block-styles', get_stylesheet_directory_uri()."/src/blocks.css" );
}
add_action( 'wp_enqueue_scripts', 'hhh_theme_styles_scripts' );

// Rekisteröidään kustom lohkot
function hhh_register_blocks() {
    register_block_type(
        get_theme_file_path( 'blocks/logo-otsikko/block.json' )
    );
    register_block_type(
        get_theme_file_path( 'blocks/palvelut/block.json' )
    );
    register_block_type(
        get_theme_file_path( 'blocks/palvelu/block.json' )
    );
    register_block_type(
        get_theme_file_path( 'blocks/logot/block.json' )
    );
    register_block_type(
        get_theme_file_path( 'blocks/logo/block.json' )
    );
    register_block_type(
        get_theme_file_path( 'blocks/etusivun-hero/block.json' )
    );
    register_block_type(
        get_theme_file_path( 'blocks/ikoninosto/block.json' )
    );
}
add_action( 'init', 'hhh_register_blocks' );

add_action('admin_head', 'hhh_admin_styles');
function hhh_admin_styles() {
  echo '<style>
    .editor-visual-editor.edit-post-visual-editor.is-iframed{
      background: #fff;
    } 
  </style>';
}

// Lisätään tuki täydelle leveydelle
add_action( 'after_setup_theme', function() {
    add_theme_support( 'align-wide' );
} );

// Paragraph lohkon tyylit
function hhh_register_block_styles() {
    register_block_style(
        'core/paragraph',
        array(
            'name'  => 'phone',
            'label' => __('Puhelinnumero', 'mytheme'),
        )
    );
    register_block_style(
        'core/paragraph',
        array(
            'name'  => 'email',
            'label' => __('Sähköpostiosoite', 'mytheme'),
        )
    );
    register_block_style(
        'core/paragraph',
        array(
            'name'  => 'maps',
            'label' => __('Osoite', 'mytheme'),
        )
    );
}
add_action('init', 'hhh_register_block_styles');

// Fontawesome
function hhh_enqueue_fontawesome() {
    wp_enqueue_style(
        'font-awesome',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css',
        array(),
        '6.7.2'
    );
}
add_action( 'wp_enqueue_scripts', 'hhh_enqueue_fontawesome' );
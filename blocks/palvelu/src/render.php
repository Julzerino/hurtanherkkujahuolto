<?php
$post_id = $attributes['postId'] ?? 0;

if (!$post_id) {
	return '';
}

$title = get_the_title($post_id);
$link  = get_permalink($post_id);
$image = get_the_post_thumbnail_url($post_id, 'large');
?>

<a class="single-palvelu" href="<?php echo esc_url($link); ?>">
	<?php if ($image): ?>
		<img src="<?php echo esc_url($image); ?>" alt="">
	<?php endif; ?>
	<div class="single-palvelu-overlay"></div>

	<span><?php echo esc_html($title); ?></span>
</a>
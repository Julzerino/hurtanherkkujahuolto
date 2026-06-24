import { useBlockProps } from '@wordpress/block-editor';
import { InnerBlocks } from '@wordpress/block-editor';

export default function save() {
	return (
		<div className="palvelut-container">
			<InnerBlocks.Content />
		</div>
	);
}

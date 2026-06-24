import { useBlockProps } from '@wordpress/block-editor';
import { InnerBlocks } from '@wordpress/block-editor';

export default function save() {
	return (
		<div className="logot-container">
			<InnerBlocks.Content />
		</div>
	);
}

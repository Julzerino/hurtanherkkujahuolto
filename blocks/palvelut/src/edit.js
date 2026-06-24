
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import { InnerBlocks } from '@wordpress/block-editor';

export default function Edit() {
	return (
		<div className="palvelut-container">
			<InnerBlocks
				allowedBlocks={['create-block/palvelu']}
				orientation="horizontal"
				renderAppender={InnerBlocks.ButtonBlockAppender}
			/>
		</div>
	);
}
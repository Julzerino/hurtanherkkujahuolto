import { useSelect } from '@wordpress/data';
import { ComboboxControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const pages = useSelect((select) => {
		return select('core').getEntityRecords('postType', 'page');
	}, []);

	return (
		<ComboboxControl
			label="Valitse Palvelu"
			value={attributes.postId}
			options={(pages || []).map((p) => ({
				value: p.id,
				label: p.title.rendered,
			}))}
			onChange={(postId) => {
				setAttributes({ postId: Number(postId) });
			}}
		/>
	);
}
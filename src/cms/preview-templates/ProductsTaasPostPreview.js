import React from 'react';
import PropTypes from 'prop-types';
import { ProductsTaasPostTemplate } from '../../templates/productstaas-post';

const ProductsTaasPostPreview = ({ entry, widgetFor }) => {
	const tags = entry.getIn([ 'data', 'tags' ]);
	return (
		<ProductsTaasPostTemplate
			content={widgetFor('body')}
			description={entry.getIn([ 'data', 'description' ])}
			tags={tags && tags.toJS()}
			title={entry.getIn([ 'data', 'title' ])}
		/>
	);
};

ProductsTaasPostPreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	widgetFor: PropTypes.func
};

export default ProductsTaasPostPreview;

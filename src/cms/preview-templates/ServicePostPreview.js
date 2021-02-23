import React from 'react';
import PropTypes from 'prop-types';
import { ServicePostTemplate } from '../../templates/service-post';

const ServicePostPreview = ({ entry, widgetFor }) => {
	const tags = entry.getIn([ 'data', 'tags' ]);
	return (
		<ServicePostTemplate
			content={widgetFor('body')}
			description={entry.getIn([ 'data', 'description' ])}
			tags={tags && tags.toJS()}
			title={entry.getIn([ 'data', 'title' ])}
		/>
	);
};

ServicePostPreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	widgetFor: PropTypes.func
};

export default ServicePostPreview;

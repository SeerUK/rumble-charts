'use strict';

const React = require('react'),
    PropTypes = require('prop-types'),
    _ = require('./_'),
    helpers = require('./helpers');

/**
 * Transforms `series` data according chosen `method`.
 *
 * As a wrapper it takes `series` obtained from its parent and gives it to its children.
 *
 * @example ../docs/examples/Transform.md
 */
const Transform = function (props) {
    const {className, layerWidth, layerHeight, scaleX, scaleY} = props;

    const newProps = helpers.transform(props, props.method);

    const children = helpers.proxyChildren(
        props.children,
        newProps,
        {
            layerWidth: _.isUndefined(newProps.layerWidth) ? layerWidth : newProps.layerWidth,
            layerHeight: _.isUndefined(newProps.layerHeight) ? layerHeight : newProps.layerHeight,
            scaleX: _.isUndefined(newProps.scaleX) ? scaleX : newProps.scaleX,
            scaleY: _.isUndefined(newProps.scaleY) ? scaleY : newProps.scaleY
        }
    );

    return <g className={className}>
        {children}
    </g>;
};

Transform.displayName = 'Transform';

Transform.propTypes = {
    className: PropTypes.string,
    series: PropTypes.array,
    /**
     * Possible string values: "`stack`", "`stackNormalized`", "`sort`", "`unstack`",
     * "`transpose`", "`rotate`", "`reverse`". Also you can define it as function that
     * receives props as an object, transforms it somehow and returns changes props as an object.
     */
    method: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.array
    ]),
    scaleX: PropTypes.object,
    scaleY: PropTypes.object,
    layerWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    layerHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    children: PropTypes.node
};

module.exports = Transform;

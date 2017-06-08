'use strict';

const React = require('react'),
    PropTypes = require('prop-types'),
    Dots = require('./Dots'),
    helpers = require('./helpers');

/**
 * Renders labels for dots. Internally it's just a wrapper for [`<Dots>`](#Dots) component
 * with `dotType="circle"`.
 *
 * @example ../docs/examples/Labels.md
 */
const Labels = React.createClass({

    displayName: 'Labels',

    propTypes: {
        className: PropTypes.string,
        colors: PropTypes.oneOfType([
            PropTypes.oneOf(['category10', 'category20', 'category20b', 'category20c']),
            PropTypes.arrayOf(PropTypes.string),
            PropTypes.func
        ]),
        opacity: PropTypes.number,
        style: PropTypes.object,

        label: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        labelFormat: PropTypes.func,
        labelAttributes: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

        seriesVisible: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
        seriesAttributes: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
        seriesStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

        groupStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

        dotVisible: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
        dotAttributes: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
        dotStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

        seriesIndex: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.array,
            PropTypes.func
        ]),
        series: helpers.propTypes.series
    },

    getDefaultProps() {
        return {
            colors: 'category20',
            circleRadius: 4,
            ellipseRadiusX: 6,
            ellipseRadiusY: 4,
            seriesVisible: true,
            dotVisible: true
        };
    },

    render() {
        return <Dots {...this.props} dotType='labels'/>;
    }

});

module.exports = Labels;

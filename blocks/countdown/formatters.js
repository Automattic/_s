const formatters = [
    { formatter: 'Y', className: 'year',        name: 'Years left' },
    { formatter: 'm', className: 'month',       name: 'Months left' },
    { formatter: 'n', className: 'monthdays',   name: 'Days left until the next complete month' },
    { formatter: 'w', className: 'weeks',       name: 'Weeks left' },
    { formatter: 'W', className: 'monthweeks',  name: 'Weeks left until the next complete month' },
    { formatter: 'd', className: 'days',        name: 'Days left (taking away weeks)' },
    { formatter: 'H', className: 'hours',       name: 'Hours left' },
    { formatter: 'M', className: 'minutes',     name: 'Minutes left' },
    { formatter: 'S', className: 'seconds',     name: 'Seconds left' },
    { formatter: 'D', className: 'totdays',     name: 'Total count of days till the end' },
    { formatter: 'I', className: 'tothours',    name: 'Total count of hours thill the end' },
    { formatter: 'N', className: 'totminutes',  name: 'Total count of minutes till the end' },
    { formatter: 'T', className: 'totseconds',  name: 'Total count of seconds till the end' }
];

const formatters_blank = lodash.cloneDeepWith( formatters, function(value, key, object) {
    if ( 'formatter' == key ) {
        return '-' + value;
    }
    
    if ( 'name' == key ) {
        return value + ' (blank-padded)';
    }
});

export default lodash.concat( formatters, formatters_blank );
module.exports = function SortMiddleware(req, res, next) {
    res.locals._sort = {
        enabled: false,
        type: 'default'
    };

    if(req.query.hasOwnProperty('_sort')) {
        res.locals._sort.enabled = true;
        res.locals._sort.type = res.query.type;
        res.locals._sort.column = res.query.column;

    }

    next()
}
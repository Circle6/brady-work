var connection = require('../db/connection');
// console.log("connection:", connection)

var getMice = function (callback) {
    connection.connection.execute({
        sqlText: 'SELECT * FROM PARTS_DB.PARTS_SCHEMA.PARTS_TBL;',
        complete: function (err, stmt, rows) {
            if (err) {
                console.error('Failed to execute statement due to the following error: ' + err.message);
            } else {
                callback(rows);
            }
        }
    });
}

const processWeight = (rows, dimensions) => {
    // console.log(rows)
    return rows
        .map(row => {
            // console.log('ROW', row);
            return {
                ...row,
                WEIGHT: row.WEIGHT.split('|')
            }
        })
        .filter(row => {
            let passes = false;
            row.WEIGHT.forEach(weight => {
                if (weight < dimensions.weight.max && weight > dimensions.weight.min) passes = true
            })
            return passes;
        })
}

/**
 * 
 * @param {*} params will be JSON object with { length: {min: number, max: number}; width: {min: number, max: number}; height: {min: number, max: number}; weight: {min: number, max: number}; }
 * @param {*} callback 
 */
var getMiceByDimensions = function (params, callback) {
    console.log('INSIDE SERVICE. PARAMS ARE: ', params)
    connection.connection.execute({
        sqlText: `
            SELECT * 
            FROM PARTS_DB.PARTS_SCHEMA.PARTS_TBL 
            WHERE LENGTH BETWEEN :1 and :2
                AND WIDTH BETWEEN :3 and :4
                AND HEIGHT BETWEEN :5 and :6;
        `,
        binds: [params.length.min, params.length.max, params.width.min, params.width.max, params.height.min, params.height.max],
        complete: function (err, stmt, rows) {
            if (err) {
                console.error('Failed to execute statement due to the following error: ' + err.message);
            } else {
                console.log(stmt.getSqlText());
                callback(processWeight(rows, params));
            }
        }
    });
}

exports.getMice = getMice;
exports.getMiceByDimensions = getMiceByDimensions;
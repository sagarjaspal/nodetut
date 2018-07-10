module.exports = (x, y, cb) => {
    if (x <= 0 && y <= 0) {
        setTimeout(() => cb(new Error("length and breadth must both be greater than 0")
            , null), 2000);
    }

    else {
        setTimeout(() => cb(null, {
            area: () => x * y,
            perimeter: () => 2 * (x + y)
        }), 2000);
    }
};

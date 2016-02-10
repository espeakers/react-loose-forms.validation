module.exports = function(value) {
    try {
        var valDate = new Date(value);
    } catch(e) {
        return "Enter a valid date";
    }

    if (isNaN(valDate.getDate())) {
        return "Enter a valid date";
    }

    return true;
};
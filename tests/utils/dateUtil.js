// Date utilities 


/**
 * Get a date any number of days in past or future
 * Will retunr format MM/DD/YYYY
 * Example of a week ago
 * var mydate = datePlusMinusDays(-7);
 * @param days Number of days to add (can be negitive)
 * @returns Date requested in MM/DD/YYYY
 */
export function datePlusMinusDays(days){
    // Get Date plus days like 5 or -5
    var d = new Date();
    d.setDate(d.getDate() + days);
    console.log('Date: ' + d);
    // Format to MM/DD/YYYY
    var formatDate = dateFormatMMDDYYYY(d);
    return formatDate;
}

export function dateFormatMMDDYYYY(date){
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    const formattedDate = mm + '/' + dd + '/' + yyyy;
    return formattedDate
}
var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calculateLateFee(daysLate) {
            return daysLate * 0.25;
        }
        Fees.calculateLateFee = calculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function maxBooksAllowed(age) {
        return age < 12 ? 3 : 10;
    }
    Utility.maxBooksAllowed = maxBooksAllowed;
})(Utility || (Utility = {}));
/// <reference path path="utility-functions.ts" />
var result1 = Utility.maxBooksAllowed(30);
console.log(result1);
var util = Utility.Fees;
var result2 = util.calculateLateFee(3);
console.log(result2);

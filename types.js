var a = 5;
var b = 'a';
var c = true;
var d;
var e = [1, 2, 3, 4, 5];
var f = [1, 2, 3];
var g = [1, "a", true];
var k = ["a", 5, false]; //* buna tuple denir.
var creditPayment = 0;
var hPayment = 1;
var eftPayment = 2;
var Payment;
(function (Payment) {
    Payment[Payment["credit"] = 0] = "credit";
    Payment[Payment["h"] = 1] = "h";
    Payment[Payment["eft"] = 2] = "eft";
})(Payment || (Payment = {}));
;
var credit = Payment.credit; // 0
var h = Payment.h; // 1
var eft = Payment.eft; // 2

(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["nearest-periodic-value"], factory);
  } else if (typeof exports !== "undefined") {
    var nearestPeriodicValue = require("nearest-periodic-value");
    module.exports = factory(nearestPeriodicValue);
  } else {
    root.skippedPeriodicValues = factory(root.nearestPeriodicValue);
  }
})(this, function (nearestPeriodicValue) {
  "use strict";

  var skippedPeriodicValues = function (start, distance, value, period) {
    var nearest = nearestPeriodicValue(start, value, period);

    // Make the algorithm inclusive. If the distance is 0 and we're
    // on the nearest value, then we don't count it.
    if (nearest === start && distance === 0) {
      return 0;
    }

    // If our nearest value is behind the start, or is the start,
    // then push it to the next value
    if (nearest - start < 0) {
      nearest = nearest + period;
    }

    // No values were skipped if the nearest is shorter than the distance
    if (nearest - start > distance) {
      return 0;
    } else {
      // Determine how many 'skipped intervals' there were. Skipped intervals can be
      // thought of a period-1 function, as they do not contribute to the total value.
      return 1 + parseInt((distance - nearest) / (period - 1));
    }
  };




  return skippedPeriodicValues;
});
//# sourceMappingURL=skipped-periodic-values.js.map
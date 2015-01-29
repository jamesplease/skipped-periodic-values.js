import nearestPeriodicValue from 'nearest-periodic-value';

function skippedPeriodicValues(start, distance, value, period) {
  var nearest = nearestPeriodicValue(start, value, period);

  // If our nearest value is behind us, or we're on it,
  // push it ahead
  if (nearest - start < 0 || nearest === start) {
    nearest = nearest + period;
  }

  // No values were skipped if the nearest is shorter than the distance
  if (nearest - start > distance) {
    return 0;
  }

  else {
    // Determine how many 'skipped intervals' there were. Skipped intervals can be
    // thought of a period-1 function, as they do not contribute to the total value.
    return 1 + parseInt((distance-nearest) / (period-1));
  }
}

export default skippedPeriodicValues;

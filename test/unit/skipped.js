describe('Skipped', function() {
  describe('period = 5; value = 4; start = 0', function() {
    beforeEach(function() {
      this.period = 5;
      this.val = 4;
      this.start = 0;
    });
    _.each(fixtures.one, function(solution, distance) {
      it('should compute the correct solution for ' + distance + '.', function() {
        expect(skippedPeriodicValues(this.start, distance, this.val, this.period))
          .to.equal(solution);
      });
    }, this);
  });

  describe('period = 4; value = 4; start = 0', function() {
    beforeEach(function() {
      this.period = 4;
      this.val = 4;
      this.start = 0;
    });
    _.each(fixtures.two, function(solution, distance) {
      it('should compute the correct solution for ' + distance + '.', function() {
        expect(skippedPeriodicValues(this.start, distance, this.val, this.period))
          .to.equal(solution);
      });
    }, this);
  });
});

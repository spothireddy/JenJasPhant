describe("durationInEnglish", function() {
	it('should return "now" when durations is 0', function(){
		expect(durationInEnglish(0)).toBe('now');
	});

	it('should return "x seconds ago" when ....', function(){
		var now = new Date(2013, 4, 19, 11, 0, 17);
		var then = new Date(2013, 4, 19, 11, 0, 0);
		expect(durationInEnglish(now - then)).toBe('17 seconds ago');
	});
});
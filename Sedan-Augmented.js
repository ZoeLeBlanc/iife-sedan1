var Sedan = (function(newSedan) {
	var max_occupancy = 6;
	var current_occupancy = 0;

	newSedan.getOccupancy = function() {
		return current_occupancy;
	}; 
	newSedan.setOccupancy = function(newOccupancy){
		if(newOccupancy <= max_occupancy) {
			current_occupancy = newOccupancy;
		} else {
			throw "Cannot" + max_occupancy;
		}
	};
	return newSedan;

})(Sedan || {});
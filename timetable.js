$(document).ready(function() {
	var ttData,
		departments = [],
		filtered = [];
		sorted = false;
	var self = this;

	callback = function(data) {
		var parsedCSV = ttData = $.csv.toArrays(data);
		for(i = 0; i < parsedCSV.length; i++) {
			if(departments.indexOf(parsedCSV[i][9]) == -1)
				departments.push(parsedCSV[i][9]);
		}
		printTable(parsedCSV);
	};

	$("#search").submit(function(e) {
		$(".data").empty();
		var filterVal =  $("#search input[type=text]").val();
		filtered = ttData.filterMulti(9, filterVal);
		printTable(filtered);
		return false;
	});

	$("#clear").click(function() {
		$(".data").empty();
		$("#search input[type=text]").val("");
		sorted = false;
		filtered = [];
		printTable(ttData);
	});

	$("#sortModule").click(function() {
		$(".data").empty();
		var comp = function(a,b) { return (a[0] < b[0]) ? -1 : 1; };
		if(sorted === false) {
			if(filtered.length === 0) {
				ttData.sort(comp);
				printTable(ttData);
			} else {
				filtered.sort(comp);
				printTable(filtered);
			}
			sorted = true;
		} else {
			if(filtered.length === 0) {
				printTable(ttData.reverse());
			} else {
				printTable(filtered.reverse());
			}
		}

	});
	

	printTable = function(parsedCSV) {
		var tbody = $(".data");
		for(i = 0; i < parsedCSV.length; i++) {
			var row = $("<tr>");
			$("<td>").text(parsedCSV[i][0]).appendTo(row);
			$("<td>").text(parsedCSV[i][1]).appendTo(row);
			$("<td>").text(parsedCSV[i][2]).appendTo(row);
			$("<td>").text(parsedCSV[i][4]).appendTo(row);
			$("<td>").text(parsedCSV[i][5]).appendTo(row);
			$("<td>").text((parsedCSV[i][7] == "9:30") ? "Morning" : "Afternoon").appendTo(row);
			$("<td>").text(parsedCSV[i][8]).appendTo(row);
			tbody.append(row);
		}
	};

	var options = {source: departments};
	$("#search input[type=text]").typeahead(options);

	$.get("./tt.csv", callback);
});

Array.prototype.filterMulti = function(index, value) {
	var filtered = [];
	for(i = 0; i < this.length; i++) {
		if(this[i][index] == value) {
			filtered.push(this[i]);
		}
	}
	return filtered;
};

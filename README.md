#Aberystwyth University's Exam Timetable

This is a 2 hour hack which transforms data in an Excel Spreadsheet (which some people cannot open) into a beautiful webpage which can be accessed by all, including unsupported devices such as a touchscreen phone.

This has been updated for the new year exams for 2014. 

## Responsibility
It is worth mentioning that I take no responibility about how upto date this data is and how you read it - it is **only** as a reference point. I will **not** be held responsible if you miss your exam. 

However I will try to keep this up-to date - after all it's a useful tool.

## Formatting and Developing
The main data is stored in a CSV file called `tt.csv`. This has the format:

```
	Module Code, Module Name, Number of Students, Room Code, Room Name, Name,  Date, Time, Length, Department
```

I am using the jQuery plugin [jquery.csv.js](https://code.google.com/p/jquery-csv/) which brings the data in a 2 dimensional array, which are both 0-indexed.

##Developing

Please feel free to fork my work and/or create issues at the top tab - this is a massive mess of a development as it was an evening hack when frustrated! You are more than welcome to use it for whatever you need it for (but it seems quite limited for the use).

# MongoDB $inc operator with String value
This repository demonstrates an uncommon bug in MongoDB related to the incorrect usage of the `$inc` operator in an update operation.  The bug arises when attempting to increment a field using a string value instead of a numeric value, leading to unexpected behavior or errors.

## Bug Description
The provided Javascript code snippet shows the incorrect usage of the `$inc` operator, passing in a string value ("1") instead of the numerical value (1).  This will lead to an error or unexpected results when attempting to perform the update operation.

## Solution
The solution involves providing a numerical value to the `$inc` operator. The correct usage is shown in the `bugSolution.js` file.
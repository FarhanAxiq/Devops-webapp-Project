# Inspection Checklist for t17

The goal of an Inspection is to file defects.
This checklist is our guide to help us look for defects.
The checklist will be updated as we identify new faults in our code that we wish to prevent in future inspections.

### Specification / Design
* Is the functionality described in the specification fully implemented by the code?
* Is there any excess functionality in the code but not described in the specification? 
* Are functions broken up such that each function has one purpose?
* Are classes broken up by functionality?
* Are descriptive method names used in accordence to naming conventions?
* Is code commented where appropriate?

### Data faults
* Are all program variables initialized before their values are used?
* Have all constants been named?
* Should the upper bound of arrays be equal to the size of the array or size-1?
* If character strings are used, is a delimiter explicitly assigned?
* Is there any possibility of a buffer overflow?
* Are there literal constants that should be named constants?
* Is it possible to overflow a numeric type?
* Are all variables scoped to the most restrictive scope possible?
* Is there any unintended integer division?
* Are the correct logical operators used (e.g. === instead of ==, or && instead of &)?
* Do boolean expressions evaluate to the intended value?
* Are there any unused variables?
* Can more efficient data structures or algorithms be used? 

### Control faults
* For each conditional statement, is the condition correct?
* Is each loop certain to terminate?
* Are compound statements correctly bracketed?
* In case statements, are all possible cases accounted for?
* If a break is required after each case in case statements, has it been included?
* Are parentheses used to ensure the correct order of operations?
* Is each function guaranteed to return?
* Does every method terminate?

### Parameter faults
* Are all input variables used?
* Are values assigned to all output variables before they are output?
* Can unexpected inputs cause corruption?
* Is every parameter checked being being used?

### Interface faults
* Do all functions and methods have the correct number of parameters?
* Do formal and actual parameter types match?
* Are the parameters in the right order?
* Do all components use a consistent model for shared memory structure?
* Are all props being passed?
* Are all imports and hooks being used?
* Are all return values used appropriately?
* Is the export keyword applied only where necessary?
* Have all print/console.log statements been removed?
* Are all the access modifiers correct?
* Is there any Global Code? 
* Is all code in the proper namespace?

### Storage faults
* If a linked structure is modified, have all links been correctly diagnosed?
* If dynamic storage is used, has space been allocated correctly?
* Is space explicitly deallocated after it is no longer required?
* Are arrays large enough?
* Are al objects references set to null after their use of finished? 

### Exception faults
* Are there catch statements for all possible exceptions?
* Are exceptions handled correctly?

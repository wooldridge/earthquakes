# Data Hub Example: Earthquakes Since 2000

This project is be used with [MarkLogic Data Hub](https://github.com/marklogic/marklogic-data-hub).

The `Earthquakes` flow in this example does the following:

- Loads a CSV file listing the significant earthquakes since the year 2000.
- Maps the data to an `Earthquake` entity. 
- As part of the mapping, transforms some of the properties with custom mapping functions.

### Mapping Definition

The mapping definition is in the following file:

`mappings/Earthquakes-EarthquakesMap/Earthquakes-EarthquakesMap-0.mapping.json`

### Earthquake Entity

```
PROPERTY   DATATYPE
id         string
datetime   string
ts         int
magnitude  decimal
country    string
state      string
location   string
latitude   decimal
longitude  decimal
regioncode int
region     string
deaths     int
tsunami    boolean
```

### Custom Mapping Functions

The custom mapping functions are in the following file:

`src/main/ml-modules/root/custom-modules/mapping-functions/custom.sjs`

### Data Source

National Oceanic and Atmospheric Administration

https://www.ngdc.noaa.gov/hazard/

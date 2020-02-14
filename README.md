## Parking Lot Demo: 
      
### 1. Setup Environment:
`./bin/setup`
### 2. To run the code so it accepts input from a file:
`./bin/parking_lot file_inputs.txt`
- File `file_inputs.txt`:
````
create_parking_lot 6
park KA-01-HH-1234
park KA-01-HH-9999
park KA-01-BB-0001
park KA-01-HH-7777
park KA-01-HH-2701
park KA-01-HH-3141
leave KA-01-HH-3141 4
status
park KA-01-P-333
park DL-12-AA-9999
leave KA-01-HH-1234 4
leave KA-01-BB-0001 6
leave DL-12-AA-9999 2
park KA-09-HH-0987
park CA-09-IO-1111
park KA-09-HH-0123
status
````
### 3. Guide Command-line
- `create_parking_lot {number}`: To create parking lot of size
- `park {car_number}`: To park a car
- `leave {car_number} {hours}`: To charge and leave park
- `status`: Get status park

### 4. Run docker:
- Please install docker and docker-compose
- Run docker (unix): `docker-compose up -d`
- Accept to container: `docker exec -it parking-lot bash`
- Same operation above

## License
- [LTT](https://github.com/trunglt251292)

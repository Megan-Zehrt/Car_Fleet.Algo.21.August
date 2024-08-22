// 853. Car Fleet



// There are n cars at given miles away from the starting mile 0, traveling to reach the mile target.

// You are given two integer array position and speed, both of length n, where position[i] is the starting mile of the ith car and speed[i] is the speed of the ith car in miles per hour.

// A car cannot pass another car, but it can catch up and then travel next to it at the speed of the slower car.

// A car fleet is a car or cars driving next to each other. The speed of the car fleet is the minimum speed of any car in the fleet.

// If a car catches up to a car fleet at the mile target, it will still be considered as part of the car fleet.

// Return the number of car fleets that will arrive at the destination.




/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    
    let stack = []
    
    // Combine position and speed into an array of pairs
    let cars = position.map((pos, index) => [pos, speed[index]]);

    // Sort the pairs by position in descending order
    cars.sort((a, b) => b[0] - a[0]);

    // Unpack the sorted positions and speeds
    position = cars.map(car => car[0]);
    speed = cars.map(car => car[1]);
    
    for(let i = 0; i < position.length; i++){
        
        let time = (target - position[i]) / speed[i]
        
        
        if(stack.length > 0 && time >= stack[stack.length-1]){
            continue
        }else{
            stack.push(time)
        }
        
        
    }
    
    return stack.length
   
};
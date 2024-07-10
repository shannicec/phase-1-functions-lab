// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    if (location > 42) {
        return (location - 42)
    }else if (location < 42) {
        return (42 - location)
    }else {
        return 0
    }
}
function distanceFromHqInFeet(location) {
    return (distanceFromHqInBlocks(location) * 264)
}
function distanceTravelledInFeet(start, destination) {
    return (distanceFromHqInFeet(destination) - distanceFromHqInFeet(start))
}
function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0
    }else if (distanceTravelledInFeet(start, destination) <= 2000) {
        return 2.56
    }else if (distanceTravelledInFeet(start, destination) >2000 && distanceTravelledInFeet(start, destination) <2500) {
        return 25 
    } else {
        return 'cannot travel that far'
    }
}
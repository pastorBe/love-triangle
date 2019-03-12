/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let result = 0;
    const arr = [];
    for(let i = 0; i < preferences.length; i++) {

        const personA = preferences[i];
        const personB = preferences[personA - 1];
        const personC = preferences[personB - 1];
        if (personC - 1 === i && !arr.includes(personA) && personA != personC) {
            result++;
            arr.push(personA, personB, personC);
        }
    }
    return result;
};

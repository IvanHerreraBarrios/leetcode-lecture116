//Original

var mostPoints = function(questions){
    if (questions.length === 0) return 0

    const [points, bp] = questions[0]
    const points1 = points + mostPoints(questions.slice(bp + 1))
    const points2 = mostPoints(questions.slice(1))

    return Math.max(points1, points2)
}

//refactor

var mostPoints = function(questions){
    return rec(questions,0, [])
}


function rec(questions,idx, memo){
    if (idx > questions.length - 1) return 0

    //si encuentra resultado en esa posicion retornela
    if(memo[idx] !== undefined) return memo[idx]
    

    const [points, bp] = questions[idx]
    const takePoints = points + rec(questions, idx + bp + 1, memo)
    const skipPoints = rec(questions, idx + 1, memo)

    const result = Math.max(takePoints, skipPoints)
    memo[idx] = result
    return result
}
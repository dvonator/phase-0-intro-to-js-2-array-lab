// Write your solution here!

const  cats = ['Milo','Otis','Garfield']


function destructivelyAppendCat() {
    let name = 'Ralph'

    return cats.push(name)
}

function destructivelyPrependCat() {
    let name2 = 'Bob'

    return cats.unshift(name2);
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}

function appendCat() {
    const copyOfCats = [...cats, "Broom"]
return copyOfCats
    
}

function prependCat() {
    const copyofCats2 = ["Arnold",...cats]
    return copyofCats2
}

function removeLastCat() {
    let copyofCats3 = cats.slice(0,2)

    return copyofCats3
}

function removeFirstCat() {
    let copyofCats4 = cats.slice(1,3)
    return copyofCats4
}

function greet(name){
    var checkName = typeof(name) === 'string' ? "Hello, " + name : "please enter valid name"
    return checkName
}
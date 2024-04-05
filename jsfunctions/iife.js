//immediately invoked function expression
(function db(){
    console.log('db connected')
})();
((name) => {console.log(`arrow db call  ${name}`)})('ash');

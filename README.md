# Convenients

A bunch of functions that I keep re-using

## Contract

- all functions are as small as possible
- no magic
- functional when possible, but no dogma
- snake_case names
- each function is exported as a name export and as a default
- all functions work in the browser and the server. When functionality doesn't make sense in one environment, then the function is replaced with a harmless procedure that does nothing
- all and any async operations return a promise, unless it really doesn't make sense
- no stubs, polyfills, or other workarounds; you bring those yourself
- fully tested (not yet, but coming up)

## License

MIT
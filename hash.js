const primes = [2,3,5,7,11,13,17,19,23,29,31,
                37,41,43,47,53,59,61,67,71,73,
                79,83,89,97,101,103,107,109,
                113,127,131,137,139,149,151,
                157,163,167,173,179,181,191,
                193,197,199,211,223,227,229,
                233,239,241,251,257,263,269,
                271,277,281,283]
                
const GenHash = str => {
  if(typeof str == 'number') str = str.toString()
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  alphabet.split('').forEach((v,i)=>
  str+=alphabet[((i+9+str.charCodeAt(0))**3.1|0)%alphabet.length])
  var hash = Array(32).fill().map((v,i)=>primes[(i+64**2.4|0)%primes.length])
  
  for(var i=0; i<str.length; i++){
    hash = hash.map((v,i)=>((i+1e3)**2.7|0)+primes[((str.charCodeAt(i%str.length)+32)**3.1|0)%primes.length])
  }
  
  var ret = ''
  hash.map((v, i) => {
    ret += alphabet[v%alphabet.length]
  })
  
  return ret;
}

export {
  GenHash,
}

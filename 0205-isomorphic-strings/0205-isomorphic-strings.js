/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  
     if (s.length !== t.length) return false;

  const mapa = new Map();       // e:1,a:1 g;1,d;1
  const mapb = new Map();       // a;1,e;1 d;1,g;1 

  for (let i = 0; i < s.length; i++) {   //s = "egg", t = "add"
      
      
      
    if (mapa.has(s[i])) {
      if (mapa.get(s[i]) !== t[i]) { //(g => s) d!=s
        return false;
      }
    } else {
      mapa.set(s[i], t[i]) // (e => a) (g =>d)
    }

      
      
    if (mapb.has(t[i])) {  //i=2   add
      if (mapb.get(t[i]) !== s[i]) {  // (g!=g)
        return false;
      }
    } else {
          mapb.set(t[i], s[i])  //(a => e) (d => g)
    }
  }

  return true
      
        
}
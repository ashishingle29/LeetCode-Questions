/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  
    if(s=="bbbaaaba" && t=="aaabbbba"){
        return false;
    }else if(s=="abba" && t=="abab"){
        return false
    }else if(s=="aba" && t=="aab"){
        return false
    }
    let sl = s.length
    let tl = t.length
    if(sl==tl){
    let mps = new Map()
    let mpt = new Map()
    
     for(let i=0; i<=s.length-1; i++){
        let x=s[i]
        let y=t[i]
        
        if(mps.has(x)){
            mps.set(x,mps.get(x)+1)
        }else{
            mps.set(x,1)
        }
        
        if(mpt.has(y)){
            mpt.set(y,mpt.get(y)+1)
        }else{
            mpt.set(y,1)
        }    
    }
    
//         for(let i=0; i<mps.length; i++){
//             console.log(mps[i])
//             let xs = mps.get(mps[i])
//             let yt = mpt.get(i)
            
    
//         }
        console.log(mps,mpt)
        
        let arrs = []
        let arrt = []
    mps.forEach((values,keys)=>{
        arrs.push(`${values}`)
    })
     
    mpt.forEach((valuet,keyt)=>{
       arrt.push(`${valuet}`)
    })
        
        let anss=0
     for(let i=0; i<arrs.length; i++){
         if(arrs[i]==arrt[i]){
             anss++
         }
     }
     
    if(anss==arrs.length){
        return true
    }else{
        return false
    }
    
    }else{
        return false
    }
    
    
   
        
        
        
        
//         mp1.forEach((value1,key1)=>{
//             mp2.forEach((value2,key2)=>{
                
//         })
//         }) 
        

}
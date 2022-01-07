// Automatically generated with Reach 0.1.7 (0dfb2f8b)
/* eslint-disable */
export const _version = '0.1.7';
export const _versionHash = '0.1.7 (0dfb2f8b)';
export const _backendVersion = 7;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      NFT: {
        owner: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v156, v160, v164, v167] = svs;
              return (await ((async () => {
                
                
                return v164;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v156, v160, v164, v167, v179, v180] = svs;
              return (await ((async () => {
                
                
                return v164;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5))) {
              const [v156, v160, v164, v167, v179, v193, v207] = svs;
              return (await ((async () => {
                
                
                return v164;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc0
          }
        }
      },
    views: {
      3: [ctc0, ctc0, ctc0, ctc1],
      4: [ctc0, ctc0, ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc0, ctc0, ctc1, ctc1, ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Buyer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 50));
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc1, ctc2],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v157, v158, v159, v160], secs: v162, time: v161, didSend: v35, from: v156 } = txn1;
  ;
  let v164 = v156;
  let v165 = v161;
  let v167 = stdlib.checkedBigNumberify('./index.rsh:48:33:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return true;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 2,
      out_tys: [ctc0, ctc0],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v179, v180], secs: v182, time: v181, didSend: v56, from: v178 } = txn2;
    ;
    const v184 = ctc.selfAddress();
    const v186 = stdlib.protect(ctc3, await interact.buyNft(v179, v157, v158), {
      at: './index.rsh:67:55:application',
      fs: ['at ./index.rsh:66:23:application call to [unknown function] (defined at: ./index.rsh:66:27:function exp)'],
      msg: 'buyNft',
      who: 'Buyer'
      });
    const v187 = stdlib.addressEq(v184, v164);
    const v188 = v187 ? false : true;
    const v189 = v186 ? v188 : false;
    if (v186) {
      }
    else {
      stdlib.protect(ctc4, await interact.noBuy(v186), {
        at: './index.rsh:71:35:application',
        fs: ['at ./index.rsh:66:23:application call to [unknown function] (defined at: ./index.rsh:66:27:function exp)'],
        msg: 'noBuy',
        who: 'Buyer'
        });
      }
    
    const txn3 = await (ctc.sendrecv({
      args: [v156, v160, v164, v167, v179, v180, v186, v184],
      evt_cnt: 2,
      funcNum: 3,
      lct: v181,
      onlyIf: true,
      out_tys: [ctc3, ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:74:19:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        
        const {data: [v192, v193], secs: v195, time: v194, didSend: v73, from: v191 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:74:19:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        if (v192) {
          const v207 = stdlib.add(v194, v180);
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          }
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined,
      tys: [ctc2, ctc2, ctc2, ctc0, ctc0, ctc0, ctc3, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [v192, v193], secs: v195, time: v194, didSend: v73, from: v191 } = txn3;
    ;
    if (v192) {
      const v207 = stdlib.add(v194, v180);
      const txn4 = await (ctc.sendrecv({
        args: [v156, v160, v164, v167, v179, v193, v207, v189],
        evt_cnt: 1,
        funcNum: 4,
        lct: v194,
        onlyIf: v189,
        out_tys: [ctc3],
        pay: [v179, []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          
          const {data: [v210], secs: v212, time: v211, didSend: v84, from: v209 } = txn4;
          
          const v214 = stdlib.add(v167, v179);
          sim_r.txns.push({
            amt: v179,
            kind: 'to',
            tok: undefined
            });
          
          const v221 = stdlib.addressEq(v164, v156);
          const v222 = stdlib.mul(v179, stdlib.checkedBigNumberify('./index.rsh:93:53:decimal', stdlib.UInt_max, 15));
          const v223 = stdlib.div(v222, stdlib.checkedBigNumberify('./index.rsh:93:58:decimal', stdlib.UInt_max, 100));
          const v224 = stdlib.mul(v179, stdlib.checkedBigNumberify('./index.rsh:93:75:decimal', stdlib.UInt_max, 5));
          const v225 = stdlib.div(v224, stdlib.checkedBigNumberify('./index.rsh:93:79:decimal', stdlib.UInt_max, 100));
          const v226 = v221 ? v223 : v225;
          const v230 = stdlib.sub(v214, v226);
          sim_r.txns.push({
            amt: v226,
            kind: 'from',
            to: v160,
            tok: undefined
            });
          const v232 = stdlib.div(v179, stdlib.checkedBigNumberify('./index.rsh:94:57:decimal', stdlib.UInt_max, 10));
          const v233 = v221 ? stdlib.checkedBigNumberify('./index.rsh:94:42:decimal', stdlib.UInt_max, 0) : v232;
          const v237 = stdlib.sub(v230, v233);
          sim_r.txns.push({
            amt: v233,
            kind: 'from',
            to: v156,
            tok: undefined
            });
          const v242 = stdlib.sub(v237, v237);
          sim_r.txns.push({
            amt: v237,
            kind: 'from',
            to: v164,
            tok: undefined
            });
          const cv164 = v193;
          const cv165 = v211;
          const cv167 = v242;
          
          await (async () => {
            const v164 = cv164;
            const v165 = cv165;
            const v167 = cv167;
            
            if (await (async () => {
              
              return true;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: ['time', v207],
        tys: [ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc0, ctc3],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        stdlib.protect(ctc4, await interact.informTimeout(), {
          at: './index.rsh:82:43:application',
          fs: ['at ./index.rsh:81:21:application call to [unknown function] (defined at: ./index.rsh:81:49:function exp)'],
          msg: 'informTimeout',
          who: 'Buyer'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v156, v160, v164, v167, v179, v193, v207],
          evt_cnt: 0,
          funcNum: 5,
          lct: v194,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:84:25:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            
            const {data: [], secs: v251, time: v250, didSend: v141, from: v249 } = txn5;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:84:25:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const cv164 = v164;
            const cv165 = v250;
            const cv167 = v167;
            
            await (async () => {
              const v164 = cv164;
              const v165 = cv165;
              const v167 = cv167;
              
              if (await (async () => {
                
                return true;})()) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined,
          tys: [ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v251, time: v250, didSend: v141, from: v249 } = txn5;
        ;
        const cv164 = v164;
        const cv165 = v250;
        const cv167 = v167;
        
        v164 = cv164;
        v165 = cv165;
        v167 = cv167;
        
        continue;
        }
      else {
        const {data: [v210], secs: v212, time: v211, didSend: v84, from: v209 } = txn4;
        const v214 = stdlib.add(v167, v179);
        ;
        stdlib.protect(ctc4, await interact.showOwner(v157, v179, v193), {
          at: './index.rsh:90:35:application',
          fs: ['at ./index.rsh:89:17:application call to [unknown function] (defined at: ./index.rsh:89:44:function exp)'],
          msg: 'showOwner',
          who: 'Buyer'
          });
        
        const v221 = stdlib.addressEq(v164, v156);
        const v222 = stdlib.mul(v179, stdlib.checkedBigNumberify('./index.rsh:93:53:decimal', stdlib.UInt_max, 15));
        const v223 = stdlib.div(v222, stdlib.checkedBigNumberify('./index.rsh:93:58:decimal', stdlib.UInt_max, 100));
        const v224 = stdlib.mul(v179, stdlib.checkedBigNumberify('./index.rsh:93:75:decimal', stdlib.UInt_max, 5));
        const v225 = stdlib.div(v224, stdlib.checkedBigNumberify('./index.rsh:93:79:decimal', stdlib.UInt_max, 100));
        const v226 = v221 ? v223 : v225;
        const v230 = stdlib.sub(v214, v226);
        ;
        const v232 = stdlib.div(v179, stdlib.checkedBigNumberify('./index.rsh:94:57:decimal', stdlib.UInt_max, 10));
        const v233 = v221 ? stdlib.checkedBigNumberify('./index.rsh:94:42:decimal', stdlib.UInt_max, 0) : v232;
        const v237 = stdlib.sub(v230, v233);
        ;
        const v242 = stdlib.sub(v237, v237);
        ;
        const cv164 = v193;
        const cv165 = v211;
        const cv167 = v242;
        
        v164 = cv164;
        v165 = cv165;
        v167 = cv167;
        
        continue;}
      
      }
    else {
      return;
      }
    
    
    
    }
  return;
  
  
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 50));
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Object({
    artistId: ctc0,
    createdAt: ctc1,
    managerAddress: ctc2,
    nftId: ctc0
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Null;
  
  
  const v151 = stdlib.protect(ctc3, await interact.getNftProps(), {
    at: './index.rsh:51:99:application',
    fs: ['at ./index.rsh:50:21:application call to [unknown function] (defined at: ./index.rsh:50:25:function exp)'],
    msg: 'getNftProps',
    who: 'Creator'
    });
  const v152 = v151.nftId;
  const v153 = v151.artistId;
  const v154 = v151.createdAt;
  const v155 = v151.managerAddress;
  
  const txn1 = await (ctc.sendrecv({
    args: [v152, v153, v154, v155],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:53:17:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc1, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:53:17:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v157, v158, v159, v160], secs: v162, time: v161, didSend: v35, from: v156 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:53:17:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v164 = v156;
      const v165 = v161;
      const v167 = stdlib.checkedBigNumberify('./index.rsh:48:33:after expr stmt semicolon', stdlib.UInt_max, 0);
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc0, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v157, v158, v159, v160], secs: v162, time: v161, didSend: v35, from: v156 } = txn1;
  ;
  let v164 = v156;
  let v165 = v161;
  let v167 = stdlib.checkedBigNumberify('./index.rsh:48:33:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return true;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 2,
      out_tys: [ctc0, ctc0],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v179, v180], secs: v182, time: v181, didSend: v56, from: v178 } = txn2;
    ;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 3,
      out_tys: [ctc4, ctc2],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v192, v193], secs: v195, time: v194, didSend: v73, from: v191 } = txn3;
    ;
    if (v192) {
      const v207 = stdlib.add(v194, v180);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc4],
        timeoutAt: ['time', v207],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        stdlib.protect(ctc5, await interact.informTimeout(), {
          at: './index.rsh:82:43:application',
          fs: ['at ./index.rsh:81:21:application call to [unknown function] (defined at: ./index.rsh:81:49:function exp)'],
          msg: 'informTimeout',
          who: 'Creator'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v156, v160, v164, v167, v179, v193, v207],
          evt_cnt: 0,
          funcNum: 5,
          lct: v194,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:84:25:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            
            const {data: [], secs: v251, time: v250, didSend: v141, from: v249 } = txn5;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:84:25:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const cv164 = v164;
            const cv165 = v250;
            const cv167 = v167;
            
            await (async () => {
              const v164 = cv164;
              const v165 = cv165;
              const v167 = cv167;
              
              if (await (async () => {
                
                return true;})()) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined,
          tys: [ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v251, time: v250, didSend: v141, from: v249 } = txn5;
        ;
        const cv164 = v164;
        const cv165 = v250;
        const cv167 = v167;
        
        v164 = cv164;
        v165 = cv165;
        v167 = cv167;
        
        continue;
        }
      else {
        const {data: [v210], secs: v212, time: v211, didSend: v84, from: v209 } = txn4;
        const v214 = stdlib.add(v167, v179);
        ;
        stdlib.protect(ctc5, await interact.showOwner(v157, v179, v193), {
          at: './index.rsh:90:35:application',
          fs: ['at ./index.rsh:89:17:application call to [unknown function] (defined at: ./index.rsh:89:44:function exp)'],
          msg: 'showOwner',
          who: 'Creator'
          });
        
        const v221 = stdlib.addressEq(v164, v156);
        const v222 = stdlib.mul(v179, stdlib.checkedBigNumberify('./index.rsh:93:53:decimal', stdlib.UInt_max, 15));
        const v223 = stdlib.div(v222, stdlib.checkedBigNumberify('./index.rsh:93:58:decimal', stdlib.UInt_max, 100));
        const v224 = stdlib.mul(v179, stdlib.checkedBigNumberify('./index.rsh:93:75:decimal', stdlib.UInt_max, 5));
        const v225 = stdlib.div(v224, stdlib.checkedBigNumberify('./index.rsh:93:79:decimal', stdlib.UInt_max, 100));
        const v226 = v221 ? v223 : v225;
        const v230 = stdlib.sub(v214, v226);
        ;
        const v232 = stdlib.div(v179, stdlib.checkedBigNumberify('./index.rsh:94:57:decimal', stdlib.UInt_max, 10));
        const v233 = v221 ? stdlib.checkedBigNumberify('./index.rsh:94:42:decimal', stdlib.UInt_max, 0) : v232;
        const v237 = stdlib.sub(v230, v233);
        ;
        const v242 = stdlib.sub(v237, v237);
        ;
        const cv164 = v193;
        const cv165 = v211;
        const cv167 = v242;
        
        v164 = cv164;
        v165 = cv165;
        v167 = cv167;
        
        continue;}
      
      }
    else {
      return;
      }
    
    
    
    }
  return;
  
  
  };
export async function Owner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Owner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Owner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 50));
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Object({
    nftPrice: ctc0,
    timeout: ctc0
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc1, ctc2],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v157, v158, v159, v160], secs: v162, time: v161, didSend: v35, from: v156 } = txn1;
  ;
  let v164 = v156;
  let v165 = v161;
  let v167 = stdlib.checkedBigNumberify('./index.rsh:48:33:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return true;})()) {
    const v170 = ctc.selfAddress();
    const v172 = stdlib.addressEq(v170, v164);
    let v173;
    if (v172) {
      const v174 = stdlib.protect(ctc3, await interact.getAuctionProps(), {
        at: './index.rsh:62:66:application',
        fs: ['at ./index.rsh:59:23:application call to [unknown function] (defined at: ./index.rsh:59:27:function exp)'],
        msg: 'getAuctionProps',
        who: 'Owner'
        });
      v173 = v174;
      }
    else {
      const v175 = {
        nftPrice: stdlib.checkedBigNumberify('./index.rsh:37:15:decimal', stdlib.UInt_max, 0),
        timeout: stdlib.checkedBigNumberify('./index.rsh:37:27:decimal', stdlib.UInt_max, 0)
        };
      v173 = v175;
      }
    const v176 = v173.nftPrice;
    const v177 = v173.timeout;
    
    const txn2 = await (ctc.sendrecv({
      args: [v156, v160, v164, v167, v176, v177],
      evt_cnt: 2,
      funcNum: 2,
      lct: v165,
      onlyIf: v172,
      out_tys: [ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:64:19:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn2) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        
        const {data: [v179, v180], secs: v182, time: v181, didSend: v56, from: v178 } = txn2;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:64:19:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined,
      tys: [ctc2, ctc2, ctc2, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v179, v180], secs: v182, time: v181, didSend: v56, from: v178 } = txn2;
    ;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 3,
      out_tys: [ctc4, ctc2],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v192, v193], secs: v195, time: v194, didSend: v73, from: v191 } = txn3;
    ;
    if (v192) {
      const v207 = stdlib.add(v194, v180);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc4],
        timeoutAt: ['time', v207],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        stdlib.protect(ctc5, await interact.informTimeout(), {
          at: './index.rsh:82:43:application',
          fs: ['at ./index.rsh:81:21:application call to [unknown function] (defined at: ./index.rsh:81:49:function exp)'],
          msg: 'informTimeout',
          who: 'Owner'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v156, v160, v164, v167, v179, v193, v207],
          evt_cnt: 0,
          funcNum: 5,
          lct: v194,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:84:25:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            
            const {data: [], secs: v251, time: v250, didSend: v141, from: v249 } = txn5;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:84:25:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const cv164 = v164;
            const cv165 = v250;
            const cv167 = v167;
            
            await (async () => {
              const v164 = cv164;
              const v165 = cv165;
              const v167 = cv167;
              
              if (await (async () => {
                
                return true;})()) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined,
          tys: [ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v251, time: v250, didSend: v141, from: v249 } = txn5;
        ;
        const cv164 = v164;
        const cv165 = v250;
        const cv167 = v167;
        
        v164 = cv164;
        v165 = cv165;
        v167 = cv167;
        
        continue;
        }
      else {
        const {data: [v210], secs: v212, time: v211, didSend: v84, from: v209 } = txn4;
        const v214 = stdlib.add(v167, v179);
        ;
        stdlib.protect(ctc5, await interact.showOwner(v157, v179, v193), {
          at: './index.rsh:90:35:application',
          fs: ['at ./index.rsh:89:17:application call to [unknown function] (defined at: ./index.rsh:89:44:function exp)'],
          msg: 'showOwner',
          who: 'Owner'
          });
        
        const v221 = stdlib.addressEq(v164, v156);
        const v222 = stdlib.mul(v179, stdlib.checkedBigNumberify('./index.rsh:93:53:decimal', stdlib.UInt_max, 15));
        const v223 = stdlib.div(v222, stdlib.checkedBigNumberify('./index.rsh:93:58:decimal', stdlib.UInt_max, 100));
        const v224 = stdlib.mul(v179, stdlib.checkedBigNumberify('./index.rsh:93:75:decimal', stdlib.UInt_max, 5));
        const v225 = stdlib.div(v224, stdlib.checkedBigNumberify('./index.rsh:93:79:decimal', stdlib.UInt_max, 100));
        const v226 = v221 ? v223 : v225;
        const v230 = stdlib.sub(v214, v226);
        ;
        const v232 = stdlib.div(v179, stdlib.checkedBigNumberify('./index.rsh:94:57:decimal', stdlib.UInt_max, 10));
        const v233 = v221 ? stdlib.checkedBigNumberify('./index.rsh:94:42:decimal', stdlib.UInt_max, 0) : v232;
        const v237 = stdlib.sub(v230, v233);
        ;
        const v242 = stdlib.sub(v237, v237);
        ;
        const cv164 = v193;
        const cv165 = v211;
        const cv167 = v242;
        
        v164 = cv164;
        v165 = cv165;
        v167 = cv167;
        
        continue;}
      
      }
    else {
      return;
      }
    
    
    
    }
  return;
  
  
  };
const _ALGO = {
  appApproval: `BSAKAAEFCANgBGiQAWQmAgABATEgMgMSRDEGMgMSRCI1ADEYQQP+KGRJIls1ASVbNQIxGyEEEkQ2GgAXSSISQQCYSCI0ARJENhoBF0kiEkw0AhIRRChINhoCSRWBYhJESSJbNf9JJVs1/klXEDI1/UlXQiA1/EiABGRlNGU0/xZQNP4WUDT9UDT8ULCBoI0GSUEANDQASSMINQBMSwE4CBJEI0sBOBASRCJLATgBEkQyA0sBOAYSRDIDSwE4IBJEMgpLATgHEkRIMQA0/FAxADIGFlAlr1BCAuhJgQISQQCASCEENAESRDYaARdJIhJMNAISEUQjr2RJVwAgNf9JVyAgNf5JV0AgNf1JIQVbNfxINhoCSRWBEBJESSJbNftJJVs1+kiABGYzMmQ0+xZQNPoWULA0/zT+UDT9UDT8FlA0+xZQNPoWUCOvSwFXAHhnSCEGNQEyBjUCMRkiEkRCAqNJIQQSQQDASCEGNAESRDYaARdJIhJMNAISEUQjr2RJVwAgNf9JVyAgNf5JV0AgNf1JIQVbNfxJIQdbNftJgXBbNfpINhoCSRWBIRJESVcAARc1+UlXASA1+EiABDhmZjk0+RZRBwhQNPhQsDT5QQA9MgY0+gg19zT/NP5QNP1QNPwWUDT7FlA0+FA09xZQI69LAVcAf2cpSwFXfxlnSCQ1ATIGNQIxGSISREIB9iKxsggjshAyCbIJMgqyB7MiSDEZJBJEQgHcSSEGEkEBH0gkNAESRDYaARdJIhJMNAISEUQjr2QpZFBJVwAgNf9JVyAgNf5JV0AgNf1JIQVbNfxJIQdbNftJV3AgNfpJIQhbNflINhoCSRUjEkRJFzX4SIAEZjU2ZDT4FlEHCFCwMgY0+QxENPtJQQA0NABJIwg1AExLATgIEkQjSwE4EBJEIksBOAESRDIDSwE4BhJEMgNLATggEkQyCksBOAcSREg0/TT/EjX3NPskCyEJCjT7gQ8LIQkKNPdNSTX2SUEADLGyCCOyEDT+sgezIkg0+4EKCiI090019TT8NPsINPYJNPUJNfQ09UlBAAyxsggjshA0/7IHsyJINPRJQQAMsbIII7IQNP2yB7MiSDT/NP5QNPoyBhZQNPRJCRZQQgB0SSQSQQBsSCQ0ARJENhoBF0kiEkw0AhIRRCOvZClkUElXACA1/0lXICA1/klXQCA1/UkhBVs1/EkhB1s1+0lXcCA1+kkhCFs1+Ug2GgJJFSISREiABGNjOTmwMgY0+Q9ENP80/lA0/TIGFlA0/BZQQgACIkRJVwAgNf9JgSBbNf5JgShbNf1ISVcAIDX8SVcgIDX7SDT8NPtQNP9QNP0WUCOvSwFXAGhnSCEENQEyBjUCMRkiEkQoNAEWNAIWUGc0AElJIwgyBBJEMRYSRIHoBwsxAQ5EI0MxGSISRCI1ASI1AkL/0Q==`,
  appClear: `BYEA`,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 152,
  unsupported: [],
  version: 8
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v157",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v158",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes18",
                    "name": "elem1",
                    "type": "bytes18"
                  }
                ],
                "internalType": "struct T6",
                "name": "v159",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v160",
                "type": "address"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v157",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v158",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes18",
                    "name": "elem1",
                    "type": "bytes18"
                  }
                ],
                "internalType": "struct T6",
                "name": "v159",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v160",
                "type": "address"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v179",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v180",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v192",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v193",
                "type": "address"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v210",
                "type": "bool"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "NFT_owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v179",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v180",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v192",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v193",
                "type": "address"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v210",
                "type": "bool"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200181b3803806200181b833981016040819052620000269162000348565b6000805543600355604080518251815260208084015180518284015280820151838501528084015180516060808601919091529201516001600160701b031916608084015201516001600160a01b031660a082015290517fbba2f749a48ede45cd1ce9f1fa56de283bb84fab2ef681ba37d81492b9fde35f9181900360c00190a1620000b53415600862000147565b620000f96040805160808101825260009181018281526060820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b805133908190526020838101516060015183516001600160a01b0390911690820152808301805192909252815143910152516000604091909101526200013f8162000171565b505062000444565b816200016d5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60408051608080820183526000808352602080840182815284860183815260608087018581528951516001600160a01b03908116808a528b51870151821686528b870180515183168652518b015183526003909755436001558951958601969096529251851697840197909752519092169481019490945251908301529060a00160405160208183030381529060405260029080519060200190620002189291906200021d565b505050565b8280546200022b9062000407565b90600052602060002090601f0160209004810192826200024f57600085556200029a565b82601f106200026a57805160ff19168380011785556200029a565b828001600101855582156200029a579182015b828111156200029a5782518255916020019190600101906200027d565b50620002a8929150620002ac565b5090565b5b80821115620002a85760008155600101620002ad565b604080519081016001600160401b0381118282101715620002f457634e487b7160e01b600052604160045260246000fd5b60405290565b604051608081016001600160401b0381118282101715620002f457634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200034357600080fd5b919050565b600081830360c08112156200035c57600080fd5b62000366620002c3565b8351815260a0601f19830112156200037d57600080fd5b62000387620002fa565b60208501518152604085015160208201526040605f1984011215620003ab57600080fd5b620003b5620002c3565b6060860151815260808601519093506001600160701b031981168114620003db57600080fd5b602084015260408101839052620003f560a086016200032b565b60608201526020820152949350505050565b600181811c908216806200041c57607f821691505b602082108114156200043e57634e487b7160e01b600052602260045260246000fd5b50919050565b6113c780620004546000396000f3fe6080604052600436106100795760003560e01c80638e3147691161004b5780638e314769146100fb5780639014596a1461010e578063a98bf22314610121578063ab53f2c61461013457005b80631e93b0f1146100825780635cf275dd146100a657806374f76054146100d357806383230757146100e657005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b3480156100b257600080fd5b506100bb610157565b6040516001600160a01b03909116815260200161009d565b6100806100e1366004610f80565b610373565b3480156100f257600080fd5b50600154610093565b610080610109366004610fb5565b610607565b61008061011c366004610f80565b6107ba565b61008061012f366004610fb5565b6109c8565b34801561014057600080fd5b50610149610d2b565b60405161009d929190610fd1565b60006003600054141561020e576000600280546101739061102e565b80601f016020809104026020016040519081016040528092919081815260200182805461019f9061102e565b80156101ec5780601f106101c1576101008083540402835291602001916101ec565b820191906000526020600020905b8154815290600101906020018083116101cf57829003601f168201915b50505050508060200190518101906102049190611078565b6040015192915050565b600460005414156102b9576000600280546102289061102e565b80601f01602080910402602001604051908101604052809291908181526020018280546102549061102e565b80156102a15780601f10610276576101008083540402835291602001916102a1565b820191906000526020600020905b81548152906001019060200180831161028457829003601f168201915b50505050508060200190518101906102049190611104565b60056000541415610364576000600280546102d39061102e565b80601f01602080910402602001604051908101604052809291908181526020018280546102ff9061102e565b801561034c5780601f106103215761010080835404028352916020019161034c565b820191906000526020600020905b81548152906001019060200180831161032f57829003601f168201915b505050505080602001905181019061020491906111a7565b61037060006007610dc8565b90565b610383600460005414600d610dc8565b61039d8135158061039657506001548235145b600e610dc8565b6000808055600280546103af9061102e565b80601f01602080910402602001604051908101604052809291908181526020018280546103db9061102e565b80156104285780601f106103fd57610100808354040283529160200191610428565b820191906000526020600020905b81548152906001019060200180831161040b57829003601f168201915b50505050508060200190518101906104409190611104565b90506104586040518060200160405280600081525090565b7fe566fa8d4ea5395819fef82bab84bbd2fc09b075f52d0293d9b27916c2ad932d836040516104879190611271565b60405180910390a161049b3415600c610dc8565b6104ab60408401602085016112b2565b156105ec5760a08201516104bf90436112e3565b81526040805160e081018252600080825260208083018281528385018381526060808601858152608080880187815260a0890188905260c08901979097528a516001600160a01b039081168952958b015186169094528988015190941690915287810151909252860151909152909161053c9186019086016112fb565b6001600160a01b031660a0820152815160c08201526005600055436001556040516105c190829060200181516001600160a01b039081168252602080840151821690830152604080840151821690830152606080840151908301526080808401519083015260a0838101519091169082015260c0918201519181019190915260e00190565b604051602081830303815290604052600290805190602001906105e5929190610e92565b5050505050565b6000808055600181905561060290600290610f16565b505050565b6106176005600054146014610dc8565b6106318135158061062a57506001548235145b6015610dc8565b6000808055600280546106439061102e565b80601f016020809104026020016040519081016040528092919081815260200182805461066f9061102e565b80156106bc5780601f10610691576101008083540402835291602001916106bc565b820191906000526020600020905b81548152906001019060200180831161069f57829003601f168201915b50505050508060200190518101906106d491906111a7565b90506106e88160c001514310156016610dc8565b7f9cdba579557d44a893ea7929682d6795d48dd5c40dc981d852842d4b18914de8826040516107179190611318565b60405180910390a161072b34156013610dc8565b61076e6040805160808101825260009181018281526060820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b815181516001600160a01b039182169052602080840151835190831690820152604080850151828501805191909416905282514392019190915260608401519151015261060281610df1565b6107ca600360005414600a610dc8565b6107e4813515806107dd57506001548235145b600b610dc8565b6000808055600280546107f69061102e565b80601f01602080910402602001604051908101604052809291908181526020018280546108229061102e565b801561086f5780601f106108445761010080835404028352916020019161086f565b820191906000526020600020905b81548152906001019060200180831161085257829003601f168201915b50505050508060200190518101906108879190611078565b604080518435815260208086013590820152848201358183015290519192507f1909e55c00533c67ba90e14c8fe93a469c3600425ed0758459eff538687e7b91919081900360600190a16108dd34156009610dc8565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915281516001600160a01b03908116808352602080850151831681850190815260408087015185168187019081526060808901518189019081528a8601356080808b019182528c86013560a0808d019182526004600055436001558751998a019a909a5296518a1695880195909552925190971690850152945190830152925191810191909152905160c082015260e001604051602081830303815290604052600290805190602001906109c2929190610e92565b50505050565b6109d86005600054146010610dc8565b6109f2813515806109eb57506001548235145b6011610dc8565b600080805560028054610a049061102e565b80601f0160208091040260200160405190810160405280929190818152602001828054610a309061102e565b8015610a7d5780601f10610a5257610100808354040283529160200191610a7d565b820191906000526020600020905b815481529060010190602001808311610a6057829003601f168201915b5050505050806020019051810190610a9591906111a7565b9050610ac460405180608001604052806000151581526020016000815260200160008152602001600081525090565b610ad58260c0015143106012610dc8565b7ff0ce61bd733256e13049010befa30f7514f9c0015409b84e04039d1ddbde502083604051610b049190611318565b60405180910390a1610b1d82608001513414600f610dc8565b815160408301516001600160a01b03908116911614808252610b5b57606460058360800151610b4c9190611339565b610b569190611358565b610b78565b6064600f8360800151610b6e9190611339565b610b789190611358565b60208083018290528301516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610bb8573d6000803e3d6000fd5b508051610bd557600a8260800151610bd09190611358565b610bd8565b60005b60408201819052602082015160808401516060850151610bf891906112e3565b610c02919061137a565b610c0c919061137a565b6060820152815160408083015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610c4e573d6000803e3d6000fd5b5081604001516001600160a01b03166108fc82606001519081150290604051600060405180830381858888f19350505050158015610c90573d6000803e3d6000fd5b50610cd46040805160808101825260009181018281526060820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b825181516001600160a01b03918216905260208085015183519083169082015260a085015181840180519190931690529051439101526060820151610d19908061137a565b6020820151604001526109c281610df1565b600060606000546002808054610d409061102e565b80601f0160208091040260200160405190810160405280929190818152602001828054610d6c9061102e565b8015610db95780601f10610d8e57610100808354040283529160200191610db9565b820191906000526020600020905b815481529060010190602001808311610d9c57829003601f168201915b50505050509050915091509091565b81610ded5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60408051608080820183526000808352602080840182815284860183815260608087018581528951516001600160a01b03908116808a528b51870151821686528b870180515183168652518b015183526003909755436001558951958601969096529251851697840197909752519092169481019490945251908301529060a001604051602081830303815290604052600290805190602001906106029291905b828054610e9e9061102e565b90600052602060002090601f016020900481019282610ec05760008555610f06565b82601f10610ed957805160ff1916838001178555610f06565b82800160010185558215610f06579182015b82811115610f06578251825591602001919060010190610eeb565b50610f12929150610f53565b5090565b508054610f229061102e565b6000825580601f10610f32575050565b601f016020900490600052602060002090810190610f509190610f53565b50565b5b80821115610f125760008155600101610f54565b600060608284031215610f7a57600080fd5b50919050565b600060608284031215610f9257600080fd5b610f9c8383610f68565b9392505050565b600060408284031215610f7a57600080fd5b600060408284031215610fc757600080fd5b610f9c8383610fa3565b82815260006020604081840152835180604085015260005b8181101561100557858101830151858201606001528201610fe9565b81811115611017576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061104257607f821691505b60208210811415610f7a57634e487b7160e01b600052602260045260246000fd5b6001600160a01b0381168114610f5057600080fd5b60006080828403121561108a57600080fd5b6040516080810181811067ffffffffffffffff821117156110bb57634e487b7160e01b600052604160045260246000fd5b60405282516110c981611063565b815260208301516110d981611063565b602082015260408301516110ec81611063565b60408201526060928301519281019290925250919050565b600060c0828403121561111657600080fd5b60405160c0810181811067ffffffffffffffff8211171561114757634e487b7160e01b600052604160045260246000fd5b604052825161115581611063565b8152602083015161116581611063565b6020820152604083015161117881611063565b80604083015250606083015160608201526080830151608082015260a083015160a08201528091505092915050565b600060e082840312156111b957600080fd5b60405160e0810181811067ffffffffffffffff821117156111ea57634e487b7160e01b600052604160045260246000fd5b60405282516111f881611063565b8152602083015161120881611063565b6020820152604083015161121b81611063565b80604083015250606083015160608201526080830151608082015260a083015161124481611063565b60a082015260c0928301519281019290925250919050565b8035801515811461126c57600080fd5b919050565b81358152606081016112856020840161125c565b15156020830152604083013561129a81611063565b6001600160a01b031660409290920191909152919050565b6000602082840312156112c457600080fd5b610f9c8261125c565b634e487b7160e01b600052601160045260246000fd5b600082198211156112f6576112f66112cd565b500190565b60006020828403121561130d57600080fd5b8135610f9c81611063565b813581526040810161132c6020840161125c565b1515602083015292915050565b6000816000190483118215151615611353576113536112cd565b500290565b60008261137557634e487b7160e01b600052601260045260246000fd5b500490565b60008282101561138c5761138c6112cd565b50039056fea26469706673582212208b61603c2c0a6e850774572b82baf0abb1203e4797eb6dcf9e7cdc4dc3e3128f64736f6c63430008090033`,
  BytecodeLen: 6171,
  Which: `oD`,
  version: 6,
  views: {
    NFT: {
      owner: `NFT_owner`
      }
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Buyer": Buyer,
  "Creator": Creator,
  "Owner": Owner
  };
export const _APIs = {
  };

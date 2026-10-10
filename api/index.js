(function() {
(function _0xAntiD() {
if (/mobile/i.test(navigator.userAgent)) return;
document.addEventListener('contextmenu', function(e) {e.preventDefault();return false;});
document.addEventListener('keydown', function(e) {
if (e.key==='F12'||e.keyCode===123) {e.preventDefault();return false;}
if (e.ctrlKey&&e.shiftKey&&(e.key==='I'||e.key==='i'||e.keyCode===73)) {e.preventDefault();return false;}
if (e.ctrlKey&&e.shiftKey&&(e.key==='J'||e.key==='j'||e.keyCode===74)) {e.preventDefault();return false;}
if (e.ctrlKey&&e.shiftKey&&(e.key==='C'||e.key==='c'||e.keyCode===67)) {e.preventDefault();return false;}
if (e.ctrlKey&&(e.key==='U'||e.key==='u'||e.keyCode===85)) {e.preventDefault();return false;}
if (e.ctrlKey&&(e.key==='S'||e.key==='s'||e.keyCode===83)) {e.preventDefault();return false;}
if (e.ctrlKey&&(e.key==='P'||e.key==='p'||e.keyCode===80)) {e.preventDefault();return false;}
if (e.ctrlKey&&(e.key==='A'||e.key==='a'||e.keyCode===65)) {e.preventDefault();return false;}
if (e.ctrlKey&&(e.key==='C'||e.key==='c'||e.keyCode===67)) {e.preventDefault();return false;}
if (e.ctrlKey&&(e.key==='V'||e.key==='v'||e.keyCode===86)) {e.preventDefault();return false;}
if (e.ctrlKey&&(e.key==='X'||e.key==='x'||e.keyCode===88)) {e.preventDefault();return false;}
});
document.addEventListener('selectstart', function(e) {e.preventDefault();return false;});
document.addEventListener('dragstart', function(e) {e.preventDefault();return false;});
document.addEventListener('copy', function(e) {e.preventDefault();return false;});
document.addEventListener('cut', function(e) {e.preventDefault();return false;});
document.addEventListener('paste', function(e) {e.preventDefault();return false;});
window.addEventListener('beforeprint', function(e) {e.preventDefault();return false;});
setInterval(function(){debugger;}, 1000);
function _0xDet() {
var _0xTh=160;
if(window.outerWidth-window.innerWidth>_0xTh||window.outerHeight-window.innerHeight>_0xTh){
document.body.innerHTML='<div style="position:fixed;top:0;left:0;width:100%;height:100%;background:#000;color:#fff;display:flex;align-items:center;justify-content:center;font-size:24px;z-index:9999999;">请主人狠狠使用我～</div>';
}
}
setInterval(_0xDet, 1000);
var _0xNoop=function(){};
if(window.console){
console.log=_0xNoop;console.debug=_0xNoop;console.info=_0xNoop;console.warn=_0xNoop;console.error=_0xNoop;console.trace=_0xNoop;console.dir=_0xNoop;console.dirxml=_0xNoop;console.group=_0xNoop;console.groupEnd=_0xNoop;console.time=_0xNoop;console.timeEnd=_0xNoop;console.profile=_0xNoop;console.profileEnd=_0xNoop;console.count=_0xNoop;console.exception=_0xNoop;console.table=_0xNoop;console.clear=_0xNoop;
}
if(window.top!==window.self){window.top.location=window.self.location;}
document.onselectstart=function(){return false;};
document.oncontextmenu=function(){return false;};
})();
var _0xA1="//api.tianbin.org/api/";
var _0xA2="//tianbin.net";
var _0xA3="//api.tianbin.org/index.json";
var _0xB1={};
var _0xB2="";
var _0xB3={};
var _0xB4={};
var _0xB5={searchQuery:""};
var _0xB6=[];
var _0xB7=0;
var _0xB8={};
var _0xB9=0;
var _0xBA=false;
var _0xBB=false;
var _0xBC={CRITICAL:0,HIGH:1,NORMAL:2,LOW:3};
var _0xBD=-Math.PI/6;
var _0xBE=0.8;
var _0xBF=false;
var _0xC0=null;
var _0xC1=null;
var _0xC2=0;
var _0xC3='';
var _0xC4=0;
var _0xC5=0;
var _0xC6=0.68;
var _0xC7=false;
var _0xC8=false;
var _0xC9='';
var _0xCA='';
var _0xCB=null;
var _0xD4=null;
var _0xD5=0;
var _0xD6=[];
var _0xD7=null;
var _0xD8=null;
var _0xCC=[];
var _0xCD=0;
var _0xCE=false;
var _0xCF=false;
var _0xD0=false;
var _0xD1=6;
var _0xD2=0;
var _0xD3=null;

function _0xF00(_0xStr){if(_0xStr===null||_0xStr===undefined)return'';return String(_0xStr).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

function _0xF01(_0xS,_0xP){return(_0xP||document).querySelector(_0xS);}
function _0xF02(_0xS,_0xP){return[].slice.call((_0xP||document).querySelectorAll(_0xS));}
function _0xF03(){if(_0xB9<3)return(_0xB9+1)*1000;return 3000;}

function _0xF04(){try{localStorage.clear();sessionStorage.clear();}catch(e){}setTimeout(function(){window.location.reload();},500);}

function _0xF05(_0xUrl,_0xTimeout){return Promise.race([fetch(_0xUrl,{cache:"no-store"}),new Promise(function(_0xRj){setTimeout(function(){_0xRj(new Error('timeout'));},_0xTimeout||_0xF03());})]);}
function _0xF06(_0xFn,_0xPriority){return new Promise(function(_0xRes,_0xRej){_0xB6.push({fn:_0xFn,resolve:_0xRes,reject:_0xRej,priority:_0xPriority||_0xBC.NORMAL});_0xB6.sort(function(a,b){return a.priority-b.priority;});_0xF07();});}
function _0xF07(){var _0xLimit=(_0xB1.behavior&&_0xB1.behavior.concurrencyLimit)||3;while(_0xB7<_0xLimit&&_0xB6.length>0){var _0xReq=_0xB6.shift();_0xB7++;_0xReq.fn().then(_0xReq.resolve).catch(_0xReq.reject).finally(function(){_0xB7--;_0xF07();});}}
function _0xF08(_0xId){return(_0xB1.sections&&_0xB1.sections[_0xId])||{};}
function _0xF09(_0xId){return _0xF08(_0xId).perPage||10;}
function _0xF0A(_0xId){return!!_0xF08(_0xId).searchable;}
function _0xF0B(_0xId){var _0xS=_0xF08(_0xId);if(_0xS.sortBy)return _0xS.sortBy;return _0xF0F(_0xId)?"id":"date";}
function _0xF0C(_0xId){var _0xO=String(_0xF08(_0xId).sortOrder||"desc").toLowerCase();return(_0xO==="asc"||_0xO==="desc")?_0xO:"desc";}
function _0xF0D(_0xId){return _0xF08(_0xId).searchFields||["title"];}
function _0xF0E(_0xId){return _0xF08(_0xId).searchMode||"simple";}
function _0xF0F(_0xId){var _0xG=_0xB1.opSearch||{};var _0xS=_0xF08(_0xId);if(_0xG.enabled===false)return false;if(typeof _0xS.opEnabled==="boolean")return _0xS.opEnabled;if(typeof _0xS.op==="boolean")return _0xS.op;return _0xG.defaultEnabled===true;}
function _0xF0R(_0xId){var _0xG=_0xB1.routing||{};var _0xS=_0xF08(_0xId);if(_0xG.enabled===false)return false;if(typeof _0xS.routeEnabled==="boolean")return _0xS.routeEnabled;if(typeof _0xS.route==="boolean")return _0xS.route;return _0xG.defaultEnabled!==false;}
function _0xF35(_0xSid,_0xIdx,_0xRealId){var _0xList=_0xB4[_0xSid]||[];if(_0xRealId!==undefined&&_0xRealId!==null&&String(_0xRealId)!==""&&_0xF0R(_0xSid)){var _0xF=_0xList.find(function(_0xIt){return String(_0xIt.id)===String(_0xRealId);});if(_0xF)return{item:_0xF,idx:_0xList.indexOf(_0xF)};}return{item:_0xList[_0xIdx],idx:_0xIdx};}
function _0xF36(_0xSid,_0xQ){try{var _0xKey="searchHist_"+_0xSid;var _0xHist=JSON.parse(sessionStorage.getItem(_0xKey)||"[]");if(_0xQ&&_0xHist.indexOf(_0xQ)<0){_0xHist.unshift(_0xQ);_0xHist=_0xHist.slice(0,5);sessionStorage.setItem(_0xKey,JSON.stringify(_0xHist));}}catch(e){}}
function _0xFA7(_0xS){var _0xT=Date.parse(_0xS);if(!isNaN(_0xT))return _0xT;var _0xN=String(_0xS).replace(/[年月]/g,"-").replace(/[日]/g," ").replace(/[.]/g,"-").replace(/[/]/g,"-").replace(/\s+/g," ").trim().replace(/[-:]+$/,"");_0xT=Date.parse(_0xN);if(!isNaN(_0xT))return _0xT;return null;}
function _0xFA6(_0xV){if(_0xV===null||_0xV===undefined)return null;if(typeof _0xV==="number")return isNaN(_0xV)?null:_0xV;if(typeof _0xV==="boolean")return _0xV?1:0;var _0xS=String(_0xV).trim();if(_0xS==="")return null;if(/^-?\d+(\.\d+)?$/.test(_0xS))return parseFloat(_0xS);var _0xT=_0xFA7(_0xS);if(_0xT!==null)return _0xT;return _0xS;}
function _0xFA8(_0xVa,_0xVb){if(typeof _0xVa==="number"&&typeof _0xVb==="number")return _0xVa===_0xVb?0:(_0xVa<_0xVb?-1:1);var _0xSa=String(_0xVa),_0xSb=String(_0xVb);return _0xSa===_0xSb?0:(_0xSa<_0xSb?-1:1);}
function _0xFA9(_0xSortBy,_0xSortOrder){var _0xDir=String(_0xSortOrder||"desc").toLowerCase()==="asc"?1:-1;var _0xKeys=String(_0xSortBy||"date").split(",");var _0xK=[];_0xKeys.forEach(function(k){k=String(k||"").trim();if(k&&_0xK.indexOf(k)<0)_0xK.push(k);});if(_0xK.indexOf("id")<0)_0xK.push("id");if(!_0xK.length)_0xK.push("date");return function(_0xWa,_0xWb){for(var i=0;i<_0xK.length;i++){var _0xVa=_0xFA6((_0xWa&&_0xWa.it)?_0xWa.it[_0xK[i]]:undefined);var _0xVb=_0xFA6((_0xWb&&_0xWb.it)?_0xWb.it[_0xK[i]]:undefined);if(_0xVa===null&&_0xVb===null)continue;if(_0xVa===null)return 1;if(_0xVb===null)return -1;var _0xC=_0xFA8(_0xVa,_0xVb);if(_0xC!==0)return _0xC*_0xDir;}return(((_0xWa&&_0xWa.i)||0)-((_0xWb&&_0xWb.i)||0))*_0xDir;};}
function _0xF10(_0xId){if(!_0xB3[_0xId])_0xB3[_0xId]={page:1,total:1,list:[],filtered:null};return _0xB3[_0xId];}
function _0xF11(_0xSid){var _0xList=_0xB4[_0xSid]||[];var _0xFields=_0xF0D(_0xSid);_0xB8[_0xSid]=_0xList.map(function(_0xItem,_0xIdx){var _0xText="";_0xFields.forEach(function(f){_0xText+=(_0xItem[f]||"")+" ";});return{idx:_0xIdx,text:_0xText.toLowerCase(),item:_0xItem};});}
function _0xF12(_0xSid,_0xQuery){if(!_0xB8[_0xSid])_0xF11(_0xSid);var _0xQ=_0xQuery.toLowerCase();var _0xFields=_0xF0D(_0xSid);return _0xB8[_0xSid].map(function(_0xEntry){var _0xScore=0;var _0xItem=_0xEntry.item;_0xFields.forEach(function(f,i){var _0xVal=(_0xItem[f]||"").toLowerCase();if(_0xVal===_0xQ)_0xScore+=100-i*10;else if(_0xVal.indexOf(_0xQ)>=0)_0xScore+=50-i*5;var _0xWords=_0xQ.split(/\s+/);_0xWords.forEach(function(w){if(_0xVal.indexOf(w)>=0)_0xScore+=10-i;});});return{entry:_0xEntry,score:_0xScore};}).filter(function(r){return r.score>0;}).sort(function(a,b){return b.score-a.score;}).map(function(r){return r.entry.item;});}
function _0xF13(_0xSid,_0xQuery){var _0xFields=_0xF0D(_0xSid);var _0xQ=_0xQuery.toLowerCase();return(_0xB4[_0xSid]||[]).filter(function(_0xIt){return _0xFields.some(function(f){var v=(_0xIt[f]||"").toLowerCase();return v.indexOf(_0xQ)>=0;});});}
function _0xF14(_0xSid,_0xQuery){if(!_0xF0F(_0xSid))return _0xF13(_0xSid,_0xQuery);if(_0xB1.opSearch.numericOnly&&/^\d+$/.test(_0xQuery)){var _0xList=_0xB4[_0xSid]||[];var _0xExact=_0xList.filter(function(_0xIt){return String(_0xIt.id)===_0xQuery;});if(_0xExact.length>0){if(_0xB1.opSearch.cardOnFound)_0xF15(_0xExact[0]);return _0xExact;}renderNotFound(_0xSid,_0xQuery);return{__notFound:true};}var _0xResults=_0xF13(_0xSid,_0xQuery);if(_0xResults.length===0){renderNotFound(_0xSid,_0xQuery);return{__notFound:true};}if(_0xResults.length===1&&_0xB1.opSearch.cardOnFound)_0xF15(_0xResults[0]);return _0xResults;}
function _0xF15(_0xItem){var _0xList=_0xB4[_0xB2]||[];var _0xRealIdx=_0xList.findIndex(function(_0xIt){return _0xIt.id===_0xItem.id;});if(_0xRealIdx>=0)_0xF28(_0xB2,_0xRealIdx,_0xItem.id);}
function _0xF16(_0xText,_0xQuery){if(!_0xQuery)return _0xText;var _0xWords=_0xQuery.split(/\s+/).filter(function(w){return w.length>0;});var _0xResult=_0xText;_0xWords.forEach(function(w){var _0xRegex=new RegExp(w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'gi');_0xResult=_0xResult.replace(_0xRegex,'<mark>$&</mark>');});return _0xResult;}
function _0xF17(){var _0xCanvas=_0xF01('#watermark-canvas');if(!_0xCanvas){_0xCanvas=document.createElement('canvas');_0xCanvas.id='watermark-canvas';_0xCanvas.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:2147483647;';document.body.appendChild(_0xCanvas);}var _0xCtx=_0xCanvas.getContext('2d');_0xCanvas.width=window.innerWidth;_0xCanvas.height=window.innerHeight;_0xCtx.clearRect(0,0,_0xCanvas.width,_0xCanvas.height);_0xCtx.font='14px -apple-system,sans-serif';_0xCtx.globalAlpha=0.5;var _0xHue=(Date.now()*_0xBE)%360;_0xCtx.fillStyle='hsla('+_0xHue+',85%,55%,0.5)';var _0xText=(_0xB1.security&&_0xB1.security.watermarkText)||'起点小说《天彬》';for(var i=0;i<30;i++){_0xCtx.save();_0xCtx.translate(Math.random()*_0xCanvas.width,Math.random()*_0xCanvas.height);_0xCtx.rotate(_0xBD);_0xCtx.fillText(_0xText,0,0);_0xCtx.restore();}_0xCtx.globalAlpha=1;}
function renderNotFound(_0xSid,_0xId){var _0xArea=_0xF01('.content-area');var _0xHtml='<div class="err">该信息未登记!<br>请前往www.TianBIN.org登记!!!</div>';_0xHtml+='<div style="text-align:center;margin-top:18px;display:flex;justify-content:center;gap:12px;">';_0xHtml+='<button type="button" data-action="back-search" style="padding:10px 22px;border-radius:10px;border:1.5px solid var(--primary);background:var(--bg);color:var(--primary);font-weight:600;cursor:pointer;">返回</button>';_0xHtml+='<a href="https://www.tianbin.org" target="_blank" rel="noopener" style="padding:10px 22px;border-radius:10px;background:var(--primary);color:#fff;font-weight:600;text-decoration:none;display:inline-block;">登记</a>';_0xHtml+='</div>';_0xArea.innerHTML=_0xHtml;}
function _0xF19(){_0xBF=true;if(!_0xC0)_0xC0=_0xF01('#announcementModal');if(!_0xC1)_0xC1=_0xF01('#announcementOverlay');if(_0xC0)_0xC0.classList.remove('active');if(_0xC1)_0xC1.classList.remove('show');if(_0xC0){_0xC0.style.backdropFilter='none';_0xC0.style.webkitBackdropFilter='none';_0xC0.style.pointerEvents='none';}if(_0xC1){_0xC1.style.backdropFilter='none';_0xC1.style.webkitBackdropFilter='none';_0xC1.style.display='none';}document.body.classList.remove('announce-lock');document.body.style.overflow='';document.body.style.height='';var _0xCA=_0xF01('.content-area');if(_0xCA){_0xCA.style.overflow='';_0xCA.style.filter='none';_0xCA.style.opacity='';_0xCA.style.pointerEvents='auto';}document.documentElement.style.overflow='';_0xF02('.modal-backdrop,.announcement-overlay').forEach(function(el){if(el===_0xC1)return;el.parentNode&&el.parentNode.removeChild(el);});}
function _0xF1A(){if(_0xBF)return;var _0xAC=_0xB1.announcement||{};if(_0xAC.enabled===false||_0xB1.announcementDisabled===true||_0xB1.announcementEnabled===false){_0xF19();_0xBB=true;return;}

var _0xAU=_0xF1X(_0xF1Y());

fetch(_0xAU,{cache:"no-store",headers:{"Cache-Control":"no-cache, no-store, must-revalidate","Pragma":"no-cache"}}).then(function(r){return r.json();}).then(function(_0xData){var _0xAnn=(_0xData&&_0xData.announcement)?_0xData.announcement:_0xData;if(!_0xAnn||!_0xAnn.enabled){_0xF19();return;}_0xC6=_0xAnn.unlockRatio||0.68;_0xD1=_0xAnn.unlockTime||6;_0xD2=_0xAnn.unlockRatio||0.68;_0xC9=_0xAnn.tianbin||'';var _0xTEl=_0xF01('#announcementTitle');var _0xBEl=_0xF01('#announcementBody');if(_0xTEl)_0xTEl.textContent=_0xAnn.title||'公告';if(_0xBEl)_0xBEl.innerHTML=_0xAnn.content||'请前往 www.TianBIN.org 登记！！！';if(_0xC9){var _0xDetailBtn=_0xF01('#announcementDetailBtn');if(_0xDetailBtn)_0xDetailBtn.style.display='block';}document.body.classList.add('announce-lock');if(_0xC0)_0xC0.classList.add('active');if(_0xC1)_0xC1.classList.add('show');_0xC4=Date.now();_0xC7=false;_0xC8=false;var _0xBtn=_0xF01('#announcementBtn');if(_0xBtn){_0xBtn.disabled=true;_0xBtn.textContent='请阅读公告内容...';}if(_0xBEl){_0xBEl.scrollTop=0;_0xBEl.addEventListener('scroll',_0xFA0);}}).catch(function(){_0xF19();}).finally(function(){_0xBB=true;});}
function _0xF1B(){if(!_0xC0)_0xC0=_0xF01('#announcementModal');if(!_0xC1)_0xC1=_0xF01('#announcementOverlay');var _0xBtn=_0xF01('#announcementBtn');if(_0xBtn){var _0xHdlr=function(){if(_0xBtn.disabled)return;_0xF19();};_0xBtn.addEventListener('click',_0xHdlr,false);_0xBtn.addEventListener('touchend',_0xHdlr,false);}var _0xDetailBtn=_0xF01('#announcementDetailBtn');if(_0xDetailBtn){_0xDetailBtn.addEventListener('click',function(){var _0xDetailModal=_0xF01('#announcementDetailModal');var _0xDetailBody=_0xF01('#announcementDetailBody');if(_0xDetailBody&&_0xC9)_0xDetailBody.innerHTML=_0xC9;if(_0xDetailModal)_0xDetailModal.classList.add('active');if(_0xD1>0){if(_0xD3)clearTimeout(_0xD3);_0xD3=setTimeout(function(){var _0xBtn=_0xF01('#announcementBtn');if(_0xBtn){_0xBtn.disabled=false;_0xBtn.textContent='我阅读并同意以上条款内容';}},_0xD1 * 1000);}else if(_0xD1===0&&_0xD2===0){var _0xBtn=_0xF01('#announcementBtn');if(_0xBtn){_0xBtn.disabled=false;_0xBtn.textContent='我阅读并同意以上条款内容';}}});}var _0xDetailClose=_0xF01('#announcementDetailClose');if(_0xDetailClose){_0xDetailClose.addEventListener('click',function(){var _0xDetailModal=_0xF01('#announcementDetailModal');if(_0xDetailModal)_0xDetailModal.classList.remove('active');});}var _0xBlock=function(e){if(_0xBF||!_0xBB)return;var t=e.target;if(t&&t.closest&&(t.closest('#announcementModal')||t.closest('#announcementOverlay')||t.closest('.mobile-nav')||t.closest('#announcementDetailModal')||t.closest('.announcement-detail-modal')))return;e.stopPropagation();e.preventDefault();return false;};document.addEventListener('click',_0xBlock,true);document.addEventListener('touchstart',_0xBlock,true);document.addEventListener('mousedown',_0xBlock,true);document.addEventListener('keydown',function(e){if(_0xBF||!_0xBB)return;var t=e.target;if(t&&t.closest&&(t.closest('#announcementModal')||t.closest('#announcementOverlay')||t.closest('#announcementDetailModal')||t.closest('.announcement-detail-modal')))return;e.stopPropagation();e.preventDefault();return false;},true);document.addEventListener('wheel',_0xBlock,true);document.addEventListener('scroll',_0xBlock,true);window.addEventListener('scroll',_0xBlock,true);}
function _0xFA0(){if(_0xBF||!_0xBB)return;var _0xNow=Date.now();var _0xElapsed=(_0xNow-_0xC4)/1000;var _0xBody=_0xF01('#announcementBody');var _0xBtn=_0xF01('#announcementBtn');if(!_0xBody||!_0xBtn)return;var _0xScrollTop=_0xBody.scrollTop;var _0xScrollHeight=_0xBody.scrollHeight-_0xBody.clientHeight;var _0xScrollRatio=_0xScrollHeight>0?_0xScrollTop/_0xScrollHeight:1;_0xC7=_0xElapsed>=_0xD1;_0xC8=_0xScrollRatio>=_0xD2;if(_0xC7&&_0xC8){_0xBtn.disabled=false;_0xBtn.textContent='我阅读并同意以上条款内容';}else{if(!_0xC7){_0xBtn.textContent='请阅读公告内容...';}else{_0xBtn.textContent='请滚动阅读至'+Math.round(_0xD2 * 100)+'%...';}}}
function _0xF1C(){if(!_0xB1.sections)return;Object.keys(_0xB1.sections).forEach(function(s){if(s===_0xB2)return;_0xF06(function(){return _0xF05((_0xB1.apiBase||_0xA1)+_0xB1.sections[s].api+"?_="+Date.now()).then(function(r){return r.json();}).then(function(j){_0xB4[s]=j;}).catch(function(){});},_0xBC.LOW).catch(function(){});});}
function _0xF1D(){return _0xF06(function(){return _0xF05(_0xA1+"?_="+Date.now()).then(function(r){if(!r.ok)throw new Error("config load failed "+r.status);return r.json();}).then(function(j){_0xB1=j;_0xB9=0;document.title=j.siteName||'天彬TianBIN';_0xF17();setInterval(_0xF17,150);window.addEventListener('resize',_0xF17);_0xF1B();_0xF1A();_0xF1G();var _0xParams=new URLSearchParams(location.search);var _0xHash=String(location.hash||'').replace(/^#/,'').split('/');var _0xInitTab=_0xParams.get('tab')||_0xHash[0];try{_0xInitTab=decodeURIComponent(_0xInitTab||'');}catch(e){}_0xB2=_0xInitTab&&_0xB1.sections&&_0xB1.sections[_0xInitTab]?_0xInitTab:j.homeId||Object.keys(j.sections||{})[0]||'api';_0xF1E();_0xF21();_0xF22(_0xB2).then(function(){if(_0xHash.length>=2&&_0xHash[0]===_0xB2&&_0xF0R(_0xB2)){var _0xAnchor=String(_0xHash[1]||'');try{_0xAnchor=decodeURIComponent(_0xAnchor);}catch(e){}var _0xL=_0xB4[_0xB2]||[];var _0xFound=_0xL.find(function(_0xIt){return String(_0xIt.id)===_0xAnchor;});if(_0xFound){var _0xI=_0xL.indexOf(_0xFound);if(_0xI>=0)setTimeout(function(){_0xF28(_0xB2,_0xI,_0xFound.id);},400);}else renderNotFound(_0xB2,_0xAnchor);}});_0xF1C();}).catch(function(){_0xB9++;var _0xArea=_0xF01('.content-area');if(_0xArea)_0xArea.innerHTML='<div class="loading">拉取加载数据中...<span class="loading-sub">('+_0xB9+'/3)</span><div class="loading-bar"></div></div>';if(_0xB9>=3)_0xF04();else setTimeout(_0xF1D,_0xF03());});});}
function _0xF1E(){var _0xNav=_0xF01('.mobile-nav');var _0xNavList=(_0xB1.bottomNav&&_0xB1.bottomNav.length)?_0xB1.bottomNav:Object.keys(_0xB1.sections||{}).map(function(id){var s=_0xB1.sections[id];return{id:id,name:s.name||id,icon:s.icon||'•'};});_0xNav.innerHTML=_0xNavList.map(function(s,i){return'<button data-id="'+s.id+'" data-index="'+i+'"><span class="nav-icon">'+s.icon+'</span><em>'+s.name+'</em>'+(s.badge?'<i class="nav-badge" id="badge-'+s.id+'"></i>':'');}).join("");_0xF1F();_0xF21();}
function _0xF1F(){_0xF02('.mobile-nav button').forEach(function(btn){btn.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();var id=this.getAttribute('data-id');if(id&&id!==_0xB2&&!_0xBA)_0xF20(id);});});}
function _0xF20(_0xId){if(_0xBA||_0xId===_0xB2)return;_0xBA=true;_0xB2=_0xId;var _0xPs=_0xF10(_0xId);_0xPs.page=1;_0xPs.filtered=null;_0xB5.searchQuery="";_0xF21();if(_0xB4[_0xId]){_0xF24(_0xId);_0xBA=false;}else{_0xF22(_0xId).then(function(){_0xBA=false;}).catch(function(){_0xBA=false;});}window.scrollTo(0,0);history.replaceState(null,null,"#"+_0xId);setTimeout(function(){_0xBA=false;},800);}
function _0xF21(){_0xF02(".mobile-nav button").forEach(function(btn){btn.classList.toggle("active",btn.dataset.id===_0xB2);});var _0xMH=_0xF01('.mobile-header');if(_0xMH)_0xMH.textContent=((_0xB1.bottomNav||[]).find(function(s){return s.id===_0xB2;})||{}).name||"";}
function _0xF22(_0xId){var _0xArea=_0xF01('.content-area');if(_0xB4[_0xId]){_0xF24(_0xId);_0xF23(_0xId,false);return Promise.resolve();}_0xArea.innerHTML='<div class="loading">拉取加载数据中...<span class="loading-sub">('+_0xB9+'/3)</span><div class="loading-bar"></div></div>';return _0xF23(_0xId,true);}
function _0xF23(_0xId,_0xShow){return _0xF06(function(){return _0xF05((_0xB1.apiBase||_0xA1)+_0xB1.sections[_0xId].api+"?_="+Date.now()).then(function(r){if(!r.ok)throw new Error("data load failed "+r.status);return r.json();}).then(function(j){var _0xChanged=JSON.stringify(_0xB4[_0xId])!==JSON.stringify(j);_0xB4[_0xId]=j;_0xB9=0;if(_0xShow!==false)_0xF24(_0xId);else if(_0xChanged&&_0xId===_0xB2)_0xF24(_0xId);}).catch(function(){_0xB9++;if(_0xShow!==false){var _0xA2=_0xF01('.content-area');if(_0xA2)_0xA2.innerHTML='<div class="loading">拉取加载数据中...<span class="loading-sub">('+_0xB9+'/3)</span><div class="loading-bar"></div></div>';if(_0xB9>=3)_0xF04();else setTimeout(function(){_0xF23(_0xId,true);},_0xF03());}});});}
function _0xF24(_0xId){var _0xWrap=((_0xB4[_0xId]||[]).slice()).map(function(_0xIt,i){return{i:i,it:_0xIt};});_0xWrap.sort(_0xFA9(_0xF0B(_0xId),_0xF0C(_0xId)));var _0xList=_0xWrap.map(function(w){return w.it;});var _0xPs=_0xF10(_0xId);_0xPs.list=_0xList.slice();_0xPs.page=1;_0xPs.total=Math.max(1,Math.ceil(_0xList.length/_0xF09(_0xId)));_0xF25();}

function _0xF25(){var _0xPs=_0xF10(_0xB2);var _0xList=_0xPs.filtered||_0xPs.list;if(!_0xList||_0xList.length===0){if(_0xF0F(_0xB2)&&_0xB5.searchQuery&&/^\d+$/.test(_0xB5.searchQuery)){renderNotFound(_0xB2,_0xB5.searchQuery);return;}_0xF01('.content-area').innerHTML='<div class="loading" style="color:var(--text-tertiary)">暂无内容</div>';return;}var _0xPerPage=_0xF09(_0xB2);_0xPs.total=Math.max(1,Math.ceil(_0xList.length/_0xPerPage));if(_0xPs.page>_0xPs.total)_0xPs.page=_0xPs.total;if(_0xPs.page<1)_0xPs.page=1;var _0xArea=_0xF01('.content-area');var _0xHtml='';var _0xIsOp=_0xF0F(_0xB2);if(_0xF0A(_0xB2)){

_0xHtml+='<div class="section-search active">';
_0xHtml+='<input id="secKey" placeholder="'+( _0xIsOp?'输入数字ID查询':'输入关键词查询')+'" value="'+_0xF00(_0xB5.searchQuery)+'">';
_0xHtml+='<button type="button" data-action="search">查询</button>';
if(_0xB5.searchQuery){_0xHtml+='<button type="button" data-action="back-search" style="padding:12px 18px;background:var(--border-light);color:var(--text);border:none;border-radius:var(--radius-sm);cursor:pointer;font-size:14px;font-weight:600;">返回</button>';}_0xHtml+='<div class="search-history" id="searchHistory"></div>';_0xHtml+='</div>';}var _0xStart=(_0xPs.page-1)*_0xPerPage,_0xEnd=Math.min(_0xStart+_0xPerPage,_0xList.length);for(var i=_0xStart;i<_0xEnd;i++){var _0xItem=_0xList[i];if(!_0xItem)continue;

_0xHtml+='<div class="list-item" data-action="open" data-sid="'+_0xB2+'" data-idx="'+i+'" data-id="'+_0xF00(_0xItem.id||'')+'">';
_0xHtml+='<div class="title">'+(_0xB5.searchQuery?_0xF16(_0xF00(_0xItem.title||""),_0xB5.searchQuery):_0xF00(_0xItem.title||""))+'</div>';
if(_0xIsOp||_0xF0R(_0xB2)){_0xHtml+='<div class="meta">'+_0xF00(_0xItem.date||'')+' · ID:'+_0xF00(_0xItem.id||"?")+' · '+_0xF00(_0xItem.title||"")+'</div>';}else{_0xHtml+='<div class="meta">'+_0xF00(_0xItem.date||"")+' · '+_0xF00(_0xItem.author||"")+'</div>';}_0xHtml+='</div>';}_0xHtml+='<div class="pager">';_0xHtml+='<button type="button" data-action="prev"'+(_0xPs.page<=1?' disabled':'')+'>上一页</button>';_0xHtml+='<span class="page-info">'+_0xPs.page+' / '+_0xPs.total+'</span>';_0xHtml+='<button type="button" data-action="next"'+(_0xPs.page>=_0xPs.total?' disabled':'')+'>下一页</button>';_0xHtml+='</div>';_0xHtml+='<div class="sentinel" id="scrollSentinel"></div>';_0xArea.innerHTML=_0xHtml;if(_0xF0A(_0xB2))_0xF27();}

function _0xF26(){if(!_0xF0A(_0xB2))return;var _0xSk=_0xF01('#secKey');if(!_0xSk)return;var k=(_0xSk.value||'').trim();_0xB5.searchQuery=k;var _0xPs=_0xF10(_0xB2);if(!k){_0xPs.filtered=null;_0xPs.page=1;_0xF25();return;}_0xF36(_0xB2,k);if(_0xF0F(_0xB2)){var _0xRes=_0xF14(_0xB2,k);if(_0xRes&&_0xRes.__notFound)return;_0xPs.filtered=_0xRes;_0xPs.page=1;if(_0xF0R(_0xB2)&&/^\d+$/.test(k)){var _0xL=_0xB4[_0xB2]||[];var _0xF=_0xL.find(function(_0xIt){return String(_0xIt.id)===k;});if(_0xF)history.replaceState(null,null,'#'+_0xB2+'/'+k);}_0xF25();return;}var _0xMode=_0xF0E(_0xB2);if(_0xMode==='weighted')_0xPs.filtered=_0xF12(_0xB2,k);else _0xPs.filtered=_0xF13(_0xB2,k);_0xPs.page=1;_0xF25();}

function _0xF27(){

var _0xKey='searchHist_'+_0xB2;var _0xHist=JSON.parse(sessionStorage.getItem(_0xKey)||'[]');var _0xSh=_0xF01('#searchHistory');if(!_0xSh)return;var _0xHtml='';if(_0xHist.length){_0xHtml+='<div class="search-history">';_0xHtml+=_0xHist.map(function(h){return'<span data-action="history" data-q="'+_0xF00(h)+'">'+_0xF00(h)+'</span>';}).join('');_0xHtml+='<span class="clear-history-btn" data-action="clear-history">清空</span>';_0xHtml+='</div>';}_0xSh.innerHTML=_0xHtml;if(_0xB5.searchQuery){var _0xSk=_0xF01('#secKey');if(_0xSk)_0xSk.value=_0xB5.searchQuery;}}

function _0xF28(_0xSid,_0xIdx,_0xRealId){var _0xHit=_0xF35(_0xSid,_0xIdx,_0xRealId);var _0xItem=_0xHit.item;_0xIdx=_0xHit.idx;if(!_0xItem)return;var _0xModal=_0xF01('.modal');var _0xBody=_0xF01('.modal-body');var _0xHtml='<div class="text">'+( _0xItem.content||"").replace(/\n/g,"<br>").replace(/\t([^\n]+)/g,'<a href="$1" target="_blank" rel="noopener">$1</a>')+'</div>';if(_0xItem.imgs&&_0xItem.imgs.length){_0xHtml+='<div class="img-grid">'+_0xItem.imgs.slice(0,9).map(function(u){return'<img src="'+u+'" data-action="open-img" data-src="'+u+'">';}).join("")+'</div>';}if(_0xItem.html){_0xHtml+='<button type="button" class="show-html-btn" data-action="open-html" data-sid="'+_0xSid+'" data-idx="'+_0xIdx+'" data-id="'+(_0xItem.id||'')+'">立即了解…</button>';}_0xBody.innerHTML=_0xHtml;_0xF01('.modal-header h3').textContent=_0xItem.title||"";var _0xCopyBtn=_0xF01('.copy-link-btn');if(_0xCopyBtn){var _0xSecConf=_0xF08(_0xSid);if(_0xSecConf.copyLink&&_0xItem.id&&_0xF0R(_0xSid)){_0xCopyBtn.classList.add('show');_0xCopyBtn.dataset.url=location.origin+location.pathname+'#'+_0xSid+'/'+_0xItem.id;_0xCopyBtn.onclick=function(){var url=this.dataset.url;if(url){navigator.clipboard.writeText(url).then(function(){var toast=_0xF01('.toast');toast.textContent='链接已复制';toast.classList.add('show');setTimeout(function(){toast.classList.remove('show');},3000);}).catch(function(){alert('复制失败，请手动复制: '+url);});}};}else{_0xCopyBtn.classList.remove('show');_0xCopyBtn.dataset.url='';_0xCopyBtn.onclick=null;}}_0xModal.classList.add("active");}
function _0xF29(_0xSid,_0xIdx,_0xRealId){var _0xHit=_0xF35(_0xSid,_0xIdx,_0xRealId);var _0xItem=_0xHit.item;_0xIdx=_0xHit.idx;if(!_0xItem)return;_0xC2=0;var _0xModal=_0xF01('.html-modal');var _0xBody=_0xF01('.html-modal-body');_0xF01('.html-modal-header h3').textContent=_0xItem.title||"详细内容";var _0xRaw=(_0xItem.html||"").replace(/¥/g,'"');_0xC3=_0xRaw;var _0xTs='?_='+Date.now();var _0xHC=_0xB1.htmlContainer||{};var _0xSbx=(typeof _0xHC.sandbox==="string"&&_0xHC.sandbox)?_0xHC.sandbox:"allow-same-origin allow-scripts allow-popups allow-forms";var _0xGd=_0xF38();var _0xContentHtml='';var _0xExt=false;if(/<iframe/i.test(_0xRaw)){_0xExt=true;_0xContentHtml=_0xRaw.replace(/<iframe/i,'<iframe id="subIframe"');if(_0xContentHtml.indexOf('sandbox')<0)_0xContentHtml=_0xContentHtml.replace(/<iframe/i,'<iframe sandbox="'+_0xSbx+'"');if(_0xContentHtml.indexOf('src="')>=0)_0xContentHtml=_0xContentHtml.replace(/(src="[^"]*)"/,'$1'+_0xTs+'"');}else{_0xContentHtml='<iframe id="subIframe" srcdoc="'+_0xF33(_0xF32(_0xRaw,_0xGd))+'" sandbox="'+_0xSbx+'" style="width:100%;height:100%;border:none;display:block;"></iframe>';}_0xContentHtml+='<button type="button" class="html-reload-btn" data-action="reload">↻</button>';_0xBody.innerHTML=_0xContentHtml;var _0xIframe=_0xF01('#subIframe');if(_0xIframe){_0xIframe.onload=function(){_0xC2=0;_0xF3A();_0xF3D(_0xIframe);};_0xF3A();_0xF3D(_0xIframe);setTimeout(function(){_0xF3A();_0xF3D(_0xIframe);},300);setTimeout(function(){_0xF3A();_0xF3D(_0xIframe);},1500);}_0xModal.classList.add("active");}
function _0xF2A(_0xU){var _0xIm=document.querySelector('.img-modal');if(!_0xIm)return;var _0xImg=_0xIm.querySelector('img');if(_0xImg)_0xImg.src=_0xU;var _0xWm=_0xIm.querySelector('.img-watermark span');if(_0xWm)_0xWm.textContent=(_0xB1.security&&_0xB1.security.watermarkText)||'天彬TianBIN';_0xIm.classList.add('active');document.body.style.overflow='hidden';}
function _0xF2B(_0xSel){var _0xEl=document.querySelector(_0xSel);if(_0xEl)_0xEl.classList.remove('active');if(_0xSel.indexOf('img-modal')>=0)document.body.style.overflow='';if(_0xSel.indexOf('html-modal')>=0){_0xC2=0;var _0xB=_0xF01('.html-modal-body');if(_0xB)_0xB.innerHTML='';}}
function _0xF2C(){var _0xIframe=_0xF01('#subIframe');if(!_0xIframe)return;if(_0xIframe.hasAttribute('srcdoc')){_0xIframe.setAttribute('srcdoc',_0xF33(_0xF32(_0xC3,_0xF38())));setTimeout(function(){_0xF3A();_0xF3D(_0xIframe);},400);}else{var _0xSrc=_0xIframe.src;_0xIframe.src='';setTimeout(function(){_0xIframe.src=_0xSrc+(_0xSrc.indexOf('?')>=0?'&':'?')+'_='+Date.now();setTimeout(function(){_0xF3A();_0xF3D(_0xIframe);},400);},50);}}
function _0xF31(_0xTop){
var _0xStop=function(e){if(!e)return false;if(e.preventDefault)e.preventDefault();if(e.stopPropagation)e.stopPropagation();if(e.stopImmediatePropagation)e.stopImmediatePropagation();return false;};
document.addEventListener('contextmenu',_0xStop,true);
window.addEventListener('contextmenu',_0xStop,true);
document.addEventListener('selectstart',_0xStop,true);
document.addEventListener('dragstart',_0xStop,true);
document.addEventListener('copy',_0xStop,true);
document.addEventListener('cut',_0xStop,true);
document.addEventListener('paste',_0xStop,true);
window.addEventListener('beforeprint',_0xStop,true);
document.addEventListener('keydown',function(e){
var _0xK=String(e.key||'').toLowerCase();
var _0xC=(e.ctrlKey||e.metaKey);
if(e.key==='F12'||e.keyCode===123)return _0xStop(e);
if(_0xC&&e.shiftKey&&(_0xK==='i'||e.keyCode===73))return _0xStop(e);
if(_0xC&&e.shiftKey&&(_0xK==='j'||e.keyCode===74))return _0xStop(e);
if(_0xC&&e.shiftKey&&(_0xK==='c'||e.keyCode===67))return _0xStop(e);
if(_0xC&&(_0xK==='u'||e.keyCode===85))return _0xStop(e);
if(_0xC&&(_0xK==='s'||e.keyCode===83))return _0xStop(e);
if(_0xC&&(_0xK==='p'||e.keyCode===80))return _0xStop(e);
if(_0xC&&(_0xK==='a'||e.keyCode===65))return _0xStop(e);
if(_0xC&&(_0xK==='c'||e.keyCode===67))return _0xStop(e);
if(_0xC&&(_0xK==='v'||e.keyCode===86))return _0xStop(e);
if(_0xC&&(_0xK==='x'||e.keyCode===88))return _0xStop(e);
return true;
},true);
document.oncontextmenu=function(){return false;};
document.onselectstart=function(){return false;};
document.ondragstart=function(){return false;};
window.onbeforeprint=function(){return false;};
try{window.print=function(){};}catch(e){}
try{var _0xSt=document.createElement('style');_0xSt.textContent='*,*::before,*::after{user-select:none!important;-webkit-user-select:none!important;-webkit-touch-callout:none!important;-webkit-user-drag:none!important;}';(document.head||document.documentElement).appendChild(_0xSt);}catch(e){}
try{var _0xNoop=function(){};if(window.console){console.log=_0xNoop;console.debug=_0xNoop;console.info=_0xNoop;console.warn=_0xNoop;console.error=_0xNoop;console.trace=_0xNoop;console.dir=_0xNoop;console.dirxml=_0xNoop;console.group=_0xNoop;console.groupEnd=_0xNoop;console.time=_0xNoop;console.timeEnd=_0xNoop;console.profile=_0xNoop;console.profileEnd=_0xNoop;console.count=_0xNoop;console.exception=_0xNoop;console.table=_0xNoop;console.clear=_0xNoop;}}catch(e){}
try{setInterval(function(){try{debugger;}catch(e){}},1000);}catch(e){}
if(_0xTop){try{setInterval(function(){if(window.outerWidth-window.innerWidth>160||window.outerHeight-window.innerHeight>160){document.body.innerHTML='';}},1000);}catch(e){}}
try{if(window.self!==window.top){document.addEventListener('click',function(e){var _0xT=e.target;if(_0xT&&_0xT.tagName==='A'&&_0xT.target&&String(_0xT.target).indexOf('_top')>=0)return _0xStop(e);return true;},true);}}catch(e){}
}
function _0xF32(_0xHtml,_0xTag){
if(!_0xTag)return _0xHtml;
if(/<head[^>]*>/i.test(_0xHtml))return _0xHtml.replace(/<head[^>]*>/i,function(m){return m+_0xTag;});
if(/<html[^>]*>/i.test(_0xHtml))return _0xHtml.replace(/<html[^>]*>/i,function(m){return m+'<head>'+_0xTag+'</head>';});
if(/<body[^>]*>/i.test(_0xHtml))return _0xHtml.replace(/<body[^>]*>/i,function(m){return m+_0xTag;});
return _0xTag+_0xHtml;
}
function _0xF33(_0xHtml){return String(_0xHtml===undefined||_0xHtml===null?'':_0xHtml).replace(/&/g,'&amp;').replace(/"/g,'&quot;');}
function _0xF3B(_0xD,_0xW){
var _0xStop=function(e){if(!e)return false;if(e.preventDefault)e.preventDefault();if(e.stopPropagation)e.stopPropagation();if(e.stopImmediatePropagation)e.stopImmediatePropagation();return false;};
var _0xKey=function(e){
if(!e)return false;
var _0xK=String(e.key||'').toLowerCase();var _0xC=!!(e.ctrlKey||e.metaKey);
if(e.key==='F12'||e.keyCode===123)return true;
if(_0xC&&e.shiftKey&&(_0xK==='i'||e.keyCode===73))return true;
if(_0xC&&e.shiftKey&&(_0xK==='j'||e.keyCode===74))return true;
if(_0xC&&e.shiftKey&&(_0xK==='c'||e.keyCode===67))return true;
if(_0xC&&(_0xK==='u'||e.keyCode===85))return true;
if(_0xC&&(_0xK==='s'||e.keyCode===83))return true;
if(_0xC&&(_0xK==='p'||e.keyCode===80))return true;
if(_0xC&&(_0xK==='a'||e.keyCode===65))return true;
if(_0xC&&(_0xK==='c'||e.keyCode===67))return true;
if(_0xC&&(_0xK==='v'||e.keyCode===86))return true;
if(_0xC&&(_0xK==='x'||e.keyCode===88))return true;
return false;
};
var _0xEvs=['contextmenu','selectstart','dragstart','copy','cut','paste','beforeprint'];
_0xEvs.forEach(function(n){try{_0xD.addEventListener(n,_0xStop,true);}catch(e){}});
try{_0xD.addEventListener('keydown',function(e){if(_0xKey(e))return _0xStop(e);},true);}catch(e){}
try{_0xD.addEventListener('mousedown',function(e){if(e&&e.button===2)return _0xStop(e);},true);}catch(e){}
try{_0xD.oncontextmenu=function(){return false;};_0xD.onselectstart=function(){return false;};_0xD.ondragstart=function(){return false;};}catch(e){}
if(_0xW){
_0xEvs.forEach(function(n){try{_0xW.addEventListener(n,_0xStop,true);}catch(e){}});
try{_0xW.addEventListener('keydown',function(e){if(_0xKey(e))return _0xStop(e);},true);}catch(e){}
try{_0xW.onbeforeprint=function(){return false;};_0xW.print=function(){};}catch(e){}
try{if(_0xW.console){var _0xN=function(){};['log','debug','info','warn','error','trace','dir','dirxml','group','groupEnd','time','timeEnd','profile','profileEnd','count','table','clear'].forEach(function(k){try{_0xW.console[k]=_0xN;}catch(e){}});}}catch(e){}
}
try{var _0xSt=_0xD.createElement('style');_0xSt.textContent='*,*::before,*::after{user-select:none!important;-webkit-user-select:none!important;-webkit-touch-callout:none!important;-webkit-user-drag:none!important;}';(_0xD.head||_0xD.documentElement||_0xD.body).appendChild(_0xSt);}catch(e){}
try{var _0xS=_0xD.createElement('script');_0xS.id='__tbGuard';_0xS.textContent='try{('+_0xF31.toString()+')(false);}catch(e){}';(_0xD.head||_0xD.documentElement||_0xD.body).appendChild(_0xS);}catch(e){}
}
function _0xF34(_0xFr){if(!_0xFr)return 'blocked';try{var _0xD=_0xFr.contentDocument;if(!_0xD)return 'blocked';var _0xW=null;try{_0xW=_0xFr.contentWindow;}catch(e){}if(_0xD.__tbGuardOn)return 'ok';_0xD.__tbGuardOn=1;_0xF3B(_0xD,_0xW);return 'ok';}catch(e){return 'blocked';}}
function _0xF3A(){
var _0xFr=_0xF01('#subIframe');
if(!_0xFr)return;
var _0xSt=_0xF34(_0xFr);
var _0xM=(_0xB1.htmlContainer||{}).crossOriginShield;
var _0xNeed;
if(_0xM===false)_0xNeed=false;
else if(_0xM===true)_0xNeed=true;
else _0xNeed=(_0xSt!=='ok');
try{window.__tbHtmlGuard=_0xNeed?'shield':'injected';}catch(e){}
_0xF37(_0xNeed);
}
function _0xF38(){return '<'+'script>('+_0xF31.toString()+')(false);<'+'/script>';}
function _0xF3C(_0xFr){
if(!_0xFr)return;
var _0xRun=function(){
try{
var _0xD=_0xFr.contentDocument;
if(!_0xD)return;
var _0xW=null;
try{_0xW=_0xFr.contentWindow;}catch(e){}
var _0xH=Math.max((_0xD.documentElement&&_0xD.documentElement.scrollHeight)||0,(_0xD.body&&_0xD.body.scrollHeight)||0);
if(_0xH>0){
var _0xCur=parseInt(_0xFr.style.height,10)||0;
if(Math.abs(_0xH-_0xCur)>2){_0xFr.style.minHeight='100%';_0xFr.style.height=_0xH+'px';}
}
if(_0xD.__tbFitOn)return;
try{_0xD.__tbFitOn=1;}catch(e){}
try{
var _0xS=_0xD.createElement('style');
_0xS.textContent='html,body{margin:0!important;padding:0!important;overflow-x:hidden!important;overflow-y:visible!important;height:auto!important;min-height:0!important;max-width:100%!important;touch-action:pan-y!important;}img,table,pre,video,iframe{max-width:100%!important;}';
(_0xD.head||_0xD.documentElement||_0xD.body).appendChild(_0xS);
}catch(e){}
if(_0xW){
try{_0xW.addEventListener('resize',function(){setTimeout(_0xRun,80);});}catch(e){}
try{
if(_0xW.ResizeObserver&&!_0xFr.__tbRO){
_0xFr.__tbRO=new _0xW.ResizeObserver(function(){_0xRun();});
if(_0xD.documentElement)_0xFr.__tbRO.observe(_0xD.documentElement);
if(_0xD.body)_0xFr.__tbRO.observe(_0xD.body);
}
}catch(e){}
try{
if(_0xD.MutationObserver&&!_0xFr.__tbMO){
_0xFr.__tbMO=new _0xD.MutationObserver(function(){_0xRun();});
if(_0xD.body)_0xFr.__tbMO.observe(_0xD.body,{childList:true,subtree:true,attributes:true});
}
}catch(e){}
}
}catch(e){}
};
_0xRun();
setTimeout(_0xRun,150);
setTimeout(_0xRun,600);
setTimeout(_0xRun,1500);
}
function _0xF3D(_0xFr){
if(!_0xFr)return;
try{_0xFr.style.touchAction='pan-y';}catch(e){}
try{_0xFr.style.minHeight='100%';}catch(e){}
try{_0xFr.setAttribute('scrolling','auto');}catch(e){}
_0xF3C(_0xFr);
}
function _0xF37(_0xNeed){
var _0xBody=_0xF01('.html-modal-body');
if(!_0xBody)return;
var _0xOld=_0xF01('.html-guard-layer');
if(!_0xNeed){if(_0xOld&&_0xOld.parentNode)_0xOld.parentNode.removeChild(_0xOld);return;}
if(!_0xBody.__tbGuard){
_0xBody.__tbGuard=1;
_0xBody.addEventListener('contextmenu',function(e){e.preventDefault();return false;},true);
_0xBody.addEventListener('selectstart',function(e){e.preventDefault();return false;},true);
_0xBody.addEventListener('dragstart',function(e){e.preventDefault();return false;},true);
_0xBody.addEventListener('mousedown',function(e){if(e&&e.button===2){e.preventDefault();return false;}},true);
try{_0xBody.addEventListener('wheel',function(e){if(e&&e.deltaX&&!e.deltaY){e.preventDefault();}},{passive:false});}catch(e){}
try{_0xBody.addEventListener('touchmove',function(e){if(e&&e.touches&&e.touches.length===1&&_0xBody.__tbX!=null){var _0xT=e.touches[0];var _0xDX=Math.abs(_0xT.clientX-_0xBody.__tbX);var _0xDY=Math.abs(_0xT.clientY-_0xBody.__tbY);if(_0xDX>_0xDY*1.6&&_0xDX>8){e.preventDefault();}}},{passive:false});}catch(e){}
try{_0xBody.addEventListener('touchstart',function(e){if(e&&e.touches&&e.touches.length===1){_0xBody.__tbX=e.touches[0].clientX;_0xBody.__tbY=e.touches[0].clientY;}},{passive:true});}catch(e){}
try{_0xBody.addEventListener('touchend',function(){_0xBody.__tbX=null;_0xBody.__tbY=null;},{passive:true});}catch(e){}
}
if(_0xOld)return;
var _0xL=document.createElement('div');
_0xL.className='html-guard-layer';
_0xL.addEventListener('contextmenu',function(e){e.preventDefault();return false;});
_0xL.addEventListener('selectstart',function(e){e.preventDefault();return false;});
_0xL.addEventListener('dragstart',function(e){e.preventDefault();return false;});
_0xL.addEventListener('mousedown',function(e){if(e.button===2){e.preventDefault();return false;}});
_0xBody.appendChild(_0xL);
}
function _0xF1Y(){
var _0xC=_0xB1.announcement||{};
var _0xU='';
if(typeof _0xB1.announcementUrl==='string'&&_0xB1.announcementUrl)_0xU=_0xB1.announcementUrl;
else if(typeof _0xB1.announceUrl==='string'&&_0xB1.announceUrl)_0xU=_0xB1.announceUrl;
else if(typeof _0xC.url==='string'&&_0xC.url)_0xU=_0xC.url;
else if(typeof _0xC.api==='string'&&_0xC.api)_0xU=_0xC.api;
else if(typeof _0xC.src==='string'&&_0xC.src)_0xU=_0xC.src;
if(!_0xU)_0xU=_0xA3;
return _0xU;
}
function _0xF1X(_0xU){return String(_0xU)+(_0xU.indexOf('?')>=0?'&':'?')+'_='+Date.now();}
function _0xF1G(){var _0xFloatBtn=_0xF01('#musicFloatBtn');var _0xContainer=_0xF01('#musicContainer');if(!_0xFloatBtn||!_0xContainer)return;if(_0xB1.music&&_0xB1.music.enabled){_0xFloatBtn.classList.remove('hidden');_0xFloatBtn.style.display='flex';if(_0xB1.music.icon)_0xFloatBtn.textContent=_0xB1.music.icon;}else{_0xFloatBtn.classList.add('hidden');_0xFloatBtn.style.display='none';return;}_0xFloatBtn.addEventListener('click',function(){_0xContainer.classList.toggle('active');if(_0xContainer.classList.contains('active')&&!_0xD0){_0xD0=true;_0xF1H();}});var _0xCloseBtn=_0xF01('#musicCloseBtn');if(_0xCloseBtn){_0xCloseBtn.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();_0xContainer.classList.remove('active');});}_0xF1I();_0xF1J();}
function _0xF1H(){if(!_0xB1.music||!_0xB1.music.playlistId){_0xF1P('未提供歌单ID（music.playlistId）');return;}_0xCC=[];_0xCD=0;_0xD4=null;_0xD5=0;_0xD8=null;if(_0xD7){clearInterval(_0xD7);_0xD7=null;}try{if(window.aplayers&&window.aplayers.length){for(var _0xAi=0;_0xAi<window.aplayers.length;_0xAi++){try{window.aplayers[_0xAi].destroy();}catch(e){}}window.aplayers.length=0;}}catch(e){}var _0xLb=_0xF01('#musicLrc');if(_0xLb){var _0xOld=_0xLb.querySelectorAll('.aplayer-lrc');for(var i=0;i<_0xOld.length;i++)_0xLb.removeChild(_0xOld[i]);}var _0xTp=_0xF01('#musicLrcTip');if(_0xTp){_0xTp.classList.remove('hide');_0xTp.textContent='歌词加载中…';}var _0xWrap=_0xF01('#musicIframeWrap');if(_0xWrap)_0xWrap.innerHTML='<div class="loading" style="padding:20px;">加载歌单中...<div class="loading-bar"></div></div>';_0xF1O();}
function _0xF1O(){var _0xWrap=_0xF01('#musicIframeWrap');if(!_0xWrap)return;var _0xM=_0xB1.music||{};var _0xApis=[];if(Array.isArray(_0xM.apiServers)&&_0xM.apiServers.length)_0xApis=_0xM.apiServers.slice();else if(Array.isArray(_0xM.apis)&&_0xM.apis.length)_0xApis=_0xM.apis.slice();else if(typeof _0xM.api==='string'&&_0xM.api)_0xApis.push(_0xM.api);if(!_0xApis.length){_0xF1P('未提供音乐接口（music.apiServers）');return;}var _0xFb=_0xM.apiFallback!==false;var _0xTmo=Number(_0xM.apiTimeout)||8000;if(_0xD5>=_0xApis.length||(_0xD5>0&&!_0xFb)){_0xF1P('配置的音乐接口均不可用');return;}var _0xServer=_0xM.server||'netease';var _0xType=_0xM.type||'playlist';var _0xId=_0xM.playlistId;if(!_0xId){_0xF1P('未提供歌单ID（music.playlistId）');return;}var _0xApi=_0xApis[_0xD5];if(_0xApi.indexOf(':server')<0&&_0xApi.indexOf(':type')<0&&_0xApi.indexOf(':id')<0)_0xApi=_0xApi+(_0xApi.indexOf('?')>=0?'&':'?')+'server=:server&type=:type&id=:id&r=:r';var _0xUrl=_0xApi.replace(':server',_0xServer).replace(':type',_0xType).replace(':id',String(_0xId)).replace(':r',Math.random());_0xD8=null;_0xF05(_0xUrl,_0xTmo).then(function(_0xR){if(!_0xR.ok)throw new Error('http '+_0xR.status);return _0xR.json();}).then(function(_0xData){if(!Array.isArray(_0xData)||!_0xData.length)throw new Error('empty');_0xD8=_0xData;_0xF1U(_0xApi,_0xServer,_0xType,_0xId,_0xTmo,_0xFb,_0xApis.length);}).catch(function(){_0xD5++;if(_0xFb&&_0xD5<_0xApis.length){_0xF1O();return;}_0xF1P('音乐接口请求失败，请检查网络');});}
function _0xF1U(_0xApi,_0xServer,_0xType,_0xId,_0xTmo,_0xFb,_0xTotal){var _0xWrap=_0xF01('#musicIframeWrap');if(!_0xWrap)return;if(typeof window.APlayer==='undefined'){_0xF1P('播放器组件未加载（APlayer.min.js）');return;}if(typeof window.loadMeting==='function'){try{window.meting_api=_0xApi;}catch(e){}_0xWrap.innerHTML='<div class="aplayer" id="musicAplayer" data-server="'+_0xServer+'" data-type="'+_0xType+'" data-id="'+String(_0xId)+'" data-api="'+_0xApi.replace(/&/g,'&amp;')+'" data-fixed="false" data-mini="false" data-list-folded="false" data-autoplay="true" data-volume="0.35" data-mutex="true" data-preload="metadata" data-list-max-height="1600" data-theme="#4a9eff"></div>';try{window.loadMeting();}catch(e){}_0xF1V(_0xTmo,_0xFb,_0xTotal);return;}var _0xAudio=(_0xD8||[]).map(function(_0xA){return{name:_0xA.name||_0xA.title||'未知曲目',artist:_0xA.artist||_0xA.author||'未知',url:_0xA.url,cover:_0xA.cover||_0xA.pic,lrc:_0xA.lrc||'',type:_0xA.type||'auto'};}).filter(function(_0xA){return !!_0xA.url;});if(!_0xAudio.length){_0xF1P('歌单数据中没有可播放的音频');return;}_0xWrap.innerHTML='<div id="musicAplayer"></div>';var _0xAp=null;try{_0xAp=new window.APlayer({container:_0xF01('#musicAplayer'),audio:_0xAudio,autoplay:true,volume:0.35,mutex:true,preload:'metadata',theme:'#4a9eff',listFolded:false,listMaxHeight:'1600px',loop:'all',order:'list',lrcType:3});}catch(e){_0xF1P('播放器初始化失败');return;}try{if(!window.aplayers)window.aplayers=[];window.aplayers.push(_0xAp);}catch(e){}_0xF1Q(_0xAp);}
function _0xF1V(_0xTmo,_0xFb,_0xTotal){var _0xWaited=0,_0xStep=200,_0xMax=Math.max(3000,Number(_0xTmo)||8000);var _0xTimer=setInterval(function(){_0xWaited+=_0xStep;var _0xAp=(window.aplayers&&window.aplayers.length)?window.aplayers[window.aplayers.length-1]:null;if(_0xAp&&_0xAp.options&&_0xAp.options.audio&&_0xAp.options.audio.length){clearInterval(_0xTimer);_0xF1Q(_0xAp);return;}if(_0xWaited>=_0xMax){clearInterval(_0xTimer);_0xD5++;if(_0xFb&&_0xD5<_0xTotal){_0xF1O();return;}_0xF1P('歌单加载超时');}},_0xStep);}
function _0xF1Q(_0xAp){_0xD4=_0xAp;try{var _0xVs=_0xF01('#musicVolSlider');_0xAp.volume(Number(_0xVs.value||80)/100,true);}catch(e){}_0xCC=(_0xAp.options.audio||[]).map(function(a,i){return{id:a.id||i,name:a.name||'',artist:a.artist||'',duration:a.duration||0};});if(_0xAp.list&&typeof _0xAp.list.index==='number')_0xCD=_0xAp.list.index;_0xF1R();if(_0xD7)clearInterval(_0xD7);_0xD7=setInterval(function(){_0xF1R();_0xF1T();},800);_0xF1S(_0xAp);_0xF01('#musicPrevBtn').disabled=_0xCC.length<=1;_0xF01('#musicNextBtn').disabled=_0xCC.length<=1;try{if(_0xAp.paused){var _0xP=_0xAp.play();if(_0xP&&_0xP.catch)_0xP.catch(function(){});}}catch(e){}}
function _0xF1S(_0xAp){var _0xBox=_0xF01('#musicLrc');if(!_0xBox)return;var _0xLrc=(_0xAp&&_0xAp.container)?_0xAp.container.querySelector('.aplayer-lrc'):_0xF01('#musicAplayer .aplayer-lrc');if(!_0xLrc)return;if(_0xLrc.parentNode!==_0xBox)_0xBox.appendChild(_0xLrc);_0xLrc.classList.remove('aplayer-lrc-hide');_0xF1T();}
function _0xF1T(){var _0xBox=_0xF01('#musicLrc');var _0xTip=_0xF01('#musicLrcTip');if(!_0xBox||!_0xTip)return;var _0xLrc=_0xBox.querySelector('.aplayer-lrc');var _0xPs=_0xLrc?_0xLrc.querySelectorAll('.aplayer-lrc-contents p'):[];var _0xOk=false;for(var i=0;i<_0xPs.length;i++){var _0xT=(_0xPs[i].textContent||'').trim();if(_0xT&&_0xT!=='加载中'&&_0xT.indexOf('Not available')<0&&_0xT.indexOf('不可用')<0){_0xOk=true;break;}}if(_0xOk){_0xTip.classList.add('hide');if(_0xLrc&&!_0xLrc.classList.contains('aplayer-lrc-hide'))_0xLrc.style.display='block';}else{if(_0xLrc)_0xLrc.style.display='none';_0xTip.classList.remove('hide');var _0xCur=_0xD4&&_0xD4.options&&_0xD4.options.audio?_0xD4.options.audio[_0xCD]:null;_0xTip.textContent=(_0xCur&&!_0xCur.lrc)?'该曲目暂无歌词':'歌词加载中…';}}
function _0xF1R(){if(!_0xD4)return;var _0xIdx=(_0xD4.list&&typeof _0xD4.list.index==='number')?_0xD4.list.index:0;var _0xA=(_0xD4.options.audio||[])[_0xIdx];if(!_0xA)return;_0xCD=_0xIdx;var _0xName=_0xA.name||'未知曲目';var _0xArtist=_0xA.artist||'未知';var _0xTn=_0xF01('#musicTrackName');if(_0xTn&&_0xTn.textContent!==_0xName+' - '+_0xArtist)_0xTn.textContent=_0xName+' - '+_0xArtist;var _0xTi=_0xF01('#musicTitle');var _0xNew='正在播放: '+_0xName;if(_0xTi&&_0xTi.textContent!==_0xNew)_0xTi.textContent=_0xNew;}
function _0xF1P(_0xMsg){var _0xWrap=_0xF01('#musicIframeWrap');if(!_0xWrap)return;var _0xTp0=_0xF01('#musicLrcTip');if(_0xTp0){_0xTp0.classList.remove('hide');_0xTp0.textContent='歌词不可用';}_0xWrap.innerHTML='<div class="music-aplayer-tip" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;height:100%;text-align:center;"><div>'+(_0xMsg||'歌单加载失败')+'<div style="font-size:12px;opacity:.75;margin-top:6px;">接口地址来自 music.apiServers，请确认其可用</div></div><button type="button" id="musicRetryBtn" style="padding:8px 20px;border:none;border-radius:8px;background:var(--primary);color:#fff;cursor:pointer;font-size:13px;font-weight:600;">重新加载</button></div>';var _0xRb=_0xF01('#musicRetryBtn');if(_0xRb)_0xRb.addEventListener('click',function(){_0xD5=0;_0xD8=null;_0xF1H();});}
function _0xF1K(){if(_0xCC.length===0)return;var _0xTrack=_0xCC[_0xCD];var _0xIframeWrap=_0xF01('#musicIframeWrap');var _0xTs='?_='+Date.now();_0xIframeWrap.innerHTML='<iframe id="musicIframe" frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="100%" src="//music.163.com/outchain/player?type=0&id='+_0xB1.music.playlistId+'&auto=0&height=430'+_0xTs+'"></iframe>';_0xF01('#musicTrackName').textContent=_0xTrack.name+' - '+_0xTrack.artist;_0xF01('#musicTitle').textContent='正在播放: '+_0xTrack.name;var _0xTp=_0xF01('#musicLrcTip');if(_0xTp){_0xTp.classList.remove('hide');_0xTp.textContent='当前为备用播放模式，歌词不可用';}}
function _0xF1L(){_0xF01('#musicPrevBtn').disabled=_0xCC.length<=1;_0xF01('#musicNextBtn').disabled=_0xCC.length<=1;}
function _0xF1M(){if(_0xD4){if(_0xD4.skipBack)_0xD4.skipBack();setTimeout(_0xF1R,120);return;}if(_0xCC.length===0)return;_0xCD=(_0xCD-1+_0xCC.length)%_0xCC.length;_0xF1K();}
function _0xF1N(){if(_0xD4){if(_0xD4.skipForward)_0xD4.skipForward();setTimeout(_0xF1R,120);return;}if(_0xCC.length===0)return;_0xCD=(_0xCD+1)%_0xCC.length;_0xF1K();}
function _0xF1I(){_0xF01('#musicPrevBtn').addEventListener('click',_0xF1M);_0xF01('#musicNextBtn').addEventListener('click',_0xF1N);_0xF01('#musicPlayBtn').addEventListener('click',function(){if(_0xD4){if(_0xD4.paused)_0xD4.play();else _0xD4.pause();setTimeout(_0xF1R,120);return;}var _0xIframe=_0xF01('#musicIframe');if(_0xIframe){try{_0xIframe.contentWindow.postMessage('{"method":"play"}','*');}catch(e){}}var _0xVol=_0xF01('#musicVolSlider').value;_0xF01('#musicVolSlider').dispatchEvent(new Event('input'));});_0xF01('#musicStopBtn').addEventListener('click',function(){if(_0xD4){_0xD4.pause();return;}var _0xIframe=_0xF01('#musicIframe');if(_0xIframe){try{_0xIframe.contentWindow.postMessage('{"method":"pause"}','*');}catch(e){}}});_0xF01('#musicVolSlider').addEventListener('input',function(){var _0xVol=this.value;if(_0xD4){try{_0xD4.volume(_0xVol/100,true);}catch(e){}return;}var _0xIframe=_0xF01('#musicIframe');if(_0xIframe){try{_0xIframe.contentWindow.postMessage('{"method":"volume","value":'+(_0xVol/100)+'}','*');}catch(e){}}});}
function _0xF1J(){var _0xHeader=_0xF01('#musicHeader');var _0xContainer=_0xF01('#musicContainer');if(!_0xHeader||!_0xContainer)return;var _0xIsDragging=false;var _0xStartX,_0xStartY,_0xInitLeft,_0xInitTop;_0xHeader.addEventListener('mousedown',function(e){_0xIsDragging=true;_0xStartX=e.clientX;_0xStartY=e.clientY;var rect=_0xContainer.getBoundingClientRect();_0xInitLeft=rect.left;_0xInitTop=rect.top;document.addEventListener('mousemove',_0xMouseMove);document.addEventListener('mouseup',_0xMouseUp);});function _0xMouseMove(e){if(!_0xIsDragging)return;var dx=e.clientX-_0xStartX;var dy=e.clientY-_0xStartY;_0xContainer.style.left=(_0xInitLeft+dx)+'px';_0xContainer.style.top=(_0xInitTop+dy)+'px';_0xContainer.style.right='auto';_0xContainer.style.bottom='auto';}_0xHeader.addEventListener('touchstart',function(e){_0xIsDragging=true;var touch=e.touches[0];_0xStartX=touch.clientX;_0xStartY=touch.clientY;var rect=_0xContainer.getBoundingClientRect();_0xInitLeft=rect.left;_0xInitTop=rect.top;document.addEventListener('touchmove',_0xTouchMove,{passive:false});document.addEventListener('touchend',_0xTouchEnd);});function _0xTouchMove(e){if(!_0xIsDragging)return;e.preventDefault();var touch=e.touches[0];var dx=touch.clientX-_0xStartX;var dy=touch.clientY-_0xStartY;_0xContainer.style.left=(_0xInitLeft+dx)+'px';_0xContainer.style.top=(_0xInitTop+dy)+'px';_0xContainer.style.right='auto';_0xContainer.style.bottom='auto';}function _0xMouseUp(){_0xIsDragging=false;document.removeEventListener('mousemove',_0xMouseMove);document.removeEventListener('mouseup',_0xMouseUp);}function _0xTouchEnd(){_0xIsDragging=false;document.removeEventListener('touchmove',_0xTouchMove);document.removeEventListener('touchend',_0xTouchEnd);}}
document.addEventListener('click',function(e){
    var target=e.target;
    while(target&&target!==document){
        if(target.dataset&&target.dataset.action){
            var action=target.dataset.action;
            if(action==='close-modal'){_0xF01('.modal').classList.remove('active');}
            else if(action==='close-html'){_0xF2B('.html-modal');}
            else if(action==='open-img'){var src=target.dataset.src;if(src)_0xF2A(src);}
            else if(action==='open-html'){var sid=target.dataset.sid;var idx=target.dataset.idx;var id=target.dataset.id;if(sid&&idx)_0xF29(sid,parseInt(idx),id);}
            else if(action==='open'){var sid=target.dataset.sid;var idx=target.dataset.idx;var id=target.dataset.id;if(sid&&idx)_0xF28(sid,parseInt(idx),id);}
            else if(action==='search'){_0xF26();}
            else if(action==='back-search'){_0xB5.searchQuery='';var _0xPs=_0xF10(_0xB2);_0xPs.filtered=null;_0xPs.page=1;_0xF25();}
            else if(action==='history'){var q=target.dataset.q;if(q){_0xB5.searchQuery=q;var sk=_0xF01('#secKey');if(sk)sk.value=q;_0xF26();}}
            else if(action==='clear-history'){var _0xKey='searchHist_'+_0xB2;sessionStorage.removeItem(_0xKey);_0xF27();}
            else if(action==='reload'){_0xF2C();}
            else if(action==='prev'){var _0xPs=_0xF10(_0xB2);if(_0xPs.page>1){_0xPs.page--;_0xF25();window.scrollTo(0,0);}}
            else if(action==='next'){var _0xPs=_0xF10(_0xB2);if(_0xPs.page<_0xPs.total){_0xPs.page++;_0xF25();window.scrollTo(0,0);}}
            break;
        }
        target=target.parentNode;
    }
    var _0xClModal=document.querySelector('.img-modal.active');
    if(_0xClModal&&(e.target===_0xClModal||_0xClModal.contains(e.target))){
        _0xF2B('.img-modal');
    }
});
document.addEventListener('keydown',function(e){
    if(e.key==='Escape'||e.keyCode===27){
        var _0xIm=document.querySelector('.img-modal');
        if(_0xIm&&_0xIm.classList.contains('active')){
            _0xF2B('.img-modal');
        }
    }
});
_0xF1D();
})();
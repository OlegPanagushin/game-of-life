(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{13:function(e,t,n){e.exports={game:"Game_game__ZrfQL",buttons:"Game_buttons__37Sg8",input:"Game_input__1EQ22",gridWrapper:"Game_gridWrapper__2e4jy",grid:"Game_grid__3UiEY",cell:"Game_cell__qfeak"}},36:function(e,t){},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(26),r=n(45),i=n(39),o=n(40),c=function(e){return new Promise((function(t){e(),t()}))},u=function(e,t){var n=function(e){var t=0,n=function(){};return{promise:new Promise((function(a,r){n=function(){return r("canceled")},t=setTimeout(a,e)})),cancel:function(){n(),clearTimeout(t)}}}(t),a=n.cancel,r=n.promise;return{promise:Promise.all([r,c(e)]),clearDelay:a}},s={acorn:[[1,2],[2,4],[3,1],[3,2],[3,5],[3,6],[3,7]],diehard:[[1,7],[2,1],[2,2],[3,2],[3,6],[3,7],[3,8]],glider:[[7,7],[8,8],[8,9],[9,7],[7,8]],gosper_glider_gun:[[5,1],[5,2],[6,1],[6,2],[3,35],[3,36],[4,35],[4,36],[1,25],[2,25],[2,23],[3,21],[3,22],[4,21],[4,22],[5,21],[5,22],[6,23],[6,25],[7,25],[6,18],[5,17],[6,17],[7,17],[4,16],[8,16],[6,15],[3,13],[3,14],[9,13],[9,14],[4,12],[8,12],[5,11],[6,11],[7,11]]},l=function(e){for(var t=[],n=0;n<e;n++){var a=[];a.length=e,a.fill(!1),t.push(a)}return t},d=function(e,t){return 0===e?t-1:e-1},v=function(e,t){return e===t-1?0:e+1},p=function(){function e(t,n,a){Object(i.a)(this,e),this.size=t,this.speed=n,this.onTick=a,this.grid=[],this._history=[],this._stop=function(){},this.grid=l(t),this._updateGrid(this.grid,!1)}return Object(o.a)(e,[{key:"clean",value:function(){this._stop(),delete this.onTick}},{key:"_updateGrid",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this._history.push(this.grid),this.grid=e,this.onTick(this.grid,this._history.length>0)}},{key:"play",value:function(){var e=this;!function t(){var n=u((function(){return e.stepForward()}),e.speed),a=n.promise,r=n.clearDelay;e._stop=r,a.then(t).catch((function(){}))}()}},{key:"stop",value:function(){this._stop()}},{key:"stepForward",value:function(){for(var e=[],t=this.grid,n=0;n<this.size;n++){for(var a=[],r=d(n,this.size),i=v(n,this.size),o=0;o<this.size;o++){var c=d(o,this.size),u=v(o,this.size),s=0,l=t[n][o];t[r][c]&&(s+=1),t[n][c]&&(s+=1),t[i][c]&&(s+=1),t[i][o]&&(s+=1),t[i][u]&&(s+=1),t[n][u]&&(s+=1),t[r][u]&&(s+=1),t[r][o]&&(s+=1),l?(s<2||s>3)&&(l=!1):3===s&&(l=!0),a.push(l)}e.push(a)}this._updateGrid(e)}},{key:"stepBack",value:function(){this.stop();var e=this._history.pop();e&&this._updateGrid(Object(r.a)(e),!1)}},{key:"reset",value:function(){this.stop();var e=l(this.size);this._history=[],this._updateGrid(e,!1)}},{key:"toggleCellState",value:function(e,t){this.grid[e][t]||(this.grid[e][t]=!0,this._updateGrid(this.grid))}},{key:"applyPreset",value:function(e){var t=this;this.reset(),s[e].forEach((function(e){var n=Object(a.a)(e,2),r=n[0],i=n[1];t.size>i&&t.size>i&&(t.grid[r][i]=!0)})),this._updateGrid(this.grid,!1),this.play()}}]),e}()},38:function(e,t,n){"use strict";var a=n(37);n.d(t,"GameService",(function(){return a.a}));n(36)},53:function(e,t,n){e.exports=n(61)},61:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),o=n.n(i),c=n(95),u=n(26),s=n(97),l=n(96),d=n(94),v=n(62),p=n(98),h=n(38),f=n(13),m=n.n(f),g=function(){var e=Object(a.useState)(38),t=Object(u.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)({grid:[],hasHistory:!1}),c=Object(u.a)(o,2),f=c[0],g=f.grid,_=f.hasHistory,y=c[1],k=Object(a.useRef)();Object(a.useEffect)((function(){var e=new h.GameService(n,150,(function(e,t){return y({grid:e,hasHistory:t})}));return k.current=e,function(){e.clean()}}),[k,y,n]);var E=Object(a.useCallback)((function(e){var t=e.target,n=t.dataset.i,a=t.dataset.j;if(n&&a){var r,i=parseInt(n),o=parseInt(a);null===(r=k.current)||void 0===r||r.toggleCellState(i,o)}}),[k]),b=Object(a.useMemo)((function(){return{width:"".concat(100/n,"%"),paddingBottom:"calc(".concat(100/n,"% - 2px)")}}),[n]);return r.a.createElement("div",{className:m.a.game},r.a.createElement("div",{className:m.a.buttons},r.a.createElement(s.a,{color:"primary",onClick:function(){var e;return null===(e=k.current)||void 0===e?void 0:e.play()},variant:"contained"},"Play"),r.a.createElement(s.a,{onClick:function(){var e;return null===(e=k.current)||void 0===e?void 0:e.stop()},variant:"outlined"},"Stop"),r.a.createElement(s.a,{onClick:function(){var e;return null===(e=k.current)||void 0===e?void 0:e.reset()},variant:"outlined"},"Reset"),r.a.createElement(l.a,{className:m.a.input,InputProps:{startAdornment:r.a.createElement(d.a,{position:"start"},r.a.createElement(p.a,null))},inputProps:{style:{textAlign:"right"}},onChange:function(e){return i(+e.target.value)},size:"small",type:"number",value:n,variant:"outlined"})),r.a.createElement(v.a,{variant:"button"},"Generations"),r.a.createElement("div",{className:m.a.buttons},r.a.createElement(s.a,{disabled:!_,onClick:function(){var e;return null===(e=k.current)||void 0===e?void 0:e.stepBack()},variant:"outlined"},"Prev"),r.a.createElement(s.a,{onClick:function(){var e;return null===(e=k.current)||void 0===e?void 0:e.stepForward()},variant:"outlined"},"Next")),r.a.createElement(v.a,{variant:"button"},"Presets"),r.a.createElement("div",{className:m.a.buttons},r.a.createElement(s.a,{onClick:function(){var e;return null===(e=k.current)||void 0===e?void 0:e.applyPreset("glider")},variant:"outlined"},"Glider"),r.a.createElement(s.a,{onClick:function(){var e;return null===(e=k.current)||void 0===e?void 0:e.applyPreset("gosper_glider_gun")},variant:"outlined"},"Gosper glider gun"),r.a.createElement(s.a,{onClick:function(){var e;return null===(e=k.current)||void 0===e?void 0:e.applyPreset("diehard")},variant:"outlined"},"Diehard"),r.a.createElement(s.a,{onClick:function(){var e;return null===(e=k.current)||void 0===e?void 0:e.applyPreset("acorn")},variant:"outlined"},"Acorn")),r.a.createElement("div",{className:m.a.gridWrapper},r.a.createElement("div",{className:m.a.grid,onClick:E},g.map((function(e,t){return e.map((function(e,n){return r.a.createElement("div",{className:m.a.cell,"data-alive":e,"data-i":t,"data-j":n,key:"".concat(t,"-").concat(n),style:b})}))})))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,null),r.a.createElement(g,null)),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.d88388ad.chunk.js.map
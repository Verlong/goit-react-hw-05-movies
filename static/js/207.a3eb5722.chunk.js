"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[207],{207:function(e,i,a){a.r(i),a.d(i,{default:function(){return g}});var s=a(439),n=a(791),t=a(689),l=a(87),r=a(177),o="movie-detail_container__t06cP",c="movie-detail_backToMainLink__KYqmz",d="movie-detail_movieInfoWrapper__gawpO",_="movie-detail_movieInfo__yhXHG",v="movie-detail_ganres__qGqp2",h="movie-detail_owerview__b+4sG",m="movie-detail_navList__-RD-L",u="movie-detail_navLink__KZAz1",j=a(184),g=function(){var e,i,a=(0,n.useState)({}),g=(0,s.Z)(a,2),x=g[0],f=g[1],p=(0,t.TH)(),w=(0,n.useRef)(null!==(e=null===(i=p.state)||void 0===i?void 0:i.from)&&void 0!==e?e:"/movies"),k=(0,t.UO)().movieId;(0,n.useEffect)((function(){(0,r.TP)(k).then((function(e){return f(e)}))}),[k]);var N=x.original_title,b=x.overview,y=x.genres,L=x.poster_path,U=x.vote_average,S=x.release_date,q=x.vote_count,z=new Date(S).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"});return console.log(z),(0,j.jsxs)("div",{className:o,children:[(0,j.jsxs)(l.rU,{to:w.current,className:c,children:["Back to main"," "]}),(0,j.jsxs)("div",{className:d,children:[(0,j.jsx)("img",{src:L?"https://image.tmdb.org/t/p/w300".concat(L):"http://www.suryalaya.org/images/no_image.jpg",width:320,loading:"lazy",alt:N}),(0,j.jsxs)("div",{className:_,children:[(0,j.jsx)("h2",{children:N}),(0,j.jsx)("h3",{children:z}),(0,j.jsx)("ul",{className:v,children:y&&y.length&&y.map((function(e){var i=e.id,a=e.name;return(0,j.jsx)("li",{children:a},i)}))}),(0,j.jsx)("p",{className:h,children:b}),(0,j.jsxs)("h4",{children:["Vote total: ",q]}),(0,j.jsxs)("h4",{children:["Average: ",U]})]})]}),(0,j.jsx)("div",{children:(0,j.jsxs)("ul",{className:m,children:[(0,j.jsx)("li",{children:(0,j.jsx)(l.rU,{to:"cast",className:u,children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(l.rU,{to:"reviews",className:u,children:"Reviews"})})]})}),(0,j.jsx)(n.Suspense,{fallback:(0,j.jsx)("div",{children:"Loading..."}),children:(0,j.jsx)(t.j3,{})})]})}}}]);
//# sourceMappingURL=207.a3eb5722.chunk.js.map
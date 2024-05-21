import{a as v,b as ie}from"./chunk-PXVQN6S7.js";import{b as te}from"./chunk-KWNSXITZ.js";import{a as ee}from"./chunk-7YGWDAWP.js";import{$ as b,Aa as ue,B as c,C as o,Ca as fe,D as m,E as X,F as g,G as J,Ga as ve,H as j,L as K,M as p,N as O,O as P,P as Q,Q as A,R as W,S as I,aa as Y,ba as f,ca as E,da as Z,f as U,fa as D,h as $,ha as re,ia as ne,ja as h,ka as oe,l as z,la as ce,m as u,ma as T,n as k,o as B,oa as C,p as H,q as N,qa as pe,r as M,ra as me,s as R,sa as se,t as x,ta as ae,ua as de,v as s,va as le,w as a,y as F,z as d}from"./chunk-BN6DU3SB.js";var Fe=i=>["/recipes",i],he=(()=>{let e=class e{constructor(r,t,n){this.recipeService=r,this.router=t,this.route=n}ngOnInit(){console.log("id is "+this.id)}};e.\u0275fac=function(t){return new(t||e)(a(v),a(f),a(b))},e.\u0275cmp=u({type:e,selectors:[["app-recipe-item"]],inputs:{recipe:[z.None,"recipeModel","recipe"],id:"id"},decls:8,vars:7,consts:[["routerLinkActive","active",1,"list-group-item","clearfix",2,"cursor","pointer",3,"routerLink"],[1,"pull-left"],["id","name",1,"list-group-item-heading"],[1,"list-group-item-text"],[1,"pull-right"],[1,"img-responsive",2,"max-height","50px",3,"src","alt"]],template:function(t,n){t&1&&(c(0,"a",0)(1,"div",1)(2,"h4",2),p(3),o(),c(4,"p",3),p(5),o()(),c(6,"span",4),m(7,"img",5),o()()),t&2&&(d("routerLink",W(5,Fe,n.id)),s(3),O(n.recipe.name),s(2),O(n.recipe.description),s(2),j("alt",n.recipe.name),d("src",n.recipe.imagePath,x))},dependencies:[E,Z]});let i=e;return i})();function Ee(i,e){if(i&1&&m(0,"app-recipe-item",4),i&2){let y=e.$implicit,r=e.index;d("recipeModel",y)("id",r)}}var we=()=>["new"],Se=(()=>{let e=class e{constructor(r,t,n){this.recipeService=r,this.router=t,this.route=n}ngOnInit(){this.subscription=this.recipeService.recipesChanged.subscribe(r=>{this.recipies=r}),this.recipies=this.recipeService.getRecipes()}ngOnDestroy(){this.subscription.unsubscribe()}};e.\u0275fac=function(t){return new(t||e)(a(v),a(f),a(b))},e.\u0275cmp=u({type:e,selectors:[["app-recipe-list"]],decls:8,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[1,"btn","btn-success",3,"routerLink"],[3,"recipeModel","id",4,"ngFor","ngForOf"],[3,"recipeModel","id"]],template:function(t,n){t&1&&(c(0,"div",0)(1,"div",1)(2,"button",2),p(3,"New Recipe"),o()()(),m(4,"hr"),c(5,"div",0)(6,"div",1),F(7,Ee,1,2,"app-recipe-item",3),o()()),t&2&&(s(2),d("routerLink",A(2,we)),s(5),d("ngForOf",n.recipies))},dependencies:[E,I,he]});let i=e;return i})();var ye=(()=>{let e=class e{constructor(){}ngOnInit(){}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["app-recipes"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7"]],template:function(t,n){t&1&&(c(0,"div",0)(1,"div",1),m(2,"app-recipe-list"),o(),c(3,"div",2),m(4,"router-outlet"),o()())},dependencies:[Y,Se]});let i=e;return i})();function _e(i,e){if(i&1&&(c(0,"li",12),p(1),o()),i&2){let y=e.$implicit;s(),Q(" ",y.name," : ",y.amount," ")}}var ke=()=>["edit"],be=(()=>{let e=class e{constructor(r,t,n){this.recipeService=r,this.route=t,this.router=n}addToShoppingList(){this.recipeService.addIngredients(this.recipe.ingredients)}ngOnInit(){this.route.params.subscribe(r=>{this.id=+r.id,this.recipe=this.recipeService.getRecipeById(this.id)}),console.log("item (object) from details "+this.recipe)}onEdit(){}onDelete(){this.recipeService.deleteItem(this.id),this.router.navigate(["/recipes"])}};e.\u0275fac=function(t){return new(t||e)(a(v),a(b),a(f))},e.\u0275cmp=u({type:e,selectors:[["app-recipe-detail"]],decls:37,vars:7,consts:[[1,"row"],[1,"col-xs-12"],["src","","alt","",1,"img-responsive"],["appDropdown","",1,"btn-group"],["type","button",1,"btn","btn-primary","dropdown-toggle"],[1,"caret"],[1,"dropdown-menu"],[2,"cursor","pointer",3,"click"],[2,"cursor","pointer",3,"routerLink","click"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"img-responsive",2,"max-height","50px",3,"src","alt"],[1,"list-group-item"]],template:function(t,n){t&1&&(c(0,"div",0)(1,"div",1),m(2,"img",2),o()(),c(3,"div",0)(4,"div",1)(5,"h1"),p(6,"Recipe Name"),o()()(),c(7,"div",0)(8,"div",1)(9,"div",3)(10,"button",4),p(11,"Manage Recipe "),m(12,"span",5),o(),c(13,"ul",6)(14,"li")(15,"a",7),g("click",function(){return n.addToShoppingList()}),p(16,"Add igredients to Shopping list"),o()(),c(17,"li")(18,"a",8),g("click",function(){return n.onEdit()}),p(19,"Edit Recipe"),o()(),c(20,"li")(21,"a",7),g("click",function(){return n.onDelete()}),p(22,"Delete Recipe"),o()()()()()(),c(23,"div",0)(24,"div",1),p(25),o()(),c(26,"div",0)(27,"div",1),p(28),o()(),c(29,"div",0)(30,"div",1)(31,"ul",9),F(32,_e,2,2,"li",10),o(),m(33,"img",11),o()(),c(34,"div",0)(35,"div",1),p(36," Ingredients: "),o()()),t&2&&(s(18),d("routerLink",A(6,ke)),s(7),P(" Name ",n.recipe.name," "),s(3),P(" Description: ",n.recipe.description," "),s(4),d("ngForOf",n.recipe.ingredients),s(),j("alt",n.recipe.name),d("src",n.recipe.imagePath,x))},dependencies:[E,re,I]});let i=e;return i})();var Ce=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["app-recipe-start"]],decls:2,vars:0,template:function(t,n){t&1&&(c(0,"h3"),p(1,"Select a Recipe"),o())}});let i=e;return i})();function Ne(i,e){if(i&1){let y=X();c(0,"div",17)(1,"div",18),m(2,"input",19),o(),c(3,"div",20),m(4,"input",21),o(),c(5,"div",20)(6,"button",22),g("click",function(){let n=B(y).index,l=J();return H(l.onDelete(n))}),p(7,"X"),o()()()}if(i&2){let y=e.index;d("formGroupName",y)}}var G=(()=>{let e=class e{constructor(r,t,n,l){this.route=r,this.recipeService=t,this.sH=n,this.router=l,this.editMode=!1}ngOnInit(){this.route.params.subscribe(r=>{this.id=+r.id,this.editMode=r.id!=null,console.log(this.editMode),this.initForm()})}initForm(){let r="",t="",n="",l=new ue([]);if(this.editMode){let w=this.recipeService.getRecipeById(this.id);if(r=w.name,t=w.imagePath,n=w.description,w.ingredients)for(let V of w.ingredients)l.push(new T({name:new C(V.name,h.required),amount:new C(V.amount,[h.required,h.pattern(/^[1-9]+[0-9]*$/)])}))}this.recipeForm=new T({name:new C(r,h.required),imagePath:new C(t,h.required),desc:new C(n,h.required),ingredients:l})}onSubmit(){console.log(this.recipeForm),this.editMode?this.recipeService.updateRecipe(this.id,this.recipeForm.value):this.recipeService.addRecipe(this.recipeForm.value),this.onCancel()}get controls(){return this.recipeForm.get("ingredients").controls}onAdd(){this.recipeForm.get("ingredients").push(new T({name:new C(null,h.required),amount:new C(null,[h.required,h.pattern(/^[1-9]+[0-9]*$/)])}))}onCancel(){this.router.navigate(["../"],{relativeTo:this.route})}onDelete(r){this.recipeForm.get("ingredients").removeAt(r)}};e.\u0275fac=function(t){return new(t||e)(a(b),a(v),a(te),a(f))},e.\u0275cmp=u({type:e,selectors:[["app-recipe-edit"]],decls:39,vars:4,consts:[[1,"row"],[1,"col-xs-12"],[3,"formGroup","ngSubmit"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","submit",1,"btn","btn-danger",3,"click"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],["for","imagePath"],["type","text","id","imagePath","formControlName","imagePath",1,"form-control"],["imagePath",""],[1,"img-responsive",3,"src"],["for","desc"],["type","text","id","desc","formControlName","desc","rows","6",1,"form-control"],["formArrayName","ingredients",1,"col-xs-12"],["class","row","style","margin-top: 2vh",3,"formGroupName",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-success",3,"click"],[1,"row",2,"margin-top","2vh",3,"formGroupName"],[1,"col-xs-8"],["type","text","formControlName","name",1,"form-control"],[1,"col-xs-2"],["type","number","formControlName","amount",1,"form-control"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(t,n){if(t&1&&(c(0,"div",0)(1,"div",1)(2,"form",2),g("ngSubmit",function(){return n.onSubmit()}),c(3,"div",0)(4,"div",1)(5,"button",3),p(6,"Save"),o(),c(7,"button",4),g("click",function(){return n.onCancel()}),p(8,"Cancel"),o()()(),c(9,"div",0)(10,"div",1)(11,"div",5)(12,"label",6),p(13,"Name"),o(),m(14,"input",7),o()()(),c(15,"div",0)(16,"div",1)(17,"div",5)(18,"label",8),p(19,"Image URL"),o(),m(20,"input",9,10),o()()(),c(22,"div",0)(23,"div",1),m(24,"img",11),o()(),c(25,"div",0)(26,"div",1)(27,"div",5)(28,"label",12),p(29,"Description"),o(),m(30,"textarea",13),o()()(),c(31,"div",0)(32,"div",14),F(33,Ne,8,1,"div",15),m(34,"hr"),c(35,"div",0)(36,"div",1)(37,"button",16),g("click",function(){return n.onAdd()}),p(38,"Add Ingredient"),o()()()()()()()()),t&2){let l=K(21);s(2),d("formGroup",n.recipeForm),s(3),d("disabled",!n.recipeForm.valid),s(19),d("src",l.value,x),s(9),d("ngForOf",n.controls)}},dependencies:[pe,ne,me,oe,ce,se,le,ae,de,I],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]});let i=e;return i})();var Re=(()=>{let e=class e{constructor(r,t){this.authService=r,this.router=t}canActivate(r,t){return this.authService.user.pipe($(1),U(n=>n?!0:this.router.createUrlTree(["/auth"])))}};e.\u0275fac=function(t){return new(t||e)(R(ee),R(f))},e.\u0275prov=N({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var q=(()=>{let e=class e{constructor(r,t){this.dataStorageService=r,this.recipeService=t}resolve(r,t){let n=this.recipeService.getRecipes();return n.length===0?this.dataStorageService.fetchRecipes():n}};e.\u0275fac=function(t){return new(t||e)(R(ie),R(v))},e.\u0275prov=N({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var Me=[{path:"",component:ye,canActivate:[Re],children:[{path:"",component:Ce},{path:"new",component:G},{path:":id",component:be,resolve:[q]},{path:":id/edit",component:G,resolve:[q]}]}],xe=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=k({type:e}),e.\u0275inj=M({imports:[D.forChild(Me),D]});let i=e;return i})();var ht=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=k({type:e}),e.\u0275inj=M({imports:[D,fe,xe,ve]});let i=e;return i})();export{ht as RecipesModule};
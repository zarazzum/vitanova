
// Menu Starts Here


timegap=500
followspeed=5
followrate=40
suboffset_top=10;
suboffset_left=10;

effect = "fade(duration=0.3);Shadow(color='#777777', Direction=135, Strength=5)"





prop2=[						// prop1 is an array of properties you can have as many property arrays as you need
"ffffff",					// Off Font Color
"568FB7",					// Off Back Color
"000000",					// On Font Color
"568FB7",					// On Back Color
"568FB7",					// Border Color
10,						// Font Size
"normal",					// Font Style 
"bold",					// Font Weight
"Verdana,Tahoma,Helvetica",	        // Font
3,					// Padding
"arrow.gif",				// Sub Menu Image (Leave blank if not needed)
0,					// 3D Border & Separator
"66ffff",				// 3D High Color
"000099",				// 3D Low Color
,					// Referer item Font Color (leave this blank to disable)
,					// Referer item Back Color (leave this blank to disable)
					// Sub Image on master menu items (leave blank to disable)
]





prop1=[						// prop1 is an array of properties you can have as many property arrays as you need
"000000",					// Off Font Color
"F1F1F1",					// Off Back Color
"000000",					// On Font Color
"CCCCCC",					// On Back Color
"999999",					// Border Color
10,						// Font Size
"normal",					// Font Style 
"normal",					// Font Weight
"Verdana,Tahoma,Helvetica",	                // Font
3,					// Padding
"arrow.gif",				// Sub Menu Image (Leave blank if not needed)
0,					// 3D Border & Separator
"66ffff",				// 3D High Color
"000099",				// 3D Low Color
,					// Referer item Font Color (leave this blank to disable)
,					// Referer item Back Color (leave this blank to disable)
					// Sub Image on master menu items (leave blank to disable)
]








menu1=[			        // This is the array that contains your menu properties and details
1,				// Top
18,				// left
,				// Width
1,				// Border Width
"left",		                // Screen Position - here you can use "center;left;right;middle;top;bottom"
prop2,			        // Properties Array - this is set higher up, as above
1,				// Always Visible - allows the menu item to be visible at all time
"center",		        // Alignment - sets the menu elements alignment, HTML values are valid here for example: left, right or center
,				// Filter - Text variable for setting transitional effects on menu activation
,				// Follow Scrolling - Tells the menu item to follow the user down the screen
1, 				// Horizontal Menu - Tells the menu to be horizontal instead of top to bottom style
,				// Keep Alive - Keeps the menu visible until the user moves over another menu or clicks elsewhere on the page
,				// Position of sub image left:center:right:middle:top:bottom
,				// Show an image on top menu bars indicating a sub menu exists below
,				// Reserved for future use
"Home page <img src=\"files/79.gif\" align=absmiddle border=0 width=79 height=10\>",
"show-menu2",,"",1              // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,
"Visual projects <img src=\"files/78.gif\" align=absmiddle border=0 width=78 height=10\>",
"show-menu3",,"",1
,
"Dance projects <img src=\"files/78.gif\" align=absmiddle border=0 width=78 height=10\>",
"show-menu4",,"",1
,
"Gallery <img src=\"files/78.gif\" align=absmiddle border=0 width=78 height=10\>",
"show-menu5",,"",1
,
"Press <img src=\"files/78.gif\" align=absmiddle border=0 width=78 height=10\>",
"show-menu6",,"",1
,
"Contact <img src=\"files/78.gif\" align=absmiddle border=0 width=78 height=10\>",
"show-menu7",,"",1
,
"Language <img src=\"files/78.gif\" align=absmiddle border=0 width=78 height=10\>",
"show-menu8",,"",1]

menu2=[
,,180,1,"",prop1,,"left",effect,,,,,,,
"Home page","../index.html",,,1
]

menu3=[
,,180,1,"",prop1,,"left",effect,,,,,,,
"Brain extension","../visual/brain extension/brain.html",,,1,
"Dancers","../visual/dancers/dancers.html",,,1,
"Urban beast","../visual/urban beast/urban.html",,,1,
"Aliens","../visual/aliens/aliens.html",,,1,
"Klassic","../visual/klassic/klassic.html",,,1
]

menu4=[
,,180,1,"",prop1,,"left",effect,,,,,,,
"","",,,1
]

menu5=[
,,180,1,"",prop1,,"left",effect,,,,,,,
"Brain extension","../visual/brain extension/im_big/andrey1.html",,,1,
"Dancers","../visual/dancers/im_big/0002.html",,,1,
"Urban beast","../visual/urban beast/im_big/slava.html",,,1,
"Aliens","../visual/aliens/im_big/1georgy.html",,,1,
"Klassic","../visual/klassic/im_big/benjamin.html",,,1
]

menu6=[
,,180,1,"",prop1,,"left",effect,,,,,,,
"����� �� ��������","../press/press.html",,,1
]

menu7=[
,,180,1,"",prop1,,"left",effect,,,,,,,
"e-mail","mailto:internina13@hotmail.com",,,1
]

menu8=[
,,180,1,"",prop1,,"left",effect,,,,,,,
"","",,,1
]


timer=setTimeout("sis()",9999);
d=document
smc=-1;
ns4=(d.layers)?true:false
ns6=(navigator.userAgent.indexOf("Gecko")!=-1)?true:false
mac=(navigator.appVersion.indexOf("Mac")!=-1)?true:false
if(ns6)mac=false
opera=(navigator.userAgent.indexOf("Opera")!=-1)?true:false
ns61=(parseInt(navigator.productSub)>=20010726)?true:false
ie4=(!d.getElementById&&d.all)?true:false;
konq=(navigator.userAgent.indexOf("Konqueror")!=-1)?true:false
mp=(ns6)?"pointer":"hand";atop=5;oatop=0;aleft=0;oaleft=1
var a,am,oa,im,om,flta;hlarr=new Array();hlcnt=0;hll=0
timo=0;el=0;nshl=0;var omv=0;df=1;im=0;ofrac=0;omnu=0;ac=15;m=1
var imar=new Array();mr=","
while(eval("window.menu"+m)){mr+="menu"+m+",";tmenu=eval("menu"+m);m++};mr=mr+" ";mr=mr.split("\,");menus=mr.length-1;bgt="";if(!opera)bgt="Color"
var cgm=0;
function setlayer(gm){cgm=gm}
function clayers(la,indent,flay){for(var i=0;i<la.length;i++){if(la[i].id==flay){setlayer(la[i]);return}if(i<99999&&la[i].document.layers.length){nla=la[i].document.layers;clayers(nla,indent+"",flay)}}}
function gmobj(mtxt){if(d.getElementById){m=d.getElementById(mtxt)}else if(d.all){m=d.all[mtxt]}else if(d.layers){clayers(document.layers,0,mtxt);m=cgm;}return m;}
function gmstyle(mtxt){m=gmobj(mtxt);if(!ns4){m=m.style;}return m;}
function spos(gm,t_,l_,h_,w_){if(ns4){gms=gm;if(w_)gms.clip.width=w_;if(h_)gms.clip.height=h_;}else if(opera){gms=gm.style;if(w_)gms.pixelWidth=w_;if(h_)gms.pixelHeight=h_}else{gms=gm.style;if(w_)gms.width=w_;if(h_)gms.height=h_;}if(t_)gms.top=t_;if(l_)gms.left=l_}
function gpos(gm){if(ns4){t_=gm.top;l_=gm.left;h_=gm.clip.height;w_=gm.clip.width;}else if(opera){t_=gm.style.pixelTop;l_=gm.style.pixelLeft;h_=gm.style.pixelHeight;w_=gm.style.pixelWidth;}else if(ns6){t_=gm.offsetTop;l_=gm.offsetLeft;h_=gm.offsetHeight;w_=gm.offsetWidth}else{t_=gm.offsetTop;l_=gm.offsetLeft;h_=gm.offsetHeight;w_=gm.offsetWidth;}if(konq){w_=parseInt(gm.style.width);h_=parseInt(gm.style.height);}var gpa=new Array();gpa[0]=t_;gpa[1]=l_;gpa[2]=h_;gpa[3]=w_;return(gpa)}
function close_el(){for(xa=hlarr.length-1;xa>=0;xa--){ti=hlarr[xa].split("-");tmenu=eval("menu"+ti[0]);if(ns4){shl(ti[0]-1,ti[1],'hide');}else{arg=gmobj("el"+ti[1]);arg.style.backgroundColor="#"+tmenu[5][1];if(opera)arg.style.background="#"+tmenu[5][1];arg.style.color="#"+tmenu[5][0];}if("menu"+ti[0]==hll){if(ns4)shl(ti[0]-1,hel,'show');return}}hlcnt=0;hlarr=new Array()}
function closeallmenus(){om=0;if(ns4){omv.visibility="hide"}for(a=1;a<menus;a++){menu=eval("menu"+a);mi=gmstyle("menu"+a);if (menu[6]!=1){mi.visibility='hidden'}else{am=""}}hll="";close_el();}
function rep_img(){if(timo){timo.src=o_img}}
function popdn(){arg=popdn.arguments;if(arg[0]){menu=eval(window.arg[2]);mnum=arg[2].substr(4,4);if(arg[3].substr(0,5)!="show-"){if(!ns4){if(arg[1]==smc&&menu[5][14]){menu[5][0]=menu[5][14];menu[5][1]=menu[5][15];}arg[0].style.backgroundColor="#"+menu[5][1];if(opera)arg[0].style.background="#"+menu[5][1];arg[0].style.color="#"+menu[5][0]}if(arg[1]==smc&&menu[5][14]){menu[5][0]=ofc;menu[5][1]=obc;}}else{if(ns4)omv=0;hlarr[hlcnt]=mnum+"-"+arg[1];hlcnt++;}}if(!menu[11])timer=setTimeout("closeallmenus()",timegap)}
function dc(){d.cookie=sel;tr=ltarg.split("=");if(tr[1])parent.frames[tr[1]].location.href=nshl;else location.href=nshl;}
function openurl(url){window.open(url)}
function sis()
{
	for(a=1;a<imar.length;a++)
	{
		tim=imar[a].split("_");
		if(tim[4]){tim[3]=tim[3]+"_"+tim[4]}
		menu=eval(window.tim[3]);
		if(ns4)
		{
			mtl=gmobj("el"+tim[2]);			
			ht=(mtl.clip.height/2);
			wd=mtl.clip.width-mtl.clip.left-8;eln="";
			for(x=0;x<2;x++)
			{
				mtl=d.layers.eval(tim[3]).document.layers.eval(eln+"el"+tim[2]).document.layers.eval(imar[a]);
				mtl.left=wd;
				if(menu[13]=="left")mtl.left=10
				mtl.top=ht-(mtl.clip.height/2)-1;
				eln="m"
			}
		}
		else
		{
			imo=gmobj(imar[a]);
			im=gmobj("el"+tim[2]);
			imo.style.left=im.offsetWidth-8;
			if(menu[12]=="left")imo.style.left=8
			cr=0;
			if(ns6&&!ns61)
			{
				mn=gmobj(tim[3])
				cr=mn.offsetTop
			}
			if(mac)cr=4;
			imo.style.top=im.offsetTop+(im.offsetHeight/2)-(imo.offsetHeight/2)-cr
		}
		
		if(opera)
		{
			imo.style.top=im.offsetTop+(im.style.pixelHeight/2)-4;
			if(menu[12]=="left"){}else{imo.style.left=im.style.pixelWidth-8}
		}
	}
}


function fixb(mnu)
{
	menu=eval(mnu);
	mn=gmobj(mnu);
	if(ns4){if(menu[10])mn.clip.width=mn.clip.width+menu[3];return}
	el+=((menu.length-ac)/5);
	ml=gmobj("el"+(el-1));
	mp=gpos(mn);
	if(ns6){mp[3]=mp[3]-menu[3]*4;mp[2]=mp[2]-menu[3]*2}
	else if(mac){mn.style.height=ml.offsetTop+ml.offsetHeight+(menu[3]*2);mn.style.height=mn.style.height-menu[5][9];if(!menu[2]){mp[2]=1}}
	else if(opera){mle=gpos(ml);ooc=6;if(menu[menu.length-4].substring(0,5)=="show-")ooc=0;mp[3]=mle[3]+ooc;}
	if(!d.all||opera)spos(mn,null,null,mp[2],mp[3]);
	if(menu[10]){oh=0;tw=0;mtl=0;if(opera){tw=menu[3];tp=tw}else{tp=null;}		
	ic=(menu.length-ac)/5;
	for (y=el-ic;y<el;y++){
		ty=gmobj("el"+y);
		thy=gmobj("hel"+y);
		typ=gpos(ty);
		spos(thy,tp,tw,null,null);
		if(!menu[2]){if(mac){thy.style.width=1;ty.style.width=thy.offsetWidth+menu[5][9];tw=tw+thy.offsetWidth+menu[3]}else if(opera){tw=tw+thy.style.pixelWidth+menu[3];ty.style.pixelTop=0;}else{tw=tw+typ[3]+menu[3];}}else{if(opera){tw=tw+menu[2]+(menu[5][9]*2)-menu[3]}else{tw=tw+menu[2]-menu[3]}}
		if(typ[3]>oh)oh=typ[2]
	}
	if(d.all||opera){oh=oh+(menu[3]*2);tw=tw+menu[3];}
	if(ns6||opera){tw=tw-menu[3]}
	spos(mn,null,null,oh,tw)
	}
}
function sm(v1){if(flta){ap=gmobj(v1);if(ap.filters[0]) ap.filters[0].Apply()}else{if(menu[8]){ts=menu[8].substr(0,4);if (ts.toUpperCase()=="FADE"){}}}mi.visibility='visible';if(flta){if(ap.filters[0])ap.filters[0].Play()}}
function popup(mn){omv.visibility='hide';clearTimeout(timer);closeallmenus();mtxt='menu'+mn;mi=gmstyle(mtxt);flta=0;if((d.all&&d.getElementById)&&!mac){ap=gmobj(mtxt);getflta(ap);}sm(mtxt);am=mn}
function shl(lyr,el,s){clearTimeout(timer);mt=gmobj("el"+el);omv.visibility="hide";menu=eval(lyr);if(menu[13]!="form")mt.visibility=s;omv=mt;}
function popi(v1,lyr,el)
{
	sel="smenu="+el+"#";if(!om)om=lyr;clearTimeout(timer);if (ns4){timo=eval("document.im"+el)}else{timo=gmobj("im"+el)}
	o_img="";if (timo){o_img=timo.src;ima=o_img.split(".");enD=ima.length;ima[enD-2]=ima[enD-2]+"_over";nsrc="";for(eD=0;eD<enD;eD++){nsrc=nsrc+ima[eD]+"."}nsrc=nsrc.substring(0,nsrc.length-1);ta=om.split(",");NI1=new Image;NI1.src=nsrc;if(NI1.complete>0)timo.src=nsrc;}

	
	if(v1.substring(0,5)=="show-")
	{
		v1=v1.substring(5,20);
		menu=eval(v1);
		omnu=v1;
		container=eval(lyr);
		mi=gmobj(v1);
		gp=gpos(gmobj(lyr))
		h3="";
		if(container[10])h3="h";
		if(ns4){tel=gpos(gmobj("el"+el))
		}else{tel=gpos(gmobj(h3+"el"+el))}
		np=gpos(mi);
		if(container[10])
		{
			if(!ns61&&ns6){gp[1]=-1;gp[0]--}
			if(ns4||mac)gp[1]--;
			if(mac)gp[0]--;				
			if(container[4].indexOf("bottom")>0){gp[0]=gp[0]-np[2]-tel[2]+container[0]}
			if(tel[1]+gp[1]+np[3]>ww)
			{
				gp[1]=ww-np[3]-tel[1];
				if(!d.all)gp[1]=gp[1]-14
			}
			mtop=gp[0]+gp[2]-1;
			mleft=tel[1]+gp[1];
			m0=menu[0];
			if(m0){m0=m0+"";if(m0.indexOf("offset=")==0){os=m0.substr(7,99);mtop=(parseInt(os)+mtop);}else{if(m0)mtop=parseInt(m0);}}			
			m1=menu[1];if(m1){m1=m1+"";if(m1.indexOf("offset=")==0){os=menu[1].substr(7,99);mleft=(parseInt(os)+mleft);}else{if(m1)mleft=m1;}}
			spos(mi,mtop,mleft,null,null);
		}
		else
		{
			if(!ns61&&ns6)tel[0]=tel[0]-gp[0];
			nt=tel[0]+gp[0]+suboffset_top;
			nl=gp[1]+tel[3]-suboffset_left;
			if(gp[3]+nl>(ww-25)){nl=gp[1]-np[3]+suboffset_left;}
			spos(mi,nt,nl,null,null);
		}
		sm(v1);
		om+=","+v1;
		if(!ns4)mi.style.visibility="visible";
	}
	
	ta=om.split(",")
	strt=0;
	
	for(a=0;a<ta.length;a++)
	{
		if (ta[a]==v1)strt=0;
		if (strt)
		{
			if(ta[a])
			{
				hll=lyr;
				hel=el;
				close_el(el);
				mi=gmstyle(ta[a]);
				mi.visibility='hidden';
			}
		ta[a]=""
		}
		if(ta[a]==lyr)strt=1;
	}
	mmenu=eval(lyr)
	if(mmenu[6]&&lyr!=ta[0])
	{
		closeallmenus();
		if (ns4)shl(lyr,el,'show');
		mi=gmstyle(v1);
		mi.visibility='visible';
		ta=[v1];
	}
	om=""
	disp=0
	for(a=0;a<ta.length;a++)
	{
		if(ta[a]==lyr)frs=a
		if(ta[a]==v1)fre=a
		if (disp||(a>frs&&a<fre))
		{
			if (ta[a]&&ta[a]!=v1)
			{
				mi=gmstyle(ta[a]);
				mi.visibility='hidden';
			}
		}
		else
		{
			if (ta[a])om+=ta[a]+",";
		}
		if (v1==ta[a])disp=1
	}	
}
function stch(ms){window.status=ms; return true}
function hl()
{		
	arg=hl.arguments;
	if(smc==el&&arg[2][14]){ofc=arg[2][0];obc=arg[2][1];arg[2][0]=arg[2][14];arg[2][1]=arg[2][15]}
	hlnk=arg[1];if(arg[7]+""=="undefined"){arg[7]=hlnk}
	am=" "+a;am=am.length-1;subimg="";arg[0]+=""
	if (ns6){dwd=arg[2][9]*2}else{dwd=0}
	if (ns4){if (el==0){st="<style type=\"text/css\">A.m{text-decoration:none;}</style>";d.write(st);oatop=atop;}else{mtl=gmobj("el"+(el-1));if (oatop==atop){atop+=mtl.clip.height}else{atop=menu[3];}oatop=atop}if (menu[10]){atop=menu[3];if (oaleft==aleft){aleft+=mtl.clip.width+menu[3]}else{aleft=menu[3];oaleft=aleft}oaleft=aleft}else{aleft=menu[3];}}
	pd="popdn(this," + el + ", '" + arg[5] + "', '"+arg[1]+"');"
	if(arg[0].indexOf("<img")>=0){ipos=arg[0].indexOf("<img");arg[0]=arg[0].substr(0,ipos+4)+" id=im"+el+" name=im"+el+" "+ arg[0].substr(ipos+5,900)}
	if (hlnk.substring(0,5)=="show-"){if(arg[7]==hlnk) if(arg[6])arg[7]=arg[6];else arg[7]="";hlnk="#";if (arg[6]+" "!="undefined ")hlnk=arg[6];}
	if (arg[1].substring(0,5)=="show-" && (!menu[10]||menu[5][16])){im++;ims="im"+im+"_"+a+"_"+el+"_"+arg[5];ti=arg[2][10];
	if(menu[5][16]&&menu[10])ti=menu[5][16];
	if(ns4){sti="<img border=0 src="+ti+">";if(!arg[2][10]){arg[2][10]="a";sti=""}subimg="<layer id="+ims+">"+sti+"</layer>";}else{subimg="<img id="+ims+" border=0 style=\"position:absolute;\" src="+ti+">"};if(!arg[2][10])subimg="<div id="+ims+"></div>";imar[im]=ims;}
	ltarg=" ";
	lpos=hlnk.toLowerCase(hlnk).indexOf(" target=");
	if(lpos>0){lta=hlnk.split(" ");ltarg=lta[1];hlnk=lta[0]}
		
	if(ns4){
		rsp=""
		tdwd=" width="+menu[2]
		if(!menu[7]||menu[7]=="left")tdwd=""		
		if (menu[7]=="right") rsp="<td height=-1></td>"
		ls="<table cellpadding="+(arg[2][9]/2)+" cellspacing=0><tr><td height=-1 align="+menu[7]+tdwd+"><a href=\""+hlnk+"\" "+ltarg+" onclick=\"d.cookie=sel;\" style='color:#"
		le=";text-decoration:none;font-size:"+arg[2][5]+"px;font-weight:"+arg[2][7]+";font-family:"+arg[2][8]+"' onmouseover=\";return stch('"+arg[7]+"');\">"+arg[0]+"</a>"+subimg+"</td>"+rsp+"</tr></table></layer>"
		lv=" left="+aleft+" width="+(menu[2]-(menu[3]*2))+" top="+atop		
		mt="<layer id=mel"+el+lv+" bgColor="+arg[2][1]+" onmouseover=\"shl('"+arg[5]+"',"+el+",'show');popi('"+arg[1]+"','"+arg[5]+"',"+el+"); window.status='"+arg[7]+"';\">"+ls+arg[2][0]+le
		mt+="<layer id=el"+el+lv+" bgColor="+arg[2][3]+" onmouseover=\"shl('"+arg[5]+"',"+el+",'show');popi('"+arg[1]+"','"+arg[5]+"',"+el+"); ltarg='"+ltarg+"'; nshl='"+hlnk+"'; this.captureEvents(Event.CLICK); this.onClick=dc;\" onmouseout=\"window.status='';"+pd+"\" visibility=hidden >"+ls+arg[2][2]+le
	}else{
		mt="";
		if (menu[10]){bgc=hlp[4];if(hlp[11])bgc=hlp[12];mt+="<div id=hel"+el+" style=\"background-color:#"+bgc+";width:"+(menu[2]-menu[3])+";position:absolute;top:0;left:"+dlft+";\">";dlft=dlft+menu[2]-(menu[3]*2)+menu[3]}
		if(!menu[7])menu[7]="left"
		rsp=0;if (menu[7]=="right") rsp=7;		
		if(menu[13]!="form") {mt+="<a href=\""+hlnk+"\" "+ltarg+" style='text-decoration:none;'>"}
		dw=(menu[2]-(2*menu[3]+dwd))
		if(dw+" "=="NaN "){dw=""}else{dw="width:"+dw}
		if(!menu[2]&&ie4)dw="width:1";
		if(!menu[2]&&opera){dw="position:absolute;";menu[7]="left"}
		mt+="<div align="+menu[7]+" id=el"+el+" style=\""+dw+";padding-left:"+arg[2][9]+";padding-right:"+(arg[2][9]+rsp)+";padding-top:"+arg[2][9]+";padding-bottom:"+arg[2][9]+";font-weight:"+arg[2][7]+";font-style:"+arg[2][6]+";font-family:"+arg[2][8]+";font-size:"+arg[2][5]+"px;color:#"+arg[2][0]+";background-color:#"+arg[2][1]+";\""
		mt+=" onMouseOver=\"this.style.cursor='"+mp+"';this.style.background"+bgt+"='#"+arg[2][3]+"';this.style.color='#"+arg[2][2]+"';popi('"+arg[1]+"','"+arg[5]+"',"+el+");return stch('"+arg[7]+"');\""		
		mt+=" onclick=d.cookie=sel onMouseOut=\"rep_img(); "+pd+";return stch('');\">"
		mt+=arg[0]+subimg+"</div>";mt+="</a>";if (menu[10]){mt+="</div>"}
	}
	
	d.write(mt)
	if(smc==el&&arg[2][14]){arg[2][0]=ofc;arg[2][1]=obc;}el++
}

function dmenu(mnu){
	if(opera)return;
	menu=eval(mnu);atop=menu[3];hlp=menu[5];if(!menu[3])menu[3]=0;
	if(hlp[14]&&el==0){tc=d.cookie;tp=tc.indexOf("smenu=");smc=tc.substr(tp+6,10);smc=smc.substr(0,smc.indexOf("#"));if(!smc)smc=-1}
	if(el)ns6c=3;else ns6c=2;ns6w=0;if(menu[7]=="right"&&ns6)ns6w=7;
	if (menu[2]<1)menu[2]="undefined"
	if(ns4)
	{
		thw=menu[2]
		if(menu[10]){ic=(menu.length-ac)/5;thw=(menu[2]*ic)-(menu[3]*ic)+menu[3]}
		bgc=hlp[4]
		if (hlp[11]){bgc=hlp[13]}
		mt="<layer z-index=99 visibility=hidden bgcolor=#"+bgc+" id="+mnu+" top="+menu[0]+" left="+menu[1]+" width="+thw+">"
		if (hlp[11]){mt+="<layer bgcolor=#"+hlp[12]+" top=0 left=0 height=2 width=100%></layer>"}mt+="<layer id="+mnu+"3d bgcolor=#"+hlp[12]+" top=0 left=0 height=1 width=2></layer>"}
	else
	{
		iedf="";if(!opera&&!mac&&d.all&&menu[8])
		{
			iedf=" filter:";flt=menu[8].split("\;");for(fx=0;fx<flt.length;fx++){iedf+=" progid:DXImageTransform.Microsoft."+flt[fx]}}
		if (hlp[11]){brd = "border:solid "+menu[3]+"px; border-left-color:#"+hlp[12]+";border-top-color:#"+hlp[12]+";border-bottom-color:#"+hlp[13]+";border-right-color:#"+hlp[13]+";"}else{brd = "border:solid "+menu[3]+"px; border-left-color:#"+hlp[4]+";border-top-color:#"+hlp[4]+";border-bottom-color:#"+hlp[4]+";border-right-color:#"+hlp[4]+";"}
		mt="<div id="+mnu+" style=\""+iedf+";z-index:99;visibility:hidden;"+brd+"position:absolute;background-Color:#"+hlp[4]+";width:"+(menu[2]+ns6w)+";left:"+menu[1]+";top:"+menu[0]+";\">"
	}
	d.write(mt)
	x=0;
	dlft=0
	aleft=0;
	for(b=ac;b<menu.length;b++)
	{
		b=b+4
		if(menu[b-3]==""){menu[b-3]="#"}
		menu[b-3] = menu[b-3].replace(/\"/gi, "&quot;")		
		hl(menu[b-4], menu[b-3], hlp, 100, 100, mnu, menu[b-2], menu[b-1])
		txt="";
		if(ns4)
		{
			if (!menu[10])
			{
				if (menu[b]&&b<menu.length-1)
				{
					mt=gmobj("el"+(el-1))
					x=atop+mt.clip.height
					if (!hlp[11]) x++
					txt="<layer top="+(x-2)+" left="+menu[3]+" height=1 bgcolor=#"+bgc+" width="+mt.clip.width+"></layer>"
					if (hlp[11]) {txt+="<layer top="+(x-1)+" left="+menu[3]+" height=1 bgcolor=#"+hlp[12]+" width="+mt.clip.width+"></layer>"}
				}
			}
		} 
		else	
		{
			bw=menu[b];	bc=hlp[4];bl="";oc="";if(opera){bl="left:0;";oc="d.getElementById('el"+el+"').style.background='#"+hlp[1]+"';d.getElementById('el"+el+"').style.color='#"+hlp[0]+"'";if(opera&&bw==0){bw=1;bc=hlp[1];bl+="width:"+menu[2]-menu[3]}else{ocv=3;if(menu[3]==1)ocv=4;bl+="width:"+(menu[2]+ocv-menu[3])}}
			if(b+1==menu.length)bw=0;
			if(bw>0)
			{
				if (!menu[10])
				{
					if (hlp[11]&&bw==1)
					{
						txt="<div onmouseout=\""+oc+"\" onmouseover=\"clearTimeout(timer)\" style=\"position:relative\">"
						txt+="<div style=\"border-top:1px solid #"+hlp[13]+"; background-color:#"+hlp[12]+"; width:100%;position:absolute;clip:rect(0 100% 2 0);height:1;"+bl+"\">"
						txt+="</div></div>"
					}
					else
					{
						txt="<div style=\"position:relative;\">"
						txt+="<div onmouseout=\"popdn();"+oc+"\" onmouseover=\"clearTimeout(timer)\" style=\"background-color:#"+bc+";width:"+(menu[2]-(menu[3]*2))+";position:absolute;"
						txt+="clip:rect(0 100% "+bw+" 0);height:"+bw+";"+bl+"\">"
						txt+="</div>"
						txt+="</div>"
					}
				}
			}
		}
		d.write(txt);
		omnu=mnu;
		mt=""
	}
	oatop=-1;
	if (ns4){mt="</layer>"}else{mt+="</div></div>"}
	d.write(mt)
	if (ns4)
	{
		ml=gmobj(mnu)
		ml.clip.height += menu[3]
		ml3d = gmobj(mnu+"3d")
		if (hlp[11])ml3d.clip.height=ml.clip.height
	}
}

function checs(e)
{
	if(d.all){sy=d.body.scrollTop}else{sy=pageYOffset}
	if(opera){sy=pageYOffset}
	for(a=1;a<menus;a++)
	{
		menu=eval("menu"+a);
		if(menu[9]>0)
		{
			if (df!=0||osy!=sy)
			{				
				mi=gmstyle("menu"+a);
				mit=parseInt(mi.top);
				if(isNaN(menu[0]))menu[0]=0;
				df=parseInt(menu[0])+sy-mit;
				nt=df/followspeed;
				of1=nt.toString();
				ofr=of1.split("\.");
				if(ofr[1]+" "=="undefined ")ofr[1]=0;
				ofrac=ofrac+parseInt(ofr[1]);
				if(ofrac>10)
				{
					ofrac=ofrac-10;
					if(df>=0){nt++}else{nt--}
				}
				mi.top=mit+nt
			}
			osy=sy
		}
	}
	pu=setTimeout('checs()',followrate)
}



function setpos()
{
	if(d.all){ww=d.body.clientWidth;wh=d.body.clientHeight;}else{ww=window.innerWidth;wh=window.innerHeight;}
	if(opera){ww=window.innerWidth;wh=window.innerHeight;}
	for (a=1;a<menus;a++)
	{
		menu=eval("menu"+a);
		if(!menu[4])menu[4]="";
		if (menu[4].indexOf("center")!=-1||menu[4].indexOf("right")!=-1)
		{			
			mn=gmobj("menu"+a);
			if(opera)mnw=mn.style.pixelWidth; else mnw=ns6?parseInt(mn.style.width)+16:d.all?mn.style.pixelWidth:mn.clip.width+16;			
			nlp=((ww-mnw)/2);
			if(menu[4].indexOf("right")!=-1)nlp=ww-mnw;
			if(ns4){mn.left=nlp}else{mn.style.left=nlp}			
			ts=menu[1]+"";
			if(ts.indexOf("offset=")==0)
			{
				os=ts.substr(7,99);
				mnp=gpos(mn);
				spos(mn,null,(mnp[1]+parseInt(os)),null,null)
			}
		}
		if (menu[4].indexOf("bottom")!=-1||menu[4].indexOf("middle")!=-1)
		{
			mn=gmobj("menu"+a);
			mnh=ns6?parseInt(mn.offsetHeight):d.all?mn.style.pixelHeight:mn.clip.height;
			if(opera)mnh=mn.style.pixelheight;
			nlp=wh-mnh-16;
			if(menu[4].indexOf("middle")!=-1)nlp=((wh-mnh)/2)
			if(ns4){mn.top=nlp}else{mn.style.top=nlp}
			ts=menu[0]+""
			if(ts.indexOf("offset=")==0)
			{
				os=ts.substr(7,99);
				mnp=gpos(mn);
				spos(mn,(mnp[0]+parseInt(os)),null,null,null)
			}
		}
	}
}

function coc(){menu=eval(omnu);if(menu[13]!="form")closeallmenus()}
function Minit()
{	
	el=0;osy=-1;df=-1;
	if ((d.all&&d.getElementById)&&!mac) document.write("<script>function getflta(ap){try{if(ap.filters){flta=1}}catch(e){}}</script>");
	for(x=1;x<menus;x++){menu=eval("menu"+x);if(menu[6]==1)popup(x)}
	for(a=1;a<menus;a++){fixb("menu"+a)}
	pu=setTimeout('checs()',followrate)
	sis();setpos();
	if(ns4){window.onresize=function(){if(window.innerWidth==ww&&window.innerHeight==wh)return;window.history.go(0);}}else{window.onresize=setpos}
	sy=1;checs();
	if(ns4)d.onmousedown=coc;else d.onclick=coc
	if(mac&&d.all){d.write("<div style=\"position:absolute;top:0;left:0\">")}
	frs=0
	fre=0
}

function test()
{
	checkCount();
}

for(a=1;a<menus;a++){dmenu("menu"+a)}

if(!ns61&ns6){window.onload=test}else{Minit();window.onload=test}

//if(!ns61&ns6){window.onload=Minit}else{Minit();window.onload=sis}

//if(opera)window.onresize=;
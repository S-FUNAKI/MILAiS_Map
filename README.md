MILAiS_map
==========
MILAiSのストリートビュー化に関わるファイルまとめたリポジトリです.  
各フォルダ・ファイルの説明
----------------
・MILAiS  
THETAを天井カメラに吊るして撮影した画像が入ってます．
その次の階層のフォルダたちは一枚の画像を32分割したものです．  

・MILAiS'  
THETAと三脚を使って撮影した画像が入ってます．  

・MILAiS:九州工業大学情報工学部未来型インタラクティブ教室_filesファルダとhtm  
MILAiSのホームページの”MILAiSの``今"”のページに用いるファイルが入ったフォルダと
そこにストリートビューを組み込んだhtmです．
  
・MILAiS.htmlとMILAiS.js  
MILAiS.htmlおよびjsファイルはスクリーンなしのストリートビューです．
また，画像は32分割して表示しています．

・MILAiS_Screen.htmlとMILAiS_Screen.js  
こちらはスクリーンを出した時のストリートビューです．
また，画像は32分割してません．

ストリートビューの画像の対応付けの仕方
---------------------------------------
jsファイルにおける操作をまとめます．
最低限以下をいじればオリジナルストリートビューができると思います．  

・initialize()での操作
コメントにあるように，ここでは初期画像の設定を行います．
最初にどの写真を写すかはstreetViewOptions内のpano:"Cls_ent"を変えたい
画像名に変えます．ここで指定した画像名がpanoIDとなります．  

・getCustomPanorama(panoID)での操作
ここでする操作は画像の登録と画像サイズの変更です．  
画像サイズについてはtileSizeとworldSizeを変えることでできます．
また，写真の方角を変えるにはcenterHeadingを使います．
まだ試してませんがここをswitch文で書けば画像を修正せずとも写真の方角のズレを直せると思います．  
・画像の登録にはこれを使います．

case "画像名":  
		streetViewPanoramaData["location"] = {  
			pano: "画像名",  
			description: "この画像が映っているときの説明（画面左上に書かれるやつ）",  
			latLng: new google.maps.LatLng(画像の座標　X, Y)//自作ストリートビューではあまり考えて設定する必要がないと思われる  
		};  
		break;  

・getCustomPanoramaTileUrl(panoID, zoom, tileX, tileY)内の操作  
ここは，panoIDをもとに読み込む画像を返す関数です．具体的には  
1枚画の時  './MILAiS/'+panoID+'.jpg'  
32枚画の時  './MILAiS/'+panoID+'/'+ tileX + '-' +tileY+'.jpg';  
のように設定します．このとき，画像名の名前は1枚画の時はpanoIDと対応付け，32枚画の時は
panoIDと対応したフォルダ内に32分割した画像ファイルを0-0.jpg～7-3.jpgのように名前をつける必要があります．


・createCustomLink()内の操作  
登録した画像を結びつけるリンク（ストリートビュー内の矢印）を作ります．  
switch(panoID)内の各ケースに分けてリンクを設定します．  
各ケースでこれを追加していくことでリンクが増えます．  
links.push({			            //links.push([])は複数設置可  
 			description : "矢印の行き先の説明（空欄可）",		//リンク表示名  
 			pano : "Cls_oku",		//リンク先パノラマID（矢印の行き先）  
 			heading : 45,			//リンク方角（矢印の向き）
 		});  
 		



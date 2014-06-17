//(c)2014 MILAiS.

var streetView;

function initialize() { //初期設定

	//ストリートビュー設定
	var streetViewOptions = {
		pov: {heading: 90,pitch: 0,zoom: 0},		//初期の方角：仰角：視野
		pano : "Cls_ent",			//初期のパノラマID
		panControl : true, //パノラマ操作のコントローラ表示
		panoProvider : getCustomPanorama  //パノラマ画像のデータと情報を呼び出すもの
	};

	//ストリートビューオブジェクトの作成
	var streetViewDiv = document.getElementById("streetview_canvas");  //ｽﾄﾘｰﾄﾋﾞｭｰ表示DIVコンテナ設定
	streetView = new google.maps.StreetViewPanorama(streetViewDiv, streetViewOptions);


	// //リンクの登録
	google.maps.event.addListener(streetView, "links_changed", createCustomLink); //links_changedでcreateCustomLinkへ、複数パノラマ画像を使用する際には必要
}


function getCustomPanoramaTileUrl(panoID, zoom, tileX, tileY) {	//タイル画像読み込み
	return      './MILAiS/'+panoID+'/'+ tileX + '-' +tileY+'.jpg';
}


function getCustomPanorama(panoID) {
	//基本パノラマデータ定義
	var streetViewPanoramaData = {
		links: [],
		copyright: "(C) 2014 Created by MILAiS",		//著作者表示
		tiles: {
			tileSize: new google.maps.Size(256, 256), 		//各タイルサイズ
			worldSize: new google.maps.Size(2048, 1024), 	//全面サイズ(ﾀｲﾙｻｲｽﾞとｲｺｰﾙで一枚表示
			centerHeading: 0,				//初期方角
			getTileUrl: getCustomPanoramaTileUrl //分割したブロック画像を呼び出す
		}
	}

	//各パノラマデータ登録、panoIDが初期設定やリンクを押して選択されたときに以下のswitch文が実行され、設定を読み込む
	switch(panoID) {
    case "Cls_md":
		streetViewPanoramaData["location"] = {
			pano: "Cls_md",
			description: "",
			latLng: new google.maps.LatLng(1, 1)
		};
		break;
     case "Staff":
	 	streetViewPanoramaData["location"] = {
	 		pano: "Staff",
	 		description: "",
	 		latLng: new google.maps.LatLng(0, 0)
	 	};
	 	break;
     case "Cls_oku":
	 	streetViewPanoramaData["location"] = {
	 		pano: "Cls_oku",
	 		description: "",
	 		latLng: new google.maps.LatLng(2, 2)
	 	};
	 	break;
	case "Cms_cm":
	 	streetViewPanoramaData["location"] = {
	 		pano: "Cms_cm",
	 		description: "",
	 		latLng: new google.maps.LatLng(0, 5)
	 	};
	 	break;
	case "Cms_ent":
	 	streetViewPanoramaData["location"] = {
	 		pano: "Cms_ent",
	 		description: "",
	 		latLng: new google.maps.LatLng(0, 3)
	 	};
	 	break;
	case "Cls_ent":
	 	streetViewPanoramaData["location"] = {
	 		pano: "Cls_ent",
	 		description: "",
	 		latLng: new google.maps.LatLng(0, 2)
	 	};
	 	break;
	case "Cms_md":
	 	streetViewPanoramaData["location"] = {
	 		pano: "Cms_md",
	 		description: "",
	 		latLng: new google.maps.LatLng(1, 4)
	 	};
	 	break;
	case "Cms_wc":
	 	streetViewPanoramaData["location"] = {
	 		pano: "Cms_wc",
	 		description: "",
	 		latLng: new google.maps.LatLng(3, 5)
	 	};
	 	break;
	case "Kyotaku":
	 	streetViewPanoramaData["location"] = {
	 		pano: "Kyotaku",
	 		description: "",
	 		latLng: new google.maps.LatLng(3, 0)
	 	};
	 	break;
	}
	return streetViewPanoramaData;
}

 function createCustomLink() {
 	var links = streetView.getLinks(); 		//現在のリンクの取得
 	var panoID = streetView.getPano();		//現在のパノラマID取得

 	switch(panoID) {
     case "Cls_md": //Cls_mdの時に表示するリンク
 		links.push({			//links.push([])は複数設置可
 			description : "",		//リンク表示名
 			pano : "Cls_oku",		//リンク先パノラマID
 			heading : 45,			//リンク方角
 		});
 		links.push({			//links.push([])は複数設置可
 			description : "スタッフルーム前",			//リンク表示名
 			pano : "Staff",		//リンク先パノラマID
 			heading : 225,			//リンク方角
 		});
 		links.push({			//links.push([])は複数設置可
 			description : "",			//リンク表示名出入口教室側
 			pano : "Kyotaku",		//リンク先パノラマID
 			heading : 135,			//リンク方角
 		});
 		links.push({			//links.push([])は複数設置可
 			description : "",			//リンク表示名出入口コモンズ側
 			pano : "Cls_ent",		//リンク先パノラマID
 			heading : 315,			//リンク方角
 		});
 		links.push({			//links.push([])は複数設置可
 			description : "コモンズ側中央",			//リンク表示名出入口コモンズ側
 			pano : "Cms_md",		//リンク先パノラマID
 			heading : 0,			//リンク方角
 		});
 		break;
     case "Staff":
 		links.push({			//links.push([])は複数設置可
 			description : "教室側中央",			//リンク表示名
 			pano : "Cls_md",		//リンク先パノラマID
 			heading : 45,			//リンク方角
 		});
 		links.push({			//links.push([])は複数設置可
 			description : "",			//リンク表示名出入口教室側
 			pano : "Cls_ent",		//リンク先パノラマID
 			heading : 350,			//リンク方角
 		});
 		links.push({			//links.push([])は複数設置可
 			description : "",			//リンク表示名出入口教室側
 			pano : "Kyotaku",		//リンク先パノラマID
 			heading : 100,			//リンク方角
 		});
 		break;
     case "Cms_oku":
 		links.push({			//links.push([])は複数設置可
 			description : "",		//リンク表示名
 			pano : "Cls_oku",		//リンク先パノラマID
 			heading : 180,			//リンク方角
 		});
 		links.push({			//links.push([])は複数設置可
 			description : "教室側中央",		//リンク表示名
 			pano : "Cls_md",		//リンク先パノラマID
 			heading : 225,			//リンク方角
 		});
		links.push({			//links.push([])は複数設置可
 			description : "コモンズ側中央",			//リンク表示名出入口コモンズ側
 			pano : "Cms_md",		//リンク先パノラマID
 			heading : 315,			//リンク方角
 		});
		links.push({			//links.push([])は複数設置可
 			description : "",			//リンク表示名出入口コモンズ側
 			pano : "Cms_ent",		//リンク先パノラマID
 			heading : 270,			//リンク方角
 		});
 		links.push({			//links.push([])は複数設置可
 			description : "",			//リンク表示名出入口教室側
 			pano : "Cms_wc",		//リンク先パノラマID
 			heading : 350,			//リンク方角
 		});
 		break;
     case "Cls_oku":
 		links.push({			//links.push([])は複数設置可
 			description : "",		//リンク表示名
 			pano : "Cms_oku",		//リンク先パノラマID
 			heading : 0,			//リンク方角
 		});
 		links.push({			//links.push([])は複数設置可
 			description : "教室側中央",		//リンク表示名
 			pano : "Cls_md",		//リンク先パノラマID
 			heading : 225,			//リンク方角
 		});
		links.push({			//links.push([])は複数設置可
 			description : "コモンズ側中央",			//リンク表示名出入口コモンズ側
 			pano : "Cms_md",		//リンク先パノラマID
 			heading : 315,			//リンク方角
 		});
		links.push({			//links.push([])は複数設置可
 			description : "",			//リンク表示名出入口コモンズ側
 			pano : "Cls_ent",		//リンク先パノラマID
 			heading : 270,			//リンク方角
 		});
 		links.push({			//links.push([])は複数設置可
 			description : "",			//リンク表示名出入口教室側
 			pano : "Kyotaku",		//リンク先パノラマID
 			heading : 170,			//リンク方角
 		});
 		break;

     case "Cms_cm":
		links.push({			//links.push([])は複数設置可
 			description : "コモンズ側中央",			//リンク表示名
 			pano : "Cms_md",		//リンク先パノラマID
 			heading : 140,			//リンク方角
 		});
		links.push({			//links.push([])は複数設置可
 			description : "",			//リンク表示名
 			pano : "Cms_wc",		//リンク先パノラマID
 			heading : 120,			//リンク方角
 		});
		links.push({			//links.push([])は複数設置可
 			description : "",			//リンク表示名
 			pano : "Cms_ent",		//リンク先パノラマID
 			heading : 165,			//リンク方角
 		});
		break;
     case "Cms_ent":
		links.push({			//links.push([])は複数設置可
 			description : "コモンズ側中央",			//リンク表示名
 			pano : "Cms_md",		//リンク先パノラマID
 			heading : 40,			//リンク方角
 		});
		links.push({			//links.push([])は複数設置可
 			description : "",			//リンク表示名
 			pano : "Cms_oku",		//リンク先パノラマID
 			heading : 110,			//リンク方角
 		});
		links.push({			//links.push([])は複数設置可
 			description : "",	//リンク表示名
 			pano : "Cls_ent",		//リンク先パノラマID
 			heading : 210,			//リンク方角
 		});
		links.push({			//links.push([])は複数設置可
 			description : "",	//リンク表示名
 			pano : "Cms_cm",		//リンク先パノラマID
 			heading : 340,			//リンク方角
 		});
		break;
     case "Cls_ent":
		links.push({			//links.push([])は複数設置可
 			description : "教室側中央",			//リンク表示名出入口教室側
 			pano : "Cls_md",		//リンク先パノラマID
 			heading : 135,			//リンク方角
 		});
		links.push({			//links.push([])は複数設置可
 			description : "スタッフルーム前",			//リンク表示名出入口コモンズ側
 			pano : "Staff",		//リンク先パノラマID
 			heading : 180,			//リンク方角
 		});
		links.push({			//links.push([])は複数設置可
 			description : "",			//リンク表示名
 			pano : "Cls_oku",		//リンク先パノラマID
 			heading : 90,			//リンク方角
 		});
		links.push({			//links.push([])は複数設置可
 			description : "",	//リンク表示名
 			pano : "Cms_ent",		//リンク先パノラマID
 			heading : 0,			//リンク方角
 		});
		break;
     case "Cms_md":
		links.push({			//links.push([])は複数設置可
 			description : "",	//リンク表示名
 			pano : "Cms_cm",		//リンク先パノラマID
 			heading : 310,			//リンク方角
 		});
		links.push({			//links.push([])は複数設置可
 			description : "",	//リンク表示名
 			pano : "Cms_oku",		//リンク先パノラマID
 			heading : 130,			//リンク方角
 		});
		links.push({			//links.push([])は複数設置可
 			description : "教室側中央",			//リンク表示名
 			pano : "Cls_md",		//リンク先パノラマID
 			heading : 180,			//リンク方角
 		});
		links.push({			//links.push([])は複数設置可
 			description : "",			//リンク表示名
 			pano : "Cms_wc",		//リンク先パノラマID
 			heading : 30,			//リンク方角
 		});
		links.push({			//links.push([])は複数設置可
 			description : "",	//リンク表示名
 			pano : "Cms_ent",		//リンク先パノラマID
 			heading : 220,			//リンク方角
 		});
		break;
     case "Cms_wc":
		links.push({			//links.push([])は複数設置可
 			description : "",	//リンク表示名
 			pano : "Cms_oku",		//リンク先パノラマID
 			heading : 140,			//リンク方角
 		});
		links.push({			//links.push([])は複数設置可
 			description : "",	//リンク表示名
 			pano : "Cms_cm",		//リンク先パノラマID
 			heading : 280,			//リンク方角
 		});
		links.push({			//links.push([])は複数設置可
 			description : "コモンズ側中央",			//リンク表示名
 			pano : "Cms_md",		//リンク先パノラマID
 			heading : 190,			//リンク方角
 		});
		break;
     case "Kyotaku":
		links.push({			//links.push([])は複数設置可
 			description : "",	//リンク表示名
 			pano : "Cls_oku",		//リンク先パノラマID
 			heading : 340,			//リンク方角
 		});
		links.push({			//links.push([])は複数設置可
 			description : "スタッフルーム前",	//リンク表示名
 			pano : "Staff",		//リンク先パノラマID
 			heading : 270,			//リンク方角
 		});
		links.push({			//links.push([])は複数設置可
 			description : "教室側中央",			//リンク表示名
 			pano : "Cls_md",		//リンク先パノラマID
 			heading : 315,			//リンク方角
 		});
		break;
 	}
}

google.maps.event.addDomListener(window, 'load', initialize); //initializeを一度のみ実行
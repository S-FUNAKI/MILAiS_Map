//(c)2014 MILAiS.

var streetView;

function initialize() { //初期設定

	//ストリートビュー設定
	var streetViewOptions = {
		pov: {heading: 90,pitch: -10,zoom: 0},		//初期の方角：仰角：視野
		pano : "Ent_out",			//初期のパノラマID
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
	return      './MILAiS/'+panoID+'.jpg';
}


function getCustomPanorama(panoID) {
	//基本パノラマデータ定義
	var streetViewPanoramaData = {
		links: [],
		copyright: "(C) 2014 Created by MILAiS",		//著作者表示
		tiles: {
			tileSize: new google.maps.Size(2048, 1024), 		//各タイルサイズ
			worldSize: new google.maps.Size(2048, 1024), 	//全面サイズ(ﾀｲﾙｻｲｽﾞとｲｺｰﾙで一枚表示
			centerHeading: 0,				//初期方角
			getTileUrl: getCustomPanoramaTileUrl //分割したブロック画像を呼び出す
		}
	}

	//各パノラマデータ登録、panoIDが初期設定やリンクを押して選択されたときに以下のswitch文が実行され、設定を読み込む
	switch(panoID) {
    case "Middle":
		streetViewPanoramaData["location"] = {
			pano: "Middle",
			description: "MILAiS",
			latLng: new google.maps.LatLng(6, 15)
		};
		break;
     case "Class":
	 	streetViewPanoramaData["location"] = {
	 		pano: "Class",
	 		description: "MILAiS教室側",
	 		latLng: new google.maps.LatLng(6, 13)
	 	};
	 	break;
     case "Commons":
	 	streetViewPanoramaData["location"] = {
	 		pano: "Commons",
	 		description: "MILAiSコモンズ側",
	 		latLng: new google.maps.LatLng(6, 19)
	 	};
	 	break;

	case "Ent_cls":
	 	streetViewPanoramaData["location"] = {
	 		pano: "Ent_cls",
	 		description: "MILAiS出入口コモンズ側",
	 		latLng: new google.maps.LatLng(3, 15)
	 	};
	 	break;
	case "Ent_cms":
	 	streetViewPanoramaData["location"] = {
	 		pano: "Ent_cms",
	 		description: "MILAiS出入口コモンズ側",
	 		latLng: new google.maps.LatLng(3, 17)
	 	};
	 	break;
	case "Ent_out":
	 	streetViewPanoramaData["location"] = {
	 		pano: "Ent_out",
	 		description: "MILAiS出入口",
	 		latLng: new google.maps.LatLng(0, 15)
	 	};
	 	break;
	case "Aisle":
	 	streetViewPanoramaData["location"] = {
	 		pano: "Aisle",
	 		description: "MILAiS通路",
	 		latLng: new google.maps.LatLng(0, 10)
	 	};
	 	break;
	case "Sign":
	 	streetViewPanoramaData["location"] = {
	 		pano: "Sign",
	 		description: "MILAiS前",
	 		latLng: new google.maps.LatLng(0, 0)
	 	};
	 	break;
	}
	return streetViewPanoramaData;
}

 function createCustomLink() {
 	var links = streetView.getLinks(); 		//現在のリンクの取得
 	var panoID = streetView.getPano();		//現在のパノラマID取得

 	switch(panoID) {
     case "Middle": //Middleの時に表示するリンク
 		links.push({			//links.push([])は複数設置可
 			description : "コモンズ側",		//リンク表示名
 			pano : "Commons",		//リンク先パノラマID
 			heading : 0,			//リンク方角
 		});
 		links.push({			//links.push([])は複数設置可
 			description : "教室側",			//リンク表示名
 			pano : "Class",		//リンク先パノラマID
 			heading : 180,			//リンク方角
 		});
 		links.push({			//links.push([])は複数設置可
 			description : "",			//リンク表示名出入口教室側
 			pano : "Ent_cls",		//リンク先パノラマID
 			heading : 240,			//リンク方角
 		});
 		links.push({			//links.push([])は複数設置可
 			description : "",			//リンク表示名出入口コモンズ側
 			pano : "Ent_cms",		//リンク先パノラマID
 			heading : 290,			//リンク方角
 		});
 		break;
     case "Class":
 		links.push({			//links.push([])は複数設置可
 			description : "中央",			//リンク表示名
 			pano : "Middle",		//リンク先パノラマID
 			heading : 0,			//リンク方角
 		});
 		links.push({			//links.push([])は複数設置可
 			description : "",			//リンク表示名出入口教室側
 			pano : "Ent_cls",		//リンク先パノラマID
 			heading : 300,			//リンク方角
 		});
 		break;
     case "Commons":
 		links.push({			//links.push([])は複数設置可
 			description : "中央",		//リンク表示名
 			pano : "Middle",		//リンク先パノラマID
 			heading : 180,			//リンク方角
 		});
		links.push({			//links.push([])は複数設置可
 			description : "",			//リンク表示名出入口コモンズ側
 			pano : "Ent_cms",		//リンク先パノラマID
 			heading : 225,			//リンク方角
 		});
 		break;

     case "Ent_cls":
		links.push({			//links.push([])は複数設置可
 			description : "中央",			//リンク表示名
 			pano : "Middle",		//リンク先パノラマID
 			heading : 60,			//リンク方角
 		});
		links.push({			//links.push([])は複数設置可
 			description : "教室側",			//リンク表示名
 			pano : "Class",		//リンク先パノラマID
 			heading : 120,			//リンク方角
 		});
		links.push({			//links.push([])は複数設置可
 			description : "",			//リンク表示名
 			pano : "Ent_out",		//リンク先パノラマID
 			heading : 270,			//リンク方角
 		});
		break;
     case "Ent_cms":
		links.push({			//links.push([])は複数設置可
 			description : "中央",			//リンク表示名
 			pano : "Middle",		//リンク先パノラマID
 			heading : 120,			//リンク方角
 		});
		links.push({			//links.push([])は複数設置可
 			description : "コモンズ側",			//リンク表示名
 			pano : "Commons",		//リンク先パノラマID
 			heading : 60,			//リンク方角
 		});
		links.push({			//links.push([])は複数設置可
 			description : "",	//リンク表示名
 			pano : "Ent_out",		//リンク先パノラマID
 			heading : 270,			//リンク方角
 		});
		break;
     case "Ent_out":
		links.push({			//links.push([])は複数設置可
 			description : "教室側",			//リンク表示名出入口教室側
 			pano : "Ent_cls",		//リンク先パノラマID
 			heading : 90,			//リンク方角
 		});
		links.push({			//links.push([])は複数設置可
 			description : "コモンズ側",			//リンク表示名出入口コモンズ側
 			pano : "Ent_cms",		//リンク先パノラマID
 			heading : 10,			//リンク方角
 		});
		links.push({			//links.push([])は複数設置可
 			description : "",			//リンク表示名
 			pano : "Aisle",		//リンク先パノラマID
 			heading : 180,			//リンク方角
 		});
		break;
     case "Aisle":
		links.push({			//links.push([])は複数設置可
 			description : "",			//リンク表示名
 			pano : "Ent_out",		//リンク先パノラマID
 			heading : 0,			//リンク方角
 		});
		links.push({			//links.push([])は複数設置可
 			description : "",			//リンク表示名
 			pano : "Sign",		//リンク先パノラマID
 			heading : 180,			//リンク方角
 		});
		break;
     case "Sign":
		links.push({			//links.push([])は複数設置可
 			description : "",			//リンク表示名
 			pano : "Aisle",		//リンク先パノラマID
 			heading : 0,			//リンク方角
 		});
		break;
 	}
}

google.maps.event.addDomListener(window, 'load', initialize); //initializeを一度のみ実行
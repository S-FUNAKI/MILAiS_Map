//(c)2014 MILAiS.

var streetView;

function initialize() { //�����ݒ�

	//�X�g���[�g�r���[�ݒ�
	var streetViewOptions = {
		pov: {heading: 90,pitch: 0,zoom: 0},		//�����̕��p�F�p�F����
		pano : "Cls_ent",			//�����̃p�m���}ID
		panControl : true, //�p�m���}����̃R���g���[���\��
		panoProvider : getCustomPanorama  //�p�m���}�摜�̃f�[�^�Ə����Ăяo������
	};

	//�X�g���[�g�r���[�I�u�W�F�N�g�̍쐬
	var streetViewDiv = document.getElementById("streetview_canvas");  //��ذ��ޭ��\��DIV�R���e�i�ݒ�
	streetView = new google.maps.StreetViewPanorama(streetViewDiv, streetViewOptions);


	// //�����N�̓o�^
	google.maps.event.addListener(streetView, "links_changed", createCustomLink); //links_changed��createCustomLink�ցA�����p�m���}�摜���g�p����ۂɂ͕K�v
}


function getCustomPanoramaTileUrl(panoID, zoom, tileX, tileY) {	//�^�C���摜�ǂݍ���
	return      './MILAiS/'+panoID+'/'+ tileX + '-' +tileY+'.jpg';
}


function getCustomPanorama(panoID) {
	//��{�p�m���}�f�[�^��`
	var streetViewPanoramaData = {
		links: [],
		copyright: "(C) 2014 Created by MILAiS",		//����ҕ\��
		tiles: {
			tileSize: new google.maps.Size(256, 256), 		//�e�^�C���T�C�Y
			worldSize: new google.maps.Size(2048, 1024), 	//�S�ʃT�C�Y(��ٻ��ނƲ��قňꖇ�\��
			centerHeading: 0,				//�������p
			getTileUrl: getCustomPanoramaTileUrl //���������u���b�N�摜���Ăяo��
		}
	}

	//�e�p�m���}�f�[�^�o�^�ApanoID�������ݒ�⃊���N�������đI�����ꂽ�Ƃ��Ɉȉ���switch�������s����A�ݒ��ǂݍ���
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
 	var links = streetView.getLinks(); 		//���݂̃����N�̎擾
 	var panoID = streetView.getPano();		//���݂̃p�m���}ID�擾

 	switch(panoID) {
     case "Cls_md": //Cls_md�̎��ɕ\�����郊���N
 		links.push({			//links.push([])�͕����ݒu��
 			description : "",		//�����N�\����
 			pano : "Cls_oku",		//�����N��p�m���}ID
 			heading : 45,			//�����N���p
 		});
 		links.push({			//links.push([])�͕����ݒu��
 			description : "�X�^�b�t���[���O",			//�����N�\����
 			pano : "Staff",		//�����N��p�m���}ID
 			heading : 225,			//�����N���p
 		});
 		links.push({			//links.push([])�͕����ݒu��
 			description : "",			//�����N�\�����o����������
 			pano : "Kyotaku",		//�����N��p�m���}ID
 			heading : 135,			//�����N���p
 		});
 		links.push({			//links.push([])�͕����ݒu��
 			description : "",			//�����N�\�����o�����R�����Y��
 			pano : "Cls_ent",		//�����N��p�m���}ID
 			heading : 315,			//�����N���p
 		});
 		links.push({			//links.push([])�͕����ݒu��
 			description : "�R�����Y������",			//�����N�\�����o�����R�����Y��
 			pano : "Cms_md",		//�����N��p�m���}ID
 			heading : 0,			//�����N���p
 		});
 		break;
     case "Staff":
 		links.push({			//links.push([])�͕����ݒu��
 			description : "����������",			//�����N�\����
 			pano : "Cls_md",		//�����N��p�m���}ID
 			heading : 45,			//�����N���p
 		});
 		links.push({			//links.push([])�͕����ݒu��
 			description : "",			//�����N�\�����o����������
 			pano : "Cls_ent",		//�����N��p�m���}ID
 			heading : 350,			//�����N���p
 		});
 		links.push({			//links.push([])�͕����ݒu��
 			description : "",			//�����N�\�����o����������
 			pano : "Kyotaku",		//�����N��p�m���}ID
 			heading : 100,			//�����N���p
 		});
 		break;
     case "Cms_oku":
 		links.push({			//links.push([])�͕����ݒu��
 			description : "",		//�����N�\����
 			pano : "Cls_oku",		//�����N��p�m���}ID
 			heading : 180,			//�����N���p
 		});
 		links.push({			//links.push([])�͕����ݒu��
 			description : "����������",		//�����N�\����
 			pano : "Cls_md",		//�����N��p�m���}ID
 			heading : 225,			//�����N���p
 		});
		links.push({			//links.push([])�͕����ݒu��
 			description : "�R�����Y������",			//�����N�\�����o�����R�����Y��
 			pano : "Cms_md",		//�����N��p�m���}ID
 			heading : 315,			//�����N���p
 		});
		links.push({			//links.push([])�͕����ݒu��
 			description : "",			//�����N�\�����o�����R�����Y��
 			pano : "Cms_ent",		//�����N��p�m���}ID
 			heading : 270,			//�����N���p
 		});
 		links.push({			//links.push([])�͕����ݒu��
 			description : "",			//�����N�\�����o����������
 			pano : "Cms_wc",		//�����N��p�m���}ID
 			heading : 350,			//�����N���p
 		});
 		break;
     case "Cls_oku":
 		links.push({			//links.push([])�͕����ݒu��
 			description : "",		//�����N�\����
 			pano : "Cms_oku",		//�����N��p�m���}ID
 			heading : 0,			//�����N���p
 		});
 		links.push({			//links.push([])�͕����ݒu��
 			description : "����������",		//�����N�\����
 			pano : "Cls_md",		//�����N��p�m���}ID
 			heading : 225,			//�����N���p
 		});
		links.push({			//links.push([])�͕����ݒu��
 			description : "�R�����Y������",			//�����N�\�����o�����R�����Y��
 			pano : "Cms_md",		//�����N��p�m���}ID
 			heading : 315,			//�����N���p
 		});
		links.push({			//links.push([])�͕����ݒu��
 			description : "",			//�����N�\�����o�����R�����Y��
 			pano : "Cls_ent",		//�����N��p�m���}ID
 			heading : 270,			//�����N���p
 		});
 		links.push({			//links.push([])�͕����ݒu��
 			description : "",			//�����N�\�����o����������
 			pano : "Kyotaku",		//�����N��p�m���}ID
 			heading : 170,			//�����N���p
 		});
 		break;

     case "Cms_cm":
		links.push({			//links.push([])�͕����ݒu��
 			description : "�R�����Y������",			//�����N�\����
 			pano : "Cms_md",		//�����N��p�m���}ID
 			heading : 140,			//�����N���p
 		});
		links.push({			//links.push([])�͕����ݒu��
 			description : "",			//�����N�\����
 			pano : "Cms_wc",		//�����N��p�m���}ID
 			heading : 120,			//�����N���p
 		});
		links.push({			//links.push([])�͕����ݒu��
 			description : "",			//�����N�\����
 			pano : "Cms_ent",		//�����N��p�m���}ID
 			heading : 165,			//�����N���p
 		});
		break;
     case "Cms_ent":
		links.push({			//links.push([])�͕����ݒu��
 			description : "�R�����Y������",			//�����N�\����
 			pano : "Cms_md",		//�����N��p�m���}ID
 			heading : 40,			//�����N���p
 		});
		links.push({			//links.push([])�͕����ݒu��
 			description : "",			//�����N�\����
 			pano : "Cms_oku",		//�����N��p�m���}ID
 			heading : 110,			//�����N���p
 		});
		links.push({			//links.push([])�͕����ݒu��
 			description : "",	//�����N�\����
 			pano : "Cls_ent",		//�����N��p�m���}ID
 			heading : 210,			//�����N���p
 		});
		links.push({			//links.push([])�͕����ݒu��
 			description : "",	//�����N�\����
 			pano : "Cms_cm",		//�����N��p�m���}ID
 			heading : 340,			//�����N���p
 		});
		break;
     case "Cls_ent":
		links.push({			//links.push([])�͕����ݒu��
 			description : "����������",			//�����N�\�����o����������
 			pano : "Cls_md",		//�����N��p�m���}ID
 			heading : 135,			//�����N���p
 		});
		links.push({			//links.push([])�͕����ݒu��
 			description : "�X�^�b�t���[���O",			//�����N�\�����o�����R�����Y��
 			pano : "Staff",		//�����N��p�m���}ID
 			heading : 180,			//�����N���p
 		});
		links.push({			//links.push([])�͕����ݒu��
 			description : "",			//�����N�\����
 			pano : "Cls_oku",		//�����N��p�m���}ID
 			heading : 90,			//�����N���p
 		});
		links.push({			//links.push([])�͕����ݒu��
 			description : "",	//�����N�\����
 			pano : "Cms_ent",		//�����N��p�m���}ID
 			heading : 0,			//�����N���p
 		});
		break;
     case "Cms_md":
		links.push({			//links.push([])�͕����ݒu��
 			description : "",	//�����N�\����
 			pano : "Cms_cm",		//�����N��p�m���}ID
 			heading : 310,			//�����N���p
 		});
		links.push({			//links.push([])�͕����ݒu��
 			description : "",	//�����N�\����
 			pano : "Cms_oku",		//�����N��p�m���}ID
 			heading : 130,			//�����N���p
 		});
		links.push({			//links.push([])�͕����ݒu��
 			description : "����������",			//�����N�\����
 			pano : "Cls_md",		//�����N��p�m���}ID
 			heading : 180,			//�����N���p
 		});
		links.push({			//links.push([])�͕����ݒu��
 			description : "",			//�����N�\����
 			pano : "Cms_wc",		//�����N��p�m���}ID
 			heading : 30,			//�����N���p
 		});
		links.push({			//links.push([])�͕����ݒu��
 			description : "",	//�����N�\����
 			pano : "Cms_ent",		//�����N��p�m���}ID
 			heading : 220,			//�����N���p
 		});
		break;
     case "Cms_wc":
		links.push({			//links.push([])�͕����ݒu��
 			description : "",	//�����N�\����
 			pano : "Cms_oku",		//�����N��p�m���}ID
 			heading : 140,			//�����N���p
 		});
		links.push({			//links.push([])�͕����ݒu��
 			description : "",	//�����N�\����
 			pano : "Cms_cm",		//�����N��p�m���}ID
 			heading : 280,			//�����N���p
 		});
		links.push({			//links.push([])�͕����ݒu��
 			description : "�R�����Y������",			//�����N�\����
 			pano : "Cms_md",		//�����N��p�m���}ID
 			heading : 190,			//�����N���p
 		});
		break;
     case "Kyotaku":
		links.push({			//links.push([])�͕����ݒu��
 			description : "",	//�����N�\����
 			pano : "Cls_oku",		//�����N��p�m���}ID
 			heading : 340,			//�����N���p
 		});
		links.push({			//links.push([])�͕����ݒu��
 			description : "�X�^�b�t���[���O",	//�����N�\����
 			pano : "Staff",		//�����N��p�m���}ID
 			heading : 270,			//�����N���p
 		});
		links.push({			//links.push([])�͕����ݒu��
 			description : "����������",			//�����N�\����
 			pano : "Cls_md",		//�����N��p�m���}ID
 			heading : 315,			//�����N���p
 		});
		break;
 	}
}

google.maps.event.addDomListener(window, 'load', initialize); //initialize����x�̂ݎ��s
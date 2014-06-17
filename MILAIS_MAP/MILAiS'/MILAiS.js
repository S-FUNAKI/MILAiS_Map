//(c)2014 MILAiS.

var streetView;

function initialize() { //�����ݒ�

	//�X�g���[�g�r���[�ݒ�
	var streetViewOptions = {
		pov: {heading: 90,pitch: -10,zoom: 0},		//�����̕��p�F�p�F����
		pano : "Ent_out",			//�����̃p�m���}ID
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
	return      './MILAiS/'+panoID+'.jpg';
}


function getCustomPanorama(panoID) {
	//��{�p�m���}�f�[�^��`
	var streetViewPanoramaData = {
		links: [],
		copyright: "(C) 2014 Created by MILAiS",		//����ҕ\��
		tiles: {
			tileSize: new google.maps.Size(2048, 1024), 		//�e�^�C���T�C�Y
			worldSize: new google.maps.Size(2048, 1024), 	//�S�ʃT�C�Y(��ٻ��ނƲ��قňꖇ�\��
			centerHeading: 0,				//�������p
			getTileUrl: getCustomPanoramaTileUrl //���������u���b�N�摜���Ăяo��
		}
	}

	//�e�p�m���}�f�[�^�o�^�ApanoID�������ݒ�⃊���N�������đI�����ꂽ�Ƃ��Ɉȉ���switch�������s����A�ݒ��ǂݍ���
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
	 		description: "MILAiS������",
	 		latLng: new google.maps.LatLng(6, 13)
	 	};
	 	break;
     case "Commons":
	 	streetViewPanoramaData["location"] = {
	 		pano: "Commons",
	 		description: "MILAiS�R�����Y��",
	 		latLng: new google.maps.LatLng(6, 19)
	 	};
	 	break;

	case "Ent_cls":
	 	streetViewPanoramaData["location"] = {
	 		pano: "Ent_cls",
	 		description: "MILAiS�o�����R�����Y��",
	 		latLng: new google.maps.LatLng(3, 15)
	 	};
	 	break;
	case "Ent_cms":
	 	streetViewPanoramaData["location"] = {
	 		pano: "Ent_cms",
	 		description: "MILAiS�o�����R�����Y��",
	 		latLng: new google.maps.LatLng(3, 17)
	 	};
	 	break;
	case "Ent_out":
	 	streetViewPanoramaData["location"] = {
	 		pano: "Ent_out",
	 		description: "MILAiS�o����",
	 		latLng: new google.maps.LatLng(0, 15)
	 	};
	 	break;
	case "Aisle":
	 	streetViewPanoramaData["location"] = {
	 		pano: "Aisle",
	 		description: "MILAiS�ʘH",
	 		latLng: new google.maps.LatLng(0, 10)
	 	};
	 	break;
	case "Sign":
	 	streetViewPanoramaData["location"] = {
	 		pano: "Sign",
	 		description: "MILAiS�O",
	 		latLng: new google.maps.LatLng(0, 0)
	 	};
	 	break;
	}
	return streetViewPanoramaData;
}

 function createCustomLink() {
 	var links = streetView.getLinks(); 		//���݂̃����N�̎擾
 	var panoID = streetView.getPano();		//���݂̃p�m���}ID�擾

 	switch(panoID) {
     case "Middle": //Middle�̎��ɕ\�����郊���N
 		links.push({			//links.push([])�͕����ݒu��
 			description : "�R�����Y��",		//�����N�\����
 			pano : "Commons",		//�����N��p�m���}ID
 			heading : 0,			//�����N���p
 		});
 		links.push({			//links.push([])�͕����ݒu��
 			description : "������",			//�����N�\����
 			pano : "Class",		//�����N��p�m���}ID
 			heading : 180,			//�����N���p
 		});
 		links.push({			//links.push([])�͕����ݒu��
 			description : "",			//�����N�\�����o����������
 			pano : "Ent_cls",		//�����N��p�m���}ID
 			heading : 240,			//�����N���p
 		});
 		links.push({			//links.push([])�͕����ݒu��
 			description : "",			//�����N�\�����o�����R�����Y��
 			pano : "Ent_cms",		//�����N��p�m���}ID
 			heading : 290,			//�����N���p
 		});
 		break;
     case "Class":
 		links.push({			//links.push([])�͕����ݒu��
 			description : "����",			//�����N�\����
 			pano : "Middle",		//�����N��p�m���}ID
 			heading : 0,			//�����N���p
 		});
 		links.push({			//links.push([])�͕����ݒu��
 			description : "",			//�����N�\�����o����������
 			pano : "Ent_cls",		//�����N��p�m���}ID
 			heading : 300,			//�����N���p
 		});
 		break;
     case "Commons":
 		links.push({			//links.push([])�͕����ݒu��
 			description : "����",		//�����N�\����
 			pano : "Middle",		//�����N��p�m���}ID
 			heading : 180,			//�����N���p
 		});
		links.push({			//links.push([])�͕����ݒu��
 			description : "",			//�����N�\�����o�����R�����Y��
 			pano : "Ent_cms",		//�����N��p�m���}ID
 			heading : 225,			//�����N���p
 		});
 		break;

     case "Ent_cls":
		links.push({			//links.push([])�͕����ݒu��
 			description : "����",			//�����N�\����
 			pano : "Middle",		//�����N��p�m���}ID
 			heading : 60,			//�����N���p
 		});
		links.push({			//links.push([])�͕����ݒu��
 			description : "������",			//�����N�\����
 			pano : "Class",		//�����N��p�m���}ID
 			heading : 120,			//�����N���p
 		});
		links.push({			//links.push([])�͕����ݒu��
 			description : "",			//�����N�\����
 			pano : "Ent_out",		//�����N��p�m���}ID
 			heading : 270,			//�����N���p
 		});
		break;
     case "Ent_cms":
		links.push({			//links.push([])�͕����ݒu��
 			description : "����",			//�����N�\����
 			pano : "Middle",		//�����N��p�m���}ID
 			heading : 120,			//�����N���p
 		});
		links.push({			//links.push([])�͕����ݒu��
 			description : "�R�����Y��",			//�����N�\����
 			pano : "Commons",		//�����N��p�m���}ID
 			heading : 60,			//�����N���p
 		});
		links.push({			//links.push([])�͕����ݒu��
 			description : "",	//�����N�\����
 			pano : "Ent_out",		//�����N��p�m���}ID
 			heading : 270,			//�����N���p
 		});
		break;
     case "Ent_out":
		links.push({			//links.push([])�͕����ݒu��
 			description : "������",			//�����N�\�����o����������
 			pano : "Ent_cls",		//�����N��p�m���}ID
 			heading : 90,			//�����N���p
 		});
		links.push({			//links.push([])�͕����ݒu��
 			description : "�R�����Y��",			//�����N�\�����o�����R�����Y��
 			pano : "Ent_cms",		//�����N��p�m���}ID
 			heading : 10,			//�����N���p
 		});
		links.push({			//links.push([])�͕����ݒu��
 			description : "",			//�����N�\����
 			pano : "Aisle",		//�����N��p�m���}ID
 			heading : 180,			//�����N���p
 		});
		break;
     case "Aisle":
		links.push({			//links.push([])�͕����ݒu��
 			description : "",			//�����N�\����
 			pano : "Ent_out",		//�����N��p�m���}ID
 			heading : 0,			//�����N���p
 		});
		links.push({			//links.push([])�͕����ݒu��
 			description : "",			//�����N�\����
 			pano : "Sign",		//�����N��p�m���}ID
 			heading : 180,			//�����N���p
 		});
		break;
     case "Sign":
		links.push({			//links.push([])�͕����ݒu��
 			description : "",			//�����N�\����
 			pano : "Aisle",		//�����N��p�m���}ID
 			heading : 0,			//�����N���p
 		});
		break;
 	}
}

google.maps.event.addDomListener(window, 'load', initialize); //initialize����x�̂ݎ��s
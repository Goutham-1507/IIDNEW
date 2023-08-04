sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"./utilities",
	"sap/ui/core/routing/History",
	"sap/ui/model/json/JSONModel",
	"sap/m/Dialog",
	"sap/m/Button",
	"sap/m/Text",
	"sap/ui/core/format/DateFormat",
	'sap/ui/core/Fragment',
	"sap/ui/core/message/Message",
	"sap/ui/core/library",
	"sap/m/MessageToast",
	"sap/m/UploadCollectionParameter",
	"sap/ui/Device",
	"sap/m/PDFViewer",
	"sap/ui/model/Filter", "sap/ui/model/FilterOperator"

], function(BaseController, MessageBox, Utilities, History, JSONModel, Dialog, Button, Text, DateFormat, Fragment, Message, library,
	MessageToast, UploadCollectionParameter, Device, PDFViewer, Filter, FilterOperator) {
	"use strict";
	// shortcut for sap.ui.core.ValueState
	var ValueState = library.ValueState;

	// shortcut for sap.ui.core.MessageType
	var MessageType = library.MessageType;
	return BaseController.extend("zmm001.zsolreq.controller.SolicitRequest", {

		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this._formFragments = {};
			var oMessageManager, oView;
			this.i = 0;
			oView = this.getView();

			// set message model
			oMessageManager = sap.ui.getCore().getMessageManager();

			oView.setModel(oMessageManager.getMessageModel(), "message");
			oMessageManager.registerObject(oView, true);

			sap.ui.getCore().getMessageManager().removeAllMessages();
			// or just do it for the whole view

			// Create/Edit Model
			var oCrtSolReq = new JSONModel({
				"Activity": "",
				"AddApprover": "",
				"Address": "",
				"Amendment": "",
				"AmericaAct": 0,
				"Approver": "",
				"ApproverTitle": "",
				"Attachments": "",
				"AttachmentsName": "",
				"BidBond": 0,
				// "BoardMeeting": null,
				"ChangeOrder": "",
				"Changetype": "",
				"City": "",
				"Clarify": "",
				"Comments": "",
				"ComparableModels": "",
				"ContactPerson": "",
				"ContractBegin": null,
				"ContractEnd": null,
				"ContractEndDate": null,
				"ContractorLicense": 0,
				"ContractStartDate": null,
				"Costcenter": "",
				"CostType": "",
				"DateApproved": null,
				"DateReceived": null,
				"Department": "",
				"DigitalForm": "",
				"Dollar": "",
				"EVARunDate": null,
				"Expenses": '0.00',
				// "FundingSource": 0,
				"GlAccount": "",
				"GroupDescription": "",
				"IfTypeC": "",
				"IsEdit": true,
				"JobSiteDate": null,
				"JobSiteLocation": "",
				"JobSiteTime": null,
				"JobSiteWalk": 0,
				"MandatoryMeetings": 0,
				"MeetingsDate": null,
				"MeetingsLocation": "",
				"MeetingTime": null,
				"Mobile": "",
				"MwaContract": "",
				"MwaCopy": "",
				"MwaNumber": "",
				"MwaRequest": "",
				"NetworkNumber": "",
				"NoChange": "",
				"NoCost": '0.00',
				"ObjectPerson": "",
				"ObtainFund": "",
				"OrderDate": null,
				"OrderNumber": "",
				"OtherFunding": "",
				"OtherGroup": "",
				"Project": "",
				"ProjectBudget": 0,
				"ProjectEstimate": '0.00',
				"ProjectID": "",
				"ProposedDueDate": null,
				"PurchasingNumber": "",
				"PurGroup": "",
				"QueriesExt": "",
				"QueriesPhone": "",
				"Questions": "",
				"Regulatory": 0,
				"RepairServices": "",
				"RequestBehalf": "",
				"RequestNumber": "",
				"Requestor": "",
				"Requirement": "",
				"RequisitionNumber": "",
				"RoomReserved": 0,
				// "Service": 0,
				"SetsSpec": "",
				"SoleBrand": "",
				"SoleSource": "",
				"SolicitationType": "",
				"Status": "",
				"Title": "",
				"TotalValue": '0.00',
				// "Type": 0,
				"UploadedBy": "",
				"RequestDate": null,
				"WebexMeet": false,
				"InPersonMeet": false,
				"Value": '0.00',
				"VendorName": "",
				"VendorNumber": "",
				"Wages": 0,
				"PPEReq": 0,
				"CertificationNo": "",
				"OrderFlag": 0,
				"SenateBillNo": "",
				"SenateBillFlag": 0,
				"FundingSourceSCAF": false,
				"FundingSourceIIDR": false,
				"FundingSourceOTH": false,
				"ServiceMat": false,
				"ServiceProf": false,
				"ServiceIT": false,
				"ServiceCons": false,
				"ServiceOth": false,
				"TimeZon": "",
				"FundingSourceFF": false,
				"ServiceENG": false,
				"ServiceOthText": "",
				"IntReqNo": "",
				"TypeA": false,
				"TypeB": false,
				"TypeC": false,
				"TypeC61": false,
				"IfTypeC61": "",
				"COPReq": 0,
				"ReqApprNav": [{
					"Reqno": "0000000000",
					"Name": "",
					"Title": "",
					"Apprlevel": 0,
					"Apprsublevel": 0,
					"Username": "",
					"Adhoc": "",
					"Status": "",
					"Rcvddate": null,
					"Apprdate": null,
					"Apprtime": null,
					"Usrchk": false,
					"Apprname": ""

				}],
				"ReqUserNav": [{
						"ReqNo": "",
						"Title": "",
						"UserName": "",
						"FirstName": "",
						"LastName": "",
						"Mail": "",
						"Cell": "",
						"Telephone": ""

					}]
					// "ReqAttachNav": [{
					// 	"ReqNo": "0000000000",
					// 	"DocumentId": "0000",
					// 	"MimeType": "",
					// 	"FileName": "",
					// 	"Description": "",
					// 	"CreatedDate": null,
					// 	"CreatedBy": ""

				// }]

			});

			// this.getView().byId("idSolReqTitle").setEditable(true);
			// this.getView().byId("idSolReqRequestDate").setEditable(true);
			// this.getView().byId("idSolReqRequestor").setEditable(true);
			// // this.getView().byId("idRequestNumber").setEditable(true);
			// this.getView().byId("idSolReqContractBegin").setEditable(true);
			// this.getView().byId("idSolReqContractEnd").setEditable(true);

			oCrtSolReq.setDefaultBindingMode("TwoWay");
			this.getView().setModel(oCrtSolReq, "oCrtSolReq");
			// this.getView().setModel(new JSONModel('oEditSolReq'), 'oEditSolReq');

			//EmpConcerns
			var oEmpConcern = [{

				"ReqNo": "",
				"Title": "",
				"UserName": "",
				"FirstName": "",
				"LastName": "",
				"Mail": "",
				"Cell": "",
				"Telephone": ""

			}];
			var oJModel = this.getOwnerComponent().getModel("oJModel");
			var oJModel1 = this.getOwnerComponent().getModel("oJModel1");
			oJModel.setDefaultBindingMode("TwoWay");
			oJModel1.setDefaultBindingMode("TwoWay");

			var oContacts = [{
				"ReqNo": "",
				"Title": "Owner",
				"UserName": "",
				"FirstName": "",
				"LastName": "",
				"Mail": "",
				"Cell": "",
				"Telephone": ""

			}, {
				"ReqNo": "",
				"Title": "Project Manager",
				"UserName": "",
				"FirstName": "",
				"LastName": "",
				"Mail": "",
				"Cell": "",
				"Telephone": ""

			}, {
				"ReqNo": "",
				"Title": "Technical",
				"UserName": "",
				"FirstName": "",
				"LastName": "",
				"Mail": "",
				"Cell": "",
				"Telephone": ""

			}, {
				"ReqNo": "",
				"Title": "Other",
				"UserName": "",
				"FirstName": "",
				"LastName": "",
				"Mail": "",
				"Cell": "",
				"Telephone": ""

			}];
			oJModel1.setProperty("/Contacts", oContacts);

			// Attachment Model
			var oAttachment = new JSONModel();
			oAttachment.setDefaultBindingMode("TwoWay");
			this.getView().setModel(oAttachment, "oAttachment");
			// Device Model
			this.getView().setModel(new JSONModel(Device), "device");
			this.oRouter.getRoute("SolicitRequest").attachPatternMatched(this._onObjectMatched, this);
		},
		onMessagePopoverPress: function(oEvent) {
			this._getMessagePopover().openBy(oEvent.getSource());
		},

		_onObjectMatched: function(oEvent) {
			var sObjectId = oEvent.getParameter("arguments").RequestNumber;
			var oPage = this.byId("SolReq");
			var oReqNumber = this.byId("idRequestNumber");
			var oModel = this.getOwnerComponent().getModel();
			// oPage.removeAllContent();

			var oItemTemplate = new sap.m.UploadCollectionItem({
				url: '{media_src}',
				fileName: '{fileName}',
				mimeType: '{mimeType}',
				enableDelete: '{deleteButton}',
				attributes: {
					ObjectAttribute: {
						text: "{parts : ['fileSize', 'size']}"
					}
				}
			});
			this.getView().byId("UploadCollection").bindItems("/files2", oItemTemplate);

			if (sObjectId !== "0000000000") {
				// var oFragment = sap.ui.xmlfragment(this.getView().getId(), 'zmm001.zsolreq.fragment.createSolReq', this);
				// var oSoleReq = "('" + sObjectId + "')?$expand=ReqApprNav,ReqAttachNav";
				var oSoleReq = "/SolicitReqSet('" + sObjectId + "')";
				this.getView().setBusy(true);
				oModel.read(oSoleReq, {
					urlParameters: {
						"$expand": ["ReqApprNav,ReqAttachNav", "ReqUserNav"]
					},
					success: jQuery.proxy(this._editSolReq, this)
				});
				oReqNumber.setVisible(true);

			} else {
				this.getView().byId('idAddApprover').setVisible(false);
				// Reset the values for every create 
				var oCrtSolReq = new JSONModel({
					"Activity": "",
					"AddApprover": "",
					"Address": "",
					"Amendment": "",
					"AmericaAct": 0,
					"Approver": "",
					"ApproverTitle": "",
					"Attachments": "",
					"AttachmentsName": "",
					"BidBond": 0,
					// "BoardMeeting": null,
					"ChangeOrder": "",
					"Changetype": "",
					"City": "",
					"Clarify": "",
					"Comments": "",
					"ComparableModels": "",
					"ContactPerson": "",
					"ContractBegin": null,
					"ContractEnd": null,
					"ContractEndDate": null,
					"ContractorLicense": 0,
					"ContractStartDate": null,
					"Costcenter": "",
					"CostType": "",
					"DateApproved": null,
					"DateReceived": null,
					"Department": "",
					"DigitalForm": "",
					"Dollar": "",
					"EVARunDate": null,
					"Expenses": '0.00',
					// "FundingSource": 0,
					"GlAccount": "",
					"GroupDescription": "",
					"IfTypeC": "",
					"IsEdit": true,
					"JobSiteDate": null,
					"JobSiteLocation": "",
					"JobSiteTime": null,
					"JobSiteWalk": 0,
					"MandatoryMeetings": 0,
					"MeetingsDate": null,
					"MeetingsLocation": "",
					"MeetingTime": null,
					"Mobile": "",
					"MwaContract": "",
					"MwaCopy": "",
					"MwaNumber": "",
					"MwaRequest": "",
					"NetworkNumber": "",
					"NoChange": "",
					"NoCost": '0.00',
					"ObjectPerson": "",
					"ObtainFund": "",
					"OrderDate": null,
					"OrderNumber": "",
					"OtherFunding": "",
					"OtherGroup": "",
					"Project": "",
					"ProjectBudget": 0,
					"ProjectEstimate": '0.00',
					"ProjectID": "",
					"ProposedDueDate": null,
					"PurchasingNumber": "",
					"PurGroup": "",
					"QueriesExt": "",
					"QueriesPhone": "",
					"Questions": "",
					"Regulatory": 0,
					"RepairServices": "",
					"RequestBehalf": "",
					"RequestNumber": "",
					"Requestor": "",
					"Requirement": "",
					"RequisitionNumber": "",
					"RoomReserved": 0,
					// "Service": 0,
					"SetsSpec": "",
					"SoleBrand": "",
					"SoleSource": "",
					"SolicitationType": "",
					"Status": "",
					"Title": "",
					"TotalValue": '0.00',
					// "Type": 0,
					"UploadedBy": "",
					"RequestDate": null,
					"WebexMeet": false,
					"InPersonMeet": false,
					"Value": '0.00',
					"VendorName": "",
					"VendorNumber": "",
					"Wages": 0,
					"PPEReq": 0,
					"CertificationNo": "",
					"OrderFlag": 0,
					"SenateBillNo": "",
					"SenateBillFlag": 0,
					"FundingSourceSCAF": false,
					"FundingSourceIIDR": false,
					"FundingSourceOTH": false,
					"ServiceMat": false,
					"ServiceProf": false,
					"ServiceIT": false,
					"ServiceCons": false,
					"ServiceOth": false,
					"TimeZon": "",
					"FundingSourceFF": false,
					"ServiceENG": false,
					"ServiceOthText": "",
					"IntReqNo": "",
					"TypeA": false,
					"TypeB": false,
					"TypeC": false,
					"TypeC61": false,
					"IfTypeC61": "",
					"COPReq": 0,
					"ReqApprNav": [{
						"Reqno": "0000000000",
						"Name": "",
						"Title": "",
						"Apprlevel": 0,
						"Apprsublevel": 0,
						"Username": "",
						"Adhoc": "",
						"Status": "",
						"Rcvddate": null,
						"Apprdate": null,
						"Apprtime": null,
						"Usrchk": false,
						"Apprname": ""

					}],
					"ReqUserNav": [{
						"ReqNo": "",
						"Title": "",
						"UserName": "",
						"FirstName": "",
						"LastName": "",
						"Mail": "",
						"Cell": "",
						"Telephone": ""

					}]

				});

				var oContacts = [{
					"ReqNo": "",
					"Title": "Owner",
					"UserName": "",
					"FirstName": "",
					"LastName": "",
					"Mail": "",
					"Cell": "",
					"Telephone": ""

				}, {
					"ReqNo": "",
					"Title": "Project Manager",
					"UserName": "",
					"FirstName": "",
					"LastName": "",
					"Mail": "",
					"Cell": "",
					"Telephone": ""

				}, {
					"ReqNo": "",
					"Title": "Technical",
					"UserName": "",
					"FirstName": "",
					"LastName": "",
					"Mail": "",
					"Cell": "",
					"Telephone": ""

				}, {
					"ReqNo": "",
					"Title": "Other",
					"UserName": "",
					"FirstName": "",
					"LastName": "",
					"Mail": "",
					"Cell": "",
					"Telephone": ""

				}];
				var oJModel1 = this.getOwnerComponent().getModel("oJModel1");

				oJModel1.setDefaultBindingMode("TwoWay");

				oJModel1.setProperty("/Contacts", oContacts);

				this.getView().byId("idSolReqTitle").setEditable(true);
				this.getView().byId("idSolReqRequestDate").setEditable(true);
				this.getView().byId("idSolReqRequestor").setEditable(true);
				// this.getView().byId("idRequestNumber").setEditable(true);
				this.getView().byId("idSolReqContractBegin").setEditable(true);
				this.getView().byId("idSolReqContractEnd").setEditable(true);
				oCrtSolReq.setDefaultBindingMode("TwoWay");
				this.getView().setModel(oCrtSolReq, "oCrtSolReq");
				//  Drag and drop - onobjectmatch
				var tokenCSRF = {
					name: "",
					HdrParams: "",
					value: ""
				};
				sap.ui.getCore().setModel(new JSONModel(tokenCSRF), "tokenCSRFModel");
				var data2 = {};
				data2.files2 = [];
				var new_obj2 = {};
				data2.files2.push(new_obj2);
				var oJsonModel2 = new JSONModel();
				oJsonModel2.setData(data2);
				this.getView().byId("UploadCollection").setModel(oJsonModel2);
				this.getView().byId("UploadCollection").unbindItems();

				// oPage.setTitle('Create Solicitation Request');
				oReqNumber.setVisible(false);
				var oURLparams = {
					"ReqNo": '',
					"ReqAmount": '',
					"ITRequired": false
				};
				oModel.callFunction('/GetStaticAppr', {
					method: "GET",
					urlParameters: oURLparams,
					success: jQuery.proxy(this._getApprovers, this)
				});

			}

		},
		_getApprovers: function(oData, oResponse) {
			var oModel = this.getOwnerComponent().getModel("oJModel");
			sap.ui.getCore().getMessageManager().removeAllMessages();

			var oTable = this.getView().byId("idTableApprover");
			if (oData.results.length !== 0) {
				oTable.getModel("oJModel").setData({
					Approvers: oData.results
				});
			}
		},

		_editSolReq: function(oData, oRespone) {
			if (oData.Status == "INAPPROVAL" && oData.IsEdit == true) {
				this.getView().byId('idAddApprover').setVisible(true);
			} else {
				this.getView().byId('idAddApprover').setVisible(false);
			}
			if (oData.Status === 'COMPLETED') {
				oData.IsEdit = false;
			}

			this.validateform(oData);

			if (oData.MeetingTime.ms > 0) {
				oData.MeetingTime = this.msToTime(oData.MeetingTime.ms);
			} else {
				oData.MeetingTime = null;
			}
			if (oData.JobSiteTime.ms > 0) {
				oData.JobSiteTime = this.msToTime(oData.JobSiteTime.ms);
			} else {
				oData.JobSiteTime = null;
			}
			var origDate;

			var oDateFormat_op = sap.ui.core.format.DateFormat.getDateInstance({
				pattern: "EE MMM dd yyyy HH:MM:SS",
				UTC: true
					// 2021-10-26
			});

			if (oData.RequestDate !== null) {
				oData.RequestDate = oDateFormat_op.format(new Date(oData.RequestDate));
				origDate = new Date(oData.RequestDate);
				oData.RequestDate = origDate;
			}

			if (oData.ProposedDueDate !== null) {
				oData.ProposedDueDate = oDateFormat_op.format(new Date(oData.ProposedDueDate));
				origDate = new Date(oData.ProposedDueDate);
				oData.ProposedDueDate = origDate;
			}

			if (oData.MeetingsDate !== null) {
				oData.MeetingsDate = oDateFormat_op.format(new Date(oData.MeetingsDate));
				origDate = new Date(oData.MeetingsDate);
				oData.MeetingsDate = origDate;
			}

			if (oData.ContractBegin !== null) {
				oData.ContractBegin = oDateFormat_op.format(new Date(oData.ContractBegin));
				origDate = new Date(oData.ContractBegin);
				oData.ContractBegin = origDate;
			}

			if (oData.ContractEnd !== null) {
				oData.ContractEnd = oDateFormat_op.format(new Date(oData.ContractEnd));
				origDate = new Date(oData.ContractEnd);
				oData.ContractEnd = origDate;
			}

			if (oData.JobSiteDate !== null) {
				oData.JobSiteDate = oDateFormat_op.format(new Date(oData.JobSiteDate));
				origDate = new Date(oData.JobSiteDate);
				oData.JobSiteDate = origDate;
			}

			var oEditSolReq = this.getView().getModel('oCrtSolReq').setData(oData);
			var oTable = this.getView().byId("idTableApprover");

			oTable.getModel("oJModel").setData({
				Approvers: oData.ReqApprNav.results
			});

			var oJsonModel2 = new sap.ui.model.json.JSONModel();
			var reqnumber = this.getView().byId("idRequestNumber").getValue();
			var oJModel1 = this.getView().getModel('oJModel1');
			oJModel1.setProperty('/Contacts', oData.ReqUserNav.results);
			// var reqnumber = '9000000220';
			//set attacvhments

			if (oData.ReqAttachNav.results.length > 0) {
				var data2 = {};
				data2.files2 = [];
				for (var i = 0; i < oData.ReqAttachNav.results.length; i++) {
					var docId = oData.ReqAttachNav.results[i].DocumentId;
					var new_obj2 = {
						'media_src': "/sap/opu/odata/sap/ZMM_SOLICITREQ_SRV/ReqAttachmentsSet(ReqNo='" + reqnumber +
							"',DocumentId='" + docId + "')/$value",
						'fileType': oData.ReqAttachNav.results[i].MimeType,
						"fileName": oData.ReqAttachNav.results[i].FileName,
						"deleteButton": true

					};

					data2.files2[i] = new_obj2;
				}
				oJsonModel2.setData(data2);

				this.getView().byId("UploadCollection").setModel(oJsonModel2);
				var attachcount = this.getView().byId('UploadCollection').getItems().length;
				for (var i = 0; i < attachcount; i++) {
					this.getView().byId('UploadCollection').getItems()[i].setVisibleDelete(false);
				}

			} else {
				this.getView().byId("UploadCollection").unbindItems();

			}
			if (oData.Status === 'INAPPROVAL' || oData.Status === 'APPROVED' || oData.Status === 'COMPLETED') {
				this.getView().byId('idAddApprBtn').setEnabled(false);
				this.getView().byId('idRemApprBtn').setEnabled(false);
				this.getView().byId('idChgApprBtn').setEnabled(false);
			}
			else {
				this.getView().byId('idAddApprBtn').setEnabled(true);
				this.getView().byId('idRemApprBtn').setEnabled(true);
				this.getView().byId('idChgApprBtn').setEnabled(true);

			}
			this.getView().setBusy(false);
			sap.ui.getCore().getMessageManager().removeAllMessages();

			// var origDate;
			// origDate = this._getOriginalDateTime(oData.RequestDate);
		},
		// _getOriginalDateTime: function(dateTime) {
		// 	if (dateTime !== undefined && dateTime !== null && dateTime !== "") {
		// 		// pattern: "EE MMM dd yyyy HH:MM:SS UTC-0000"
		// 		// pattern: "yyyy-MM-dd'T'hh:mm:ss.SSS"
		// 		var dateFormat = DateFormat.getInstance({
		// 			UTC: true,

		// 			pattern: "EE MMM dd yyyy HH:mm:ss"

		// 		});
		// 		var originalDate = dateFormat.format(new Date(dateTime));
		// 		// var datevalue = new Date(originalDate.setHours(0, 0, 0, 0));
		// 		return originalDate;
		// 	}
		// 	return null;
		// },

		msToTime: function(s) {
			var hrs = Math.floor((s / (1000 * 60 * 60)) % 24);
			var mins = Math.floor((s / (1000 * 60)) % 60);

			return hrs + ':' + mins;
		},
		_getFormFragment: function(sFragmentName) {
			var pFormFragment = this._formFragments[sFragmentName],
				oView = this.getView();

			if (!pFormFragment) {
				pFormFragment = Fragment.load({
					id: oView.getId(),
					name: "zmm001.zsolreq.fragment." + sFragmentName
				});
				this._formFragments[sFragmentName] = pFormFragment;
			}

			return pFormFragment;
		},

		onSaveConfirm: function() {
			var oCrtSolReq = this.getView().getModel('oCrtSolReq').getData();
			if (oCrtSolReq.Status === 'INAPPROVAL') {
				if (!this.onSaveConfirmPop) {
					this.onSaveConfirmPop = sap.ui.xmlfragment("zmm001.zsolreq.fragment.savePopUp", this);
					this.getView().addDependent(this.onSaveConfirmPop);
				}
				this.onSaveConfirmPop.open();
			} else {
				this.onSave();
			}
		},
		onCancelsave: function() {
			this.onSaveConfirmPop.close();
		},

		onSave: function() {

			var oCrtSolReq = this.getView().getModel('oCrtSolReq').getData();
			var oJModel = this.getOwnerComponent().getModel("oJModel");
			var oJModel1 = this.getOwnerComponent().getModel("oJModel1");
			var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
				pattern: "yyyy-MM-ddT00:00:00"
					// 2021-10-26
			});

			var oSuccess = this.validateform(oCrtSolReq);
			var oApprovers = oJModel.getProperty('/Approvers');
			var oUsers = oJModel1.getProperty('/Contacts');
			var oModel = this.getOwnerComponent().getModel();
			if (oSuccess === true) {
				if (this.onSaveConfirmPop !== undefined) {
					this.onSaveConfirmPop.close();
				}
				this._clearMessages();
				this.getView().setBusy(true);
				oCrtSolReq.Status = "DRAFT";
				oCrtSolReq.ReqApprNav = oApprovers;
				oCrtSolReq.ReqUserNav = oUsers;
				var oCpies = oCrtSolReq.COPReq;
				oCrtSolReq.COPReq = parseInt(oCpies);
				if (oCrtSolReq.MeetingTime === "") {
					oCrtSolReq.MeetingTime = null;
				}

				if (oCrtSolReq.JobSiteTime === "") {
					oCrtSolReq.JobSiteTime = null;
				}
				if (oCrtSolReq.MeetingTime !== null && oCrtSolReq.MeetingTime !== "" && oCrtSolReq.MeetingTime.substring(0, 2) !== 'PT') {
					var oMTime = oCrtSolReq.MeetingTime;
					var oMarr = oMTime.split(':');
					var oHrs = parseInt(oMarr[0]);
					if (oHrs < 10) {
						oHrs = '0' + oHrs;
					}
					var oMins = parseInt(oMarr[1]);
					if (oMins < 10) {
						oMins = '0' + oMins;
					}
					if (oMarr[2] !== undefined) {
						var oTimePeriod = oMarr[2].replace(/[^A-Z]+/gi, "");

						oCrtSolReq.TimePeriod = oTimePeriod;
					}
					oCrtSolReq.MeetingTime = 'PT' + oHrs + 'H' + oMins + 'M' + '00' + 'S';

				}
				if (oCrtSolReq.JobSiteTime !== null && oCrtSolReq.JobSiteTime !== "" && oCrtSolReq.JobSiteTime.substring(0, 2) !== 'PT') {
					var oJTime = oCrtSolReq.JobSiteTime;
					var oJarr = oJTime.split(':');
					var oJHrs = parseInt(oJarr[0]);
					if (oJHrs < 10) {
						oJHrs = '0' + oJHrs;
					}
					var oJMins = parseInt(oJarr[1]);
					if (oJMins < 10) {
						oJMins = '0' + oJMins;
					}
					if (oJarr[2] !== undefined) {
						var oTimePeriodJ = oJarr[2].replace(/[^A-Z]+/gi, "");

						oCrtSolReq.TimePeriodJ = oTimePeriodJ;
					}
					oCrtSolReq.JobSiteTime = 'PT' + oJHrs + 'H' + oJMins + 'M' + '00' + 'S';

				}

				if (oCrtSolReq.RequestDate !== null) {
					oCrtSolReq.RequestDate = oDateFormat.format(new Date(oCrtSolReq.RequestDate));
				}
				if (oCrtSolReq.ProposedDueDate !== null) {
					oCrtSolReq.ProposedDueDate = oDateFormat.format(new Date(oCrtSolReq.ProposedDueDate));
				}
				if (oCrtSolReq.OrderDate !== null) {
					oCrtSolReq.OrderDate = oDateFormat.format(new Date(oCrtSolReq.OrderDate));
				}
				if (oCrtSolReq.MeetingsDate !== null) {
					oCrtSolReq.MeetingsDate = oDateFormat.format(new Date(oCrtSolReq.MeetingsDate));
				}

				if (oCrtSolReq.JobSiteDate !== null) {
					oCrtSolReq.JobSiteDate = oDateFormat.format(new Date(oCrtSolReq.JobSiteDate));
				}
				if (oCrtSolReq.EVARunDate !== null) {
					oCrtSolReq.EVARunDate = oDateFormat.format(new Date(oCrtSolReq.EVARunDate));
				}
				if (oCrtSolReq.DateApproved !== null) {
					oCrtSolReq.DateApproved = oDateFormat.format(new Date(oCrtSolReq.DateApproved));
				}
				if (oCrtSolReq.DateReceived !== null) {
					oCrtSolReq.DateReceived = oDateFormat.format(new Date(oCrtSolReq.DateReceived));
				}
				if (oCrtSolReq.ContractStartDate !== null) {
					oCrtSolReq.ContractStartDate = oDateFormat.format(new Date(oCrtSolReq.ContractStartDate));
				}
				if (oCrtSolReq.ContractEndDate !== null) {
					oCrtSolReq.ContractEndDate = oDateFormat.format(new Date(oCrtSolReq.ContractEndDate));
				}
				if (oCrtSolReq.ContractEnd !== null) {
					oCrtSolReq.ContractEnd = oDateFormat.format(new Date(oCrtSolReq.ContractEnd));
				}
				if (oCrtSolReq.ContractBegin !== null) {
					oCrtSolReq.ContractBegin = oDateFormat.format(new Date(oCrtSolReq.ContractBegin));
				}

				oModel.create("/SolicitReqSet", oCrtSolReq, {
					success: jQuery.proxy(this._handleSolReqSave, this)
				});
				// oModel.create("/ZC_SOLICITATION_REQUEST", oCrtSolReq, {
				// 	success: jQuery.proxy(this._handleSolReqSave, this)
				// });
			}
		},
		onOrder: function(oEvent) {
			var oCrtSolReq = this.getView().getModel('oCrtSolReq').getData();
			var oJModel = this.getOwnerComponent().getModel("oJModel");
			var oJModel1 = this.getOwnerComponent().getModel("oJModel1");
			var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
				pattern: "yyyy-MM-ddT00:00:00"

			});
			var oTimeFormat = sap.ui.core.format.DateFormat.getDateInstance({
				pattern: "PT00H00M00S"
			});

			var oApprovers = oJModel.getProperty('/Approvers');
			var oUsers = oJModel1.getProperty('/Contacts');
			// var oUsers = oJModel1.getProperty('/Contacts');
			var oModel = this.getOwnerComponent().getModel();

			var oSuccess = this.validateform(oCrtSolReq);
			if (oSuccess === true) {
				this._clearMessages();
				this.getView().setBusy(true);
				oCrtSolReq.Status = "INAPPROVAL";
				oCrtSolReq.ReqApprNav = oApprovers;
				oCrtSolReq.ReqUserNav = oUsers;
				var oCpies = oCrtSolReq.COPReq;
				oCrtSolReq.COPReq = parseInt(oCpies);
				if (oCrtSolReq.MeetingTime === "") {
					oCrtSolReq.MeetingTime = null;
				}

				if (oCrtSolReq.JobSiteTime === "") {
					oCrtSolReq.JobSiteTime = null;
				}
				if (oCrtSolReq.MeetingTime !== null && oCrtSolReq.MeetingTime !== "" && oCrtSolReq.MeetingTime.substring(0, 2) !== 'PT') {
					var oMTime = oCrtSolReq.MeetingTime;
					var oMarr = oMTime.split(':');
					var oHrs = parseInt(oMarr[0]);
					if (oHrs < 10) {
						oHrs = '0' + oHrs;
					}

					var oMins = parseInt(oMarr[1]);
					if (oMins < 10) {
						oMins = '0' + oMins;
					}
					if (oMarr[2] !== undefined) {
						var oTimePeriod = oMarr[2].replace(/[^A-Z]+/gi, "");
						oCrtSolReq.TimePeriod = oTimePeriod;
					}
					oCrtSolReq.MeetingTime = 'PT' + oHrs + 'H' + oMins + 'M' + '00' + 'S';

				}
				if (oCrtSolReq.JobSiteTime !== null && oCrtSolReq.JobSiteTime !== "" && oCrtSolReq.JobSiteTime.substring(0, 2) !== 'PT') {
					var oJTime = oCrtSolReq.JobSiteTime;
					var oJarr = oJTime.split(':');
					var oJHrs = parseInt(oJarr[0]);
					if (oJHrs < 10) {
						oJHrs = '0' + oJHrs;
					}

					var oJMins = parseInt(oJarr[1]);
					if (oJMins < 10) {
						oJMins = '0' + oJMins;
					}
					if (oJarr[2] !== undefined) {
						var oTimePeriodJ = oJarr[2].replace(/[^A-Z]+/gi, "");
						oCrtSolReq.TimePeriodJ = oTimePeriodJ;
					}
					oCrtSolReq.JobSiteTime = 'PT' + oJHrs + 'H' + oJMins + 'M' + '00' + 'S';

				}

				if (oCrtSolReq.RequestDate !== null) {
					oCrtSolReq.RequestDate = oDateFormat.format(new Date(oCrtSolReq.RequestDate));
				}

				if (oCrtSolReq.ProposedDueDate !== null) {
					oCrtSolReq.ProposedDueDate = oDateFormat.format(new Date(oCrtSolReq.ProposedDueDate));
				}
				if (oCrtSolReq.OrderDate !== null) {
					oCrtSolReq.OrderDate = oDateFormat.format(new Date(oCrtSolReq.OrderDate));
				}
				if (oCrtSolReq.MeetingsDate !== null) {
					oCrtSolReq.MeetingsDate = oDateFormat.format(new Date(oCrtSolReq.MeetingsDate));
				}

				if (oCrtSolReq.JobSiteDate !== null) {
					oCrtSolReq.JobSiteDate = oDateFormat.format(new Date(oCrtSolReq.JobSiteDate));
				}
				if (oCrtSolReq.EVARunDate !== null) {
					oCrtSolReq.EVARunDate = oDateFormat.format(new Date(oCrtSolReq.EVARunDate));
				}
				if (oCrtSolReq.DateApproved !== null) {
					oCrtSolReq.DateApproved = oDateFormat.format(new Date(oCrtSolReq.DateApproved));
				}
				if (oCrtSolReq.DateReceived !== null) {
					oCrtSolReq.DateReceived = oDateFormat.format(new Date(oCrtSolReq.DateReceived));
				}
				if (oCrtSolReq.ContractStartDate !== null) {
					oCrtSolReq.ContractStartDate = oDateFormat.format(new Date(oCrtSolReq.ContractStartDate));
				}
				if (oCrtSolReq.ContractEndDate !== null) {
					oCrtSolReq.ContractEndDate = oDateFormat.format(new Date(oCrtSolReq.ContractEndDate));
				}
				if (oCrtSolReq.ContractEnd !== null) {
					oCrtSolReq.ContractEnd = oDateFormat.format(new Date(oCrtSolReq.ContractEnd));
				}
				if (oCrtSolReq.ContractBegin !== null) {
					oCrtSolReq.ContractBegin = oDateFormat.format(new Date(oCrtSolReq.ContractBegin));
				}
				oModel.create("/SolicitReqSet", oCrtSolReq, {
					success: jQuery.proxy(this._handleSolReqSave, this)
				});
				// oModel.create("/ZC_SOLICITATION_REQUEST", oCrtSolReq, {
				// 	success: jQuery.proxy(this._handleSolReqSave, this)
				// });
			}
		},
		onPressComplete: function() {
			var oCrtSolReq = this.getView().getModel('oCrtSolReq').getData();
			var ReqNo = oCrtSolReq.RequestNumber;
			var oModel = this.getOwnerComponent().getModel();
			this.getView().setBusy(true);
			var oURLparams = {
				"ReqNo": ReqNo
			};
			oModel.callFunction('/StatusUpdate', {
				method: "GET",
				urlParameters: oURLparams,
				success: jQuery.proxy(this._handleComplete, this, '1'),
				error: jQuery.proxy(this._handleComplete, this, '2')
			});

		},
		_handleComplete: function(a, oData, oResponse) {
			this.getView().setBusy(false);
			this.getView().getModel().refresh();
			if (a === '1') {
				var oErrTyp = 'Success';
				var oDErrMsg = "Successfully Completed the Task";
				// var oErrTyp = oErrMsg.severity;
				// var oDErrMsg = oErrMsg.message;
			} else {
				var oErrTyp = 'Error';
				var oDErrMsg = "Error while Completing the Task, please try again";
			}
			// if (oErrTyp === "error") {
			// 	oErrTyp = "Error";

			// } else {
			// 	oErrTyp = "Success";

			// 	var oCrtData = this.getView().getModel('oCrtWorkOrd').getData();
			// 	// Upload Attachments
			// 	var attach = true;
			// 	this.getView().getModel('oCrtWorkOrd').setData(null);
			// }
			var dialog = new Dialog({
				title: oErrTyp,
				type: 'Message',
				state: oErrTyp,
				content: new Text({
					text: oDErrMsg
				}),
				beginButton: new Button({
					text: 'OK',
					press: function() {
						if (oErrTyp === 'Success') {
							window.history.go(-1);

						}
						dialog.close();
					}
				}),
				afterClose: function() {
					dialog.destroy();
				}
			});
			dialog.open();

		},
		validateform: function(oData) {
			var lv_errFlag;
			this._clearMessages();
			var oUploadCollection = this.byId("UploadCollection");
			var cFiles = oUploadCollection.aItems.length;
			if (oData !== null) {
				if (oData.Title === "") {
					var oMsg = "Enter Title";
					var oMessage = new Message({
						message: oMsg,
						type: MessageType.Error,
						target: "/Dummy",
						processor: this.getView().getModel('oCrtSolReq')
					});
					sap.ui.getCore().getMessageManager().addMessages(oMessage);
					var oInput = this.getView().byId("idSolReqTitle");
					oInput.setValueState(ValueState.Error);
					oInput.setValueStateText("Please Enter Title");

					lv_errFlag = true;
				} else {
					oInput = this.getView().byId("idSolReqTitle");
					oInput.setValueState(ValueState.None);
				}
				if (this.getView().byId("idSolReqRequestDate").getValue() === null) {
					oMsg = "Enter Request Date";
					oMessage = new Message({
						message: oMsg,
						type: MessageType.Error,
						target: "/Dummy",
						processor: this.getView().getModel('oCrtSolReq')
					});
					sap.ui.getCore().getMessageManager().addMessages(oMessage);
					oInput = this.getView().byId("idSolReqRequestDate");
					oInput.setValueState(ValueState.Error);
					oInput.setValueStateText("Please Enter Request Date");

					lv_errFlag = true;
				} else {
					oInput = this.getView().byId("idSolReqRequestDate");
					oInput.setValueState(ValueState.None);
				}

				// if (oData.RequestDate === null) {
				// 	oMsg = "Enter Request Date";
				// 	oMessage = new Message({
				// 		message: oMsg,
				// 		type: MessageType.Error,
				// 		target: "/Dummy",
				// 		processor: this.getView().getModel('oCrtSolReq')
				// 	});
				// 	sap.ui.getCore().getMessageManager().addMessages(oMessage);
				// 	oInput = this.getView().byId("idSolReqRequestDate");
				// 	oInput.setValueState(ValueState.Error);
				// 	oInput.setValueStateText("Please Enter Request Date");

				// 	lv_errFlag = true;
				// }
				if (oData.Requestor === '') {
					oMsg = "Enter Requestor";
					oMessage = new Message({
						message: oMsg,
						type: MessageType.Error,
						target: "/Dummy",
						processor: this.getView().getModel('oCrtSolReq')
					});
					sap.ui.getCore().getMessageManager().addMessages(oMessage);
					oInput = this.getView().byId("idSolReqRequestor");
					oInput.setValueState(ValueState.Error);
					oInput.setValueStateText("Please Enter Request Date");

					lv_errFlag = true;
				} else {
					oInput = this.getView().byId("idSolReqRequestor");
					oInput.setValueState(ValueState.None);
				}
				if (oData.SolicitationType === '') {
					oMsg = "Enter Request Type";
					oMessage = new Message({
						message: oMsg,
						type: MessageType.Error,
						target: "/Dummy",
						processor: this.getView().getModel('oCrtSolReq')
					});
					sap.ui.getCore().getMessageManager().addMessages(oMessage);
					var oInputTyp = this.getView().byId("SolReqSolType");
					oInputTyp.setValueState(ValueState.Error);
					oInputTyp.setValueStateText("Please Enter Request Type");

					lv_errFlag = true;
				} else {
					oInput = this.getView().byId("SolReqSolType");
					oInput.setValueState(ValueState.None);
				}
				if (oData.IntReqNo === '') {
					oMsg = "Enter Solicitation Request Number";
					oMessage = new Message({
						message: oMsg,
						type: MessageType.Error,
						target: "/Dummy",
						processor: this.getView().getModel('oCrtSolReq')
					});
					sap.ui.getCore().getMessageManager().addMessages(oMessage);
					var oInputReqID = this.getView().byId("idIntReqNo");
					oInputReqID.setValueState(ValueState.Error);
					oInputReqID.setValueStateText("Enter Solicitation Request Number");

					lv_errFlag = true;
				} else {
					oInput = this.getView().byId("idIntReqNo");
					oInput.setValueState(ValueState.None);
				}
				if (oData.ContractBegin === null) {
					oMsg = "Enter Contract Start Date";
					oMessage = new Message({
						message: oMsg,
						type: MessageType.Error,
						target: "/Dummy",
						processor: this.getView().getModel('oCrtSerAgr')
					});
					sap.ui.getCore().getMessageManager().addMessages(oMessage);
					oInput = this.getView().byId("idSolReqContractBegin");
					oInput.setValueState(ValueState.Error);
					oInput.setValueStateText("Please Enter Contract Start Date");

					lv_errFlag = true;
				} else {
					oInput = this.getView().byId("idSolReqContractBegin");
					oInput.setValueState(ValueState.None);
				}

				if (oData.ContractEnd === null) {
					oMsg = "Enter Contract End Date";
					oMessage = new Message({
						message: oMsg,
						type: MessageType.Error,
						target: "/Dummy",
						processor: this.getView().getModel('oCrtSerAgr')
					});
					sap.ui.getCore().getMessageManager().addMessages(oMessage);
					oInput = this.getView().byId("idSolReqContractEnd");
					oInput.setValueState(ValueState.Error);
					oInput.setValueStateText("Please Enter Contract End Date");

					lv_errFlag = true;
				} else {
					oInput = this.getView().byId("idSolReqContractEnd");
					oInput.setValueState(ValueState.None);
				}
				if (cFiles <= 0) {
					oMsg = "Please add Attachment";
					oMessage = new Message({
						message: oMsg,
						type: MessageType.Error,
						target: "/Dummy",
						processor: this.getView().getModel('oCrtSolReq')
					});
					sap.ui.getCore().getMessageManager().addMessages(oMessage);
					lv_errFlag = true;
				}
				if (lv_errFlag === true) {
					return false;
				} else {
					return true;
				}
			}
		},
		_handleSolReqSave: function(oData, oResponse) {

			this.getView().setBusy(false);
			this.getView().getModel().refresh();

			var oErrRes = oResponse.headers["sap-message"];
			var oErrMsg = JSON.parse(oErrRes);
			if (oErrMsg.severity === 'success') {
				if (oErrMsg) {
					var oErrTyp = oErrMsg.severity;
					var oDErrMsg = oErrMsg.message;

					if (oErrTyp === "error") {
						oErrTyp = "Error";

					} else {
						oErrTyp = "Success";

						var oCrtData = this.getView().getModel('oCrtSolReq').getData();
						// Upload Attachments
						var attach = true;
						this.getView().getModel('oCrtSolReq').setData(null);
					}
					var dialog = new Dialog({
						title: oErrTyp,
						type: 'Message',
						state: oErrTyp,
						content: new Text({
							text: oDErrMsg
						}),
						beginButton: new Button({
							text: 'OK',
							press: function() {
								if (oErrTyp === 'Success') {
									window.history.go(-1);

								}
								dialog.close();
							}
						}),
						afterClose: function() {
							dialog.destroy();
						}
					});
					dialog.open();

				}
				if (attach === true) {
					this.uploadAttach(oData);
				}
			}

		},
		uploadAttach: function(oData) {
			var oUploadCollection = this.byId("UploadCollection");

			var cFiles = oUploadCollection.aItems.length;
			var uploadInfo = cFiles + " file(s)";
			var oJModel = this.getOwnerComponent().getModel("oJModel");
			oJModel.setProperty('/ReqNumber', oData.RequestNumber);

			if (cFiles > 0) {

				oUploadCollection.upload();

			}
		},
		onBeforeUploadStartsMainFileNew: function(oEvent) {
			var oJModel = this.getOwnerComponent().getModel("oJModel");
			var oReqNumber = oJModel.getProperty('/ReqNumber');
			// Header Slug
			var oCustomerHeaderSlug = "";
			var oSlug = oReqNumber + "/" + oEvent.getParameter("fileName");
			oCustomerHeaderSlug = new sap.m.UploadCollectionParameter({
				name: "slug",
				value: oSlug
			});
			oEvent.getParameters().addHeaderParameter(oCustomerHeaderSlug);
			//file drag n drop feature start
			var found = false;
			var finalArrays = oEvent.getParameters().getHeaderParameter();
			for (var k = 0; k < finalArrays.length; k++) {
				var xcsrf = finalArrays[k].getProperty("name");
				if (xcsrf.indexOf("x-csrf-token") !== -1) {
					found = true;
				}
			}
			if (!found) {
				var csrfFetch = sap.ui.getCore().getModel("tokenCSRFModel");
				if (csrfFetch.getData() !== undefined) {
					var csrfArr = sap.ui.getCore().getModel("tokenCSRFModel").getData().HdrParams;
					oEvent.getParameters().addHeaderParameter(csrfArr);
				}
			}
			//file drag n drop feature end
		},
		onCancel: function() {
			var oCrtData = this.getView().getModel('oCrtSolReq').getData();
			this.getView().getModel('oCrtSolReq').setData(null);
			window.history.go(-1);
			this.clearKeyValues("idDept");
			// this.clearKeyValues("idReqDate");
			this.clearKeyValues("idSolType");
			// window.history.go(-1);
		},
		onReqDateChang: function(oEvent) {
			// var oVal = DateFormat.getDateInstance().parse(oEvent.getParameter("newValue"), true);
			// this.setValue('/RequestDate', oVal);

		},
		onDept: function(oEvent) {
			var oVal = oEvent.getSource().getSelectedItem().getKey();
			this.setValue('/Department', oVal);

		},
		onSoltyp: function(oEvent) {
			var oVal = oEvent.getSource().getSelectedItem().getKey();
			this.setValue('/SolicitationType', oVal);

		},
		setValue: function(oFld, oVal) {
			var oCrtSolReq = this.getView().getModel();
			oCrtSolReq.setProperty(oFld, oVal);
		},
		clearKeyValues: function(oId) {
			var oReqDate = this.getView().byId(oId);
			oReqDate.setSelectedItem(" ");
			oReqDate.setSelectedItemId(" ");
			oReqDate.setSelectedKey(" ");
		},
		_getMessagePopover: function() {
			// create popover lazily (singleton)
			if (!this._oMessagePopover) {
				this._oMessagePopover = sap.ui.xmlfragment(this.getView().getId(),
					"zmm001.zsolreq.fragment.MessagePopover", this);
				this.getView().addDependent(this._oMessagePopover);
			}
			return this._oMessagePopover;

		},
		_clearMessages: function() {
			// does not remove the manually set ValueStateText we set in onValueStatePress():
			sap.ui.getCore().getMessageManager().removeAllMessages();
		},
		onChange: function(oEvent) {
			var oUploadCollection = oEvent.getSource();
			var useroDataModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZMM_SOLICITREQ_SRV/", true);
			//	this.getView().setModel(useroDataModel);
			useroDataModel.disableHeadRequestForToken = true;
			//	var oModel = this.getView().getModel();

			useroDataModel.refreshSecurityToken();

			var oHeaders = useroDataModel.oHeaders;
			var sToken = oHeaders['x-csrf-token'];
			// Header Token
			var oCustomerHeaderToken = new UploadCollectionParameter({
				name: "x-csrf-token",
				value: sToken
			});
			oUploadCollection.addHeaderParameter(oCustomerHeaderToken);
			//file drag n drop feature
			var tokenCSRF = {
				name: "x-csrf-token",
				HdrParams: oUploadCollection.getHeaderParameters()[0],
				value: sToken
			};
			sap.ui.getCore().setModel(new JSONModel(tokenCSRF), "tokenCSRFModel");
		},

		onFileDeleted: function(oEvent) {

		},

		onFilenameLengthExceed: function(oEvent) {

		},

		onFileSizeExceed: function(oEvent) {
			var msg = 'File size is above 100MB, Cannot be attached';
			MessageToast.show(msg);

		},

		onTypeMissmatch: function(oEvent) {

		},
		onDeleteSelectedItems: function(oEvenet) {
			var url1 = this.getView().byId('UploadCollection').getSelectedItems();
			var url = url1[0].mProperties.url;
			var ReqNumber = url.split('ReqNo=');
			var ReqNo = ReqNumber[1].slice(1, 11);
			var docId = ReqNumber[1].split("DocumentId='");
			var DocumentId = docId[1].replace("')/$value", "");
			var omodel = this.getOwnerComponent().getModel();
			var a = url.split('_SRV');
			url = a[1];
			omodel.remove(url, {
				method: "DELETE",
				// urlParameters: oURLparams,
				success: jQuery.proxy(this._deleteDocument(ReqNo, DocumentId)),
				error: function() {
					MessageToast.show('Error deleting file please try again');
				}
			});
			// this._deleteDocument(ReqNo, DocumentId);
		},
		_deleteDocument: function(ReqNo, DocumentId) {
			var a = this.getView().byId('UploadCollection').getModel().oData;
			for (var i = 0; i < a.files2.length; i++) {
				var url = a.files2[i].media_src;
				var ReqNumber1 = url.split('ReqNo=');
				var docId1 = ReqNumber1[1].split("DocumentId='");
				var DocumentId1 = docId1[1].replace("')/$value", "");
				if (DocumentId === DocumentId1) {
					a.files2.splice(i, 1);
					this.getView().byId('UploadCollection').removeItem(i);
					this.getView().byId('UploadCollection').getModel().getProperty('/files2');
				}
			}
		},

		onStartUpload: function(oEvent) {
			var oUploadCollection = this.byId("UploadCollection");
			var oTextArea = this.byId("TextArea");
			var cFiles = oUploadCollection.getItems().length;
			var uploadInfo = cFiles + " file(s)";

			if (cFiles > 0) {
				oUploadCollection.upload();

				if (oTextArea.getValue().length === 0) {
					uploadInfo = uploadInfo + " without notes";
				} else {
					uploadInfo = uploadInfo + " with notes";
				}

				MessageBox.information("Uploaded " + uploadInfo);
				oTextArea.setValue("");
			}
		},

		onBeforeUploadStarts: function(oEvent) {
			// Header Slug
			var oCustomerHeaderSlug = new UploadCollectionParameter({
				name: "slug",
				value: oEvent.getParameter("fileName")
			});
			oEvent.getParameters().addHeaderParameter(oCustomerHeaderSlug);
			setTimeout(function() {

			}, 4000);
		},

		onUploadComplete: function(oEvent) {
			// var sUploadedFileName = oEvent.getParameter("files")[0].fileName;
			// setTimeout(function() {
			// 	var oUploadCollection = this.byId("UploadCollection");

			// 	for (var i = 0; i < oUploadCollection.getItems().length; i++) {
			// 		if (oUploadCollection.getItems()[i].getFileName() === sUploadedFileName) {
			// 			oUploadCollection.removeItem(oUploadCollection.getItems()[i]);
			// 			break;
			// 		}
			// 	}

			// }.bind(this), 8000);
			this.getView().byId("UploadCollection").setUploadUrl("/sap/opu/odata/sap/ZMM_SOLICITREQ_SRV/ReqAttachmentsSet");
		},

		onSelectChange: function(oEvent) {
			var oUploadCollection = this.byId("UploadCollection");
			oUploadCollection.setShowSeparators(oEvent.getParameters().selectedItem.getProperty("key"));
		},
		onTitleChange: function(oEvent) {
			var oInput = this.getView().byId("idSolReqTitle");
			oInput.setValueState(ValueState.None);
			oInput.setValueStateText("");
		},
		handleF4User: function(oEvent) {
			var oPath = oEvent.getSource().getBindingContext("oJModel1").getPath();
			var oModel = this.getOwnerComponent().getModel("oJModel1");
			oModel.setProperty("/TblUsersIndx", oPath);
			if (!this.onf4Userhelpdialog) {
				this.onf4Userhelpdialog = sap.ui.xmlfragment("zmm001.zsolreq.fragment.onF4User", this);
				this.getView().addDependent(this.onf4Userhelpdialog);
			}
			this.onf4Userhelpdialog.open();
		},
		handleF4ApprUser: function(oEvent) {
			var oPath = oEvent.getSource().getBindingContext("oJModel").getPath();
			var oModel = this.getOwnerComponent().getModel("oJModel");
			oModel.setProperty("/TblApprIndx", oPath);
			if (!this.onf4Apprhelpdialog) {
				this.onf4Apprhelpdialog = sap.ui.xmlfragment("zmm001.zsolreq.fragment.onF4Appr", this);
				this.getView().addDependent(this.onf4Apprhelpdialog);
			}
			this.onf4Apprhelpdialog.open();
		},
		handleUserClose: function(oEvent) {
			this.onf4Userhelpdialog.close();
		},
		handleApprClose: function(oEvent) {
			this.onf4Apprhelpdialog.close();
		},
		handleF4Requestor: function(oEvent) {
			if (!this.onf4Requestorhelpdialog) {
				this.onf4Requestorhelpdialog = sap.ui.xmlfragment("zmm001.zsolreq.fragment.onF4Requestor", this);
				this.getView().addDependent(this.onf4Requestorhelpdialog);
			}
			this.onf4Requestorhelpdialog.open();
		},
		_setRequestorVhSrcFld: function() {},
		handleRequestorClose: function(oEvent) {
			this.onf4Requestorhelpdialog.close();
		},
		handleSelectedRequestor: function(oEvent) {
			var oRequestor = oEvent.getSource().getBindingContext().getObject().Bname;
			var oInput = this.getView().byId('idSolReqRequestor');
			oInput.setValue(oRequestor);
			this.onf4Requestorhelpdialog.close();
		},
		handleSelectedUser: function(oEvent) {
			// var oRequestor = oEvent.getSource().getBindingContext().getObject();
			var oRequestorName = oEvent.getSource().getBindingContext().getObject().Bname;
			var oRequestorFName = oEvent.getSource().getBindingContext().getObject().NameFirst;
			var oRequestorLName = oEvent.getSource().getBindingContext().getObject().NameLast;
			var oRequestorTelNumber = oEvent.getSource().getBindingContext().getObject().TelNumber;
			var oRequestorEmail = oEvent.getSource().getBindingContext().getObject().SmtpAddr;
			var oIndex = this.getOwnerComponent().getModel('oJModel').getProperty('/TblUsersIndx');
			var oEmpConcern = this.getView().getModel("oJModel");
			// this.getView().getModel("oEmpConcern").setProperty(oIndex.Bname = oRequestorName;
			oEmpConcern.setProperty(oIndex + '/UserName', oRequestorName);
			oEmpConcern.setProperty(oIndex + '/NameFirst', oRequestorFName);
			oEmpConcern.setProperty(oIndex + '/NameLast', oRequestorLName);
			oEmpConcern.setProperty(oIndex + '/SmtpAddr', oRequestorEmail);
			oEmpConcern.setProperty(oIndex + '/TelNumber', oRequestorTelNumber);
			this.onf4Userhelpdialog.close();
		},
		OnPressAddApprover: function(oEvent) {

			var array = {
				"Reqno": "0000000000",
				"Name": "",
				"Apprlevel": 0,
				"Apprsublevel": 0,
				"Username": "",
				"Adhoc": "X",
				"Status": "",
				"Rcvddate": null,
				"Apprdate": null,
				"Apprtime": null,
				"Apprname": "",
				"Mulappr": "",
				"Title": "Adhoc Approver",
				"Usrchk": true
			};
			var dummyapprs = this.byId("idTableApprover").getModel("oJModel").getData();
			var index = this.byId("idTableApprover").getModel("oJModel").getData().Approvers.length;
			this.byId("idTableApprover").getModel("oJModel").getData().Approvers[index] = array;
			this.getView().byId("idTableApprover").getModel("oJModel").refresh();

		},
		onEdit: function(oEvent) {

			// this.getView().getModel("oEditModel").getData().Edit = true;
			this.getView().byId("idSolReqTitle").setEditable(true);
			this.getView().byId("idSolReqRequestDate").setEditable(true);
			this.getView().byId("idSolReqRequestor").setEditable(true);
			this.getView().byId("idRequestNumber").setEditable(true);
			this.getView().byId("idSolReqContractBegin").setEditable(true);
			this.getView().byId("idSolReqContractEnd").setEditable(true);

		},

		moveUpSequence: function(evt) {
			var sPath = evt.getSource().getBindingContext("oJModel").sPath;
			sPath = sPath.slice(1);
			sPath = sPath.split("/")[1];
			var oJsonModel1 = new sap.ui.model.json.JSONModel();

			//	this.approversPath = sPath;
			if (sPath !== "0") {
				var oModel = this.getView().byId("changeSequenceTable").getModel("oJModel").getData().Approvers[sPath];

				this.getView().byId("changeSequenceTable").getModel("oJModel").getData().Approvers.splice(sPath, 1);
				this.getView().byId("changeSequenceTable").getModel("oJModel").getData().Approvers.splice(sPath - 1, 0, oModel);
				this.getView().byId("changeSequenceTable").getModel("oJModel").refresh();
			}
		},
		moveDownSequence: function(evt) {
			var sPath = evt.getSource().getBindingContext("oJModel").sPath;
			sPath = sPath.slice(1);
			sPath = sPath.split("/")[1];
			var oJsonModel1 = new sap.ui.model.json.JSONModel();

			//	this.approversPath = sPath;
			var newSPath = (this.getView().byId("changeSequenceTable").getModel("oJModel").getData().Approvers.length - 1).toString();
			if (sPath !== newSPath) {
				var oModel = this.getView().byId("changeSequenceTable").getModel("oJModel").getData().Approvers[sPath];

				var array = this.getView().byId("changeSequenceTable").getModel("oJModel").getData().Approvers.splice(sPath, 1);
				this.getView().byId("changeSequenceTable").getModel("oJModel").getData().Approvers.splice(Number(sPath) + Number(1), 0, oModel);
				this.getView().byId("changeSequenceTable").getModel("oJModel").refresh();
			}
		},

		OnChangeApprovers: function(oEvent) {
			//this.byId("idTableApprover").getModel("oJModel").getData().Approvers
			var oJsonModel = new sap.ui.model.json.JSONModel();
			var results = this.getView().byId("idTableApprover").getModel("oJModel").getData();
			oJsonModel.setData(results);

			if (!this._oResetPasswordDialog51) {
				this._oResetPasswordDialog51 = sap.ui.xmlfragment(this.getView().getId(),
					"zmm001/zsolreq.fragment.ChangeSequence", this);
				this.getView().addDependent(this._oResetPasswordDialog51);
			}
			this._oResetPasswordDialog51.open();
			this.getView().byId("changeSequenceTable").setModel(oJsonModel, "oJModel");

		},
		changeSequenceSubmit: function(evt) {
			var oTable = this.byId("changeSequenceTable").getModel("oJModel").getData();
			var oTableOld = this.getView().byId("idTableApprover").getModel("oJModel").getData().Approvers;
			for (var i = 0; i < oTable.Approvers.length; i++) {

				var Username = oTable.Approvers[i].Mulappr;

				oTableOld.Mulappr = Username;
			}
			this.getView().byId("idTableApprover").getModel("oJModel").refresh();
			this.closeChangeSequence();
		},

		closeChangeSequence: function(evt) {
			this._oResetPasswordDialog51.close();
			// this._oResetPasswordDialog51.destroy();
			// this.__oResetPasswordDialog51 = undefined;
		},

		// onAfterRendering: function() {

		// 	if (this.getView().byId("idSolReqTitle").getValue() !== "") {
		// 		this.getView().byId("idSolReqTitle").setEditable(false);
		// 		this.getView().byId("idSolReqRequestDate").setEditable(false);
		// 		this.getView().byId("idSolReqRequestor").setEditable(false);
		// 		this.getView().byId("idRequestNumber").setEditable(false);
		// 		this.getView().byId("idSolReqContractBegin").setEditable(false);
		// 		this.getView().byId("idSolReqContractEnd").setEditable(false);
		// 	}
		// 	// this.getView().byId("idTableApprover").setEditable(false);
		// },
		onPrint: function(oEvent) {
			var reqnumber = this.getView().byId("idRequestNumber").getValue();
			var oPanel = new sap.m.Panel();

			var html = new sap.ui.core.HTML();
			// /sap/opu/odata/sap/ZMM_SOLICITREQ_SRV/PrintFormSet('9000000220')/$value
			var sRead = "/PrintFormSet(ReqNo='" + reqnumber + "')/$value";

			// oModel.read(sRead, null, null, true,  function(oData, oResponse) {
			var opdfViewer = new PDFViewer();
			this.getView().addDependent(opdfViewer);
			var sServiceURL = this.getView().getModel().sServiceUrl;
			var sSource = sServiceURL + sRead;
			opdfViewer.setSource(sSource);
			opdfViewer.setTitle("Print Preview");
			opdfViewer.open();
			// var pdfURL = oData.url;

			// html.setContent("<iframe src=" + pdfURL + " width='700' height='700'></iframe>");

			// oPanel.addContent(html);
			// oPanel.placeAt("content");

			// }, function() {
			// 	alert("Read failed");
			// });

		},
		onSelectIT: function(oEvent) {
			var oModel = this.getOwnerComponent().getModel();
			var oAmount = this.getView().byId('SolReqPrjEst').getValue();
			var l = '';
			if (oAmount !== '0.00') {
				var a = oAmount.split(',');
				for (var i = 0; i < a.length; i++) {
					l = l + a[i];
				}
				oAmount = l;
			}
			var req = 0;
			var req1 = '';
			req = this.getView().byId('idRequestNumber').getValue();
			if (req !== 0) {
				req1 = req;
			}

			var oURLparams = {
				"ReqNo": req1,
				"ReqAmount": oAmount,
				"ITRequired": oEvent.getParameters().selected
			};
			oModel.callFunction('/GetStaticAppr', {
				method: "GET",
				urlParameters: oURLparams,
				success: jQuery.proxy(this._getApprovers, this)
			});

		},
		onAmountChange: function(oEvent) {
			var oModel = this.getOwnerComponent().getModel();
			var oAmount = oEvent.getParameters().value;
			var l = '';
			if (oAmount !== '0.00') {
				var a = oAmount.split(',');
				for (var i = 0; i < a.length; i++) {
					l = l + a[i];
				}
				oAmount = l;
			}
			var req = 0;
			var req1 = '';
			req = this.getView().byId('idRequestNumber').getValue();
			if (req !== 0) {
				req1 = req;
			}

			var oIT = this.getView().byId('SolReqIT').getSelected();
			var oURLparams = {
				"ReqNo": req1,
				"ReqAmount": oAmount,
				"ITRequired": oIT
			};
			oModel.callFunction('/GetStaticAppr', {
				method: "GET",
				urlParameters: oURLparams,
				success: jQuery.proxy(this._getApprovers, this)
			});

		},
		onSearchReq: function(oEvent) {
			var sValue = oEvent.getParameter("value");
			var oFilter = new Filter("Bname", FilterOperator.Contains, sValue);
			var oBinding = oEvent.getSource().getBinding("items");
			if (sValue && sValue !== "") {
				oBinding.filter([oFilter]);
			} else {
				oFilter = new Filter("Bname", FilterOperator.Contains, '*');
				oBinding.filter([]);
			}

		},
		onReqVHConfirm: function(oEvent) {
			var oInput = this.byId("idSolReqRequestor");
			var oName = oEvent.getParameters().selectedItem.mAggregations.cells[1].getText() + ' ' + oEvent.getParameters().selectedItem.mAggregations
				.cells[2].getText();
			oInput.setValue(oName);
			var oVData = this.getView().getModel('oCrtSolReq').getData();
			oVData.Requestor = oEvent.getParameters().selectedItem.mAggregations.cells[0].getText();
		},
		onSearchAppr: function(oEvent) {
			var sValue = oEvent.getParameter("value");
			var oFilter = new Filter("Bname", FilterOperator.Contains, sValue);
			var oBinding = oEvent.getSource().getBinding("items");
			oBinding.filter([oFilter]);

		},
		onApprVHConfirm: function(oEvent) {
			var oRequestorName = oEvent.getParameters().selectedItem.mAggregations.cells[0].getText();
			var oRequestorFname = oEvent.getParameters().selectedItem.mAggregations.cells[1].getText() + ' ' + oEvent.getParameters().selectedItem
				.mAggregations.cells[2].getText();
			// var b = oRequestorFname.substr(1,oRequestorFname.length-2);
			// b =b.toLowerCase();
			// var oRequestorFname1 =  oEvent.getParameters().selectedItem.mAggregations.cells[2].getText();
			// var c = oRequestorFname1.substr(1,oRequestorFname1.Length);
			// c = c.toLowerCase();
			// var i = oRequestorFname[0]+ b +oRequestorFname[oRequestorFname.length-1] + ' ' + oRequestorFname1[0] + c;

			var oIndex = this.getOwnerComponent().getModel('oJModel').getProperty('/TblApprIndx');
			var oEmpConcern = this.getView().getModel("oJModel");
			oEmpConcern.setProperty(oIndex + '/Mulappr', oRequestorName);
			oEmpConcern.setProperty(oIndex + '/Apprname', oRequestorFname);
			this.getView().byId("idTableApprover").getModel("oJModel").refresh();
		},
		onSearchUser: function(oEvent) {
			var sValue = oEvent.getParameter("value");
			var oFilter = new Filter("Bname", FilterOperator.Contains, sValue);
			var oBinding = oEvent.getSource().getBinding("items");
			if (sValue && sValue !== "") {
				oBinding.filter([oFilter]);
			} else {
				oBinding.filter([]);
			}

		},
		onUserVHConfirm: function(oEvent) {
			var oRequestorName = oEvent.getParameters().selectedItem.mAggregations.cells[0].getText();
			var oFname = oEvent.getParameters().selectedItem.mAggregations.cells[1].getText();
			var oLname = oEvent.getParameters().selectedItem.mAggregations.cells[2].getText();
			var oEmail = oEvent.getParameters().selectedItem.mAggregations.cells[3].getText();

			var oTphone = oEvent.getParameters().selectedItem.mAggregations.cells[4].getText();
			var oIndex = this.getOwnerComponent().getModel('oJModel1').getProperty('/TblUsersIndx');
			var oEmpConcern = this.getView().getModel("oJModel1");

			oEmpConcern.setProperty(oIndex + '/UserName', oRequestorName);
			oEmpConcern.setProperty(oIndex + '/FirstName', oFname);
			oEmpConcern.setProperty(oIndex + '/LastName', oLname);
			oEmpConcern.setProperty(oIndex + '/Mail', oEmail);
			oEmpConcern.setProperty(oIndex + '/Telephone', oTphone);
			this.getView().byId("idTableEmpConcern").getModel("oJModel1").refresh();

		},
		handleSuggestedUserSelected: function(oEvent) {
			var t = oEvent.getParameters().selectedItem.getText();
		},
		OnRemoveApprovers: function(oEvent) {
			// .oEvent.getSource().getBindingContext("oJModel").getPath().split("/")[2];
			// var stepIndex = this.getView().byId('idTableApprover').getSelectedContextPaths()[0].slice("/Approvers")[11];
			// this.byId("idTableApprover").getModel("oJModel").getData().Approvers.slice([stepIndex]);

			var aSelContextPaths = this.byId("idTableApprover").getSelectedContextPaths();
			var aSelectedIndexes = [];
			var oDraftEntries = this.byId("idTableApprover").getModel("oJModel").getData();
			if (Array.isArray(aSelContextPaths) && aSelContextPaths.length > 0) {
				aSelContextPaths.forEach(function(sSelectedPath) {
					aSelectedIndexes.push(sSelectedPath.split("/")[2]);
				});

				aSelectedIndexes.sort(function(a, b) {
					return b - a;
				});

				aSelectedIndexes.forEach(function(index) {
					oDraftEntries.Approvers.splice(index, 1);
				});

				this.byId("idTableApprover").getModel("oJModel").setData(oDraftEntries);
				this._removeTableSelections();

				// if (oDraftEntries.items.length === 0) {
				// 	this._toggleSaveButtonEnablement(false);
				// } else {
				// 	this._toggleSaveButtonEnablement(true);
				// }
			}

		},
		handleLinkPress: function() {},
		_removeTableSelections: function() {
			this.byId("idTableApprover").removeSelections();
			this._toggleRemoveButtonEnablement(false);
		},
		onTimeChange: function(oEvent) {
			var oInput = this.getView().byId('idMeetingTime').getValue();
			var oValState = this.getView().byId('idMeetingTime');
			var oHrs = oInput.substr(0, 2);
			var oMins = oInput.substr(2, 2);
			if (oHrs > 23) {
				oValState.setValueState("Error");
				oValState.setValueStateText("Invalid Input: Hours cannot be greater than 23");
			}
			if (oMins > 59) {
				oValState.setValueState("Error");
				oValState.setValueStateText("Invalid Input: Minutes cannot be greater than 59");
			}
			if (oInput.length == 4) {
				var oTime = oHrs + ':' + oMins;
				oValState.setValue(oTime);
			}
			// oInput.setValueState
		},
		onServiceOthSelect: function(oEvent) {
			if (!oEvent.getParameters().selected) {
				this.getView().byId('idServiceOth').setValue(null);
			}
		},
		onTypeCSelect: function(oEvent) {
			if (!oEvent.getParameters().selected) {
				this.getView().byId('idTypeC').setValue(null);
			}
		},
		onTypeC61Select: function(oEvent) {
			if (!oEvent.getParameters().selected) {
				this.getView().byId('idTypeC61').setValue(null);
			}
		},
		onOthersSelect: function(oEvent) {
			if (!oEvent.getParameters().selected) {
				this.getView().byId('idOthers').setValue(null);
			}
		},
		onContractorLicSelect: function(oEvent) {
			if (oEvent.getParameters().selectedIndex === 0) {
				this.getView().byId('idTypeC').setValue(null);
				this.getView().byId('idOthers').setValue(null);
				this.getView().byId('idTypeC61').setValue(null);
				this.getView().byId('idCheckTypeA').setSelected(false);
				this.getView().byId('idTCheckTypeB').setSelected(false);

				this.getView().byId('idCheckTypeC').setSelected(false);

				this.getView().byId('idCheckTypeC61').setSelected(false);

				this.getView().byId('idCheckOthers').setSelected(false);
			}

		},
		ProjuctBudgetSelect: function(oEvent) {
			if (oEvent.getParameters().selectedIndex === 1) {
				this.getView().byId('idProjectBudget').setValue(null);
			}
		},
		onOtherFundingSelect: function(oEvent) {
			if (!oEvent.getParameters().selected) {
				this.getView().byId('idonOtherFunding').setValue(null);
			}
		},
		onSelectNerc: function(oEvent) {
			if (oEvent.getParameters().selectedIndex === 0) {
				this.getView().byId('idCertNo').setValue(null);
			}
		},
		onSelectExecOrd: function(oEvent) {
			if (oEvent.getParameters().selectedIndex === 0) {
				this.getView().byId('idExecOrdNo').setValue(null);
			}
		},
		onSelectSenateBill: function(oEvent) {
			if (oEvent.getParameters().selectedIndex === 0) {
				this.getView().byId('idBillNum').setValue(null);
			}
		},
		onMandatoryMeet: function(oEvent) {
			if (oEvent.getParameters().selectedIndex === 0) {
				var oCrtSolReq = this.getView().getModel('oCrtSolReq').getData();
				oCrtSolReq.TimePeriod = "";
				this.getView().byId('idWebexMeet').setSelected(null);
				this.getView().byId('idInPersonMeet').setSelected(null);
				// this.getView().byId('idRoomReserved').setSelectedIndex
				this.getView().byId('idRoomReserved').setSelectedIndex(0);
				this.getView().byId('idMeetLocation').setValue(' ');
				this.getView().byId('idSolMeetingDate').setValue(null);
				this.getView().byId('idSolMeetingTime').setValue(null);
			}
		},
		onJobSiteWalkSelect: function(oEvent) {
			if (oEvent.getParameters().selectedIndex === 0) {
				var oCrtSolReq = this.getView().getModel('oCrtSolReq').getData();
				oCrtSolReq.TimePeriodJ = "";
				this.getView().byId('idjobsiteDate').setValue(null);
				this.getView().byId('idjobsiteTime').setValue('');
				this.getView().byId('idjobSiteLocation1').setValue(null);
			}
		},
		onPPEselect: function(oEvent) {
			if (oEvent.getParameters().selectedIndex === 0) {
				this.getView().byId('idonPPE').setValue(' ');

			}

		},
		onRoomReservedSelect: function(oEvent) {
			if (oEvent.getParameters().selectedIndex === 0) {
				this.getView().byId('idMeetLocation').setValue(' ');
			}
		},
		onJobSiteChange: function(oEvent) {
			var oInput = this.getView().byId('idJobSiteTime').getValue();
			var oValState = this.getView().byId('idJobSiteTime');
			var oHrs = oInput.substr(0, 2);
			var oMins = oInput.substr(2, 2);
			if (oHrs > 23) {
				oValState.setValueState("Error");
				oValState.setValueStateText("Invalid Input: Hours cannot be greater than 23");
			}
			if (oMins > 59) {
				oValState.setValueState("Error");
				oValState.setValueStateText("Invalid Input: Minutes cannot be greater than 59");
			}
			if (oInput.length == 4) {
				var oTime = oHrs + ':' + oMins;
				oValState.setValue(oTime);
			}
			// oInput.setValueState
		},
		onMeetingTimeChang: function(oEvent) {
			var oVal = oEvent.getParameter('value');
		},
		onApprvAddApprover: function() {
			var oAddApprovers = new JSONModel({
				"ApproverName": ""
			});
			oAddApprovers.setDefaultBindingMode("TwoWay");
			this.getView().setModel(oAddApprovers, "oAddApprovers");
			if (!this.AddApproverFragment) {
				this.AddApproverFragment = sap.ui.xmlfragment("idAppApprFrgment1", "zmm001.zsolreq.fragment.onF4ApproverAdd", this);
				this.getView().addDependent(this.AddApproverFragment);
			}
			this.AddApproverFragment.open();
		},
			handleF4Requestorfragment: function() {
			if (!this.ApproverDialog) {
				// Create Dialog using fragment factory
				this.ApproverDialog = sap.ui.xmlfragment("idAppApprFrgment2", "zmm001.zsolreq.fragment.onF4AddApprover", this);
				//Connect Dialog to View
				this.getView().addDependent(this.ApproverDialog);
			}
			this.ApproverDialog.open();

		},
		onApprVHConfirmfragment: function(oEvent) {

			sap.ui.core.Fragment.byId("idAppApprFrgment1", "idApprName").setValue(oEvent.mParameters.selectedItem.mAggregations.cells[0].getText());

		},
		onAddApproverSave: function(oEvent) {

			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZMM_WOM_ENH_INBOX_SRV/");
			var oApprName = sap.ui.core.Fragment.byId("idAppApprFrgment1", "idApprName").getValue();
			var oCrtSolReq = this.getView().getModel('oCrtSolReq');
			var reqNo = oCrtSolReq.oData.RequestNumber;
			var oURLparams = {
				"ReqNo": reqNo,
				"UserName": oApprName,
				"WorkItemID": "000000000000"

			};
			this.getView().setBusy(true);
			sap.ui.core.Fragment.byId("idAppApprFrgment1", "idApprName").setBusy(true);
			oModel.callFunction('/AddApprover', {
				method: "GET",
				urlParameters: oURLparams,
				success: jQuery.proxy(this._saveAddAppr, this)
			});
		},
		_saveAddAppr: function() {
			this.AddApproverFragment.close();
			sap.ui.core.Fragment.byId("idAppApprFrgment1", "idApprName").setBusy(false);
			var oModel = this.getOwnerComponent().getModel();
			var  oCrtSolReq = this.getView().getModel('oCrtSolReq');
			var reqNo =  oCrtSolReq.oData.RequestNumber;
			var ServiceRequestSet = "/SolicitReqSet('" + reqNo + "')";
			this.getView().setBusy(false);
			var oTable = this.getView().byId("idTableApprover");
			oTable.setBusy(true);
			oModel.read(ServiceRequestSet, {
				urlParameters: {
					"$expand": ["ReqApprNav,ReqAttachNav", "ReqUserNav"]
				},
				success: jQuery.proxy(this._refreshAppr, this)
			});

		},
		onCloseAddApprover: function(oEvent) {
			this.AddApproverFragment.close();
		},
		_refreshAppr: function(oData, oResponse) {
			var oTable = this.getView().byId("idTableApprover");
			oTable.getModel("oJModel").setData({
				Approvers: oData.ReqApprNav.results
			});
			oTable.setBusy(false);

		}
		
	});
}, /* bExport= */ true);
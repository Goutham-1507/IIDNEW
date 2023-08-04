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
	"sap/ui/core/library"

], function(BaseController, MessageBox, Utilities, History, JSONModel, Dialog, Button, Text, DateFormat, Fragment, Message, library) {
	"use strict";
	// shortcut for sap.ui.core.ValueState
	var ValueState = library.ValueState;

	// shortcut for sap.ui.core.MessageType
	var MessageType = library.MessageType;
	return BaseController.extend("zmm001.zsolreq.controller.SolicitRequest", {

		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this._formFragments = {};

			var oCrtSolReq = new sap.ui.model.json.JSONModel({
				"Activity": "",
				"AddApprover": "",
				"Address": "",
				"Amendment": "",
				"AmericaAct": "",
				"Approver": "",
				"ApproverTitle": "",
				"Attachments": "",
				"AttachmentsName": "",
				"BidBond": "",
				"BoardMeeting": "",
				"ChangeOrder": "",
				"Changetype": "",
				"City": "",
				"Clarify": "",
				"Comments": "",
				"ComparableModels": "",
				"ContactPerson": "",
				"ContractBegin": "",
				"ContractEnd": "",
				"ContractEndDate": "",
				"ContractorLicense": "",
				"ContractStartDate": "",
				"Copies": "",
				"Costcenter": "",
				"CostType": "",
				"DateApproved": "",
				"DateReceived": "",
				"Department": "",
				"DigitalForm": "",
				"Dollar": "",
				"EVARunDate": "",
				"Expenses": "",
				"FundingSource": "",
				"GlAccount": "",
				"GroupDescription": "",
				"IfTypeC": "",
				"JobSiteDate": "",
				"JobSiteLocation": "",
				"JobSiteTime": "",
				"JobSiteWalk": "",
				"MandatoryMeetings": "",
				"MeetingsDate": "",
				"MeetingsLocation": "",
				"MeetingTime": "",
				"Mobile": "",
				"MwaContract": "",
				"MwaCopy": "",
				"MwaNumber": "",
				"MwaRequest": "",
				"NetworkNumber": "",
				"NoChange": "",
				"NoCost": "",
				"ObjectPerson": "",
				"ObtainFund": "",
				"OrderDate": "",
				"OrderNumber": "",
				"OtherFunding": "",
				"OtherGroup": "",
				"Project": "",
				"ProjectBudget": "",
				"ProjectEstimate": "",
				"ProjectID": "",
				"ProposedDueDate": "",
				"PurchasingNumber": "",
				"PurGroup": "",
				"QueriesExt": "",
				"QueriesPhone": "",
				"Questions": "",
				"Regulatory": "",
				"RepairServices": "",
				"RequestBehalf": "",
				"RequestNumber": "",
				"Requestor": "",
				"Requirement": "",
				"RequisitionNumber": "",
				"RoomReserved": "",
				"Service": "",
				"SetsSpec": "",
				"SoleBrand": "",
				"SoleSource": "",
				"SolicitationType": "",
				"Status": "",
				"Title": "",
				"TotalValue": "",
				"Type": "",
				"UploadedBy": "",
				"RequestDate": "",
				"Date": "",
				"Value": "",
				"VendorName": "",
				"VendorNumber": "",
				"Wages": ""

			});

			var oEditSolReq = new sap.ui.model.json.JSONModel({
				"Activity": "",
				"AddApprover": "",
				"Address": "",
				"Amendment": "",
				"AmericaAct": "",
				"Approver": "",
				"ApproverTitle": "",
				"Attachments": "",
				"AttachmentsName": "",
				"BidBond": "",
				"BoardMeeting": "",
				"ChangeOrder": "",
				"Changetype": "",
				"City": "",
				"Clarify": "",
				"Comments": "",
				"ComparableModels": "",
				"ContactPerson": "",
				"ContractBegin": "",
				"ContractEnd": "",
				"ContractEndDate": "",
				"ContractorLicense": "",
				"ContractStartDate": "",
				"Copies": "",
				"Costcenter": "",
				"CostType": "",
				"DateApproved": "",
				"DateReceived": "",
				"Department": "",
				"DigitalForm": "",
				"Dollar": "",
				"EVARunDate": "",
				"Expenses": "",
				"FundingSource": "",
				"GlAccount": "",
				"GroupDescription": "",
				"IfTypeC": "",
				"JobSiteDate": "",
				"JobSiteLocation": "",
				"JobSiteTime": "",
				"JobSiteWalk": "",
				"MandatoryMeetings": "",
				"MeetingsDate": "",
				"MeetingsLocation": "",
				"MeetingTime": "",
				"Mobile": "",
				"MwaContract": "",
				"MwaCopy": "",
				"MwaNumber": "",
				"MwaRequest": "",
				"NetworkNumber": "",
				"NoChange": "",
				"NoCost": "",
				"ObjectPerson": "",
				"ObtainFund": "",
				"OrderDate": "",
				"OrderNumber": "",
				"OtherFunding": "",
				"OtherGroup": "",
				"Project": "",
				"ProjectBudget": "",
				"ProjectEstimate": "",
				"ProjectID": "",
				"ProposedDueDate": "",
				"PurchasingNumber": "",
				"PurGroup": "",
				"QueriesExt": "",
				"QueriesPhone": "",
				"Questions": "",
				"Regulatory": "",
				"RepairServices": "",
				"RequestBehalf": "",
				"RequestNumber": "",
				"Requestor": "",
				"Requirement": "",
				"RequisitionNumber": "",
				"RoomReserved": "",
				"Service": "",
				"SetsSpec": "",
				"SoleBrand": "",
				"SoleSource": "",
				"SolicitationType": "",
				"Status": "",
				"Title": "",
				"TotalValue": "",
				"Type": "",
				"UploadedBy": "",
				"RequestDate": "",
				"Date": "",
				"Value": "",
				"VendorName": "",
				"VendorNumber": "",
				"Wages": ""

			});
			oEditSolReq.setDefaultBindingMode("TwoWay");
			oCrtSolReq.setDefaultBindingMode("TwoWay");
			this.getView().setModel(new JSONModel('oCrtSolReq'), 'oCrtSolReq');
			this.getView().setModel(new JSONModel('oEditSolReq'), 'oEditSolReq');
			this.oRouter.getRoute("SolicitRequest").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function(oEvent) {
			var sObjectId = oEvent.getParameter("arguments").RequestNumber;
			var oPage = this.byId("SolReq");
			var oModel = this.getOwnerComponent().getModel();
			oPage.removeAllContent();

			if (sObjectId !== "0000000000") {
				var oFragment = sap.ui.xmlfragment(this.getView().getId(), 'zmm001.zsolreq.fragment.createSolReq', this);
				var oSoleReq = "/ZC_SOLICITATION_REQUEST(RequestNumber='" + sObjectId + "')";
				oModel.read(oSoleReq, {
					success: jQuery.proxy(this._editSolReq, this)
				});

				oPage.setTitle('Edit Solicitation Request');
				oPage.addContent(oFragment);
				// });
			} else {
				var oFragment1 = sap.ui.xmlfragment(this.getView().getId(), 'zmm001.zsolreq.fragment.createSolReq', this);
				oPage.setTitle('Create Solicitation Request');

				oPage.addContent(oFragment1);

			}

		},
		_editSolReq: function(oData, oRespone) {
			var oEditSolReq = this.getView().getModel('oCrtSolReq').getData();
			oEditSolReq.RequestNumber = oData.RequestNumber;
			oEditSolReq.Title = oData.Title;
			oEditSolReq.Requestor = oData.Requestor;
			// oEditSolReq.Requestor = oData.Requestor;
			oEditSolReq.ProjectEstimate = oData.ProjectEstimate;
			this.getView().getModel('oCrtSolReq').setData(oEditSolReq);

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
		onSave: function(oEvent) {
			this.getView().setBusy(true);
			var oCrtSolReq = this.getView().getModel('oCrtSolReq').getData();
			var oModel = this.getOwnerComponent().getModel();
			oCrtSolReq.Status = "DRAFT";
			oModel.create("/ZC_SOLICITATION_REQUEST", oCrtSolReq, {
				success: jQuery.proxy(this._handleSolReqSave, this)
			});
		},
		onOrder: function(oEvent) {
			this.getView().setBusy(true);
			var oCrtSolReq = this.getView().getModel('oCrtSolReq').getData();
			var oModel = this.getOwnerComponent().getModel();
			oCrtSolReq.Status = "INAPPROVAL";
			oModel.create("/ZC_SOLICITATION_REQUEST", oCrtSolReq, {
				success: jQuery.proxy(this._handleSolReqSave, this)
			});
		},
		_handleSolReqSave: function(oData, oResponse) {

			this.getView().setBusy(false);
			this.getView().getModel().refresh();

			var oErrRes = oResponse.headers["sap-message"];
			var oErrMsg = JSON.parse(oErrRes);
			if (oErrMsg) {
				var oErrTyp = oErrMsg.severity;
				var oDErrMsg = oErrMsg.message;

				if (oErrTyp === "error") {
					oErrTyp = "Error";

				} else {
					oErrTyp = "Success";
					var oCrtData = this.getView().getModel('oCrtSolReq').getData();
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

							window.history.go(-1);
							dialog.close();

						}
					}),
					afterClose: function() {
						dialog.destroy();
					}
				});
				dialog.open();

			}
		},
		onCancel: function() {
			var oCrtData = this.getView().getModel('oCrtSolReq').getData();
			this.getView().getModel('oCrtSolReq').setData(null);
			this.clearKeyValues("idDept");
			// this.clearKeyValues("idReqDate");
			this.clearKeyValues("idSolType");
			window.history.go(-1);
		},
		onReqDateChang: function(oEvent) {
			var oVal = DateFormat.getDateInstance().parse(oEvent.getParameter("newValue"), true);
			this.setValue('/RequestDate', oVal);

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
			var oCrtSolReq = this.getView().getModel('oCrtSolReq');
			oCrtSolReq.setProperty(oFld, oVal);
		},
		clearKeyValues: function(oId) {
			var oReqDate = this.getView().byId(oId);
			oReqDate.setSelectedItem(" ");
			oReqDate.setSelectedItemId(" ");
			oReqDate.setSelectedKey(" ");
		}
	});
}, /* bExport= */ true);